import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Layout, Mail, TrendingUp, Server, CheckCircle2, ArrowUpRight, Cpu, Box, Palette, ShieldCheck, Terminal, Sparkles, Shield, Zap } from 'lucide-react';
import { TibetanCloud } from './TibetanCloud';

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out'
        }
      );
    }

    if (cloudRef.current) {
      gsap.to(cloudRef.current, {
        y: -15,
        rotate: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="services" className="py-28 relative overflow-hidden bg-[#030712] text-white border-b border-emerald-500/10">
      {/* Ambient Emerald & Teal Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none -z-0" />

      {/* Tibetan Cloud Accent Background */}
      <div ref={cloudRef} className="absolute top-12 right-6 opacity-15 pointer-events-none -z-0">
        <TibetanCloud variant="cluster" className="w-96 h-96 text-emerald-400" />
      </div>

      {/* Spacious Full Bento Container (max-w-7xl) */}
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 border-b border-emerald-500/20 pb-8">
          <div className="max-w-xl relative">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              High-Impact <span className="tech-gradient-text">Digital Services</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-xs font-mono font-bold text-slate-200 bg-[#0b0f19] hover:bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400/60 backdrop-blur-xl transition-all duration-300 uppercase tracking-wider shadow-lg flex items-center gap-2"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        {/* High-Tech Emerald Bento Grid Layout */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Website & Web App Development (Wide Top Left - 2 Cols) */}
          <div className="lg:col-span-2 rounded-3xl p-8 bg-gradient-to-br from-[#0c141d] via-[#080f17] to-[#040810] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl shadow-emerald-950/40 flex flex-col justify-between group relative overflow-hidden min-h-[320px]">
            {/* Top Right Ambient Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

            {/* Wireframe Browser Header Visual */}
            <div className="w-full bg-[#070c14]/90 border border-emerald-500/20 rounded-xl p-3.5 mb-6 backdrop-blur-md shadow-inner group-hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center justify-between mb-3 border-b border-emerald-900/40 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500/60 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/60 inline-block" />
                </div>
                <div className="text-[10px] font-mono text-emerald-300/80 bg-emerald-950/80 px-3 py-0.5 rounded-md border border-emerald-500/20">
                  yulwa.app // React & Next.js
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-3/4 bg-emerald-500/20 rounded-full" />
                <div className="h-2 w-1/2 bg-emerald-500/15 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                <Layout className="w-3.5 h-3.5" />
                <span>Web Engineering</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-200 transition-colors">
                Web Application Development
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl mb-6 font-normal">
                High-performance custom web applications built with React & Next.js. Engineered for speed, responsive UX, and 24/7 web administration without pre-made templates.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-emerald-900/40">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-300">React</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-300">Next.js</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-300">Web Care</span>
              </div>
              <a
                href="#contact"
                className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/5 hover:bg-emerald-600/30 border border-white/10 hover:border-emerald-400/40 backdrop-blur-md transition-all shadow-inner flex items-center gap-1.5"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
              </a>
            </div>
          </div>

          {/* Card 2: WordPress Site Recovery (Top Right - 1 Col) */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-[#140e1b] via-[#0d0914] to-[#07050d] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl shadow-emerald-950/40 flex flex-col justify-between group relative overflow-hidden min-h-[320px]">
            {/* Pulsing Security Status Visual */}
            <div className="w-full bg-[#070c14]/90 border border-rose-500/30 rounded-2xl p-4 mb-6 relative backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping" />
                  <span className="text-[11px] font-mono font-bold text-rose-300 uppercase">EMERGENCY RECOVERY</span>
                </div>
                <ShieldCheck className="w-5 h-5 text-rose-400" />
              </div>
              <div className="font-mono text-xs text-slate-300 space-y-1">
                <div className="text-emerald-400">✓ Malware Scan: Cleaned</div>
                <div className="text-teal-300">✓ Backdoor Removal: 100%</div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-rose-400 font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>WordPress Security</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-rose-200 transition-colors">
                WordPress Site Recovery
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6 font-normal">
                Specialized emergency recovery for hacked WordPress websites. Complete malware removal, backdoor purging, database restoration, and SSL security hardening.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-emerald-900/40">
              <span className="text-[11px] font-mono text-rose-300">24-Hour Emergency Response</span>
              <a
                href="#contact"
                className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/5 hover:bg-rose-600/30 border border-white/10 hover:border-rose-400/40 backdrop-blur-md transition-all shadow-inner flex items-center gap-1.5"
              >
                <span>Restore site</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-rose-300" />
              </a>
            </div>
          </div>

          {/* Card 3: Blender 3D & Brand Identity (Bottom Left - 1 Col) */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0c141d] via-[#080f17] to-[#040810] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl shadow-emerald-950/40 flex flex-col justify-between group relative overflow-hidden min-h-[320px]">
            {/* 3D Visual Mesh Mockup */}
            <div className="w-full h-28 rounded-2xl bg-gradient-to-tr from-emerald-900/40 to-teal-900/30 border border-emerald-500/20 mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-emerald-400/40 transition-colors">
              <Box className="w-12 h-12 text-emerald-300/80 group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                <Palette className="w-3.5 h-3.5" />
                <span>3D & Visual Design</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-200 transition-colors">
                Blender 3D & Brand Identity
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6 font-normal">
                Photorealistic 3D environment renders, Blender concept artwork, vector logo design, and unified brand identity systems that captivate audiences.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-emerald-900/40">
              <span className="text-[11px] font-mono text-emerald-300">Cycles Renders & Vector Art</span>
              <a
                href="#portfolio"
                className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/5 hover:bg-emerald-600/30 border border-white/10 hover:border-emerald-400/40 backdrop-blur-md transition-all shadow-inner flex items-center gap-1.5"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
              </a>
            </div>
          </div>

          {/* Card 4 & 5 Center Stack Column */}
          <div className="flex flex-col gap-6">

            {/* Card 4: Yulwa Brand Emblem Accent */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-[#0e1824] via-[#09111b] to-[#050a12] border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 shadow-2xl flex items-center justify-between group relative overflow-hidden">
              <div className="flex items-center gap-4">
                <div>
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">Yulwa Infrastructure</h4>
                  <p className="text-[11px] font-mono text-emerald-300">Bhutan • India • Global</p>
                </div>
              </div>
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            </div>

            {/* Card 5: SEO Strategy & Radar Scanner */}
            <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0c141d] via-[#080f17] to-[#040810] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl flex flex-col justify-between group relative overflow-hidden min-h-[240px] flex-grow">
              {/* Radar Graphic Mockup */}
              <div className="w-full h-24 rounded-2xl bg-[#060a12] border border-emerald-500/20 mb-4 relative overflow-hidden flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-emerald-500/30 flex items-center justify-center relative">
                  <div className="w-12 h-12 rounded-full border border-emerald-500/40 flex items-center justify-center">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                  <div className="absolute inset-0 border-t-2 border-emerald-400 rounded-full animate-spin" style={{ animationDuration: '4s' }} />
                </div>
                <span className="absolute bottom-2 right-3 font-mono text-[10px] text-emerald-300 font-bold">PAGE #1 TARGET</span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Search Strategy</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-200 transition-colors">
                  SEO & Search Ranking
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4 font-normal">
                  Technical on-page SEO, rich 5-star schema data, and local Google profile optimization to drive organic traffic.
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-emerald-900/40">
                <span className="text-[11px] font-mono text-emerald-300">Google Rich Snippets</span>
                <a
                  href="#contact"
                  className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/5 hover:bg-emerald-600/30 border border-white/10 hover:border-emerald-400/40 backdrop-blur-md transition-all flex items-center gap-1.5"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
                </a>
              </div>
            </div>

          </div>

          {/* Card 6: NVMe Cloud Hosting & Code (Bottom Right - 1 Col) */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0c141d] via-[#080f17] to-[#040810] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl shadow-emerald-950/40 flex flex-col justify-between group relative overflow-hidden min-h-[320px]">
            {/* Code Snippet Visual */}
            <div className="w-full bg-[#060a12]/90 border border-emerald-500/20 rounded-2xl p-4 mb-6 font-mono text-[11px] leading-relaxed select-none backdrop-blur-md group-hover:border-emerald-400/40 transition-colors">
              <div className="text-emerald-400">&lt;html lang="en"&gt;</div>
              <div className="pl-3 text-slate-300">&lt;meta geo.region="BT" /&gt;</div>
              <div className="pl-3 text-cyan-300">&lt;title&gt;Yulwa Cloud&lt;/title&gt;</div>
              <div className="text-emerald-400">&lt;/html&gt;</div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                <Server className="w-3.5 h-3.5" />
                <span>Cloud Infrastructure</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-200 transition-colors">
                NVMe Hosting & Web Admin
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6 font-normal">
                High-speed NVMe cloud server hosting with 99.99% uptime guarantees, 24/7 web administration, SSL, and automated backups.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-emerald-900/40">
              <span className="text-[11px] font-mono text-emerald-300">99.99% Guaranteed Uptime</span>
              <a
                href="#pricing"
                className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/5 hover:bg-emerald-600/30 border border-white/10 hover:border-emerald-400/40 backdrop-blur-md transition-all shadow-inner flex items-center gap-1.5"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};