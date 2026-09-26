import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { CONFIG } from './config.js';
import { GeminiService } from './geminiService.js';
import { PostizService } from './postizService.js';
import { QueueService } from './queueService.js';
import { TunnelService } from './tunnelService.js';
import { S3Service } from './s3Service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure process resilience against background network errors
process.on('uncaughtException', (err) => {
  console.error('⚠️ Handled Uncaught Exception:', err.message);
});
process.on('unhandledRejection', (reason) => {
  console.error('⚠️ Handled Unhandled Rejection:', reason?.message || reason);
});

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Initialize queue storage
QueueService.init();

// Uploads directory configuration
const UPLOADS_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `in2peta_media_${Date.now()}_${Math.random().toString(36).substring(2, 7)}${ext}`);
  },
});
const upload = multer({ storage });
app.use('/uploads', express.static(UPLOADS_DIR));

/**
 * Direct Media Upload (For images or videos generated from in2peta or uploaded via mobile)
 * Supports both standard multipart FormData and base64 JSON payloads.
 * Automatically uploads to AWS S3, registers in Postiz, and provides Cloudflare Tunnel public URL.
 */
app.post(
  '/api/upload',
  (req, res, next) => {
    // If request has JSON body with base64, bypass multer
    if (req.is('application/json') || req.body?.base64) {
      return next();
    }
    upload.single('media')(req, res, next);
  },
  async (req, res) => {
    let fileBuffer = null;
    let originalname = 'media.jpg';
    let mimetype = 'image/jpeg';
    let savedFilename = '';

    if (req.file) {
      fileBuffer = fs.readFileSync(req.file.path);
      originalname = req.file.originalname;
      mimetype = req.file.mimetype;
      savedFilename = req.file.filename;
    } else if (req.body?.base64) {
      const rawBase64 = req.body.base64;
      const matches = rawBase64.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
      if (matches) {
        mimetype = matches[1];
        fileBuffer = Buffer.from(matches[2], 'base64');
      } else {
        mimetype = req.body.mimeType || 'image/jpeg';
        fileBuffer = Buffer.from(rawBase64, 'base64');
      }
      const ext = mimetype.includes('png')
        ? '.png'
        : mimetype.includes('webp')
        ? '.webp'
        : mimetype.includes('mp4')
        ? '.mp4'
        : '.jpg';
      originalname = req.body.filename || `in2peta_mobile_${Date.now()}${ext}`;
      savedFilename = `in2peta_media_${Date.now()}_${Math.random().toString(36).substring(2, 7)}${ext}`;
      const filePath = path.join(UPLOADS_DIR, savedFilename);
      fs.writeFileSync(filePath, fileBuffer);
    } else {
      return res.status(400).json({ error: 'No media file or base64 data provided.' });
    }

    const isVideo = mimetype.startsWith('video/');
    let s3Url = null;
    let postizUpload = null;

    // 1. Primary Cloud Storage: Upload directly to AWS S3 bucket (in2peta-postiz-media)
    try {
      s3Url = await S3Service.uploadMedia(fileBuffer, originalname, mimetype);
    } catch (err) {
      console.warn('S3 upload notice:', err.message);
    }

    // 2. Resolve public HTTPS URL: Prioritize AWS S3 permanent URL, fallback to Cloudflare Tunnel
    let publicUrl = s3Url;
    if (!publicUrl) {
      publicUrl = await TunnelService.toPublicMediaUrl(`/uploads/${savedFilename}`);
    }

    console.log(`☁️ Media successfully resolved for social publishing: ${publicUrl}`);

    // 3. Immediately respond to client with cloud URL (resolves in ~1s!)
    res.json({
      url: publicUrl,
      s3Url: s3Url || null,
      storageEngine: s3Url ? 'AWS S3 (in2peta-postiz-media)' : 'Cloudflare Tunnel (Local)',
      localUrl: `/uploads/${savedFilename}`,
      filename: savedFilename,
      mimetype: mimetype,
      size: fileBuffer.length,
      postizMediaId: null,
      postizPath: null,
      mediaType: isVideo ? 'video' : 'image',
    });

    // 4. Background Postiz sync (Non-blocking: only if Postiz container is actively online)
    if (!PostizService.isOffline()) {
      (async () => {
        try {
          const blob = new Blob([fileBuffer], { type: mimetype });
          const form = new FormData();
          form.append('file', blob, originalname);

          const postizRes = await fetch(`${CONFIG.POSTIZ_API_URL}/upload`, {
            method: 'POST',
            headers: {
              Authorization: CONFIG.POSTIZ_API_KEY,
            },
            body: form,
            signal: AbortSignal.timeout(2000),
          });

          if (postizRes.ok) {
            const postizUpload = await postizRes.json();
            console.log('✅ File registered in Postiz store:', postizUpload);
          }
        } catch (err) {
          // Non-blocking sync notice
        }
      })();
    }
  }
);

