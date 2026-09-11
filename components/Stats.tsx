import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TrendingUp, Globe, Mail, Server } from 'lucide-react';

export const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      label: 'Websites Built',
      value: '500+',
      trend: '+45% YoY',
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      chart: (
        <svg className="w-full h-12 overflow-visible" viewBox="0 0 120 40">
          <defs>
            <linearGradient id="barGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="2" y="24" width="14" height="16" rx="3" fill="url(#barGlow)" />
          <rect x="22" y="18" width="14" height="22" rx="3" fill="url(#barGlow)" />
          <rect x="42" y="14" width="14" height="26" rx="3" fill="url(#barGlow)" />
          <rect x="62" y="9" width="14" height="31" rx="3" fill="url(#barGlow)" />
          <rect x="82" y="4" width="14" height="36" rx="3" fill="#34d399" />
          <rect x="102" y="0" width="14" height="40" rx="3" fill="#34d399" />
        </svg>
      )
    },
    {
      label: 'SEO Traffic Growth',
      value: '180%',
      trend: 'Page #1 Ranked',
      icon: <TrendingUp className="w-5 h-5 text-teal-400" />,
      chart: (
        <svg className="w-full h-12 overflow-visible" viewBox="0 0 120 40">
          <defs>
            <linearGradient id="seoGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M 0 36 Q 30 35 60 22 T 120 4 L 120 40 L 0 40 Z" fill="url(#seoGradient)" />
          <path d="M 0 36 Q 30 35 60 22 T 120 4" fill="none" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="120" cy="4" r="3.5" fill="#2dd4bf" className="animate-ping" />
          <circle cx="120" cy="4" r="3" fill="#ffffff" />
        </svg>
      )
    },
    {
      label: 'Business Emails',
      value: '10,000+',
      trend: '100% Delivery',
      icon: <Mail className="w-5 h-5 text-sky-400" />,
      chart: (
        <svg className="w-full h-12 overflow-visible" viewBox="0 0 120 40">
          <defs>
            <linearGradient id="emailGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M 0 30 L 20 26 L 38 14 L 54 30 L 70 8 L 88 22 L 104 6 L 120 16 L 120 40 L 0 40 Z" fill="url(#emailGradient)" />
          <path d="M 0 30 L 20 26 L 38 14 L 54 30 L 70 8 L 88 22 L 104 6 L 120 16" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="104" cy="6" r="3.5" fill="#38bdf8" />
        </svg>
      )
    },
    {
      label: 'Cloud Uptime',
      value: '99.99%',
      trend: 'Zero Downtime',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      chart: (
        <svg className="w-full h-12 overflow-visible" viewBox="0 0 120 40">
          <defs>
            <linearGradient id="uptimeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M 0 20 L 40 20 L 46 6 L 54 34 L 60 20 L 120 20 L 120 40 L 0 40 Z" fill="url(#uptimeGradient)" />
          <path d="M 0 20 L 40 20 L 46 6 L 54 34 L 60 20 L 120 20" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="120" cy="20" r="3.5" fill="#10b981" className="animate-pulse" />
        </svg>
      )
    },
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.stat-item',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 border-y border-emerald-500/10 bg-[#030712] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="stat-item bg-[#070c14]/90 border border-emerald-500/20 hover:border-emerald-400/50 rounded-2xl p-5 backdrop-blur-md transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {stat.icon}
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  {stat.trend}
                </span>
              </div>

              <div className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 group-hover:text-emerald-300 transition-colors">
                {stat.value}
              </div>

              <div className="w-full pt-2 border-t border-emerald-950/60">
                {stat.chart}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};