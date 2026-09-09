import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Sparkles, Send, Lock } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [service, setService] = useState('Website Development');
  const [submitted, setSubmitted] = useState(false);
  const [showFullModal, setShowFullModal] = useState(false);

  // Mailchimp Action URL from user's account
  const MAILCHIMP_ACTION_URL = "https://gmail.us7.list-manage.com/subscribe/post?u=ecd71cbd55d70be99d09a10e4&id=12113453f0&f_id=00369ae0f0";

  const handleSubmit = (e: React.FormEvent) => {
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="sky-gradient rounded-[50px] p-8 sm:p-14 md:p-20 relative overflow-hidden shadow-2xl shadow-emerald-500/20">
          {/* Abstract background blur shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/15 blur-[90px] rounded-full -mr-48 -mt-48 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-950/15 blur-[80px] rounded-full -ml-32 -mb-32 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/10 border border-slate-950/20 text-slate-950 text-xs font-black uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Free Digital Consultation
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 leading-[1.1] mb-6 tracking-tight">
                Ready to elevate your online presence?
              </h2>
              <p className="text-slate-900 text-base sm:text-lg opacity-90 max-w-lg font-medium leading-relaxed">
                Get a custom website, professional business email setup, and rank-boosting SEO tailored to your business goals.
              </p>
            </div>
            
            <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[420px]">
              {!submitted ? (
                <form 
                  action={MAILCHIMP_ACTION_URL || undefined}
                  method="POST"
                  target={MAILCHIMP_ACTION_URL ? "_blank" : undefined}
                  onSubmit={handleSubmit}
                  className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/40 dark:border-white/10 shadow-2xl flex flex-col gap-4"
                >
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">Get a Free Quote & Strategy</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    Submit your email and we'll reach out within 2 hours with a proposal.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Your Email</label>
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
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Service Needed</label>
                      <select 
                        name="SERVICE"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 font-medium transition-all"
                      >
                        <option value="Website Development">Website Development & Design</option>
                        <option value="Business Email">Business Email Hosting (@domain)</option>
                        <option value="SEO Optimization">SEO Optimization & Ranking</option>
                        <option value="Cloud Web Hosting">Cloud NVMe Web Hosting</option>
                        <option value="All-in-One Digital Bundle">All-in-One Digital Package</option>
                      </select>
                    </div>

                    {/* Anti-Spam Honeypot Field for Mailchimp */}
                    <div className="hidden" aria-hidden="true">
                      <input type="text" name="b_ecd71cbd55d70be99d09a10e4_12113453f0" tabIndex={-1} defaultValue="" />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-slate-950 hover:bg-slate-900 dark:bg-lime-500 dark:hover:bg-lime-400 text-lime-400 dark:text-slate-950 py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all shadow-xl flex items-center justify-center gap-2 group mt-2"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                    <Lock className="w-3 h-3 text-emerald-600 dark:text-lime-400" />
                    <span>No spam. 100% Privacy protected.</span>
                  </div>
                </form>
              ) : (
                <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/40 dark:border-white/10 shadow-2xl text-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-500/10 dark:bg-lime-500/10 text-emerald-600 dark:text-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Request Submitted!</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    Thank you! We've received your request for <strong>{service}</strong>. Our digital strategy team will contact you at <strong>{email}</strong> shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-all"
                  >
                    Submit Another Inquiry
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