/**
 * Clean Platform Status (including S3 and Tunnel)
 */
app.get('/api/health', async (req, res) => {
  const integrations = await PostizService.getIntegrations();
  const settings = QueueService.getSettings();
  const tunnelUrl = await TunnelService.getTunnelUrl();
  const s3Status = await S3Service.checkStatus();

  res.json({
    status: 'healthy',
    textEngine: 'in2peta Smart AI Engine',
    mediaEngine: 'in2peta Explore (Images & Videos)',
    publishingEngine: integrations.length > 0 ? 'Connected' : 'Standby',
    activeAccount: integrations.length > 0 ? integrations[0].name : 'No account linked',
    autoApprove: settings.autoApprove,
    tunnelUrl: tunnelUrl || 'Local Mode',
    s3Storage: s3Status,
  });
});

/**
 * User Settings
 */
app.get('/api/settings', (req, res) => {
  res.json(QueueService.getSettings());
});

app.post('/api/settings', (req, res) => {
  const updated = QueueService.updateSettings(req.body);
  res.json(updated);
});

/**
 * Instagram & Social Channels
 */
app.get('/api/channels', async (req, res) => {
  try {
    let integrations = [];
    if (!PostizService.isOffline()) {
      integrations = await PostizService.getIntegrations();
    }
    const queue = QueueService.getQueue();

    if (integrations && integrations.length > 0) {
      const mapped = integrations.map((ch) => {
        const channelPostsCount = queue.filter(
          (p) => p.integrationId === ch.id || (p.platforms && p.platforms.includes(ch.identifier))
        ).length;

        return {
          id: ch.id,
          name: ch.name,
          handle: `@${ch.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
          platform: ch.identifier || 'instagram',
          postsCount: channelPostsCount,
          avatar: ch.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
          connected: !ch.disabled,
          provider: 'Meta Graph API',
        };
      });
      QueueService.saveChannels(mapped);
      return res.json(mapped);
    }

    // When operating in standalone mode or Postiz container is offline, return persistent channels
    const persisted = QueueService.getChannels();
    const mapped = persisted.map((ch) => {
      const channelPostsCount = queue.filter(
        (p) => p.integrationId === ch.id || (p.platforms && p.platforms.includes(ch.platform))
      ).length;
      return {
        ...ch,
        postsCount: channelPostsCount,
        connected: true,
      };
    });

    res.json(mapped);
  } catch (err) {
    console.error('Error fetching channels:', err);
    res.json(QueueService.getChannels());
  }
});

app.post('/api/channels', (req, res) => {
  try {
    const updated = QueueService.addChannel(req.body);
    res.json({ success: true, channels: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * Text Generation (Powered by Gemini AI) & Post Scheduling
 */
app.post('/api/generate', async (req, res) => {
  try {
    const {
      topic,
      tone,
      format = 'feed', // 'feed' | 'reel'
      callToAction,
      customInstructions,
      scheduledDate,
      integrationId,
      mediaUrl,
      mediaId,
      postizMediaId,
      mediaType = 'image', // 'image' | 'video'
      autoApproveOverride,
      platforms,
      platform,
      status: requestedStatus,
    } = req.body;

    if (!topic) {
      return res.status(400).json({ error: 'Please enter a topic or concept for the post.' });
    }

    // 1. Generate text caption, hook, and hashtags using Gemini AI
    const generated = await GeminiService.generatePost({
      topic,
      tone,
      format,
      callToAction,
      customInstructions,
    });

    // 2. Fetch channel
    const channels = await PostizService.getIntegrations();
    let finalIntegrationId = integrationId || (channels.length > 0 ? channels[0].id : null);
    let channelName = channels.length > 0 ? channels[0].name : 'Instagram';

    const settings = QueueService.getSettings();
    const isPaused = !!settings.isQueuePaused;
    const isDraft = requestedStatus === 'DRAFT' || requestedStatus === 'IDEA';
    const shouldAutoApprove =
      !isDraft && !isPaused && (autoApproveOverride !== undefined ? !!autoApproveOverride : !!settings.autoApprove);

    let postizResult = null;
    let status = isDraft ? requestedStatus : 'PENDING_REVIEW';
    const scheduleTime = isDraft
      ? (scheduledDate || null)
      : (scheduledDate || new Date(Date.now() + (settings.defaultScheduleDelayHours || 2) * 3600 * 1000).toISOString());

    const fullPostText = [
      generated.hook,
      generated.caption,
      callToAction,
      (generated.hashtags || []).join(' '),
    ]
      .filter(Boolean)
      .join('\n\n');

    const chosenMediaUrl =
      mediaUrl || 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1080&auto=format&fit=crop&q=80';
    const chosenMediaId = postizMediaId || mediaId || null;

    // 3. Auto-publish if Auto-Approval is ON
    if (shouldAutoApprove && finalIntegrationId) {
      try {
        postizResult = await PostizService.createPost({
          integrationId: finalIntegrationId,
          content: fullPostText,
          date: scheduleTime,
          type: 'schedule',
          mediaUrl: chosenMediaUrl,
          mediaType,
          mediaId: chosenMediaId,
        });
        status = 'SCHEDULED';
      } catch (err) {
        console.error('Auto-scheduling error, falling back to review queue:', err.message);
        status = 'PENDING_REVIEW';
      }
    }

    // 4. Save to queue
    const savedPost = QueueService.addToQueue({
      topic,
      hook: generated.hook,
      caption: generated.caption,
      hashtags: generated.hashtags,
      callToAction,
      format,
      visualPrompt: generated.visualPrompt,
      visualKeyword: generated.visualKeyword,
      visualUrl: chosenMediaUrl,
      postizMediaId: chosenMediaId,
      mediaType,
      reelStoryboard: generated.reelStoryboard,
      fullPostText,
      integrationId: finalIntegrationId,
      platform: platform || (platforms && platforms[0]) || 'instagram',
      platforms: platforms || [platform || 'instagram'],
      scheduledDate: scheduleTime,
      status,
      postizPostId: postizResult?.[0]?.postId || postizResult?.postId || null,
    });

    res.json({
      success: true,
      autoApproved: status === 'SCHEDULED',
      post: savedPost,
      generated: {
        ...generated,
        mediaUrl: savedPost.visualUrl,
        mediaType,
      },
    });
  } catch (err) {
    console.error('Generation error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * Queue Endpoints
 */
app.get('/api/queue', (req, res) => {
  const queue = QueueService.getQueue();
  const counts = {
    total: queue.length,
    pending: queue.filter((p) => p.status === 'PENDING_REVIEW').length,
    scheduled: queue.filter((p) => p.status === 'SCHEDULED' || p.status === 'APPROVED').length,
    published: queue.filter((p) => p.status === 'PUBLISHED').length,
    rejected: queue.filter((p) => p.status === 'REJECTED').length,
  };
  res.json({ counts, queue });
});

app.put('/api/queue/:id', (req, res) => {
  const updated = QueueService.updatePost(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Post not found' });
  res.json(updated);
});

app.post('/api/queue/:id/approve', async (req, res) => {
  try {
    const post = QueueService.getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    let postizResult = null;
    if (post.integrationId) {
      postizResult = await PostizService.createPost({
        integrationId: post.integrationId,
        content: post.fullPostText,
        date: post.scheduledDate,
        type: 'schedule',
        mediaUrl: post.visualUrl,
        mediaType: post.mediaType,
        mediaId: post.postizMediaId,
      });
    }

    const scheduledPostId = postizResult?.[0]?.postId || postizResult?.postId || null;

    const updated = QueueService.updatePost(post.id, {
      status: 'SCHEDULED',
      postizPostId: scheduledPostId,
      reviewedAt: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: 'Post approved and scheduled with media for Instagram!',
      post: updated,
    });
  } catch (err) {
    res.status(500).json({ error: `Could not schedule: ${err.message}` });
  }
});

app.post('/api/queue/:id/publish-now', async (req, res) => {
  try {
    const post = QueueService.getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    let postizResult = null;
    if (post.integrationId) {
      postizResult = await PostizService.createPost({
        integrationId: post.integrationId,
        content: post.fullPostText,
        type: 'now',
        mediaUrl: post.visualUrl,
        mediaType: post.mediaType,
        mediaId: post.postizMediaId,
      });
    }

    const scheduledPostId = postizResult?.[0]?.postId || postizResult?.postId || null;

    const updated = QueueService.updatePost(post.id, {
      status: 'PUBLISHED',
      postizPostId: scheduledPostId,
      publishedAt: new Date().toISOString(),
      reviewedAt: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: 'Post published immediately to your channel!',
      post: updated,
    });
  } catch (err) {
    res.status(500).json({ error: `Could not publish now: ${err.message}` });
  }
});

app.post('/api/queue/:id/reject', (req, res) => {
  const updated = QueueService.updatePost(req.params.id, {
    status: 'REJECTED',
    reviewNotes: req.body?.notes || 'Archived',
  });
  res.json({ success: true, post: updated });
});

app.delete('/api/queue/:id', (req, res) => {
  const deleted = QueueService.deletePost(req.params.id);
  res.json({ success: deleted });
});

/**
 * Published Posts Feed (with full media resolution)
 */
app.get('/api/published', async (req, res) => {
  try {
    const [posts, queue] = await Promise.all([
      PostizService.getPosts(),
      Promise.resolve(QueueService.getQueue()),
    ]);

    const cleanList = await Promise.all(
      posts.map(async (p) => {
        // Find matching post in local queue by postizPostId or content
        const matchedQueue = queue.find(
          (q) =>
            (q.postizPostId && q.postizPostId === p.id) ||
            (q.hook && p.content && p.content.includes(q.hook)) ||
            (q.caption && p.content && p.content.includes(q.caption.slice(0, 30)))
        );

        let mediaUrl = matchedQueue?.visualUrl || null;
        let mediaType = matchedQueue?.mediaType || 'image';

        // Check if Postiz itself has media/image on this post
        if (!mediaUrl && p.image?.length > 0) {
          mediaUrl = p.image[0].path;
        }

        // If mediaUrl is localhost or relative, convert to public tunnel url
        if (mediaUrl) {
          mediaUrl = await TunnelService.toPublicMediaUrl(mediaUrl);
        }

        return {
          id: p.id,
          content: p.content,
          publishDate: p.publishDate,
          state: p.state,
          releaseURL: p.releaseURL,
          accountName: p.integration?.name || 'Instagram Account',
          mediaUrl: mediaUrl || 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1080&auto=format&fit=crop&q=80',
          mediaType,
        };
      })
    );
    res.json(cleanList);
  } catch (err) {
    console.error('Error fetching published posts:', err);
    res.json([]);
  }
});

// Serve frontend distribution in production
const clientDist = path.join(__dirname, '../client/dist');
app.use(express.static(clientDist));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(clientDist, 'index.html'), (err) => {
    if (err) next();
  });
});

app.listen(CONFIG.PORT, '0.0.0.0', () => {
  console.log(`✨ in2peta Studio backend running on http://0.0.0.0:${CONFIG.PORT} (Local: http://localhost:${CONFIG.PORT})`);
  TunnelService.getTunnelUrl().catch((err) => console.warn('Tunnel notice:', err.message));
});
