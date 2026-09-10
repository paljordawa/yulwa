import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Check, Sparkles, Terminal, Server, ShieldCheck, Mail, Search, Palette, Box, ArrowUpRight } from 'lucide-react';
import { PricePlan } from '../types';
import { TibetanCloud } from './TibetanCloud';

export const Pricing: React.FC = () => {
  const [modelType, setModelType] = useState<'onetime' | 'annual'>('annual');
  const containerRef = useRef<HTMLDivElement>(null);

  const annualPlans: PricePlan[] = [
    {
      name: 'Cloud Hosting & Email',
      price: '180',
      period: 'yr',
      description: 'High-performance NVMe web hosting bundled with secure business email mailboxes.',
      features: [
        'High-Speed NVMe Cloud Web Hosting',
        'Free SSL Certificate & Daily Backups',
        '5 Custom Domain Emails (@yourdomain.com)',
        'SPF/DKIM/DMARC Security & Zero Spam',
        '99.99% Uptime SLA Guarantee',
        'Annual Server Health Checks'
      ],
      isPopular: false
    },
    {
      name: 'Web Administrator & Care',
      price: '480',
      period: 'yr',
      description: 'Complete web administration, cloud hosting, security, and ongoing site care.',
      features: [
        'NVMe Cloud Hosting Included',
        'Dedicated Web Administrator Care (24/7)',
        'Regular Content & Framework Updates',
        'Business Email & DNS Management',
        'Ongoing SEO & Performance Audits',
        'Automated Backups & Patch Security'
      ],
      isPopular: true
    },
    {
      name: 'Managed Enterprise Admin',
      price: '1,200',
      period: 'yr',
      description: 'Dedicated cloud server administration and priority developer support.',
      features: [
        'Dedicated Cloud VPS & CDN Infrastructure',
        'Priority Web Administrator Hotline (24/7)',
        'Unlimited Business Domain Mailboxes',
        'Monthly Graphic & Web Updates Included',
        'Continuous SEO & Security Management',
        'Instant Failover & Emergency Restores'
      ],
      isPopular: false
    }
  ];

  const onetimePlans: PricePlan[] = [
    {
      name: 'Essential Website Build',
      price: '499',
      period: 'one-time',
      description: 'Custom responsive website build complete with basic branding and email setup.',
      features: [
        'Custom Responsive Web Development',
        'Graphic Design & Vector Logo Assets',
        'Initial On-Page SEO Configuration',
        'Business Email Setup Included',
        'Mobile & Fast Loading Optimization',
        '30 Days Post-Launch Support'
      ],
      isPopular: false
    },
    {
      name: 'Pro Web Application',
      price: '1,299',
      period: 'one-time',
      description: 'High-performance React / Next.js web application engineered for speed & conversion.',
      features: [
        'Multi-Page Custom Web Application',
        'Advanced Dynamic UI & Animations',
        'Full Brand Visual Identity & Graphic Assets',
        'Technical SEO & Schema Structured Data',
        '5 Custom Domain Business Emails Setup',
        '60 Days Dedicated Development Support'
      ],
      isPopular: true
    },
    {
      name: 'Custom Enterprise Suite',
      price: 'Custom',
      period: 'project',
      description: 'Tailored full-stack web application, custom 3D visuals, and complete digital strategy.',
      features: [
        'Custom Web Application / E-Commerce Store',
        'Blender 3D Concept Renders & Visual Art',
        'Complete Brand Visual System',
        'Full-Scale SEO & Performance Audit',
        'Unlimited Domain Mailbox Setup',
        'Dedicated Developer & Designer Support'
      ],
      isPopular: false
    }
  ];

  const activePlans = modelType === 'annual' ? annualPlans : onetimePlans;

  const microServices = [
    {
      title: 'Business Domain Email Setup',
      price: '$99 one-time',
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      description: 'SPF, DKIM, DMARC DNS security configuration for 100% inbox delivery and zero spam.'
    },
    {
      title: 'Technical SEO Optimization',
      price: '$199 one-time',
      icon: <Search className="w-5 h-5 text-emerald-400" />,
      description: 'On-page SEO audit, Google Search Console indexing, meta tags, and structured JSON-LD schema.'
    },
    {
      title: 'Graphic Design & Brand Kit',
      price: '$249 one-time',
      icon: <Palette className="w-5 h-5 text-emerald-400" />,
      description: 'Custom vector logos, visual design system, social media kits, and brand typography.'
    },
    {
      title: 'Blender 3D Concept Renders',
      price: '$349 one-time',
      icon: <Box className="w-5 h-5 text-emerald-400" />,
      description: 'Photorealistic 3D product renders, environment scenes, and sci-fi concept artwork.'
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.pricing-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );
  }, { scope: containerRef, dependencies: [modelType] });

  return (
    <section id="pricing" ref={containerRef} className="py-24 relative overflow-hidden bg-[#030712] border-b border-emerald-500/10">
      {/* Background Tibetan Cloud Watermark */}
      <div className="absolute top-12 right-10 opacity-15 pointer-events-none">
        <TibetanCloud variant="cluster" className="w-80 h-80 text-emerald-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium tracking-wide mb-3">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>SERVICE PLANS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Service & <span className="tech-gradient-text">Care Packages</span>
          </h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed">
            Choose between one-time project builds or annual web administration & hosting services.
          </p>
          
          {/* Toggle Button */}
          <div className="inline-flex items-center p-1 bg-[#0b0f19] border border-emerald-500/30 rounded-full shadow-inner">
            <button 
              onClick={() => setModelType('annual')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                modelType === 'annual' 
                  ? 'tech-bg-gradient text-white shadow-md shadow-emerald-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ANNUAL SERVICES & CARE
            </button>
            <button 
              onClick={() => setModelType('onetime')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                modelType === 'onetime' 
                  ? 'tech-bg-gradient text-white shadow-md shadow-emerald-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ONE-TIME PROJECT BUILDS
            </button>
          </div>
        </div>

        {/* Main Service Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch mb-16">
          {activePlans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`pricing-card relative p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between backdrop-blur-xl hover:-translate-y-1 ${
                plan.isPopular 
                  ? 'bg-[#0b0f19] border-2 border-emerald-500 shadow-xl shadow-emerald-500/20' 
                  : 'bg-[#0b0f19]/80 border-emerald-500/20 shadow-md hover:border-emerald-500/40'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 tech-bg-gradient text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1 border border-emerald-300/40">
                  <Sparkles className="w-3 h-3" /> MOST POPULAR
                </div>
              )}
              
              <div>
                <div className="mb-6 border-b border-emerald-500/20 pb-5">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl md:text-4xl font-black text-white">
                      {plan.price !== 'Custom' && '$'}
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-emerald-300 mb-1 text-xs font-mono font-semibold">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-xs font-normal leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-2.5 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-slate-300 text-xs font-normal">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="#contact"
                className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all text-center block ${
                plan.isPopular 
                  ? 'tech-bg-gradient text-white shadow-lg shadow-emerald-500/30 hover:scale-[1.01] active:scale-95 border border-emerald-400/40' 
                  : 'bg-slate-900/80 text-white hover:bg-emerald-950/40 border border-emerald-500/30'
              }`}>
                CHOOSE {plan.name.toUpperCase()}
              </a>
            </div>
          ))}
        </div>

        {/* Standalone Add-On Services Header */}
        <div className="border-t border-white/10 pt-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Standalone Add-On Services</h3>
            <p className="text-xs text-slate-400">
              Need individual specialized services? We offer standalone setups for email, SEO, graphic design, and 3D modeling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {microServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-[#0a0e1a] border border-white/10 p-5 rounded-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30">
                      {service.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">{service.price}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{service.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-4">{service.description}</p>
                </div>
                
                <a 
                  href="#contact" 
                  className="text-[11px] font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group"
                >
                  <span>Request Service</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};