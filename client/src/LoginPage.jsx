import React, { useState } from 'react';
import {
  Sparkles,
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Globe
} from 'lucide-react';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('admin@growthcrew.io');
  const [password, setPassword] = useState('growthcrew2026');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onLogin({
        email,
        name: 'Growthcrew Admin',
        role: 'Creative Director',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      });
      setLoading(false);
    }, 600);
  };

  const handleQuickDemo = () => {
    setLoading(true);
    setTimeout(() => {
      onLogin({
        email: 'demo@growthcrew.io',
        name: 'Growthcrew Studio Lead',
        role: 'Administrator',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      });
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 flex flex-col justify-center items-center p-4 relative overflow-hidden scalora-mesh-bg font-sans selection:bg-[#FF6B4A]/30 selection:text-[#FFA84A]">
      {/* Ambient background glow dots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B4A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glass Card */}
      <div className="w-full max-w-md scalora-card-glow rounded-3xl p-8 relative z-10 space-y-7 shadow-2xl">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#FF6B4A] via-[#FF5376] to-[#FFA84A] shadow-xl shadow-[#FF6B4A]/25 mx-auto">
            <div className="w-full h-full bg-[#0a0c10] rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#FFA84A]" />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
              Growthcrew <span className="font-serif-accent font-normal italic text-[#FFA84A] text-2xl">Studio</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Sign in to manage AI campaigns, approval queues & multi-channel publishing
            </p>
          </div>
        </div>

        {/* Login Form */}
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
                placeholder="admin@growthcrew.io"
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

          {/* Remember me */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-400 select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-3.5 h-3.5 rounded bg-black/40 border-white/20 text-[#FF6B4A] focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <span>Remember session</span>
            </label>
            <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Secure 256-bit
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl scalora-btn-primary text-slate-950 text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xl mt-2"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        {/* Divider & Quick Demo Access */}
        <div className="space-y-3 pt-2 border-t border-white/[0.06]">
          <div className="relative flex items-center justify-center">
            <span className="bg-[#0e1118] px-3 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
              Quick Dev & Demo
            </span>
          </div>

          <button
            type="button"
            onClick={handleQuickDemo}
            className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-bold text-slate-300 hover:text-white border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-[#FFA84A]" />
            <span>1-Click Instant Demo Login</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="text-center text-[11px] text-slate-500 pt-1">
          Growthcrew Social Studio · Connected with Meta Graph API & Postiz
        </div>
      </div>
    </div>
  );
}
