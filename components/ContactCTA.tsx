import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="sky-gradient rounded-[60px] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-lime-500/20">
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full -ml-32 -mb-32" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-black leading-tight mb-6">
                Ready to take your project to the Sky?
              </h2>
              <p className="text-emerald-950 text-lg opacity-80 max-w-xl font-medium">
                Join over 10,000+ businesses running on Yulwa. From simple sites to global empires, we're your partner in digital growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="bg-black text-lime-400 px-10 py-5 rounded-2xl text-lg font-black hover:bg-slate-900 transition-all flex items-center justify-center gap-2">
                Launch Project <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-emerald-700/30 text-black border border-black/20 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-emerald-700/50 transition-all flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" /> Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};