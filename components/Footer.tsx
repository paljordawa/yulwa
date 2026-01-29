import React from 'react';
import { Github, Linkedin, MessageCircle, Instagram, Facebook } from 'lucide-react';

const BrandLogo: React.FC<{ className?: string }> = ({ className }) => (
<img src="yulwa-logo.svg" alt="" className={className} />
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "https://instagram.com/paljordawa", label: "Instagram" },
    { icon: <Facebook size={20} />, href: "https://facebook.com/paljordawa", label: "Facebook" },
    { icon: <Github size={20} />, href: "https://github.com/paljordawa", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <MessageCircle size={20} />, href: "https://wa.me/919816541732", label: "WhatsApp" },
  ];

  return (
    <footer className="pt-24 pb-12 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <BrandLogo className="h-12 w-auto text-slate-900 dark:text-white mb-6" />
              <p className="text-slate-600 dark:text-slate-500 max-w-sm leading-relaxed">
                The high-performance hosting platform designed for the next generation of digital infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-black hover:sky-gradient transition-all"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-slate-900 dark:text-white font-bold mb-6">Platform</h5>
            <ul className="space-y-4 text-slate-600 dark:text-slate-500 text-sm">
              <li><a href="#" className="hover:text-lime-500">Cloud Hosting</a></li>
              <li><a href="#" className="hover:text-lime-500">Dedicated Servers</a></li>
              <li><a href="#" className="hover:text-lime-500">Managed DB</a></li>
              <li><a href="#" className="hover:text-lime-500">Security Suite</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 dark:text-white font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-slate-600 dark:text-slate-500 text-sm">
              <li><a href="#about" className="hover:text-lime-500">About Us</a></li>
              <li><a href="#" className="hover:text-lime-500">Our Story</a></li>
              <li><a href="#" className="hover:text-lime-500">Careers</a></li>
              <li><a href="#" className="hover:text-lime-500">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 dark:text-white font-bold mb-6">Resources</h5>
            <ul className="space-y-4 text-slate-600 dark:text-slate-500 text-sm">
              <li><a href="#" className="hover:text-lime-500">Documentation</a></li>
              <li><a href="#" className="hover:text-lime-500">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-lime-500">Support Center</a></li>
              <li><a href="#" className="hover:text-lime-500">System Status</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-xs">
            © {currentYear} Yulwa Digital Platforms Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-xs transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};