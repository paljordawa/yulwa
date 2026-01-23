import React from 'react';
import { Zap, ShieldCheck, Globe, Infinity, Layout, Code } from 'lucide-react';
import { FeatureProps } from '../types';

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <div className="glass-card p-8 rounded-3xl hover:border-lime-500/50 transition-all group">
    <div className="w-14 h-14 sky-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-lime-500/20">
      <div className="text-black">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      title: 'Lightning Performance',
      description: 'Optimized NVMe infrastructure that loads your websites in less than 500ms globally.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Ironclad Security',
      description: 'Automated daily backups, DDoS protection, and SSL certificates included by default.',
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: 'Global Edge Network',
      description: 'Your content is cached at over 250 locations worldwide for minimal latency.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Infinite Scalability',
      description: 'Start small and scale to millions of users with our automated vertical and horizontal scaling.',
      icon: <Infinity className="w-8 h-8" />
    },
    {
      title: 'No-Code Page Builder',
      description: 'Design stunning landing pages with our drag-and-drop editor. No technical skills required.',
      icon: <Layout className="w-8 h-8" />
    },
    {
      title: 'Full Developer API',
      description: 'Robust REST and GraphQL APIs to automate your deployment pipelines and infrastructure.',
      icon: <Code className="w-8 h-8" />
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-lime-600 dark:text-lime-400 font-bold uppercase tracking-widest text-sm mb-4">Core Infrastructure</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Built for those who demand <br className="hidden md:block" /> peak digital performance.
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