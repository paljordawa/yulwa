import React from 'react';
import { Server, Monitor, ShoppingBag, Terminal } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      category: 'Hosting',
      description: 'Managed Kubernetes, Dedicated Servers, and Cloud VPS tailored for your workloads.',
      icon: <Server className="w-10 h-10" />,
      image: 'https://picsum.photos/id/1/800/600'
    },
    {
      title: 'Web Engineering',
      category: 'Development',
      description: 'Expert-led development of modern web applications using React, Next.js, and Node.js.',
      icon: <Monitor className="w-10 h-10" />,
      image: 'https://picsum.photos/id/2/800/600'
    },
    {
      title: 'E-commerce Solutions',
      category: 'Growth',
      description: 'High-conversion stores built on Shopify, WooCommerce, or custom headless architectures.',
      icon: <ShoppingBag className="w-10 h-10" />,
      image: 'https://picsum.photos/id/3/800/600'
    },
    {
      title: 'DevOps Consulting',
      category: 'Ops',
      description: 'Streamline your release cycles with CI/CD automation and infrastructure as code.',
      icon: <Terminal className="w-10 h-10" />,
      image: 'https://picsum.photos/id/4/800/600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-100/50 dark:bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sky-500 dark:text-sky-400 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Comprehensive solutions from concept to deployment.
            </h3>
          </div>
          <button className="px-8 py-4 border border-slate-200 dark:border-white/10 rounded-2xl font-bold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/5 transition-all">
            View All Services
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="group relative rounded-[40px] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-60 dark:opacity-50 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100 dark:from-slate-950 via-slate-100/60 dark:via-slate-950/60 to-transparent p-10 flex flex-col justify-end">
                <div className="mb-6 w-16 h-16 sky-gradient rounded-2xl flex items-center justify-center text-white shadow-xl shadow-sky-500/20 group-hover:-translate-y-4 transition-transform duration-500">
                  {service.icon}
                </div>
                <span className="text-sky-600 dark:text-sky-400 font-bold uppercase tracking-[0.2em] text-xs mb-2">{service.category}</span>
                <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-4">{service.title}</h4>
                <p className="text-slate-700 dark:text-slate-400 max-w-sm group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};