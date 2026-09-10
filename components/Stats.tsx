import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: 'Websites Built', value: '500+' },
    { label: 'SEO Traffic Growth', value: '180%' },
    { label: 'Business Emails', value: '10,000+' },
    { label: 'Cloud Uptime', value: '99.99%' },
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.stat-item',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 border-y border-white/10 bg-[#0a0c14] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item text-center md:text-left">
              <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text auton-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 font-bold tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};