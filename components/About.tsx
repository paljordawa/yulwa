import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Github, Code2, Globe, Cpu, Instagram, Facebook, MessageCircle, ExternalLink, Terminal, Box, Palette } from 'lucide-react';
import { TibetanCloud } from './TibetanCloud';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React / Next.js Web Dev', level: '98%' },
    { name: 'Blender 3D Concept Art', level: '95%' },
    { name: 'Graphic & Brand Design', level: '94%' },
    { name: 'Technical SEO', level: '95%' },
    { name: 'Business Email Auth', level: '96%' },
    { name: 'NVMe Cloud Infrastructure', level: '94%' }
  ];

  const socials = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/paljordawa", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/paljordawa", label: "Facebook" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/919816541732", label: "WhatsApp" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/paljordawa", label: "GitHub" }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.about-visual',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' }
    );

    gsap.fromTo(
      '.about-content',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.skill-bar-fill',
      { width: '0%' },
      {
        width: (i, target) => target.dataset.level,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power2.out'
      }
    );
    gsap.to('.badge-float-1', {
      y: -10,
      rotate: 18,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.badge-float-2', {
      y: 10,
      rotate: -18,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 relative overflow-hidden bg-[#030712] border-b border-indigo-500/10">
      {/* Background Code Watermark */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none font-mono text-xs overflow-hidden text-indigo-400 hidden lg:block">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap mb-1">
            {`const architect = { name: "Paljor Dawa", agency: "Yulwa Digital", stack: ["React", "Blender 3D", "Photoshop", "Next.js", "SEO"] }; architect.build(); `.repeat(4)}
          </div>
        ))}
      </div>

      {/* Tibetan Cloud Background Decorator */}
      <div className="absolute -bottom-10 right-0 opacity-15 pointer-events-none">
        <TibetanCloud variant="cluster" className="w-96 h-96 text-indigo-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Visual */}
          <div className="about-visual w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Outer Glowing Mesh */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 blur-3xl opacity-30 animate-pulse rounded-full" />
              
              <div className="relative p-2 rounded-3xl border border-indigo-500/30 bg-[#0b0f19] shadow-2xl shadow-indigo-950/50">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://github.com/paljordawa.png" 
                    alt="Paljor Dawa"
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 via-transparent to-transparent" />
                </div>
                
                {/* Status Badge */}
                <div className="absolute -bottom-3 -right-3 tech-card px-3.5 py-2 rounded-lg shadow-xl flex items-center gap-2 border border-indigo-500/30 bg-[#0b0f19]/90">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                  <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">AVAILABLE FOR HIRE</span>
                </div>
              </div>

              {/* Decorative Floating Badges */}
              <div className="badge-float-1 absolute -top-4 -left-4 w-10 h-10 tech-bg-gradient rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 rotate-12 border border-indigo-400/40">
                <Box className="w-5 h-5" />
              </div>
              <div className="badge-float-2 absolute bottom-10 -left-6 w-9 h-9 tech-card rounded-lg flex items-center justify-center text-indigo-400 -rotate-12 border border-indigo-500/30 bg-[#0b0f19]">
                <Palette className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Bio & Skills */}
          <div className="about-content w-full lg:w-1/2">
            <div className="mb-6 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium tracking-wide mb-3">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>ABOUT THE FOUNDER</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 tracking-tight">
                Meet <span className="tech-gradient-text">Paljor Dawa</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Developer, 3D Artist & Founder of Yulwa Digital. Specialized in building React web applications, Blender 3D concept art, brand visual design, business email setups, and technical SEO.
              </p>
              <div className="flex gap-3 mb-6">
                {socials.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-900/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-600/20 transition-all border border-indigo-500/20"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {skills.map((skill) => (
                <div key={skill.name} className="tech-card p-3 rounded-lg border-indigo-500/20 bg-[#0b0f19]/80">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-medium text-slate-200 tracking-wide">{skill.name}</span>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">{skill.level}</span>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="skill-bar-fill h-full tech-bg-gradient" 
                      data-level={skill.level}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a 
                href="https://github.com/paljordawa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="tech-bg-gradient text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all shadow-md shadow-indigo-500/25 border border-indigo-400/40"
              >
                <Github className="w-4 h-4" /> GITHUB PROFILE
              </a>
              <a 
                href="#portfolio"
                className="tech-card px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 hover:bg-indigo-950/40 transition-all border border-indigo-500/30 bg-[#0b0f19]"
              >
                <Globe className="w-4 h-4 text-cyan-400" /> PORTFOLIO <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};