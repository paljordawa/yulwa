import React from 'react';
import { Globe, Mail, TrendingUp, Server, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, BarChart3, Lock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300/80 dark:border-emerald-500/20 text-emerald-900 dark:text-lime-400 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 dark:text-lime-400" />
            Full-Suite Digital Agency & Cloud Partner
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
            Websites, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-600 dark:from-lime-400 dark:via-emerald-400 dark:to-teal-300">Email & SEO</span> Built to Skyrocket Your Brand
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-3xl leading-relaxed font-semibold">
            Yulwa powers modern businesses with bespoke web development, branded corporate email hosting, Page #1 SEO optimization, and high-speed NVMe cloud servers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <a href="#services" className="w-full sm:w-auto sky-gradient text-slate-950 font-extrabold px-10 py-5 rounded-2xl text-lg shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all flex items-center justify-center gap-3">
              Explore Digital Services <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#pricing" className="w-full sm:w-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3 border border-slate-200 dark:border-white/10 shadow-md">
              View Growth Bundles
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
             <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm flex items-center justify-center gap-2.5 text-slate-900 dark:text-white font-bold text-sm sm:text-base">
               <Globe className="w-5 h-5 text-emerald-600 dark:text-lime-400 shrink-0" /> Web Design
             </div>
             <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm flex items-center justify-center gap-2.5 text-slate-900 dark:text-white font-bold text-sm sm:text-base">
               <Mail className="w-5 h-5 text-emerald-600 dark:text-lime-400 shrink-0" /> Business Email
             </div>
             <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm flex items-center justify-center gap-2.5 text-slate-900 dark:text-white font-bold text-sm sm:text-base">
               <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-lime-400 shrink-0" /> SEO Ranking
             </div>
             <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm flex items-center justify-center gap-2.5 text-slate-900 dark:text-white font-bold text-sm sm:text-base">
               <Server className="w-5 h-5 text-emerald-600 dark:text-lime-400 shrink-0" /> NVMe Hosting
             </div>
          </div>
        </div>
      </div>

      {/* Modern Platform Dashboard Visual */}
      <div className="mt-16 relative max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-300/50 dark:shadow-lime-500/10 animate-float p-6 sm:p-8">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="px-4 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-400 font-mono font-medium flex items-center gap-2">
              <Lock className="w-3 h-3 text-emerald-600 dark:text-lime-400" /> https://yulwa.com/dashboard/growth
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 hidden sm:inline">All Systems Operational</span>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">SEO Organic Traffic</span>
                <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-lime-400" />
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">48,920</div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">+142% vs last month</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Corporate Mailboxes</span>
                <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">10 Active</div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">100% SPF/DKIM Verified</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Page Speed Score</span>
                <Zap className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">99/100</div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Sub-400ms load time</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cloud Uptime</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">99.99%</div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">NVMe Edge Active</span>
            </div>
          </div>

          {/* Visual Progress Graph Bar */}
          <div className="p-6 rounded-2xl bg-slate-950 dark:bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sky-gradient rounded-xl flex items-center justify-center text-black font-black text-xl shadow-lg">
                Y
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">Yulwa Digital Infrastructure Suite</h4>
                <p className="text-slate-400 text-xs">Website • Email • SEO • NVMe Cloud</p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="px-4 py-2 rounded-xl bg-white/10 text-xs font-bold text-lime-400 border border-lime-500/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> SSL Encrypted
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/10 text-xs font-bold text-emerald-400 border border-emerald-500/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> SEO Ranked #1
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};