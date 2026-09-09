import React from 'react';
import { Layout, Mail, TrendingUp, Zap, ShieldCheck, Headphones } from 'lucide-react';
import { FeatureProps } from '../types';

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <div className="glass-card p-8 rounded-3xl hover:border-lime-500/50 transition-all group border border-slate-200 dark:border-white/10 shadow-lg">
    <div className="w-14 h-14 sky-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-lime-500/20">
      <div className="text-black">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      title: 'High-Converting Web Design',
      description: 'Stunning visual appeal tailored to convert visitors into loyal clients, built on cutting-edge Web technologies.',
      icon: <Layout className="w-7 h-7" />
    },
    {
      title: 'Branded Business Email',
      description: 'Custom domain emails (@yourcompany.com) with top-tier deliverability, SPF/DKIM encryption, and zero spam.',
      icon: <Mail className="w-7 h-7" />
    },
    {
      title: 'Search Engine Dominance',
      description: 'Strategic on-page, off-page, and technical SEO designed to push your business to Page #1 on Google.',
      icon: <TrendingUp className="w-7 h-7" />
    },
    {
      title: 'Lightning NVMe Hosting',
      description: 'High-speed cloud servers with global CDN integration ensuring sub-500ms load times worldwide.',
      icon: <Zap className="w-7 h-7" />
    },
    {
      title: 'Ironclad Security & SSL',
      description: 'Automated daily backups, free SSL certificates, DDoS mitigation, and enterprise firewall protections.',
      icon: <ShieldCheck className="w-7 h-7" />
    },
    {
      title: '24/7 Managed Maintenance',
      description: 'Continuous monitoring, routine updates, speed optimization, and direct developer support whenever you need it.',
      icon: <Headphones className="w-7 h-7" />
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-lime-600 dark:text-lime-400 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Yulwa</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Everything your brand needs <br className="hidden md:block" /> to thrive in the modern web.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};