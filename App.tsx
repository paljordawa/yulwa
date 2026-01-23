import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { AIArchitect } from './components/AIArchitect';

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
    <div className="relative min-h-screen selection:bg-lime-500 selection:text-black">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-grid-white -z-10" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-lime-500/10 blur-[120px] -z-10 rounded-full" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/10 blur-[100px] -z-10 rounded-full" />

      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <Services />
        <About />
        <Pricing />
        <Testimonials />
        <ContactCTA />
      </main>

      <Footer />
      
      {/* Interactive AI Widget */}
      <AIArchitect />
    </div>
  );
};

export default App;
