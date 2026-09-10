import React from 'react';
import { Github, Linkedin, MessageCircle, Facebook } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://facebook.com/paljordawa", label: "Facebook" },
    { icon: <Github size={18} />, href: "https://github.com/paljordawa", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <MessageCircle size={18} />, href: "https://wa.me/919816541732", label: "WhatsApp" },
  ];

  return (
    <footer className="pt-24 pb-12 border-t border-indigo-500/10 bg-[#02040a] text-slate-400">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <Logo className="h-10 w-auto" />
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed text-sm font-medium">
                High-tech developer agency specializing in React/Next.js web applications, corporate business email setup, Page #1 SEO optimization, and NVMe cloud hosting for businesses in Bhutan, India, and worldwide.
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
                <span>🇧🇹 Bhutan • 🇮🇳 India • Global</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-600/20 transition-all border border-indigo-500/20"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-sm font-mono tracking-wider uppercase text-indigo-400">[ SERVICES ]</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Business Email Infrastructure</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">NVMe Cloud Hosting</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-sm font-mono tracking-wider uppercase text-indigo-400">[ PORTFOLIO ]</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Case Studies</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Live Demonstrations</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Paljor Dawa</a></li>
              <li><a href="https://github.com/paljordawa" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GitHub Repositories</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-sm font-mono tracking-wider uppercase text-indigo-400">[ SYSTEM ]</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#pricing" className="hover:text-indigo-400 transition-colors">Investment Plans</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Consultation Terminal</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Status (100% Uptime)</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-indigo-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-xs font-mono">
            © {currentYear} Yulwa Digital. Engineered with React, Next.js & TailwindCSS.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs font-mono transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs font-mono transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs font-mono transition-colors">Security Audit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};