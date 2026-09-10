import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Background Tech Grid Elements */}
      <div className="fixed inset-0 bg-grid-tech pointer-events-none -z-10" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[650px] tech-glow-mesh pointer-events-none -z-10 animate-tech-pulse" />
      <div className="fixed bottom-0 right-0 w-[550px] h-[550px] bg-indigo-600/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Features />
        <About />
        <Pricing />
        <Testimonials />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
