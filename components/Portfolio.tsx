import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ExternalLink, Github, Code2, TrendingUp, ShieldCheck, Cpu, Terminal, Sparkles, Layers, Box, Palette, Globe } from 'lucide-react';
import { ProjectProps } from '../types';
import { TibetanCloud } from './TibetanCloud';

export const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>('all');

  const isEmbeddable = (link: string) => {
    return link.startsWith('http') && !link.includes('github.com');
  };

  const projects: ProjectProps[] = [
    {
      title: 'Rolyang Music Web App',
      category: 'Web Application',
      description: 'Modern music streaming platform & high-performance Web Audio player designed for seamless listening.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Web Audio API', 'TypeScript', 'Music Engine'],
      metrics: 'Live App | rolyang.app',
      link: 'https://rolyang.app'
    },
    {
      title: 'Phayul News Portal',
      category: 'Web Development',
      description: 'Premier Tibetan news and media web portal delivering real-time news, editorial content, and digital publishing.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
      tags: ['News Portal', 'Media', 'Publishing', 'phayul.com'],
      metrics: 'Live Site | phayul.com',
      link: 'http://phayul.com/'
    },
    {
      title: 'TibCERT Cyber Security',
      category: 'Web Development',
      description: 'Official digital security platform for Tibetan Computer Emergency Readiness Team (TibCERT), building community digital defense.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      tags: ['Cyber Security', 'Web Platform', 'CMS', 'tibcert.org'],
      metrics: 'Live Site | tibcert.org',
      link: 'https://www.tibcert.org/'
    },
    {
      title: 'Tibetan Calendar App',
      category: 'Web Application',
      description: 'Interactive Tibetan lunar calendar web app featuring astrological dates, auspicious events, and traditional timing systems.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tibetan Lunar', 'Astro Calculations', 'Vercel'],
      metrics: 'Live App | calendar-opal-five.vercel.app',
      link: 'https://calendar-opal-five.vercel.app/'
    },
    {
      title: 'Nomad Cuisine Platform',
      category: 'Web Development',
      description: 'Elegant Swiss culinary web platform featuring interactive digital menus, online reservations, and high-speed responsiveness.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      tags: ['Web Design', 'React', 'SEO', 'nomad-cuisine.ch'],
      metrics: 'Live Site | nomad-cuisine.ch',
      link: 'https://nomad-cuisine.ch/'
    },
    {
      title: 'Cyberpunk 3D Environment',
      category: 'Blender 3D & Graphics',
      description: 'Immersive 3D sci-fi concept art created in Blender with procedural shader nodes.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      tags: ['Blender 3D', 'Cycles Engine', 'Graphic Design'],
      metrics: '4K Render | Cycles',
      link: 'https://github.com/paljordawa'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  useGSAP(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
    );
  }, { scope: containerRef, dependencies: [filter] });

  return (
    <section id="portfolio" ref={containerRef} className="py-24 relative overflow-hidden bg-[#030712] text-white border-b border-white/10">
      {/* Background glowing ambient mesh */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Tibetan Cloud SVG Backdrop */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none -z-0">
        <TibetanCloud variant="hero" className="w-[800px] h-auto text-emerald-400" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium tracking-wide mb-3">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>PORTFOLIO</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Selected <span className="tech-gradient-text">Works & Projects</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#0b0f19] p-1.5 rounded-full border border-white/10">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'web', label: 'Web & Apps' },
              { id: '3d', label: '3D & Graphics' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filter === cat.id 
                    ? 'tech-bg-gradient text-white shadow-md shadow-emerald-500/25' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx}
              className="group tech-card rounded-2xl overflow-hidden bg-[#0a0e1a] border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header - Embedded Live Webpage or Image */}
                {isEmbeddable(project.link) ? (
                  <div className="h-56 relative overflow-hidden border-b border-white/10 bg-[#0d111d] group/frame">
                    {/* Browser Control Bar */}
                    <div className="h-7 bg-[#161b2c] px-3 flex items-center justify-between border-b border-white/10 text-[10px] text-slate-400 font-mono z-20 relative">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="bg-[#0a0e1a] px-3 py-0.5 rounded-md border border-white/10 text-[10px] text-emerald-300 truncate max-w-[220px] flex items-center gap-1">
                        <Globe className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">LIVE</span>
                      </div>
                    </div>

                    {/* Live Iframe Viewport Container - Edge to Edge 100% Width */}
                    <div className="w-full h-[calc(100%-1.75rem)] relative overflow-hidden bg-[#0a0e1a]">
                      <iframe
                        src={project.link}
                        title={project.title}
                        className="w-[300%] h-[300%] border-0 origin-top-left transform scale-[0.333333] pointer-events-none transition-opacity duration-500 opacity-90 group-hover/frame:opacity-100"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                      {/* Interactive Visit Overlay */}
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent opacity-30 hover:opacity-0 transition-opacity flex items-center justify-center"
                        title={`Open ${project.title} in new tab`}
                      >
                        <span className="sr-only">Visit {project.title}</span>
                      </a>
                    </div>

                    {/* Category Pill */}
                    <div className="absolute top-9 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 text-[11px] font-mono font-medium text-emerald-300 z-10">
                      {project.category}
                    </div>

                    {/* Open External Link Button */}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-9 right-3 w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md flex items-center justify-center text-white border border-white/15 opacity-80 hover:opacity-100 transition-all hover:bg-emerald-600 z-10"
                      title="Open website"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <div className="h-48 relative overflow-hidden border-b border-white/10">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />
                    
                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 text-[11px] font-mono font-medium text-indigo-300">
                      {project.category}
                    </div>

                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/70 backdrop-blur-md flex items-center justify-center text-white border border-white/15 opacity-0 group-hover:opacity-100 transition-all hover:bg-indigo-600"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-normal mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metric Footer */}
              <div className="p-4 bg-black/40 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{project.metrics}</span>
                </div>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
