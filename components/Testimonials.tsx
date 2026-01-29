import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Tenzin Pema",
      role: "CTO, Velocity Gaming",
      avatar: "https://picsum.photos/id/64/100/100",
      content: "Yulwa transformed our infrastructure. We were struggling with latency in Asia, but their edge network cut our ping by 40% overnight. Truly the 'Sky' of digital platforms."
    },
    {
      name: "Dickey Tsering",
      role: "E-com Founder",
      avatar: "https://picsum.photos/id/65/100/100",
      content: "The support team is phenomenal. I'm not a tech person, but their dashboard made deploying my shop effortless. Best hosting investment I've made in years."
    },
    {
      name: "Tsering Dorjee",
      role: "Lead Developer",
      avatar: "https://picsum.photos/id/66/100/100",
      content: "The API documentation is first-class. Integrating Yulwa into our CI/CD pipelines was a breeze. We've had 100% uptime for over 14 months now."
    }
  ];

  return (
    <section className="py-24 bg-slate-100/30 dark:bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Loved by Pioneers.</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto italic">"Yulwa (Sky) - providing the overhead for your digital dreams to soar."</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[40px] border-slate-200 dark:border-white/5 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-lime-500 dark:fill-lime-400 text-lime-500 dark:text-lime-400" />)}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-lime-500/30" />
                <div>
                  <h5 className="text-slate-900 dark:text-white font-bold">{t.name}</h5>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};