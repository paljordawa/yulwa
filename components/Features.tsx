import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Layout, Mail, TrendingUp, Zap, ShieldCheck, Headphones, ArrowUpRight, CheckCircle2, Server } from 'lucide-react';
import { TibetanCloud } from './TibetanCloud';

export const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.feature-header',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section id="features" ref={containerRef} className="py-28 relative overflow-hidden bg-[#030712] border-b border-emerald-500/10">
      {/* Background Glow & Tibetan Cloud Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-1/4 -left-20 opacity-15 pointer-events-none -z-0">
        <TibetanCloud variant="cluster" className="w-80 h-80 text-emerald-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="feature-header max-w-3xl mb-16 relative border-b border-emerald-500/20 pb-8">
          <div className="absolute -top-12 -left-10 w-full max-w-xl opacity-20 pointer-events-none -z-10">
            <TibetanCloud variant="banner" className="w-full h-auto text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Everything your brand needs <br className="hidden md:block" /> to <span className="tech-gradient-text">dominate online</span>.
          </h2>
        </div>

        {/* High-Tech Emerald Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Bento Card 1: Web Design (Wide Feature - 2 Cols) */}
          <div className="lg:col-span-2 rounded-3xl p-8 bg-gradient-to-br from-[#0c141d] via-[#080f17] to-[#040810] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl flex flex-col justify-between group relative overflow-hidden min-h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                  <Layout className="w-10 h-10" />
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                  REACT & NEXT.JS
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-200 transition-colors">
                High-Converting Web Design
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl font-normal">
                Stunning visual appeal tailored to convert visitors into loyal clients. Custom engineered with cutting-edge web technologies, ultra-responsive layouts, and lightning fast navigation.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 mt-6 border-t border-emerald-900/40 font-mono text-xs text-slate-400">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Custom Code • No Templates
              </span>
              <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Explore</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Bento Card 2: Branded Business Email (1 Col) */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0c141d] via-[#080f17] to-[#040810] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl flex flex-col justify-between group relative overflow-hidden min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-teal-400 group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-9 h-9" />
                </div>
                <span className="text-[10px] font-mono font-bold text-teal-300 bg-teal-950/80 border border-teal-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  SPF/DKIM SECURE
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-teal-200 transition-colors">
                Branded Business Email
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed font-normal">
                Custom domain emails (@yourcompany.com) with top-tier deliverability, SPF/DKIM encryption, and zero spam filtering.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-900/40 font-mono text-xs text-teal-400 flex items-center justify-between">
              <span>Inbox Delivery 100%</span>
              <a href="#contact" className="hover:text-white transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Card 3: Search Engine Dominance (1 Col) */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0c141d] via-[#080f17] to-[#040810] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl flex flex-col justify-between group relative overflow-hidden min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                  <TrendingUp className="w-9 h-9" />
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  PAGE #1 TARGET
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-200 transition-colors">
                Search Engine Dominance
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed font-normal">
                Strategic on-page, off-page, and technical SEO with 5-star JSON-LD schema structured data designed to push your business to Page #1 on Google.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-900/40 font-mono text-xs text-cyan-400 flex items-center justify-between">
              <span>Google Rank Strategy</span>
              <a href="#contact" className="hover:text-white transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Card 4: Lightning NVMe Cloud Hosting (Wide Feature - 2 Cols) */}
          <div className="lg:col-span-2 rounded-3xl p-8 bg-gradient-to-br from-[#0c141d] via-[#080f17] to-[#040810] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl flex flex-col justify-between group relative overflow-hidden min-h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                  <Zap className="w-10 h-10" />
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                  &lt;400MS LATENCY
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-200 transition-colors">
                Lightning NVMe Cloud Hosting
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl font-normal">
                High-speed NVMe cloud server hosting with global CDN integration, ensuring sub-500ms load times worldwide, 99.99% SLA uptime, and automated daily off-site backups.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 mt-6 border-t border-emerald-900/40 font-mono text-xs text-slate-400">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" /> NVMe SSD • Global Edge CDN • 99.99% Uptime
              </span>
              <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Explore</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Bento Card 5: Ironclad Security & SSL (1 Col) */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0c141d] via-[#080f17] to-[#040810] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl flex flex-col justify-between group relative overflow-hidden min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                  <ShieldCheck className="w-9 h-9" />
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  256-BIT SSL
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-200 transition-colors">
                Ironclad Security & SSL
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed font-normal">
                Automated daily backups, free SSL certificates, malware scanning, DDoS mitigation, and enterprise firewall protections.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-900/40 font-mono text-xs text-emerald-400 flex items-center justify-between">
              <span>Daily Auto Backups</span>
              <a href="#contact" className="hover:text-white transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Card 6: 24/7 Managed Maintenance (1 Col) */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0c141d] via-[#080f17] to-[#040810] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl flex flex-col justify-between group relative overflow-hidden min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-teal-400 group-hover:scale-105 transition-transform duration-300">
                  <Headphones className="w-9 h-9" />
                </div>
                <span className="text-[10px] font-mono font-bold text-teal-300 bg-teal-950/80 border border-teal-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  24/7 CARE
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-teal-200 transition-colors">
                24/7 Managed Maintenance
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed font-normal">
                Continuous monitoring, routine updates, speed optimization, and direct developer hotline support whenever you need site care.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-900/40 font-mono text-xs text-teal-400 flex items-center justify-between">
              <span>Dedicated Developer</span>
              <a href="#contact" className="hover:text-white transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
