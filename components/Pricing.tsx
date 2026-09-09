import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PricePlan } from '../types';

export const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly');

  const plans: PricePlan[] = [
    {
      name: 'Digital Starter',
      price: billing === 'yearly' ? '49' : '59',
      period: 'mo',
      description: 'Ideal for startups, landing pages, and small local businesses.',
      features: [
        'Professional 1-Page Website Design',
        '3 Custom Business Emails (@domain.com)',
        'Basic On-Page & Meta SEO Setup',
        '25GB NVMe Cloud Web Hosting',
        'Free SSL & Daily Backups',
        'Standard Email Support'
      ],
      isPopular: false
    },
    {
      name: 'Growth Business',
      price: billing === 'yearly' ? '149' : '179',
      period: 'mo',
      description: 'Complete digital suite for growing brands and service providers.',
      features: [
        'Custom 5-Page Responsive Website',
        '10 Business Email Mailboxes',
        'Comprehensive Technical & Local SEO',
        '100GB Ultra-Fast NVMe Hosting',
        'Google Business Profile Setup',
        'Monthly SEO Performance Reports',
        '24/7 Priority Developer Support'
      ],
      isPopular: true
    },
    {
      name: 'Enterprise Dominance',
      price: 'Custom',
      period: 'project',
      description: 'Tailored digital ecosystem for high-volume apps and brands.',
      features: [
        'Full Web Platform / E-Commerce Store',
        'Unlimited Business Email Accounts',
        'Full-Scale SEO Campaign & Content Strategy',
        'Dedicated Cloud VPS Server & CDN',
        'Rank #1 Search Dominance Tracking',
        'Dedicated Digital Architect & SLAs',
        '24/7 Managed Server & Web Maintenance'
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-lime-600 dark:text-lime-400 font-bold uppercase tracking-widest text-sm mb-4">Investment & Packages</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">All-In-One Digital Bundles</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base mb-8">
            Website development, professional email setup, SEO growth, and cloud hosting bundled into simple transparent plans.
          </p>
          
          <div className="inline-flex items-center p-1.5 bg-slate-200/60 dark:bg-slate-900 border border-slate-300 dark:border-white/10 rounded-2xl">
            <button 
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${billing === 'monthly' ? 'bg-emerald-600 dark:bg-lime-500 text-white dark:text-slate-950 shadow-md' : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Monthly Retainer
            </button>
            <button 
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${billing === 'yearly' ? 'bg-emerald-600 dark:bg-lime-500 text-white dark:text-slate-950 shadow-md' : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Annual Bundle <span className="text-[10px] text-emerald-100 dark:text-lime-950 ml-1 bg-emerald-700/40 dark:bg-lime-400/50 px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 md:p-12 rounded-[40px] border transition-all duration-500 flex flex-col justify-between ${
                plan.isPopular 
                  ? 'bg-white dark:bg-slate-900 border-2 border-emerald-500 dark:border-lime-500 scale-105 z-10 shadow-2xl shadow-emerald-500/15 dark:shadow-lime-500/10' 
                  : 'bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl dark:shadow-none hover:border-emerald-500/40'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 sky-gradient text-slate-950 text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-lg">
                  Most Popular Package
                </div>
              )}
              
              <div>
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{plan.name}</h4>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                      {plan.price !== 'Custom' && '$'}
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && <span className="text-slate-500 mb-1">/{plan.period}</span>}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                plan.isPopular 
                  ? 'sky-gradient text-slate-950 shadow-xl shadow-emerald-500/20 hover:scale-[1.02]' 
                  : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
              }`}>
                Get Started with {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};