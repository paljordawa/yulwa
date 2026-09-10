import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Layout, Mail, TrendingUp, Server, CheckCircle2, ArrowUpRight, Cpu, Box, Palette } from 'lucide-react';
import { TibetanCloud } from './TibetanCloud';

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      index: '01',
      title: 'Website & Web Development',
      category: 'Web Dev & Admin',
      description: 'High-performing custom websites, React & Next.js web applications, and complete web administration & maintenance.',
      icon: <Layout className="w-6 h-6 text-white" />,
      features: ['Custom Website Design', 'React Web Applications', 'Web Administration & Care', 'CMS & Server Maintenance'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
      bentoCol: 'col-span-1 lg:col-span-2'
    },
    {
      index: '02',
      title: 'Blender 3D & Graphic Design',
      category: '3D & Graphics',
      description: 'Photorealistic 3D environment renders, Blender concept modeling, vector logos, and brand identity systems.',
      icon: <Box className="w-6 h-6 text-white" />,
      features: ['3D Environment Concepts', 'Cycles Renders', 'Vector Graphics & Logos', 'Brand Visual Systems'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      bentoCol: 'col-span-1'
    },
    {
      index: '03',
      title: 'Business Email Solutions',
      category: 'Email',
      description: 'Custom @yourdomain.com mailboxes configured with SPF/DKIM authentication and zero spam.',
      icon: <Mail className="w-6 h-6 text-white" />,
      features: ['Custom Domain Mail', 'SPF/DKIM/DMARC Security', 'Device Syncing', 'Team Mailboxes'],
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80',
      bentoCol: 'col-span-1'
    },
    {
      index: '04',
      title: 'SEO Optimization & Ranking',
      category: 'SEO',
      description: 'Technical on-page SEO and local Google profile optimization to rank higher on search engines.',
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      features: ['Technical SEO Audits', 'Keyword Strategy', 'Google Business Setup', 'Ranking Tracking'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      bentoCol: 'col-span-1'
    },
    {
      index: '05',
      title: 'High-Speed Cloud Hosting',
      category: 'Hosting & Admin',
      description: 'NVMe cloud hosting with 99.99% uptime guarantees, web administration, SSL, and automated backups.',
      icon: <Server className="w-6 h-6 text-white" />,
      features: ['NVMe Storage', 'Free SSL Security', 'Web & Server Administration', '24/7 Managed Server Care'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      bentoCol: 'col-span-1 lg:col-span-1'
    }
  ];

  const cloudRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
    <section ref={containerRef} id="services" className="py-24 relative overflow-hidden bg-[#030712] text-white border-b border-white/10">
      {/* Ambient green background glow */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-0" />

      {/* Tibetan Cloud Accent */}
      <div ref={cloudRef} className="absolute top-10 right-0 opacity-15 pointer-events-none -z-0">
        <TibetanCloud variant="cluster" className="w-96 h-96 text-emerald-400" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
          <div className="max-w-xl relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium tracking-wide mb-3">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Services & <span className="tech-gradient-text">Capabilities</span>
            </h2>
          </div>
          <a 
            href="#pricing" 
            className="px-5 py-2.5 bg-[#0b0f19] border border-white/15 rounded-full text-xs font-bold text-slate-200 hover:border-emerald-500/50 transition-all backdrop-blur-xl shrink-0 uppercase tracking-wider"
          >
            PRICING & PACKAGES
          </a>
        </div>

        {/* Bento Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`group tech-card rounded-2xl overflow-hidden bg-[#090d16] border border-white/10 flex flex-col justify-between shadow-xl hover:border-indigo-500/50 transition-all duration-300 ${service.bentoCol}`}
            >
              <div className="h-48 overflow-hidden relative border-b border-white/10">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-45 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/60 to-transparent" />
                
                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 font-mono text-[11px] font-bold text-indigo-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/15">
                  {service.category}
                </div>

                <div className="absolute bottom-3 left-5 w-10 h-10 tech-bg-gradient rounded-lg flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-300 transition-colors">{service.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
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
