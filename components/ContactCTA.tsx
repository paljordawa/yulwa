import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mail, ArrowRight, CheckCircle2, Sparkles, Lock, Terminal } from 'lucide-react';
import { TibetanCloud } from './TibetanCloud';

export const ContactCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Website Development');
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mailchimp Action URL from user's account
  const MAILCHIMP_ACTION_URL = "https://gmail.us7.list-manage.com/subscribe/post?u=ecd71cbd55d70be99d09a10e4&id=12113453f0&f_id=00369ae0f0";

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.cta-container',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    );
  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    if (!email) return;

    try {
      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('SERVICE', service);
      formData.append('b_ecd71cbd55d70be99d09a10e4_12113453f0', '');

      fetch(MAILCHIMP_ACTION_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      }).catch(() => { });
    } catch (err) { }

    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" ref={containerRef} className="py-28 relative overflow-hidden bg-[#030712]">
      {/* Hidden iframe for target submission */}
      <iframe name="mailchimp-hidden-iframe" id="mailchimp-hidden-iframe" style={{ display: 'none' }} />

      <div className="container mx-auto px-6 max-w-6xl">
        <div
          className="cta-container tech-bg-gradient rounded-3xl p-8 sm:p-14 md:p-16 relative overflow-hidden shadow-2xl shadow-indigo-950/80 border border-indigo-500/30"
        >
          {/* Tibetan Cloud SVG Banner Backdrop Watermark */}
          <div className="absolute -top-12 -left-12 opacity-15 pointer-events-none -z-0">
            <TibetanCloud variant="hero" className="w-[600px] h-auto text-white" />
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-15 pointer-events-none -z-0">
            <TibetanCloud variant="cluster" className="w-[500px] h-auto text-white" />
          </div>

          {/* Background glowing shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/30 blur-[100px] rounded-full -mr-48 -mt-48 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 blur-[90px] rounded-full -ml-32 -mb-32 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left relative">

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] mb-6 tracking-tight">
                Ready to engineer your digital dominance?
              </h2>
              <p className="text-white/90 text-base sm:text-lg max-w-lg font-medium leading-relaxed">
                Connect with our tech architect for custom web apps, corporate email setup, search engine optimization, and dedicated cloud hosting.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[420px]">
              {!submitted ? (
                <form
                  action={MAILCHIMP_ACTION_URL}
                  method="POST"
                  target="mailchimp-hidden-iframe"
                  onSubmit={handleSubmit}
                  className="bg-[#0b0f19]/95 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl border border-indigo-500/30 shadow-2xl flex flex-col gap-4"
                >
                  <div className="border-b border-indigo-500/20 pb-3">

                    <h3 className="text-xl font-black text-white tracking-tight">Request Architectural Audit & Proposal</h3>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 mb-1.5 block">YOUR EMAIL ADDRESS</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          name="EMAIL"
                          id="mce-EMAIL"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full bg-[#111625] border border-indigo-500/30 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-400 font-mono transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 mb-1.5 block">SERVICE MODULE</label>
                      <select
                        name="SERVICE"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-[#111625] border border-indigo-500/30 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-indigo-400 font-mono transition-all"
                      >
                        <option value="Website Development">Web Application & React/Next.js Design</option>
                        <option value="Business Email">Business Email Infrastructure (@domain.com)</option>
                        <option value="SEO Optimization">Technical & Local SEO Optimization</option>
                        <option value="Cloud Web Hosting">NVMe Enterprise Cloud Web Hosting</option>
                        <option value="All-in-One Digital Bundle">All-in-One Developer Package</option>
                      </select>
                    </div>

                    {/* Anti-Spam Honeypot Field for Mailchimp */}
                    <div className="hidden" aria-hidden="true">
                      <input type="text" name="b_ecd71cbd55d70be99d09a10e4_12113453f0" tabIndex={-1} defaultValue="" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full tech-bg-gradient text-white py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 group mt-2 active:scale-95 border border-indigo-400/40"
                  >
                    <span>SUBMIT</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <div className="bg-[#0b0f19]/95 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-indigo-500/30 shadow-2xl text-center">
                  <div className="text-emerald-400 mb-4 flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">Request Transmitted!</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Thank you! We've registered your consultation request for <strong>{service}</strong>. Paljor Dawa will review your inquiry and email <strong>{email}</strong> promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 text-xs font-mono font-bold text-white hover:bg-white/20 transition-all border border-white/15"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
