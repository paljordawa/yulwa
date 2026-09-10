import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Layout, Mail, TrendingUp, Zap, ShieldCheck, Headphones, Layers } from 'lucide-react';
import { FeatureProps } from '../types';
import { TibetanCloud } from './TibetanCloud';

const FeatureCard: React.FC<FeatureProps & { index: number }> = ({ title, description, icon, index }) => (
  <div 
    className="feature-card tech-card p-8 rounded-3xl bg-[#090d16] border border-white/10 flex flex-col justify-between"
  >
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 tech-bg-gradient rounded-xl flex items-center justify-center shadow-lg">
          <div className="text-white">{icon}</div>
        </div>
        <span className="font-mono text-xs font-bold text-indigo-300 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
          [ 0{index + 1} ]
        </span>
      </div>
      <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-indigo-300 transition-colors">{title}</h3>
      <p className="text-slate-300 leading-relaxed text-sm font-medium">{description}</p>
    </div>
  </div>
);

export const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const features: FeatureProps[] = [
    {
      title: 'High-Converting Web Design',
      description: 'Stunning visual appeal tailored to convert visitors into loyal clients, built on cutting-edge Web technologies.',
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: 'Branded Business Email',
      description: 'Custom domain emails (@yourcompany.com) with top-tier deliverability, SPF/DKIM encryption, and zero spam.',
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: 'Search Engine Dominance',
      description: 'Strategic on-page, off-page, and technical SEO designed to push your business to Page #1 on Google.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Lightning NVMe Hosting',
      description: 'High-speed cloud servers with global CDN integration ensuring sub-500ms load times worldwide.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Ironclad Security & SSL',
      description: 'Automated daily backups, free SSL certificates, DDoS mitigation, and enterprise firewall protections.',
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: '24/7 Managed Maintenance',
      description: 'Continuous monitoring, routine updates, speed optimization, and direct developer support whenever you need it.',
      icon: <Headphones className="w-6 h-6" />
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(
      '.feature-header',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.feature-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out'
      }
    );
  }, { scope: containerRef });

  return (
    <section id="features" ref={containerRef} className="py-28 relative overflow-hidden bg-[#030712] border-b border-white/10">
      {/* Side background cloud cluster */}
      <div className="absolute top-1/3 -left-20 opacity-20 pointer-events-none">
        <TibetanCloud variant="cluster" className="w-80 h-80 text-indigo-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="feature-header max-w-3xl mb-20 relative border-b border-white/10 pb-8">
          <div className="absolute -top-12 -left-10 w-full max-w-xl opacity-30 pointer-events-none -z-10">
            <TibetanCloud variant="banner" className="w-full h-auto text-indigo-400" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>[ 03 // FULL SPECTRUM CAPABILITIES ]</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Everything your brand needs <br className="hidden md:block" /> to <span className="tech-gradient-text">dominate online</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} index={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};