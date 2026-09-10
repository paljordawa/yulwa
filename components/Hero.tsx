import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Globe, Mail, TrendingUp, Server, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Terminal, Code2, Lock, ChevronRight, Play, TerminalSquare } from 'lucide-react';
import { TibetanCloud } from './TibetanCloud';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(terminalRef.current, { opacity: 0, y: 45, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 1.0 }, '-=0.5');

    // Continuous floating levitation on terminal
    if (terminalRef.current) {
      gsap.to(terminalRef.current, {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.2
      });
    }

    // Mouse Move Parallax Tilt Interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !terminalRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / (width / 2);
      const y = (e.clientY - top - height / 2) / (height / 2);

      gsap.to(terminalRef.current, {
        rotateY: x * 6,
        rotateX: -y * 6,
        duration: 0.8,
        ease: 'power2.out',
        transformPerspective: 1000
      });
    };

    const handleMouseLeave = () => {
      if (!terminalRef.current) return;
      gsap.to(terminalRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 1,
        ease: 'power2.out'
      });
    };

    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener('mousemove', handleMouseMove);
      containerEl.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (containerEl) {
        containerEl.removeEventListener('mousemove', handleMouseMove);
        containerEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#030712] text-white bg-grid-tech border-b border-white/10">
      {/* High-Tech Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-emerald-500/15 blur-[150px] rounded-full pointer-events-none -z-10 animate-tech-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Tibetan Cloud Artwork Framing */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-6xl h-auto opacity-15 pointer-events-none select-none -z-0">
        <TibetanCloud variant="hero" className="w-full h-auto text-emerald-400" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left (7 Cols) */}
          <div className="lg:col-span-7">
            
            {/* Main Headline */}
            <h1 
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6"
            >
              Full-Stack Web & <br />
              <span className="tech-gradient-text">Web Application</span> Specialist.
            </h1>

            {/* Sub-heading */}
            <p 
              ref={descRef}
              className="text-base md:text-lg text-slate-300 max-w-xl font-normal leading-relaxed mb-8 border-l-2 border-emerald-500/60 pl-4"
            >
              Building high-performing websites, modern React & Next.js web applications, Blender 3D artwork, and 24/7 web administration.
            </p>

            {/* CTA Buttons */}
            <div 
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <a 
                href="#contact" 
                className="tech-bg-gradient text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 border border-emerald-400/40"
              >
                <span>HIRE ME NOW</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#portfolio" 
                className="bg-[#0b0f19] text-slate-200 text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/15"
              >
                <span>EXPLORE WORK</span>
              </a>
            </div>

            {/* Live Stack Indicators */}
            <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-white/10 font-mono text-xs text-slate-400">
              <span className="text-slate-500 font-bold">SKILLS:</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-indigo-300">Web & React Apps</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-sky-300">Web Administration</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-violet-300">Blender 3D & Graphics</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-emerald-300">Cloud Hosting</span>
            </div>
          </div>

          {/* Hero Visual Right (5 Cols) - Interactive IDE Terminal Console */}
          <div ref={terminalRef} className="lg:col-span-5">
            <div className="tech-card rounded-2xl bg-[#090d16] border border-white/15 shadow-2xl p-5 font-mono text-xs">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-1.5 font-bold text-slate-300 text-[11px]">yulwa.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <Play className="w-2.5 h-2.5 fill-emerald-400" /> ACTIVE
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-1.5 text-slate-300 leading-relaxed text-[11px] overflow-x-auto select-none">
                <div><span className="text-purple-400">const</span> <span className="text-indigo-300">yulwa</span> = &#123;</div>
                <div className="pl-4"><span className="text-slate-400">architect:</span> <span className="text-emerald-300">'Paljor Dawa'</span>,</div>
                <div className="pl-4"><span className="text-slate-400">services:</span> [</div>
                <div className="pl-8 text-amber-300">'Custom Websites & Web Apps'</div>
                <div className="pl-8 text-amber-300">'NVMe Cloud Server Hosting'</div>
                <div className="pl-8 text-amber-300">'Business Email (@domain.com)'</div>
                <div className="pl-8 text-amber-300">'Rank #1 SEO Optimization'</div>
                <div className="pl-4">]</div>
                <div>&#125;;</div>
                <br />
                <div className="p-2.5 bg-black/60 rounded-lg border border-white/10 font-mono text-[11px]">
                  <div className="text-emerald-400 font-bold">✓ Web Application Compiled in 0.38s</div>
                  <div className="text-sky-400">✓ NVMe Cloud Server Active (99.99%)</div>
                  <div className="text-purple-400">✓ Business Email & SEO Verified</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


