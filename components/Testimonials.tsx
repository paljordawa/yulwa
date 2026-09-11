import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Star, Terminal } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Tenzin Pema",
      role: "Founder, Peak Horizon Agency",
      avatar: "https://picsum.photos/id/64/100/100",
      content: "Yulwa built our React web application and established our corporate email routing seamlessly. Our organic inbound leads tripled within 3 months thanks to their technical SEO audit!"
    },
    {
      name: "Dickey Tsering",
      role: "E-Commerce Director",
      avatar: "https://picsum.photos/id/65/100/100",
      content: "Our platform page speeds dropped below 400ms on Yulwa's NVMe cloud server. Coupled with custom domain email authentication, our checkout conversion rates skyrocketed."
    },
    {
      name: "Tsering Dorjee",
      role: "Operations Director",
      avatar: "https://picsum.photos/id/66/100/100",
      content: "From domain email DNS configuration to engineering Page #1 search rankings for highly competitive keywords, Yulwa is the most capable technical partner we have hired."
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.testimonial-card',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-28 bg-[#030712] relative overflow-hidden border-b border-indigo-500/10">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto border-b border-indigo-500/20 pb-8">

          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Trusted by Industry Pioneers</h2>
          <p className="text-slate-300 font-mono text-xs uppercase tracking-wider text-indigo-400">
            "Yulwa (Sky) — Engineering robust technical foundations for modern digital ventures."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card tech-card p-8 rounded-3xl bg-[#0b0f19]/80 border border-indigo-500/20 relative hover:-translate-y-2 transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-8 font-medium">"{t.content}"</p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-indigo-500/20">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-xl border border-indigo-500/40 object-cover" />
                <div>
                  <h5 className="text-white font-bold text-sm">{t.name}</h5>
                  <p className="text-indigo-400 text-xs font-mono">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};