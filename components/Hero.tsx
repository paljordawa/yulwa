import React from 'react';
import { Play, Rocket, Shield, Cpu, Cloud } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-700 dark:text-lime-400 text-xs font-bold uppercase tracking-widest mb-8 animate-bounce">
            <Rocket className="w-3.5 h-3.5" />
            Next Gen Infrastructure is Here
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 dark:text-white leading-[1.1] mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-950 to-lime-600 dark:from-lime-400 dark:to-emerald-500">Sky</span> for Your <br className="hidden md:block" /> Digital Universe.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed font-medium">
            Yulwa provides elite-tier cloud hosting and custom development solutions designed to scale your vision to the heavens.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="w-full sm:w-auto sky-gradient text-black px-10 py-5 rounded-2xl text-lg font-extrabold shadow-2xl shadow-lime-500/40 hover:scale-105 transition-all flex items-center justify-center gap-3">
              Deploy Your App <Rocket className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto glass-card text-slate-900 dark:text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-3">
              <Play className="w-5 h-5 fill-current" /> Watch Showreel
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 items-center opacity-80 dark:opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="flex items-center gap-2 text-slate-950 dark:text-white font-bold"><Shield className="text-lime-600 dark:text-lime-400" /> Enterprise Shield</div>
             <div className="flex items-center gap-2 text-slate-950 dark:text-white font-bold"><Cpu className="text-lime-600 dark:text-lime-400" /> Edge Computing</div>
             <div className="hidden md:flex items-center gap-2 text-slate-950 dark:text-white font-bold"><Cloud className="text-lime-600 dark:text-lime-400" /> 99.9% Uptime</div>
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="mt-20 relative max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl shadow-lime-500/10 animate-float">
          <img 
            src="https://picsum.photos/id/180/1200/600" 
            alt="Dashboard Preview" 
            className="w-full h-auto object-cover opacity-100 dark:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 via-transparent to-transparent" />
          
          {/* Floating UI Elements */}
          <div className="absolute top-10 right-10 glass-card p-4 rounded-xl hidden md:block animate-pulse shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-lime-500 rounded-full animate-ping" />
              <span className="text-sm font-bold text-slate-900 dark:text-white">System Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};