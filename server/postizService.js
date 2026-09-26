import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CONFIG } from './config.js';
import { TunnelService } from './tunnelService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOCAL_UPLOADS_DIR = path.join(__dirname, 'uploads');

let isPostizOffline = false;
let lastPostizCheckTime = 0;
const POSTIZ_RETRY_INTERVAL_MS = 60000; // Check once per minute when offline

export class PostizService {
  static getHeaders() {
    return {
      'Authorization': CONFIG.POSTIZ_API_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  /**
   * Fetch connected channels/integrations from Postiz (e.g. Facebook Page)
   */
  static async getIntegrations() {
    const now = Date.now();
    // If Postiz was recently confirmed offline, return [] immediately to keep app fast
    if (isPostizOffline && (now - lastPostizCheckTime) < POSTIZ_RETRY_INTERVAL_MS) {
      return [];
    }

    try {
      const res = await fetch(`${CONFIG.POSTIZ_API_URL}/integrations`, {
        headers: this.getHeaders(),
        signal: AbortSignal.timeout(2000),
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      if (isPostizOffline) {
        console.log('✅ Postiz service reconnected on port 4007');
        isPostizOffline = false;
      }
      return data;
    } catch (err) {
      lastPostizCheckTime = Date.now();
      if (!isPostizOffline) {
        console.log('ℹ️ Postiz service (port 4007) is offline. Operating in standalone studio mode.');
        isPostizOffline = true;
      }
      return [];
    }
  }

  static isOffline() {
    return isPostizOffline;
  }

  /**
   * Upload media URL to Postiz and resolve it to a public HTTPS tunnel URL
   */
  static async resolveMediaObject(mediaUrl, mediaId = null) {
    if (!mediaUrl) return null;

    try {
      // 1. If it's an AWS S3 URL, return it directly (it's already public, permanent, and optimal for Meta/Instagram)
      if (mediaUrl.includes('.amazonaws.com/')) {
        return {
          id: mediaId || 'media_' + Date.now(),
          path: mediaUrl,
        };
      }

      // 2. If Postiz is offline, any public HTTPS URL can be used directly without sync
      if (isPostizOffline && mediaUrl.startsWith('https://')) {
        return {
          id: mediaId || 'media_' + Date.now(),
          path: mediaUrl,
        };
      }

      // 3. Check if this is a local file in our server/uploads folder (e.g. in2peta_media_...)
      const filenameMatch = mediaUrl.match(/in2peta_media_[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+/);
      if (filenameMatch) {
        const localFilePath = path.join(LOCAL_UPLOADS_DIR, filenameMatch[0]);
        if (fs.existsSync(localFilePath) && !isPostizOffline) {
          console.log('🔄 Syncing local server upload to Postiz storage:', filenameMatch[0]);
          const fileBuf = fs.readFileSync(localFilePath);
          const ext = path.extname(localFilePath).slice(1).toLowerCase();
          const mimeType = ext === 'png' ? 'image/png' : ext === 'mp4' ? 'video/mp4' : 'image/jpeg';

          const form = new FormData();
          form.append('file', new Blob([fileBuf], { type: mimeType }), filenameMatch[0]);

          const uploadRes = await fetch(`${CONFIG.POSTIZ_API_URL}/upload`, {
            method: 'POST',
            headers: {
              'Authorization': CONFIG.POSTIZ_API_KEY,
            },
            body: form,
            signal: AbortSignal.timeout(2000),
          });

          if (uploadRes.ok) {
            const uploadData = await uploadRes.json();
            const publicUrl = await TunnelService.toPublicMediaUrl(uploadData.path);
            console.log(`✅ Local file synced to Postiz & Cloudflare: ${publicUrl}`);
            return {
              id: uploadData.id || mediaId || 'media_' + Date.now(),
              path: publicUrl,
            };
          }
        }
      }

      // 4. If it's already a Postiz /uploads path, convert via Cloudflare Tunnel
      if (mediaUrl.includes('localhost:4007') || mediaUrl.includes('127.0.0.1:4007') || (mediaUrl.includes('.trycloudflare.com') && mediaUrl.includes('/uploads/'))) {
        const publicUrl = await TunnelService.toPublicMediaUrl(mediaUrl);
        return {
          id: mediaId || 'media_' + Date.now(),
          path: publicUrl,
        };
      }

      // 5. If it's already a public HTTPS URL (Unsplash, CDN, Web), return it directly
      if (mediaUrl.startsWith('https://') && !mediaUrl.includes('localhost')) {
        return {
          id: mediaId || 'media_' + Date.now(),
          path: mediaUrl,
        };
      }

      // 6. Guard against mobile client local filesystem URIs (e.g. file:///data/user/0/...)
      if (mediaUrl.startsWith('file://')) {
        console.warn('⚠️ Received mobile client local URI (file://). Falling back to cloud visual:', mediaUrl);
        const fallbackStock = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1080&auto=format&fit=crop&q=80';
        return {
          id: mediaId || 'media_' + Date.now(),
          path: fallbackStock,
        };
      }

      // 7. For any other image, if Postiz is online, sync to Postiz
      if (!isPostizOffline) {
        console.log('🔄 Downloading and uploading media to Postiz storage:', mediaUrl);
        const imgRes = await fetch(mediaUrl, { signal: AbortSignal.timeout(3000) });
        if (imgRes.ok) {
          const buf = Buffer.from(await imgRes.arrayBuffer());
          const contentType = imgRes.headers.get('content-type') || 'image/jpeg';
          let ext = 'jpg';
          if (contentType.includes('png')) ext = 'png';
          else if (contentType.includes('gif')) ext = 'gif';
          else if (contentType.includes('webp')) ext = 'webp';
          else if (contentType.includes('mp4')) ext = 'mp4';

          const form = new FormData();
          form.append('file', new Blob([buf], { type: contentType }), `in2peta_asset_${Date.now()}.${ext}`);

          const uploadRes = await fetch(`${CONFIG.POSTIZ_API_URL}/upload`, {
            method: 'POST',
            headers: {
              'Authorization': CONFIG.POSTIZ_API_KEY,
            },
            body: form,
            signal: AbortSignal.timeout(2000),
          });

          if (uploadRes.ok) {
            const uploadData = await uploadRes.json();
            const publicUrl = await TunnelService.toPublicMediaUrl(uploadData.path);
            console.log(`✅ Media successfully registered in Postiz & Cloudflare: ${publicUrl}`);
            return {
              id: uploadData.id || mediaId || 'media_' + Date.now(),
              path: publicUrl,
            };
          }
        }
      }
    } catch (err) {
      console.error('Error resolving media for Postiz:', err.message);
    }

    return {
      id: mediaId || 'media_' + Date.now(),
      path: mediaUrl,
    };
  }

  /**
   * Schedule or publish a post via Postiz Public API
   */
  static async createPost({
    integrationId,
    content,
    date,
    type = 'schedule',
    mediaUrl = null,
    mediaType = 'image',
    mediaId = null,
  }) {
    try {
      // Ensure content is formatted for Postiz rich text (wrapped in <p> if needed)
      const formattedContent = content.startsWith('<p>')
        ? content
        : `<p>${content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>')}</p>`;

      // Resolve media if attached
      const imageArray = [];
      if (mediaUrl) {
        const mediaObj = await this.resolveMediaObject(mediaUrl, mediaId);
        if (mediaObj && mediaObj.path) {
          imageArray.push(mediaObj);
          console.log('📸 Attaching media to Postiz post:', mediaObj);
        }
      }

      const payload = {
        type: type, // 'schedule' | 'now' | 'draft'
        date: date || new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        shortLink: false,
        tags: [],
        posts: [
          {
            integration: { id: integrationId },
            value: [
              {
                content: formattedContent,
                image: imageArray,
              },
            ],
            settings: {},
          },
        ],
      };

      const res = await fetch(`${CONFIG.POSTIZ_API_URL}/posts`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || data.msg || `Postiz error: ${res.status}`);
      }
      return data;
    } catch (err) {
      console.error('Error scheduling post in Postiz:', err.message);
      throw err;
    }
  }

  /**
   * Fetch posts from Postiz to monitor publishing status
   */
  static async getPosts(startDate, endDate) {
    if (isPostizOffline) return [];

    try {
      const start = startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
      const end = endDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

      const url = `${CONFIG.POSTIZ_API_URL}/posts?startDate=${encodeURIComponent(start)}&endDate=${encodeURIComponent(end)}`;
      const res = await fetch(url, {
        headers: this.getHeaders(),
        signal: AbortSignal.timeout(2000),
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch posts: ${res.status}`);
      }
      const data = await res.json();
      return data.posts || [];
    } catch (err) {
      return [];
    }
  }

  /**
   * Delete a post from Postiz
   */
  static async deletePost(postId) {
    try {
      const res = await fetch(`${CONFIG.POSTIZ_API_URL}/posts/${postId}`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });
      return res.ok;
    } catch (err) {
      console.error('Error deleting post in Postiz:', err.message);
      throw err;
    }
  }
}
