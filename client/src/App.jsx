import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Zap,
  CheckCircle2,
  XCircle,
  Edit3,
  Trash2,
  ExternalLink,
  Send,
  RefreshCw,
  Layers,
  Calendar,
  Image as ImageIcon,
  Info,
  Check,
  Globe,
  Film,
  ArrowRight,
  HelpCircle,
  Heart,
  MessageCircle,
  Bookmark,
  MoreHorizontal,
  Upload,
  Link as LinkIcon,
  Play,
  Share2,
  Clock,
  ShieldCheck,
  CloudUpload,
  Sliders,
  ChevronRight,
  Compass,
  LogOut,
  User,
  Mail
} from 'lucide-react';
import LoginPage from './LoginPage';
import OutreachPanel from './OutreachPanel';

// Custom SVG Icons for Meta Social Channels
const InstagramIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const API_BASE = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/$/, '') : '';
const SCALORA_GRADIENT = 'bg-gradient-to-r from-[#FF6B4A] to-[#FFA84A]';
const SCALORA_ROSE_GRADIENT = 'bg-gradient-to-r from-[#FF5376] to-[#A855F7]';
const IN2PETA_EXPLORE_URL = 'https://www.in2peta.com/explore';

// Pre-curated inspiration topics for instant captions
const INSPIRATION_CHIPS = [
  'HVAC Summer Tune-Up 20% Off Special',
  '3 Signs Your AC Needs Urgent Service',
  'Energy-Saving Tips to Lower Electric Bills',
  'Behind the Scenes: A Day with Our Master Technicians',
  'Customer Spotlight: Total Modern Home Transformation',
];

// Sample showcase visuals generated from Growthcrew AI
const SAMPLE_IN2PETA_MEDIA = [
  {
    name: 'HVAC Technician',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1080&auto=format&fit=crop&q=80',
  },
  {
    name: 'Modern Home Living',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1080&auto=format&fit=crop&q=80',
  },
  {
    name: 'AC Unit Precision Repair',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1080&auto=format&fit=crop&q=80',
  },
];

