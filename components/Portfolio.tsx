import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ExternalLink, Globe, X, Sun, Sunset, Moon, Lightbulb, Maximize2, Box } from 'lucide-react';
import { ProjectProps } from '../types';
import { TibetanCloud } from './TibetanCloud';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

export const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>('all');
  const [active3DModel, setActive3DModel] = useState<{ title: string; glbUrl: string } | null>(null);
  const [exposurePreset, setExposurePreset] = useState<string>('day');

  const isEmbeddable = (link: string) => {
    return link.startsWith('http') && !link.includes('github.com');
  };

  const openStandalone3DViewer = (title: string, glbUrl: string) => {
    const viewerHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Yulwa 3D Web Viewer</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
  <style>
    body { margin: 0; background-color: #030712; color: #f8fafc; font-family: system-ui, -apple-system, sans-serif; overflow: hidden; height: 100vh; }
    model-viewer { width: 100%; height: 100vh; }
  </style>
</head>
<body class="flex flex-col h-screen overflow-hidden bg-[#030712]">
  <div class="absolute top-0 left-0 right-0 z-50 p-4 flex items-center justify-between bg-[#030712]/90 backdrop-blur-md border-b border-emerald-500/20">
    <div class="flex items-center gap-3">
      <span class="font-mono text-xs font-bold text-emerald-400 tracking-wider">ACTIVE: ${title.toUpperCase()}</span>
    </div>
    <div class="flex items-center gap-2">
      <button onclick="window.close()" class="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-rose-600/90 hover:bg-rose-500 text-white flex items-center gap-1 shadow-lg">
        ✕ Close Tab
      </button>
    </div>
  </div>
  <div class="flex-grow w-full h-full relative">
    <model-viewer
      src="${glbUrl}"
      alt="${title}"
      auto-rotate
      camera-controls
      shadow-intensity="1.5"
      exposure="1.2"
      environment-image="neutral"
    ></model-viewer>
  </div>
  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300 pointer-events-none shadow-xl">
    Drag to rotate • Scroll to zoom • Right-click to pan
  </div>
</body>
</html>
    `;
    const blob = new Blob([viewerHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  const projects: ProjectProps[] = [
    {
      title: 'Rolyang Music Web App',
      category: 'Web Application',
      description: 'Modern music streaming platform & high-performance Web Audio player designed for seamless listening.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Framer Motion', 'Tailwind', 'Music Engine'],
      metrics: 'Live App | rolyang.app',
      link: 'https://rolyang.app',
      platformLogos: [
        { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Framer Motion', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
        { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
      ]
    },
    {
      title: 'Phayul News Portal',
      category: 'Web Development',
      description: 'Premier Tibetan news and media web portal delivering real-time news, editorial content, and digital publishing.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
      tags: ['News Portal', 'Media', 'Publishing', 'phayul.com'],
      metrics: 'Live Site | phayul.com',
      link: 'http://phayul.com/',
      platformLogos: [
        { name: 'WordPress', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' }
      ]
    },
    {
      title: 'TibCERT Cyber Security',
      category: 'Web Development',
      description: 'Official digital security platform for Tibetan Computer Emergency Readiness Team (TibCERT), building community digital defense.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      tags: ['Cyber Security', 'Astro', 'GSAP', 'tibcert.org'],
      metrics: 'Live Site | tibcert.org',
      link: 'https://www.tibcert.org/',
      platformLogos: [
        { name: 'Astro Framework', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg' },
        { name: 'GSAP', url: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg' },
        { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
      ]
    },
    {
      title: 'Tibetan Calendar App',
      category: 'Web Application',
      description: 'Interactive Tibetan lunar calendar web app featuring astrological dates, auspicious events, and traditional timing systems.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'GSAP', 'Tailwind', 'Vercel'],
      metrics: 'Live App | calendar-opal-five.vercel.app',
      link: 'https://calendar-opal-five.vercel.app/',
      platformLogos: [
        { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'GSAP', url: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg' },
        { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
      ]
    },
    {
      title: 'Yumbu Lhakhang 3D Model',
      category: 'Blender 3D & Graphics',
      description: 'Detailed 3D architectural render & model of Yumbu Lhakhang, ancient Tibetan fortress architecture created in Blender.',
      image: 'https://raw.githubusercontent.com/paljordawa/3dfolio/main/public/screenshot/yumbu%20lhakhang.png',
      tags: ['Blender 3D', '3D Architecture', 'GLTF/GLB'],
      metrics: '3D GLB Model | 3dfolio',
      link: 'https://github.com/paljordawa/3dfolio/blob/main/public/yumbu%20Lhakhang.glb',
      glbModel: 'https://raw.githubusercontent.com/paljordawa/3dfolio/main/public/yumbu%20Lhakhang.glb',
      platformLogos: [
        { name: 'Blender 3D', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' }
      ]
    },
    {
      title: 'Tibetan Stupa 3D Environment',
      category: 'Blender 3D & Graphics',
      description: 'Sacred 3D Stupa architectural concept model rendered with ornate traditional Tibetan motifs and environment lighting.',
      image: 'https://raw.githubusercontent.com/paljordawa/3dfolio/main/public/screenshot/patra.png',
      tags: ['Blender 3D', '3D Environment', 'GLTF/GLB'],
      metrics: '3D GLB Model | 3dfolio',
      link: 'https://github.com/paljordawa/3dfolio/blob/main/public/STUPA-scene1.glb',
      glbModel: 'https://raw.githubusercontent.com/paljordawa/3dfolio/main/public/STUPA-scene1.glb',
      platformLogos: [
        { name: 'Blender 3D', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' }
      ]
    },
    {
      title: 'Traditional Himalayan Village House',
      category: 'Blender 3D & Graphics',
      description: 'Photorealistic 3D render & environment model of traditional Himalayan timber & stone house architecture.',
      image: 'https://raw.githubusercontent.com/paljordawa/3dfolio/main/public/screenshot/village-house.jpg',
      tags: ['Blender 3D', '3D Modeling', 'GLTF/GLB'],
      metrics: '3D GLB Model | 3dfolio',
      link: 'https://github.com/paljordawa/3dfolio/blob/main/public/Village-house.glb',
      glbModel: 'https://raw.githubusercontent.com/paljordawa/3dfolio/main/public/Village-house.glb',
      platformLogos: [
        { name: 'Blender 3D', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' }
      ]
    },
    {
      title: 'Lego Character Group 3D Renders',
      category: 'Blender 3D & Graphics',
      description: 'Stylized 3D character group modeling, texturing, and studio lighting setup rendered in Blender Cycles.',
      image: 'https://raw.githubusercontent.com/paljordawa/3dfolio/main/public/screenshot/lego.jpg',
      tags: ['Blender 3D', 'Cycles Render', 'GLTF/GLB'],
      metrics: '3D GLB Model | 3dfolio',
      link: 'https://github.com/paljordawa/3dfolio/blob/main/public/group%20lego.glb',
      glbModel: 'https://raw.githubusercontent.com/paljordawa/3dfolio/main/public/group%20lego.glb',
      platformLogos: [
        { name: 'Blender 3D', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' }
      ]
    },
    {
      title: 'Traditional Tibetan Patra Ornaments',
      category: 'Blender 3D & Graphics',
      description: 'High-precision 3D digital sculpt of traditional Tibetan Patra decorative wood carvings and metal ornaments.',
      image: 'https://raw.githubusercontent.com/paljordawa/3dfolio/main/public/screenshot/patra.png',
      tags: ['Blender 3D', '3D Sculpting', 'GLTF/GLB'],
      metrics: '3D GLB Model | 3dfolio',
      link: 'https://github.com/paljordawa/3dfolio/blob/main/public/PATRA2-advanced-solidify.glb',
      glbModel: 'https://raw.githubusercontent.com/paljordawa/3dfolio/main/public/PATRA2-advanced-solidify.glb',
      platformLogos: [
        { name: 'Blender 3D', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' }
      ]
    },
    {
      title: 'Nomad Cuisine Platform',
      category: 'Web Development',
      description: 'Elegant Swiss culinary web platform featuring interactive digital menus, online reservations, and high-speed responsiveness.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      tags: ['Web Design', 'React', 'SEO', 'nomad-cuisine.ch'],
      metrics: 'Live Site | nomad-cuisine.ch',
      link: 'https://nomad-cuisine.ch/',
      platformLogos: [
        { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
      ]
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

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
          <div>
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${filter === cat.id
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
                {/* Visual Header - Embedded Live Webpage or High-Res Image / 3D Trigger */}
                {isEmbeddable(project.link) ? (
                  <div className="h-56 relative overflow-hidden border-b border-white/10 bg-[#0d111d] group/frame">
                    {/* Browser Control Bar */}
                    <div className="h-7 bg-[#161b2c] px-3 flex items-center justify-between border-b border-white/10 text-[10px] text-slate-400 font-mono z-20 relative">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="bg-[#0a0e1a] px-3 py-0.5 rounded-md border border-white/15 text-[10px] text-emerald-300 truncate max-w-[220px] flex items-center gap-1.5 font-mono shadow-inner">
                        <Globe className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">LIVE</span>
                      </div>
                    </div>

                    {/* Live Iframe Viewport Container */}
                    <div className="w-full h-[calc(100%-1.75rem)] relative overflow-hidden bg-[#0a0e1a]">
                      <iframe
                        src={project.link}
                        title={project.title}
                        className="w-[300%] h-[300%] border-0 origin-top-left transform scale-[0.333333] pointer-events-none transition-opacity duration-500 opacity-90 group-hover/frame:opacity-100"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
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
                  <div 
                    onClick={() => project.glbModel && setActive3DModel({ title: project.title, glbUrl: project.glbModel })}
                    className="h-52 relative overflow-hidden border-b border-white/10 bg-[#070b14] cursor-pointer group/img"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 group-hover/img:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/20 to-transparent opacity-80" />

                    {project.glbModel && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-all duration-300">
                        <span className="px-4 py-2 rounded-full bg-emerald-500 text-black text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
                          <Box className="w-4 h-4" /> INTERACTIVE 3D VIEW
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-normal mb-1">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-5 py-3.5 bg-[#060912] border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  {project.platformLogos?.map((logo, lIdx) => (
                    <img
                      key={lIdx}
                      src={logo.url}
                      alt={logo.name}
                      title={logo.name}
                      className="w-7 h-7 object-contain drop-shadow-md transition-transform hover:scale-110"
                    />
                  ))}
                </div>

                {project.glbModel ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActive3DModel({ title: project.title, glbUrl: project.glbModel! })}
                      className="font-mono text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                    >
                      <span>VIEW 3D MODEL</span>
                    </button>
                    <button
                      onClick={() => openStandalone3DViewer(project.title, project.glbModel!)}
                      className="text-slate-400 hover:text-emerald-400 transition-colors p-1"
                      title="Open 3D Model in New Tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>VISIT PROJECT</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive 3D WebGL Model Viewer Modal matching User Screenshot */}
      {active3DModel && (
        <div className="fixed inset-0 z-[200] bg-[#030712] flex flex-col justify-between overflow-hidden animate-in fade-in duration-300">
          
          {/* Top Control Bar */}
          <div className="p-4 bg-[#070c14]/90 border-b border-emerald-500/20 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4 z-50">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                ACTIVE: {active3DModel.title.toUpperCase()}
              </span>
            </div>

            {/* Lighting Preset Selector */}
            <div className="flex items-center gap-2 bg-[#0d1424] p-1 rounded-full border border-white/10">
              <span className="text-[10px] font-mono text-slate-400 pl-2">Lighting:</span>
              <button
                onClick={() => setExposurePreset('day')}
                className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 transition-all ${
                  exposurePreset === 'day' ? 'bg-emerald-500 text-black shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Sun className="w-3 h-3" /> Day
              </button>
              <button
                onClick={() => setExposurePreset('sunset')}
                className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 transition-all ${
                  exposurePreset === 'sunset' ? 'bg-amber-500 text-black shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Sunset className="w-3 h-3" /> Sunset
              </button>
              <button
                onClick={() => setExposurePreset('cyber')}
                className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 transition-all ${
                  exposurePreset === 'cyber' ? 'bg-cyan-500 text-black shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Moon className="w-3 h-3" /> Cyber
              </button>
              <button
                onClick={() => setExposurePreset('studio')}
                className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 transition-all ${
                  exposurePreset === 'studio' ? 'bg-purple-500 text-white shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Lightbulb className="w-3 h-3" /> Studio
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => openStandalone3DViewer(active3DModel.title, active3DModel.glbUrl)}
                className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 transition-all flex items-center gap-1.5"
                title="Open in new window / tab"
              >
                <Maximize2 className="w-3.5 h-3.5" /> Open in New Tab
              </button>

              <button
                onClick={() => setActive3DModel(null)}
                className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-lg flex items-center gap-1.5"
              >
                <X className="w-4 h-4" /> Exit Fullscreen
              </button>
            </div>
          </div>

          {/* 3D WebGL Viewport Canvas */}
          <div className="flex-grow w-full h-full relative bg-[#030712]">
            <model-viewer
              src={active3DModel.glbUrl}
              alt={active3DModel.title}
              auto-rotate
              camera-controls
              shadow-intensity="1.5"
              exposure={
                exposurePreset === 'day' ? '1.2' :
                exposurePreset === 'sunset' ? '0.8' :
                exposurePreset === 'cyber' ? '1.8' : '1.0'
              }
              environment-image="neutral"
              style={{ width: '100%', height: '100%', backgroundColor: '#030712' }}
            ></model-viewer>
          </div>

          {/* Bottom Interaction Guide */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono text-slate-300 pointer-events-none shadow-2xl">
            Drag to rotate • Scroll to zoom • Right-click to pan
          </div>
        </div>
      )}
    </section>
  );
};
