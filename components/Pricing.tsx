import React, { useState } from 'react';
import { Check, XCircle } from 'lucide-react';
import { PricePlan } from '../types';

export const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly');

  const plans: PricePlan[] = [
    {
      name: 'Cloud Starter',
      price: billing === 'yearly' ? '29' : '39',
      period: 'mo',
      description: 'Perfect for landing pages and blogs.',
      features: ['10GB NVMe Storage', '1 Website', 'Free SSL', 'Global CDN', '10 Email Accounts'],
      isPopular: false
    },
    {
      name: 'Sky Pro',
      price: billing === 'yearly' ? '79' : '99',
      period: 'mo',
      description: 'The sweet spot for growing businesses.',
      features: ['100GB NVMe Storage', 'Unlimited Websites', 'Daily Backups', 'Advanced WAF', 'Priority Support', 'Development Staging'],
      isPopular: true
    },
    {
      name: 'Zenith Enterprise',
      price: 'Custom',
      period: 'yr',
      description: 'Dedicated resources for heavy-duty apps.',
      features: ['Infinite Storage', 'Dedicated IP', 'Custom SLAs', 'On-call Engineering', 'Private Cloud Access', 'White-labeling'],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-lime-600 dark:text-lime-400 font-bold uppercase tracking-widest text-sm mb-4">Investment</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">Transparent pricing for everyone.</h3>
          
          <div className="inline-flex items-center p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl">
            <button 
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${billing === 'monthly' ? 'bg-lime-500 text-black shadow-lg' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${billing === 'yearly' ? 'bg-lime-500 text-black shadow-lg' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Yearly <span className="text-[10px] text-lime-700 dark:text-lime-200 ml-1">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 md:p-12 rounded-[40px] border transition-all duration-500 flex flex-col ${
                plan.isPopular 
                  ? 'bg-slate-50 dark:bg-slate-900 border-lime-500/50 scale-105 z-10 shadow-2xl shadow-lime-500/10' 
                  : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-white/10 hover:border-lime-500/30 dark:hover:border-white/20'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 sky-gradient text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">{plan.name}</h4>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                    {plan.price !== 'Custom' && '$'}
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && <span className="text-slate-500 mb-1">/{plan.period}</span>}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                    <Check className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                plan.isPopular 
                  ? 'sky-gradient text-black shadow-xl shadow-lime-500/20 hover:scale-[1.02]' 
                  : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};