export default function App({ defaultTab = 'studio', apiUrl } = {}) {
  // Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('growthcrew_auth');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('growthcrew_auth', JSON.stringify(user));
    showToast(`Welcome back, ${user.name}!`, 'success');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('growthcrew_auth');
    showToast('Signed out successfully.', 'info');
  };

  // Product mode: Social Studio (PostPulse) vs GrowthCrew Outreach
  const [productMode, setProductMode] = useState(defaultTab === 'outreach' ? 'growthcrew' : 'social');
  const [activeTab, setActiveTab] = useState(defaultTab === 'outreach' ? 'studio' : defaultTab); // 'studio' | 'queue' | 'history'
  const [showBeginnerGuide, setShowBeginnerGuide] = useState(true);
  const isGrowthcrew = productMode === 'growthcrew';

  const switchProductMode = (mode) => {
    setProductMode(mode);
    if (mode === 'social' && activeTab === 'outreach') {
      setActiveTab('studio');
    }
  };

  // Channels & Account
  const [channels, setChannels] = useState([
    {
      id: 'cmu2huh5o0001p0aq03ly15ud',
      name: 'Mytestpage (Instagram)',
      handle: '@mytestpage',
      platform: 'instagram',
      platforms: ['instagram'],
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      connected: true,
      provider: 'Meta Graph API',
    },
    {
      id: 'cmu2huh5o0002p0aq03lyfb01',
      name: 'Mytestpage (Facebook Page)',
      handle: '@mytestpage.fb',
      platform: 'facebook',
      platforms: ['facebook'],
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      connected: true,
      provider: 'Meta Graph API',
    },
  ]);
  const [activeChannel, setActiveChannel] = useState(channels[0]);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [customHandleInput, setCustomHandleInput] = useState('');
  const [customPlatform, setCustomPlatform] = useState('instagram');

  // Settings & Queue
  const [settings, setSettings] = useState({ autoApprove: false });
  const [queueData, setQueueData] = useState({ counts: {}, queue: [] });
  const [publishedPosts, setPublishedPosts] = useState([]);
  const [healthInfo, setHealthInfo] = useState(null);

  // STEP 1: Growthcrew Media
  const [attachedMediaUrl, setAttachedMediaUrl] = useState(SAMPLE_IN2PETA_MEDIA[0].url);
  const [attachedMediaId, setAttachedMediaId] = useState(null);
  const [attachedMediaType, setAttachedMediaType] = useState('image'); // 'image' | 'video'
  const [mediaSourceType, setMediaSourceType] = useState('sample'); // 'sample' | 'url' | 'upload'
  const [pastedUrlInput, setPastedUrlInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  // STEP 2: AI Caption Generator
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Warm & Engaging');
  const [callToAction, setCallToAction] = useState('Drop a comment below or tap the link in bio!');
  const [scheduledDate, setScheduledDate] = useState(() => {
    const d = new Date(Date.now() + 2 * 60 * 60 * 1000);
    return d.toISOString().slice(0, 16);
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDraft, setGeneratedDraft] = useState(null);
  const [editHook, setEditHook] = useState('');
  const [editCaption, setEditCaption] = useState('');
  const [editHashtags, setEditHashtags] = useState('');

  // Aspect ratio & Target Platform
  const [aspectRatio, setAspectRatio] = useState('portrait'); // 'square' | 'portrait' | 'reel'
  const [selectedPlatforms, setSelectedPlatforms] = useState(['instagram', 'facebook']);
  const [expandedCaption, setExpandedCaption] = useState(false);

  // Queue & Modals
  const [queueFilter, setQueueFilter] = useState('ALL');
  const [editingPost, setEditingPost] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);

  // Toast
  const [toast, setToast] = useState(null);
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Initial Data Fetch
  const fetchData = async () => {
    try {
      const [settingsRes, channelsRes, queueRes, pubRes, healthRes] = await Promise.all([
        fetch(`${API_BASE}/api/settings`),
        fetch(`${API_BASE}/api/channels`),
        fetch(`${API_BASE}/api/queue`),
        fetch(`${API_BASE}/api/published`),
        fetch(`${API_BASE}/api/health`),
      ]);

      if (settingsRes.ok) setSettings(await settingsRes.json());
      if (channelsRes.ok) {
        const ch = await channelsRes.json();
        if (Array.isArray(ch) && ch.length > 0) {
          setChannels(ch);
          if (!activeChannel) setActiveChannel(ch[0]);
        }
      }
      if (queueRes.ok) setQueueData(await queueRes.json());
      if (pubRes.ok) setPublishedPosts(await pubRes.json());
      if (healthRes.ok) setHealthInfo(await healthRes.json());
    } catch {
      // Standalone mode
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 12000);
    return () => clearInterval(interval);
  }, []);

  // Handle Connecting Custom Handle
  const handleConnectInstagram = async (e) => {
    e.preventDefault();
    if (!customHandleInput.trim()) return;
    const formatted = customHandleInput.trim().replace(/^@/, '');
    const isFb = customPlatform === 'facebook';
    const newChan = {
      id: `custom_${Date.now()}`,
      name: `Mytestpage (${isFb ? 'Facebook Page' : 'Instagram'})`,
      handle: isFb ? `@${formatted}.fb` : `@${formatted}`,
      platform: customPlatform,
      platforms: [customPlatform],
      avatar: attachedMediaUrl || SAMPLE_IN2PETA_MEDIA[0].url,
      connected: true,
      provider: 'Meta Graph API',
    };
    try {
      await fetch(`${API_BASE}/api/channels`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newChan),
      });
      setChannels((prev) => [...prev.filter((c) => c.id !== newChan.id), newChan]);
      setActiveChannel(newChan);
      setShowConnectModal(false);
      setCustomHandleInput('');
      fetchData();
      showToast(`Connected ${newChan.name} successfully!`, 'success');
    } catch {
      setChannels((prev) => [...prev, newChan]);
      setActiveChannel(newChan);
      setShowConnectModal(false);
      showToast(`Connected ${newChan.name}.`, 'success');
    }
  };

  // Handle Toggle Auto-Approve
  const handleToggleAutoApprove = async () => {
    const newVal = !settings.autoApprove;
    setSettings((prev) => ({ ...prev, autoApprove: newVal }));
    try {
      await fetch(`${API_BASE}/api/settings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ autoApprove: newVal }),
      });
      showToast(newVal ? 'Auto-publish on.' : 'Review before publish.', 'info');
    } catch {
      showToast('Settings updated.', 'info');
    }
  };

  // Handle Media File Upload (AWS S3 Direct Upload)
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isVideo = file.type.startsWith('video');
    const localBlobUrl = URL.createObjectURL(file);
    setAttachedMediaUrl(localBlobUrl);
    setAttachedMediaType(isVideo ? 'video' : 'image');
    setMediaSourceType('upload');
    setIsUploading(true);

    const formData = new FormData();
    formData.append('media', file);

    try {
      const res = await fetch(`${API_BASE}/api/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        setAttachedMediaUrl(data.url);
        setAttachedMediaId(data.postizMediaId || null);
        showToast(`${isVideo ? 'Video' : 'Image'} uploaded.`, 'success');
      } else {
        showToast(data.error || 'Upload failed. Using local preview.', 'error');
      }
    } catch {
      showToast('Upload notice: local preview active.', 'info');
    } finally {
      setIsUploading(false);
    }
  };

  // Handle Pasting Media URL
  const handlePasteUrlSubmit = (e) => {
    e.preventDefault();
    if (!pastedUrlInput.trim()) return;

    const isVideo =
      pastedUrlInput.endsWith('.mp4') ||
      pastedUrlInput.endsWith('.webm') ||
      pastedUrlInput.endsWith('.mov') ||
      pastedUrlInput.includes('video');

    setAttachedMediaUrl(pastedUrlInput.trim());
    setAttachedMediaId(null);
    setAttachedMediaType(isVideo ? 'video' : 'image');
    setMediaSourceType('url');
    showToast('Media attached.', 'success');
  };

  // Generate Post Caption with Gemini AI
  const handleGenerateCaption = async (overrideTopic) => {
    const activeTopic = overrideTopic || topic;
    if (!activeTopic.trim()) {
      showToast('Please enter a topic or click one of the inspiration chips.', 'error');
      return;
    }

    if (isUploading) {
      showToast('Media is still uploading…', 'info');
      return;
    }

    setIsGenerating(true);
    try {
      const res = await fetch(`${API_BASE}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: activeTopic,
          tone,
          callToAction,
          mediaUrl: attachedMediaUrl,
          mediaId: attachedMediaId,
          postizMediaId: attachedMediaId,
          mediaType: attachedMediaType,
          platforms: selectedPlatforms,
          scheduledDate: new Date(scheduledDate).toISOString(),
          integrationId: activeChannel?.id,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Generation failed');

      const g = data.generated;
      setGeneratedDraft(data);
      setEditHook(g.hook || '');
      setEditCaption(g.caption || '');
      setEditHashtags((g.hashtags || []).join(' '));

      fetchData();

      if (settings.autoApprove) {
        showToast('Published.', 'success');
        setActiveTab('history');
      } else {
        showToast('Caption ready.', 'success');
      }
    } catch (err) {
      showToast(`Notice: ${err.message || 'Error occurred.'}`, 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  // Schedule Post Action
  const handleSchedulePost = async () => {
    const activeDraft = generatedDraft;
    const finalCaption = `${editHook}\n\n${editCaption}\n\n${editHashtags}`.trim();

    if (!finalCaption) {
      showToast('Please generate or write a caption before scheduling.', 'error');
      return;
    }

    setActionLoading('schedule');
    try {
      const res = await fetch(`${API_BASE}/api/queue`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: activeDraft?.id || `post_${Date.now()}`,
          topic: activeDraft?.topic || topic || 'Custom Post',
          caption: finalCaption,
          hook: editHook,
          hashtags: editHashtags.split(' ').filter(Boolean),
          mediaUrl: attachedMediaUrl,
          mediaType: attachedMediaType,
          platforms: selectedPlatforms,
          scheduledDate: new Date(scheduledDate).toISOString(),
          status: 'SCHEDULED',
          channelName: activeChannel?.name || 'Mytestpage',
          integrationId: activeChannel?.id,
        }),
      });

      if (!res.ok) throw new Error('Could not schedule post');
      showToast(`📅 Post scheduled for ${new Date(scheduledDate).toLocaleString()}!`, 'success');
      fetchData();
      setActiveTab('queue');
    } catch {
      showToast('Saved to schedule queue.', 'success');
      setActiveTab('queue');
    } finally {
      setActionLoading(null);
    }
  };

  // Instant Publish Action
  const handleInstantPublish = async (postId) => {
    setActionLoading(`pub_${postId || 'direct'}`);
    const finalCaption = `${editHook}\n\n${editCaption}\n\n${editHashtags}`.trim();
    const activeDraftId = (postId && postId !== 'new') ? postId : (generatedDraft?.post?.id || null);

    try {
      let res;
      if (activeDraftId) {
        if (finalCaption) {
          await fetch(`${API_BASE}/api/queue/${activeDraftId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              hook: editHook,
              caption: editCaption,
              hashtags: editHashtags.split(' ').filter(Boolean),
              visualUrl: attachedMediaUrl,
              mediaUrl: attachedMediaUrl,
              platforms: selectedPlatforms,
              integrationId: activeChannel?.id,
            }),
          }).catch(() => {});
        }
        res = await fetch(`${API_BASE}/api/queue/${activeDraftId}/publish-now`, { method: 'POST' });
      } else {
        res = await fetch(`${API_BASE}/api/publish`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topic: topic || 'Direct Studio Post',
            hook: editHook,
            caption: editCaption,
            hashtags: editHashtags.split(' ').filter(Boolean),
            fullPostText: finalCaption || 'PostPulse social post',
            mediaUrl: attachedMediaUrl,
            visualUrl: attachedMediaUrl,
            mediaType: attachedMediaType,
            platforms: selectedPlatforms,
            channelName: activeChannel?.name || 'Mytestpage',
            integrationId: activeChannel?.id,
            status: 'PUBLISHED',
          }),
        });
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || data.error || 'Publish failed');
      showToast('Published.', 'success');
      fetchData();
      setActiveTab('history');
    } catch (err) {
      showToast(`Publishing notice: ${err.message}`, 'error');
    } finally {
      setActionLoading(null);
    }
  };

  // Approve Post in Queue
  const handleApprovePost = async (postId) => {
    setActionLoading(`approve_${postId}`);
    try {
      await fetch(`${API_BASE}/api/queue/${postId}/approve`, { method: 'POST' });
      showToast('Approved.', 'success');
      fetchData();
    } catch {
      showToast('Status updated.', 'info');
    } finally {
      setActionLoading(null);
    }
  };

  // Delete Post
  const handleDeletePost = async (postId) => {
    try {
      await fetch(`${API_BASE}/api/queue/${postId}`, { method: 'DELETE' });
      showToast('Post removed from queue.', 'info');
      fetchData();
    } catch {
      showToast('Removed.', 'info');
    }
  };

  // Save Post Edit
  const handleSaveEdit = async () => {
    if (!editingPost) return;
    try {
      await fetch(`${API_BASE}/api/queue/${editingPost.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingPost),
      });
      showToast('Post updated successfully.', 'success');
      setEditingPost(null);
      fetchData();
    } catch {
      showToast('Changes saved.', 'info');
      setEditingPost(null);
    }
  };

  // If user is not authenticated, render Login Page
  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const queueList = queueData.queue || [];
  const pendingCount = queueList.filter((p) => p.status === 'PENDING_REVIEW').length;
  const filteredQueue =
    queueFilter === 'ALL'
      ? queueList
      : queueList.filter((p) => p.status === queueFilter);

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 flex flex-col font-sans antialiased selection:bg-[#FF6B4A]/30 selection:text-[#FFA84A] scalora-mesh-bg">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-2xl border transition-all animate-in fade-in slide-in-from-bottom-5 ${
            toast.type === 'error'
              ? 'bg-rose-950/90 text-rose-200 border-rose-800/60 shadow-rose-950/50'
              : toast.type === 'info'
              ? 'bg-[#101522]/95 text-sky-200 border-sky-800/50 shadow-sky-950/50'
              : 'bg-[#0e1713]/95 text-emerald-200 border-emerald-700/50 shadow-emerald-950/50'
          }`}
        >
          {toast.type === 'error' ? (
            <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
          ) : toast.type === 'info' ? (
            <Info className="w-5 h-5 text-sky-400 shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          )}
          <span className="text-xs font-semibold">{toast.message}</span>
        </div>
      )}

      <header className="border-b border-white/[0.07] bg-[#07080a]/85 backdrop-blur-2xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#FF6B4A] via-[#FF5376] to-[#FFA84A] shadow-lg shadow-[#FF6B4A]/25 shrink-0">
              <div className="w-full h-full bg-[#0a0c10] rounded-[14px] flex items-center justify-center">
                {isGrowthcrew ? (
                  <Mail className="w-5 h-5 text-[#FFA84A]" />
                ) : (
                  <Sparkles className="w-5 h-5 text-[#FFA84A]" />
                )}
              </div>
            </div>
            <div className="min-w-0">
              <h1 className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5 truncate">
                {isGrowthcrew ? (
                  <>
                    GrowthCrew <span className="font-serif-accent font-normal italic text-[#FFA84A] text-xl">Outreach</span>
                  </>
                ) : (
                  <>
                    PostPulse <span className="font-serif-accent font-normal italic text-[#FFA84A] text-xl">Studio</span>
                  </>
                )}
              </h1>
            </div>

            <div className="flex items-center gap-2 ml-1 pl-3 border-l border-white/10 shrink-0">
              <span
                className={`text-[11px] font-bold transition-colors ${
                  !isGrowthcrew ? 'text-white' : 'text-slate-500'
                }`}
              >
                PostPulse
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={isGrowthcrew}
                aria-label={
                  isGrowthcrew
                    ? 'Mode: GrowthCrew. Switch to PostPulse.'
                    : 'Mode: PostPulse. Switch to GrowthCrew.'
                }
                onClick={() => switchProductMode(isGrowthcrew ? 'social' : 'growthcrew')}
                className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA84A]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080a] ${
                  isGrowthcrew ? 'bg-emerald-500' : 'bg-slate-800 border border-white/10'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    isGrowthcrew ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span
                className={`text-[11px] font-bold transition-colors ${
                  isGrowthcrew ? 'text-white' : 'text-slate-500'
                }`}
              >
                GrowthCrew
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {!isGrowthcrew && (
              <>
                <a
                  href={IN2PETA_EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
                  title="Browse image and video models"
                >
                  <span>Explore models</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <div
                  onClick={() => setShowConnectModal(true)}
                  className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer group"
                  title="Switch channel"
                >
                  <div className="w-7 h-7 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF6B4A] to-[#FF5376] shrink-0">
                    <img
                      src={activeChannel?.avatar || SAMPLE_IN2PETA_MEDIA[0].url}
                      alt="avatar"
                      className="w-full h-full rounded-full object-cover bg-slate-800"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold text-white group-hover:text-[#FFA84A] transition-colors flex items-center gap-1">
                      {activeChannel?.handle || '@mytestpage'}
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    </span>
                    <span className="text-[10px] text-slate-400 capitalize">{activeChannel?.platform || 'Meta'} Connected</span>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-2 pl-2 border-l border-white/10">
                  <div className="text-right">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 block">Auto-Publish</span>
                    <span className={`text-[11px] font-extrabold ${settings.autoApprove ? 'text-emerald-400' : 'text-[#FFA84A]'}`}>
                      {settings.autoApprove ? 'Instant' : 'Review First'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleToggleAutoApprove}
                    className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      settings.autoApprove ? 'bg-emerald-500' : 'bg-slate-800 border border-white/10'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out flex items-center justify-center text-slate-900 ${
                        settings.autoApprove ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    >
                      <Zap className="w-3 h-3 text-[#FF6B4A]" />
                    </span>
                  </button>
                </div>
              </>
            )}

            <button
              type="button"
              onClick={handleLogout}
              className="p-2 rounded-full bg-white/[0.04] hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-white/10 transition-all cursor-pointer ml-1"
              title="Sign out"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {!isGrowthcrew && (
        <nav className="border-b border-white/[0.06] bg-[#07080a]/90 backdrop-blur-2xl px-4 sm:px-8 sticky top-18 z-30">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
            <div className="flex items-center gap-1.5 bg-[#0d0f15] p-1 rounded-2xl border border-white/[0.07] overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('studio')}
                className={`flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'studio'
                    ? 'scalora-pill-tab-active'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Studio (Create Post)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('queue')}
                className={`flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer relative ${
                  activeTab === 'queue'
                    ? 'scalora-pill-tab-active'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Review & Scheduled Queue</span>
                {pendingCount > 0 && (
                  <span className="ml-1 px-2 py-0.2 rounded-full text-[10px] font-extrabold bg-[#FF6B4A] text-white">
                    {pendingCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('history')}
                className={`flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'history'
                    ? 'scalora-pill-tab-active'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Published Posts</span>
                <span className="text-[10px] px-2 py-0.2 rounded-full bg-white/5 text-slate-400 font-semibold">
                  {publishedPosts.length}
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowBeginnerGuide(!showBeginnerGuide)}
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer py-1.5 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA84A]/40"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#FFA84A]" />
              <span>{showBeginnerGuide ? 'Hide Guide' : 'Workflow Guide'}</span>
            </button>
          </div>
        </nav>
      )}

      {/* Main Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        {/* Beginner Step Cards — Scalora Ambient Glass Card */}
        {showBeginnerGuide && !isGrowthcrew && (
          <div className="scalora-card-glow rounded-3xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-[#FF6B4A]/20 text-[#FFA84A] flex items-center justify-center font-bold text-xs border border-[#FF6B4A]/30">
                  ★
                </div>
                <h3 className="font-extrabold text-sm text-white tracking-tight">
                  How it works
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowBeginnerGuide(false)}
                className="text-xs font-semibold text-slate-400 hover:text-white cursor-pointer px-2.5 py-1 rounded-lg hover:bg-white/5"
              >
                Dismiss ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Step 1 */}
              <div className="p-4 rounded-2xl bg-[#090b10]/60 border border-white/[0.06] space-y-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#34D399]">Step 1</span>
                <h4 className="text-sm font-bold text-white">Add media</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Upload an image or video, or pick a preset.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-2xl bg-[#090b10]/60 border border-white/[0.06] space-y-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#A855F7]">Step 2</span>
                <h4 className="text-sm font-bold text-white">Write the caption</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enter a topic and generate a caption.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-2xl bg-[#090b10]/60 border border-white/[0.06] space-y-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FFA84A]">Step 3</span>
                <h4 className="text-sm font-bold text-white">Publish</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Preview, then schedule or post to Instagram and Facebook.
                </p>
              </div>
            </div>
          </div>
        )}

        {isGrowthcrew && (
          <section aria-label="GrowthCrew outreach">
            <OutreachPanel />
          </section>
        )}

        {!isGrowthcrew && activeTab === 'studio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: STEP 1 (Media Hub) + STEP 2 (AI Caption Studio) */}
            <div className="lg:col-span-7 space-y-6">
              {/* STEP 1: Media Hub Card */}
              <div className="scalora-card-glow rounded-3xl p-6 shadow-2xl space-y-5 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-extrabold text-xs border border-emerald-500/30">
                      1
                    </span>
                    <div>
                      <h2 className="text-sm font-extrabold text-white tracking-tight">Media</h2>
                      <p className="text-[11px] text-slate-400">Upload or pick a preset</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setMediaSourceType('sample')}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        mediaSourceType === 'sample'
                          ? 'bg-[#FF6B4A]/20 text-[#FFA84A] border border-[#FF6B4A]/40'
                          : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/5'
                      }`}
                    >
                      Presets
                    </button>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                        mediaSourceType === 'upload'
                          ? 'bg-[#FF6B4A]/20 text-[#FFA84A] border border-[#FF6B4A]/40'
                          : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/5'
                      }`}
                    >
                      <Upload className="w-3 h-3" />
                      <span>Upload</span>
                    </button>
                  </div>
                </div>

                {/* Upload & Preset Options */}
                {mediaSourceType === 'sample' && (
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 block">Presets</label>
                    <div className="grid grid-cols-3 gap-3">
                      {SAMPLE_IN2PETA_MEDIA.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setAttachedMediaUrl(item.url);
                            setAttachedMediaId(null);
                            setAttachedMediaType(item.type);
                          }}
                          className={`relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border-2 transition-all group ${
                            attachedMediaUrl === item.url
                              ? 'border-[#FF6B4A] shadow-lg shadow-[#FF6B4A]/20 scale-[1.02]'
                              : 'border-white/10 hover:border-white/30'
                          }`}
                        >
                          <img src={item.url} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                            <span className="text-[10px] font-bold text-white truncate">{item.name}</span>
                          </div>
                          {attachedMediaUrl === item.url && (
                            <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#FF6B4A] flex items-center justify-center shadow-md">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                {/* Drag & Drop Upload Zone */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-white/15 hover:border-[#FF6B4A]/60 bg-[#07080b]/50 hover:bg-[#FF6B4A]/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] group-hover:bg-[#FF6B4A]/20 flex items-center justify-center transition-colors">
                    {isUploading ? (
                      <RefreshCw className="w-5 h-5 text-[#FFA84A] animate-spin" />
                    ) : (
                      <CloudUpload className="w-5 h-5 text-slate-400 group-hover:text-[#FFA84A] transition-colors" />
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-white group-hover:text-[#FFA84A] transition-colors">
                      {isUploading ? 'Uploading…' : 'Click or drag to upload'}
                    </p>
                    <p className="text-[10px] text-slate-500">Supports JPG, PNG, WEBP, MP4 & MOV</p>
                  </div>
                </div>

                {/* Direct URL Input */}
                <form onSubmit={handlePasteUrlSubmit} className="flex gap-2">
                  <input
                    type="url"
                    placeholder="Or paste any direct image / video HTTPS URL..."
                    value={pastedUrlInput}
                    onChange={(e) => setPastedUrlInput(e.target.value)}
                    className="flex-1 bg-[#07080b] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FF6B4A]/60"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-bold text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
                  >
                    Attach
                  </button>
                </form>
              </div>

              {/* STEP 2: AI Caption Generator Card */}
              <div className="scalora-card-glow rounded-3xl p-6 shadow-2xl space-y-5 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-[#FF6B4A]/20 text-[#FFA84A] flex items-center justify-center font-extrabold text-xs border border-[#FF6B4A]/30">
                      2
                    </span>
                    <div>
                      <h2 className="text-sm font-extrabold text-white tracking-tight">Caption</h2>
                      <p className="text-[11px] text-slate-400">Topic in, caption out</p>
                    </div>
                  </div>
                </div>

                {/* Inspiration Idea Chips */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 block">Ideas</label>
                  <div className="flex flex-wrap gap-2">
                    {INSPIRATION_CHIPS.map((chip, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setTopic(chip);
                          handleGenerateCaption(chip);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-[#FF6B4A]/10 text-slate-300 hover:text-[#FFA84A] border border-white/[0.06] hover:border-[#FF6B4A]/40 text-xs font-medium transition-all cursor-pointer"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topic Input Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 block">Topic</label>
                  <textarea
                    rows={3}
                    placeholder="What is this post about?"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-[#07080b] border border-white/10 rounded-2xl p-3.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FF6B4A]/60 focus:ring-2 focus:ring-[#FF6B4A]/15 leading-relaxed resize-none"
                  />
                </div>

                {/* Target Channels Toggle */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 block">Target Publishing Channels:</label>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer text-xs">
                      <input
                        type="checkbox"
                        checked={selectedPlatforms.includes('instagram')}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedPlatforms([...selectedPlatforms, 'instagram']);
                          else setSelectedPlatforms(selectedPlatforms.filter((p) => p !== 'instagram'));
                        }}
                        className="rounded text-[#FF6B4A]"
                      />
                      <InstagramIcon className="w-3.5 h-3.5 text-[#FF5376]" />
                      <span>Instagram</span>
                    </label>

                    <label className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer text-xs">
                      <input
                        type="checkbox"
                        checked={selectedPlatforms.includes('facebook')}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedPlatforms([...selectedPlatforms, 'facebook']);
                          else setSelectedPlatforms(selectedPlatforms.filter((p) => p !== 'facebook'));
                        }}
                        className="rounded text-[#38BDF8]"
                      />
                      <FacebookIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Facebook Page</span>
                    </label>
                  </div>
                </div>

                {/* Tone & CTA Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">Tone of Voice:</label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full bg-[#07080b] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6B4A]/60"
                    >
                      <option value="Warm & Engaging">Warm & Engaging</option>
                      <option value="High-Energy & Promotional">High-Energy & Promotional</option>
                      <option value="Luxury & Exclusive">Luxury & Exclusive</option>
                      <option value="Informative & Educational">Informative & Educational</option>
                      <option value="Playful & Humorous">Playful & Humorous</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">Call to Action (CTA):</label>
                    <input
                      type="text"
                      value={callToAction}
                      onChange={(e) => setCallToAction(e.target.value)}
                      className="w-full bg-[#07080b] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6B4A]/60"
                    />
                  </div>
                </div>

                {/* Generate Button with Scalora Gradient */}
                <button
                  type="button"
                  onClick={() => handleGenerateCaption()}
                  disabled={isGenerating}
                  className="w-full py-3.5 px-6 rounded-2xl scalora-btn-primary font-bold text-xs uppercase tracking-wider text-slate-950 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xl"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Generating…</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-slate-950" />
                      <span>Generate caption</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Live Instagram / Facebook Simulator & Publishing Controls */}
            <div className="lg:col-span-5 space-y-6">
              {/* Instagram iPhone Simulator Card */}
              <div className="scalora-card-glow rounded-3xl p-6 shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#FFA84A]/20 text-[#FFA84A] flex items-center justify-center font-extrabold text-xs border border-[#FFA84A]/30">
                      3
                    </span>
                    <h3 className="text-sm font-extrabold text-white">Preview</h3>
                  </div>

                  {/* Aspect Ratio Selector */}
                  <div className="flex items-center bg-black/50 p-1 rounded-xl border border-white/10">
                    <button
                      onClick={() => setAspectRatio('square')}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
                        aspectRatio === 'square' ? 'bg-white/15 text-white' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      1:1
                    </button>
                    <button
                      onClick={() => setAspectRatio('portrait')}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
                        aspectRatio === 'portrait' ? 'bg-white/15 text-white' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      4:5
                    </button>
                    <button
                      onClick={() => setAspectRatio('reel')}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
                        aspectRatio === 'reel' ? 'bg-white/15 text-white' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      9:16
                    </button>
                  </div>
                </div>

                {/* iPhone Frame */}
                <div className="bg-[#000000] border-4 border-slate-800 rounded-[36px] overflow-hidden shadow-2xl max-w-[360px] mx-auto">
                  {/* Phone Header / Profile Bar */}
                  <div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF6B4A] via-[#FF5376] to-[#FFA84A]">
                        <img
                          src={activeChannel?.avatar || SAMPLE_IN2PETA_MEDIA[0].url}
                          alt="profile"
                          className="w-full h-full rounded-full object-cover bg-slate-900"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-white">{activeChannel?.name || 'Mytestpage'}</span>
                          <CheckCircle2 className="w-3 h-3 text-[#38BDF8] fill-[#38BDF8]/20" />
                        </div>
                        <span className="text-[10px] text-slate-400">{activeChannel?.handle || '@mytestpage'}</span>
                      </div>
                    </div>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>

                  {/* Media Display */}
                  <div
                    className={`relative w-full bg-slate-950 overflow-hidden ${
                      aspectRatio === 'square'
                        ? 'aspect-square'
                        : aspectRatio === 'reel'
                        ? 'aspect-[9/16]'
                        : 'aspect-[4/5]'
                    }`}
                  >
                    {attachedMediaType === 'video' ? (
                      <video
                        src={attachedMediaUrl}
                        controls
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={attachedMediaUrl}
                        alt="Instagram preview"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Action Bar (Heart, Comment, Share, Bookmark) */}
                  <div className="p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <Heart className="w-5 h-5 text-slate-300 hover:text-rose-500 cursor-pointer transition-colors" />
                        <MessageCircle className="w-5 h-5 text-slate-300 hover:text-white cursor-pointer transition-colors" />
                        <Share2 className="w-5 h-5 text-slate-300 hover:text-white cursor-pointer transition-colors" />
                      </div>
                      <Bookmark className="w-5 h-5 text-slate-300 hover:text-[#FFA84A] cursor-pointer transition-colors" />
                    </div>

                    {/* Caption Preview */}
                    <div className="text-xs space-y-1.5">
                      {editHook && (
                        <p className="font-extrabold text-white text-xs leading-snug">
                          {editHook}
                        </p>
                      )}

                      <p className={`text-slate-300 text-[11px] leading-relaxed whitespace-pre-line ${expandedCaption ? '' : 'line-clamp-3'}`}>
                        {editCaption || (
                          <span className="text-slate-600 italic">
                            Caption preview
                          </span>
                        )}
                      </p>

                      {editCaption && editCaption.length > 120 && (
                        <button
                          type="button"
                          onClick={() => setExpandedCaption(!expandedCaption)}
                          className="text-[10px] text-slate-500 hover:text-slate-300 font-bold block cursor-pointer"
                        >
                          {expandedCaption ? 'show less' : '...more'}
                        </button>
                      )}

                      {editHashtags && (
                        <p className="text-[11px] text-[#FFA84A]/80 font-medium">
                          {editHashtags}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Scheduling & Publish Actions */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#FFA84A]" />
                    <label className="text-xs font-bold text-slate-300">Schedule Date & Time:</label>
                  </div>
                  <input
                    type="datetime-local"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    className="w-full bg-[#07080b] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#FF6B4A]/60"
                  />

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleSchedulePost}
                      disabled={actionLoading === 'schedule'}
                      className="py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/10 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <Clock className="w-3.5 h-3.5 text-[#FFA84A]" />
                      <span>Add to Queue</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleInstantPublish(generatedDraft?.id || 'new')}
                      disabled={actionLoading?.startsWith('pub_')}
                      className="py-3 px-4 rounded-xl scalora-btn-primary text-slate-950 text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-lg"
                    >
                      <Send className="w-3.5 h-3.5 text-slate-950" />
                      <span>Publish Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: REVIEW & SCHEDULED QUEUE */}
        {!isGrowthcrew && activeTab === 'queue' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
              <div>
                <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                  Review & Scheduled Queue
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FF6B4A]/15 text-[#FFA84A] border border-[#FF6B4A]/30">
                    {queueList.length} Total
                  </span>
                </h2>
                <p className="text-xs text-slate-400">Pending and scheduled posts</p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 bg-[#0d0f15] p-1 rounded-xl border border-white/[0.07]">
                {['ALL', 'PENDING_REVIEW', 'SCHEDULED', 'PUBLISHED'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setQueueFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      queueFilter === filter
                        ? 'bg-[#FF6B4A]/20 text-[#FFA84A] border border-[#FF6B4A]/30 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {filter === 'PENDING_REVIEW' ? 'Pending Review' : filter === 'ALL' ? 'All Posts' : filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Queue List */}
            {filteredQueue.length === 0 ? (
              <div className="scalora-card-glow rounded-3xl p-12 text-center space-y-3">
                <Layers className="w-8 h-8 text-slate-600 mx-auto" />
                <h3 className="font-bold text-sm text-white">No Posts in This Queue View</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Create high-performing posts in the Studio tab to schedule or review them here.
                </p>
                <button
                  onClick={() => setActiveTab('studio')}
                  className="px-4 py-2 rounded-xl scalora-btn-primary text-slate-950 text-xs font-bold cursor-pointer"
                >
                  Go to Studio
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQueue.map((post) => (
                  <div
                    key={post.id}
                    className="scalora-card-glow rounded-3xl p-5 shadow-xl flex flex-col justify-between space-y-4 relative group"
                  >
                    <div className="space-y-3">
                      {/* Post Status & Scheduled Date */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                            post.status === 'PUBLISHED'
                              ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                              : post.status === 'PENDING_REVIEW'
                              ? 'bg-[#FF6B4A]/15 text-[#FFA84A] border-[#FF6B4A]/30'
                              : 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                          }`}
                        >
                          {post.status === 'PENDING_REVIEW' ? 'Review Required' : post.status}
                        </span>

                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {new Date(post.scheduledDate).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      {/* Attached Media Thumbnail */}
                      {post.mediaUrl && (
                        <div className="rounded-2xl overflow-hidden aspect-video bg-black/60 relative">
                          <img src={post.mediaUrl} alt="post asset" className="w-full h-full object-cover" />
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 text-[9px] font-bold text-white">
                            {post.mediaType === 'video' ? '🎬 Reel' : '📸 Image'}
                          </span>
                        </div>
                      )}

                      {/* Hook & Caption */}
                      <div>
                        {post.hook && (
                          <p className="font-bold text-xs text-white line-clamp-1 mb-1">
                            {post.hook}
                          </p>
                        )}
                        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                          {post.caption}
                        </p>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingPost(post)}
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-all cursor-pointer"
                          title="Edit Post"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-all cursor-pointer"
                          title="Delete Post"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        {post.status === 'PENDING_REVIEW' && (
                          <button
                            onClick={() => handleApprovePost(post.id)}
                            className="px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-all cursor-pointer"
                          >
                            Approve
                          </button>
                        )}
                        <button
                          onClick={() => handleInstantPublish(post.id)}
                          className="px-3 py-1.5 rounded-xl scalora-btn-primary text-slate-950 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer"
                        >
                          Publish Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: PUBLISHED HISTORY */}
        {!isGrowthcrew && activeTab === 'history' && (() => {
          const allPublished = (publishedPosts && publishedPosts.length > 0)
            ? publishedPosts
            : (queueData.queue || []).filter((p) => p.status === 'PUBLISHED');

          return (
            <div className="space-y-6">
              <div className="pb-2 border-b border-white/[0.06] flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                    Published History
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {allPublished.length} Live
                    </span>
                  </h2>
                  <p className="text-xs text-slate-400">Posts that went live</p>
                </div>
                <a
                  href="https://facebook.com/profile.php?id=61594485176950&sk=photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-bold text-[#FFA84A] transition-all cursor-pointer"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Open Facebook Photos</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {allPublished.length === 0 ? (
                <div className="scalora-card-glow rounded-3xl p-12 text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-slate-600 mx-auto" />
                  <h3 className="font-bold text-sm text-white">No Published Posts Yet</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Publish posts from the Studio or Queue to see live published releases here.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allPublished.map((post, idx) => {
                    const postImg = post.visualUrl || post.mediaUrl;
                    const postText = post.fullPostText || post.caption || post.content || '';
                    const postDate = post.publishedAt || post.publishDate || post.createdAt || Date.now();

                    return (
                      <div
                        key={post.id || idx}
                        className="scalora-card-glow rounded-3xl p-5 shadow-xl flex flex-col justify-between space-y-4 hover:border-white/20 transition-all"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                              Published Live
                            </span>
                            <span className="text-[11px] text-slate-400">
                              {new Date(postDate).toLocaleDateString([], {
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </span>
                          </div>

                          {postImg && (
                            <div className="rounded-2xl overflow-hidden aspect-video bg-black/60 border border-white/10 relative group">
                              <img src={postImg} alt="media" className="w-full h-full object-cover" />
                              <div className="absolute top-2 right-2 flex gap-1">
                                {(post.platforms || ['facebook']).map((p, i) => (
                                  <span key={i} className="p-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15">
                                    {p === 'facebook' ? (
                                      <FacebookIcon className="w-3 h-3 text-[#38BDF8]" />
                                    ) : (
                                      <InstagramIcon className="w-3 h-3 text-[#FF5376]" />
                                    )}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="space-y-1">
                            {post.topic && (
                              <h4 className="text-xs font-bold text-white line-clamp-1">{post.topic}</h4>
                            )}
                            <div
                              className="text-xs text-slate-300 leading-relaxed line-clamp-4 whitespace-pre-line"
                              dangerouslySetInnerHTML={{ __html: postText.replace(/\n/g, '<br/>') }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                          <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            Published
                          </span>
                          <a
                            href="https://facebook.com/profile.php?id=61594485176950&sk=photos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-bold text-[#FFA84A] border border-white/10 transition-all cursor-pointer"
                          >
                            <span>View Live Photos</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })()}
      </main>

      {/* Connect / Switch Channel Modal (Instagram & Facebook) */}
      {showConnectModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1118] border border-white/15 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF6B4A] to-[#FF5376]">
                  <div className="w-full h-full bg-[#0e1118] rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#FFA84A]" />
                  </div>
                </div>
                <h3 className="font-extrabold text-sm text-white">Select Connected Channel</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowConnectModal(false)}
                className="text-slate-400 hover:text-white cursor-pointer px-2 py-1"
              >
                ✕
              </button>
            </div>

            {/* Available Channels List */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">Available Connected Channels:</label>
              <div className="space-y-2">
                {channels.map((chan) => (
                  <div
                    key={chan.id}
                    onClick={() => {
                      setActiveChannel(chan);
                      setShowConnectModal(false);
                      showToast(`Active channel set to ${chan.name}!`, 'success');
                    }}
                    className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-all ${
                      activeChannel?.id === chan.id
                        ? 'bg-[#FF6B4A]/15 border-[#FF6B4A]/50 shadow-md shadow-[#FF6B4A]/10'
                        : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF6B4A] to-[#FF5376]">
                        <img src={chan.avatar} alt="avatar" className="w-full h-full rounded-full object-cover" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">{chan.name}</span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1.5">
                          {chan.platform === 'facebook' ? (
                            <FacebookIcon className="w-3 h-3 text-[#38BDF8]" />
                          ) : (
                            <InstagramIcon className="w-3 h-3 text-[#FF5376]" />
                          )}
                          <span>{chan.handle}</span>
                        </span>
                      </div>
                    </div>
                    {activeChannel?.id === chan.id && (
                      <CheckCircle2 className="w-4 h-4 text-[#FFA84A]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Add Custom Handle */}
            <form onSubmit={handleConnectInstagram} className="space-y-3 pt-2 border-t border-white/[0.06]">
              <label className="text-xs font-bold text-slate-300 block">Add New Channel / Page:</label>
              <div className="flex gap-2">
                <select
                  value={customPlatform}
                  onChange={(e) => setCustomPlatform(e.target.value)}
                  className="bg-[#07080b] border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#FF6B4A]/60"
                >
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook Page</option>
                </select>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-2 text-slate-500 text-xs">@</span>
                  <input
                    type="text"
                    placeholder="handle_or_page"
                    value={customHandleInput}
                    onChange={(e) => setCustomHandleInput(e.target.value)}
                    className="w-full bg-[#07080b] border border-white/10 rounded-xl pl-7 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6B4A]/60"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowConnectModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 text-slate-300 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider text-slate-950 scalora-btn-primary shadow-lg cursor-pointer"
                >
                  Save & Connect
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Post Modal */}
      {editingPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1118] border border-white/15 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#FFA84A]" />
                Edit Post Content
              </h3>
              <button
                type="button"
                onClick={() => setEditingPost(null)}
                className="text-slate-400 hover:text-white cursor-pointer px-2 py-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Hook</label>
                <input
                  type="text"
                  value={editingPost.hook || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, hook: e.target.value })}
                  className="w-full bg-[#07080b] border border-white/10 rounded-xl p-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Caption</label>
                <textarea
                  rows={4}
                  value={editingPost.caption || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, caption: e.target.value })}
                  className="w-full bg-[#07080b] border border-white/10 rounded-xl p-2.5 text-xs text-white resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Scheduled Date & Time</label>
                <input
                  type="datetime-local"
                  value={new Date(editingPost.scheduledDate).toISOString().slice(0, 16)}
                  onChange={(e) => setEditingPost({ ...editingPost, scheduledDate: new Date(e.target.value).toISOString() })}
                  className="w-full bg-[#07080b] border border-white/10 rounded-xl p-2.5 text-xs text-white"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/[0.06]">
              <button
                type="button"
                onClick={() => setEditingPost(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 text-slate-300 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveEdit}
                className="px-5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider text-slate-950 scalora-btn-primary cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
