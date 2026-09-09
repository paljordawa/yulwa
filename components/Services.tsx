import React from 'react';
import { Layout, Mail, TrendingUp, Server, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Professional Website Development',
      category: 'Web Design & Engineering',
      description: 'Bespoke, high-converting websites and modern web applications engineered with React, Next.js, and WordPress. Responsive, lightning-fast, and custom-tailored to your brand.',
      icon: <Layout className="w-10 h-10 text-black" />,
      features: ['Custom UI/UX Design', 'Mobile & Desktop Responsive', 'Fast Loading & Mobile Optimized', 'E-Commerce & CMS Integration'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Business Email Solutions',
      category: 'Professional Branding',
      description: 'Build instant trust with custom @yourdomain.com professional email addresses. Complete with SPF/DKIM authentication, zero-spam filters, and 100% sync across all your devices.',
      icon: <Mail className="w-10 h-10 text-black" />,
      features: ['Custom Domain Mailboxes', 'Anti-Spam & Virus Defense', 'Mobile & Desktop Sync', 'Team & Shared Inboxes'],
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'SEO Optimization & Growth',
      category: 'Search Engine Marketing',
      description: 'Dominating search engine rankings to drive organic traffic and qualified business leads. Comprehensive technical SEO, keyword strategy, speed optimization, and local GMB rankings.',
      icon: <TrendingUp className="w-10 h-10 text-black" />,
      features: ['Keyword & Competitor Analysis', 'On-Page & Technical SEO Audits', 'Local SEO & Google Business', 'Monthly Traffic & Ranking Reports'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'High-Speed Web Hosting',
      category: 'Cloud Infrastructure',
      description: 'Enterprise-grade NVMe cloud web hosting built for 99.99% uptime. Managed cloud servers, free SSL certificates, automated daily backups, and 24/7 expert maintenance.',
      icon: <Server className="w-10 h-10 text-black" />,
      features: ['Ultra-Fast NVMe SSD Storage', 'Free SSL Certificates', 'Automated Daily Backups', '24/7 Managed Server Support'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-100/50 dark:bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-lime-600 dark:text-lime-400 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              All-in-one digital solutions to launch, scale & grow online.
            </h3>
          </div>
          <a href="#pricing" className="px-8 py-4 border border-slate-300 dark:border-white/10 rounded-2xl font-bold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/5 transition-all text-center">
            View Service Packages
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="group relative rounded-[40px] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex flex-col justify-between shadow-xl">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 w-16 h-16 sky-gradient rounded-2xl flex items-center justify-center shadow-xl shadow-lime-500/30">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-lime-600 dark:text-lime-400 font-bold uppercase tracking-[0.2em] text-xs mb-2 block">{service.category}</span>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-4">{service.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};