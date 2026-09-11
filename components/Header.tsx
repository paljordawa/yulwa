import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 90;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300">
      <div className={`max-w-6xl mx-auto rounded-full px-6 py-3 transition-all duration-300 flex items-center justify-between backdrop-blur-xl border border-white/10 ${
        isScrolled 
          ? 'bg-[#030712]/85 shadow-2xl shadow-black/80 border-emerald-500/25' 
          : 'bg-[#090d16]/75 shadow-xl border-white/10'
      }`}>
        
        {/* Simple Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group"
        >
          <Logo className="h-7 w-auto transition-transform group-hover:scale-105" />
        </a>

        {/* Simple Centered Floating Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Compact CTA */}
        <div className="hidden md:flex items-center">
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="tech-bg-gradient text-white px-5 py-2 rounded-full text-xs font-bold tracking-wide flex items-center gap-1.5 hover:opacity-90 transition-all shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 border border-emerald-400/30 whitespace-nowrap"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden">
          <button 
            className="text-white p-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-[#030712]/95 backdrop-blur-2xl rounded-2xl border border-indigo-500/20 p-5 flex flex-col gap-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white py-1"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="tech-bg-gradient text-white py-2.5 rounded-full text-xs font-bold text-center mt-2 shadow-lg shadow-indigo-500/25 border border-indigo-400/40"
          >
            Get Quote
          </a>
        </div>
      )}
    </header>
  );
};