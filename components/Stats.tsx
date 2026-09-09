import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    { label: 'Websites Built', value: '500+' },
    { label: 'SEO Traffic Growth', value: '180%' },
    { label: 'Business Emails', value: '10,000+' },
    { label: 'Cloud Uptime', value: '99.99%' },
  ];

  return (
    <section className="py-12 border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-500 dark:text-slate-500 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};