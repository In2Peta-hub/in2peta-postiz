import React, { useState } from 'react';
import {
  Sparkles,
  Lock,
  Mail,
  ArrowRight,
  Zap,
} from 'lucide-react';

export default function LoginPage({ onLogin, onBack }) {
  const [email, setEmail] = useState('aarya@in2peta.com');
  const [password, setPassword] = useState('scalora2026');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      onLogin({
        email: 'aarya@in2peta.com',
        name: 'Aarya',
        initial: 'A',
        role: 'Creative Director',
      });
      setLoading(false);
    }, 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onLogin({
        email,
        name: 'Aarya',
        initial: 'A',
        role: 'Creative Director',
      });
      setLoading(false);
    }, 500);
  };

  const handleQuickDemo = () => {
    setLoading(true);
    setTimeout(() => {
      onLogin({
        email: 'aarya@in2peta.com',
        name: 'Aarya',
        initial: 'A',
        role: 'Creative Director',
      });
      setLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 flex flex-col justify-center items-center p-4 relative overflow-hidden scalora-mesh-bg font-sans selection:bg-[#FF6B4A]/30 selection:text-[#FFA84A]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B4A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <span>← Back to Dashboard</span>
        </button>
      )}

      <div className="w-full max-w-md scalora-card-glow rounded-3xl p-8 relative z-10 space-y-6 shadow-2xl">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#FF6B4A] via-[#FF5376] to-[#FFA84A] shadow-xl shadow-[#FF6B4A]/25 mx-auto">
            <div className="w-full h-full bg-[#0a0c10] rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#FFA84A]" />
            </div>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
            Scalora <span className="font-serif-accent font-normal italic text-[#FFA84A] text-2xl">Marketing</span>
          </h1>
          <p className="text-xs text-slate-400">Sign in to access your Social Media Studio and Lead Gen Dashboard</p>
        </div>

        {/* Google 1-Click Sign In */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-xl active:scale-[0.99]"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="h-[1px] bg-white/10 flex-1" />
          <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">or email</span>
          <div className="h-[1px] bg-white/10 flex-1" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 block">Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="aarya@in2peta.com"
                className="w-full bg-[#07080b] border border-white/10 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FF6B4A]/60 focus:ring-2 focus:ring-[#FF6B4A]/20 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 block">Password</label>
              <span className="text-[11px] text-[#FFA84A]/80 hover:text-[#FFA84A] cursor-pointer">
                Forgot password?
              </span>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#07080b] border border-white/10 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FF6B4A]/60 focus:ring-2 focus:ring-[#FF6B4A]/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-400 select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-3.5 h-3.5 rounded bg-black/40 border-white/20 text-[#FF6B4A] focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <span>Remember session</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl scalora-btn-primary text-slate-950 text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xl mt-2"
          >
            {loading ? (
              <span>Signing in…</span>
            ) : (
              <>
                <span>Sign in to Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        <div className="pt-2 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={handleQuickDemo}
            className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-slate-400 hover:text-slate-200 border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-[#FFA84A]" />
            <span>Quick Demo Instant Access (1-Click)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
