import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  ArrowRight,
  Share2,
  Mail,
  CheckCircle2,
  Globe,
  Sliders,
  TrendingUp,
  BarChart3,
  Users,
  Send,
  Lock,
  Layers,
  ChevronRight,
  Menu,
  X,
  Play,
  LogOut
} from 'lucide-react';

export default function LandingPage({ onNavigate, onLoginClick, currentUser, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 flex flex-col font-sans antialiased selection:bg-[#FF6B4A]/30 selection:text-[#FFA84A] scalora-mesh-bg overflow-x-hidden">
      {/* Background Glow Accents */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#FF6B4A]/15 via-[#FF5376]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-[-10%] w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* TOP NAVIGATION BAR */}
      <header className="border-b border-white/[0.08] bg-[#07080a]/80 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#FF6B4A] via-[#FF5376] to-[#FFA84A] shadow-lg shadow-[#FF6B4A]/30 shrink-0">
              <div className="w-full h-full bg-[#0a0c10] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#FFA84A]" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Scalora
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FFA84A] bg-[#FFA84A]/10 border border-[#FFA84A]/25 px-2 py-0.5 rounded-full hidden sm:inline-block">
                Marketing
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Social Media, Lead Gen, Features) */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-white/[0.03] border border-white/[0.08] p-1.5 rounded-full backdrop-blur-xl">
            <button
              onClick={() => onNavigate('social')}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.08] transition-all group cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#FF6B4A] group-hover:scale-110 transition-transform" />
              <span>Social Media</span>
              <span className="text-[10px] bg-[#FF6B4A]/20 text-[#FFA84A] px-1.5 py-0.5 rounded-full font-bold">Studio</span>
            </button>

            <button
              onClick={() => onNavigate('leadgen')}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.08] transition-all group cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#FF5376] group-hover:scale-110 transition-transform" />
              <span>Lead Gen</span>
              <span className="text-[10px] bg-[#FF5376]/20 text-[#FF5376] px-1.5 py-0.5 rounded-full font-bold">Cold Outreach</span>
            </button>

            <a
              href="#features"
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.05] transition-all"
            >
              Features
            </a>

            <a
              href="#platform"
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.05] transition-all"
            >
              Dashboard
            </a>
          </nav>

          {/* Right Action Buttons: User Avatar 'A' (like Google) or Login & Get Started */}
          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-3">
                {/* Google-style 'A' Avatar Profile */}
                <div className="relative group">
                  <button
                    type="button"
                    title={`Google Account: ${currentUser?.name || 'Aarya'} (${currentUser?.email || 'aarya@in2peta.com'})`}
                    className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF6B4A] via-[#FF5376] to-[#FFA84A] p-[2px] shrink-0 shadow-lg shadow-[#FF6B4A]/25 hover:scale-105 hover:ring-2 hover:ring-[#FFA84A]/40 transition-all cursor-pointer flex items-center justify-center group/avatar"
                  >
                    <div className="w-full h-full bg-[#0d0f17] group-hover/avatar:bg-[#161a26] rounded-full flex items-center justify-center font-extrabold text-[#FFA84A] text-sm tracking-tight transition-colors">
                      {currentUser?.initial || 'A'}
                    </div>
                  </button>

                  {/* Dropdown Menu (Google Account card) */}
                  <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-[#0c0e15] border border-white/10 shadow-2xl p-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-50">
                    <div className="flex flex-col items-center text-center pb-3 border-b border-white/[0.08] mb-3">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#FF6B4A] via-[#FF5376] to-[#FFA84A] p-[2px] shadow-lg mb-2">
                        <div className="w-full h-full bg-[#0d0f17] rounded-full flex items-center justify-center font-extrabold text-white text-xl">
                          {currentUser?.initial || 'A'}
                        </div>
                      </div>
                      <div className="text-sm font-bold text-white truncate max-w-full">{currentUser?.name || 'Aarya'}</div>
                      <div className="text-xs text-slate-400 truncate max-w-full">{currentUser?.email || 'aarya@in2peta.com'}</div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#FFA84A] bg-[#FFA84A]/10 border border-[#FFA84A]/25 px-2 py-0.5 rounded-full">
                        Admin Workspace
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={onLogout}
                      className="w-full text-center py-2 px-3 text-xs font-semibold text-rose-300 hover:text-rose-200 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign out</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('social')}
                  className="relative group overflow-hidden px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-xl shadow-[#FF6B4A]/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A] via-[#FF7D5A] to-[#FFA84A]" />
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span>Launch Studio</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onLoginClick}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4 text-slate-400" />
                  <span>Log in</span>
                </button>

                <button
                  onClick={onLoginClick}
                  className="relative group overflow-hidden px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-xl shadow-[#FF6B4A]/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A] via-[#FF5376] to-[#FFA84A] transition-all group-hover:opacity-90" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] blur-sm" />
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Get started free</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#FFA84A]" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#07080a]/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
            <div className="space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onNavigate('social'); }}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-left font-semibold text-white"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FF6B4A]/20 flex items-center justify-center text-[#FF6B4A]">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm">Social Media Studio</div>
                    <div className="text-xs text-slate-400 font-normal">AI content & instant publishing</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onNavigate('leadgen'); }}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-left font-semibold text-white"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FF5376]/20 flex items-center justify-center text-[#FF5376]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm">Lead Gen & Outreach</div>
                    <div className="text-xs text-slate-400 font-normal">Cold email campaigns & discovery</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
              {currentUser ? (
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF6B4A] via-[#FF5376] to-[#FFA84A] p-[1.5px] shrink-0">
                      <div className="w-full h-full bg-[#0d0f17] rounded-full flex items-center justify-center font-extrabold text-white text-xs">
                        {currentUser?.initial || 'A'}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">{currentUser?.name || 'Aarya'}</div>
                      <div className="text-[10px] text-slate-400 truncate">{currentUser?.email || 'aarya@in2peta.com'}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onLogout(); }}
                    className="p-2 rounded-xl text-rose-300 hover:bg-rose-500/10 text-xs font-semibold cursor-pointer"
                    title="Sign out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => { setMobileMenuOpen(false); onLoginClick(); }}
                  className="w-full py-3 rounded-xl border border-white/15 text-sm font-semibold text-white text-center hover:bg-white/5"
                >
                  Log in
                </button>
              )}
              <button
                onClick={() => { setMobileMenuOpen(false); onNavigate('social'); }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF6B4A] to-[#FFA84A] text-sm font-bold text-white text-center shadow-lg shadow-[#FF6B4A]/30"
              >
                Launch Studio
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION (1:1 with Scalora Marketing design) */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Scalora Marketing Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1b120c]/80 border border-[#FF6B4A]/30 backdrop-blur-xl mb-8 shadow-lg shadow-[#FF6B4A]/10 animate-in fade-in zoom-in-95 duration-500">
          <span className="text-[#FFA84A] text-sm">☀️</span>
          <span className="text-sm font-medium tracking-wide text-[#FFA84A]">
            Scalora Marketing
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Campaigns that drive predictable{' '}
          <span className="font-serif-accent font-normal italic text-[#FFA84A] text-5xl sm:text-7xl md:text-8xl">
            growth
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Scalora Marketing connects campaigns directly to revenue eliminating guesswork from your growth strategy.
        </p>

        {/* Hero CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md mx-auto mb-16">
          <button
            onClick={() => onNavigate('social')}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-[#FF6B4A] via-[#FF7D5A] to-[#FFA84A] text-white font-extrabold text-lg shadow-2xl shadow-[#FF6B4A]/40 hover:shadow-[#FF6B4A]/60 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 border border-white/20"
          >
            <span>Get started free</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* HERO MOCKUP / DASHBOARD PREVIEW */}
        <div id="platform" className="w-full max-w-5xl mx-auto rounded-3xl p-3 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-2xl">
          <div className="rounded-2xl bg-[#0d0e14] border border-white/[0.08] overflow-hidden p-6 md:p-8 space-y-6 text-left">
            {/* Mockup Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 font-mono ml-2">growthcrew.in2peta.io/dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  All Systems Operational
                </span>
              </div>
            </div>

            {/* Mockup Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs text-slate-400 font-medium">Total Revenue Impact</div>
                <div className="text-2xl font-bold text-white mt-1">$53,009.89</div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-1">↑ 18% vs last month</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs text-slate-400 font-medium">Social Posts Live</div>
                <div className="text-2xl font-bold text-white mt-1">95 / 100</div>
                <div className="text-[11px] text-[#FFA84A] font-semibold mt-1">Multi-channel sync</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs text-slate-400 font-medium">Outreach Leads</div>
                <div className="text-2xl font-bold text-white mt-1">1,022</div>
                <div className="text-[11px] text-sky-400 font-semibold mt-1">Verified Inboxes</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs text-slate-400 font-medium">Deliverability</div>
                <div className="text-2xl font-bold text-white mt-1">99.8%</div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-1">Meta + AgentMail</div>
              </div>
            </div>

            {/* Dual Pillars Interactive Banner inside Mockup */}
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div
                onClick={() => onNavigate('social')}
                className="p-5 rounded-2xl bg-gradient-to-br from-[#FF6B4A]/10 to-transparent border border-[#FF6B4A]/20 hover:border-[#FF6B4A]/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B4A]/20 flex items-center justify-center text-[#FF6B4A]">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#FFA84A] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Launch Studio <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-bold text-white text-base">Social Media Studio</h3>
                <p className="text-xs text-slate-400 mt-1">Generate captions with Gemini 3.5, upload visuals to AWS S3, and publish directly to Facebook & Instagram.</p>
              </div>

              <div
                onClick={() => onNavigate('leadgen')}
                className="p-5 rounded-2xl bg-gradient-to-br from-[#FF5376]/10 to-transparent border border-[#FF5376]/20 hover:border-[#FF5376]/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5376]/20 flex items-center justify-center text-[#FF5376]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#FF5376] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Launch Lead Gen <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-bold text-white text-base">Lead Gen & Cold Outreach</h3>
                <p className="text-xs text-slate-400 mt-1">Find high-ticket B2B leads, generate AI-tailored personalized email copy, and dispatch cold sequences at scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED FEATURES SECTION */}
      <section id="features" className="py-20 border-t border-white/[0.08] bg-[#07080a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Two powerful engines. <br className="hidden sm:inline" />
              <span className="text-[#FFA84A]">One unified growth platform.</span>
            </h2>
            <p className="text-slate-400 mt-4 text-base sm:text-lg">
              Everything your team needs to attract audience attention on social media and convert high-value clients via direct outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1: Social Studio */}
            <div className="rounded-3xl p-8 bg-white/[0.02] border border-white/[0.08] relative overflow-hidden group hover:border-[#FF6B4A]/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF6B4A] to-[#FFA84A] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#FF6B4A]/25">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Social Media Studio</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Turn ideas into polished, broadcast-ready social campaigns. Generates high-converting hooks, captions, and hashtags optimized for Facebook and Instagram algorithms.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA84A]" />
                  <span>Gemini 3.5 AI caption engine with customizable brand tones</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA84A]" />
                  <span>Automatic AWS S3 media uploads with CDN optimization</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA84A]" />
                  <span>Meta Graph API direct 1-click publishing without queues</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA84A]" />
                  <span>Approval queue for director sign-off before going live</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('social')}
                className="w-full py-3.5 rounded-xl bg-white/[0.06] hover:bg-[#FF6B4A] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-transparent"
              >
                <span>Open Social Media Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Feature 2: Lead Gen & Outreach */}
            <div className="rounded-3xl p-8 bg-white/[0.02] border border-white/[0.08] relative overflow-hidden group hover:border-[#FF5376]/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF5376] to-[#A855F7] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#FF5376]/25">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Lead Gen & Cold Outreach</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Automate your entire B2B pipeline. Discover verified prospects with CoreClaw, compose personalized emails with AI, and dispatch deliverability-safe campaigns via AgentMail.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5376]" />
                  <span>CoreClaw deep lead discovery & place enrichment</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5376]" />
                  <span>AI personalized copy generation tailored to each prospect</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5376]" />
                  <span>AgentMail inbox rotation with warm-up protection</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5376]" />
                  <span>Central reply tracking & engagement analytics</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('leadgen')}
                className="w-full py-3.5 rounded-xl bg-white/[0.06] hover:bg-[#FF5376] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-transparent"
              >
                <span>Open Lead Gen Engine</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#050608] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#FFA84A]" />
            <span className="text-white font-bold">Scalora Marketing by In2Peta</span>
            <span>•</span>
            <span>Predictable Growth Platform</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('social')} className="hover:text-white transition-colors">Social Studio</button>
            <button onClick={() => onNavigate('leadgen')} className="hover:text-white transition-colors">Lead Gen</button>
            <button onClick={onLoginClick} className="hover:text-white transition-colors">Log In</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
