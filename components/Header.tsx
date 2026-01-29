import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
interface HeaderProps {
  isScrolled: boolean;
}

const BrandLogo: React.FC<{ className?: string }> = ({ className }) => (

<img src="yulwa-logo.svg" alt="" className={className} />
 
);

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/10 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center group">
          <BrandLogo className="h-8 md:h-10 w-auto text-slate-900 dark:text-white transition-transform group-hover:scale-105" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-lime-500 dark:hover:text-white hover:text-glow transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2">
            Log In
          </button>
          <button className="sky-gradient text-black px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2">
            Get Started <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="text-slate-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-lime-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full text-center py-3 font-semibold text-slate-600 dark:text-slate-300">Log In</button>
            <button className="w-full sky-gradient py-3 rounded-xl font-bold text-black shadow-lg">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
};