import React from 'react';
import { Github, Code2, Globe, Cpu, Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    { name: 'TypeScript', level: '95%' },
    { name: 'React / Next.js', level: '90%' },
    { name: 'Node.js', level: '85%' },
    { name: 'Cloud Infra', level: '80%' }
  ];

  const socials = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/paljordawa", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/paljordawa", label: "Facebook" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/919816541732", label: "WhatsApp" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/paljordawa", label: "GitHub" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/10">
      {/* Background Code Pattern Decorator */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none font-mono text-xs overflow-hidden dark:text-lime-500 hidden lg:block">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap mb-1">
            {`const architect = { name: "Paljor Dawa", role: "Fullstack Engineer", location: "Global", vision: "Yulwa (Sky)" }; architect.deploy(); `.repeat(5)}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Visual */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 sky-gradient blur-3xl opacity-20 animate-pulse rounded-full" />
              
              <div className="relative p-2 rounded-[40px] border-2 border-lime-500/30 bg-white dark:bg-slate-950 shadow-2xl">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-[32px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="https://github.com/paljordawa.png" 
                    alt="Paljor Dawa"
                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                  />
                </div>
                
                {/* Status Badge */}
                <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-lime-500/50">
                  <div className="w-3 h-3 bg-lime-500 rounded-full animate-ping" />
                  <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">Available for Scale</span>
                </div>
              </div>

              {/* Decorative Icons */}
              <div className="absolute -top-6 -left-6 w-12 h-12 sky-gradient rounded-xl flex items-center justify-center text-black shadow-lg shadow-lime-500/20 rotate-12">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="absolute bottom-12 -left-10 w-10 h-10 glass-card rounded-lg flex items-center justify-center text-lime-600 dark:text-lime-400 -rotate-12 border border-lime-500/20">
                <Cpu className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Bio & Skills */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-lime-600 dark:text-lime-400 font-bold uppercase tracking-widest text-sm mb-4">The Architect</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-lime-500">Paljor Dawa</span>
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                Passionate Full-stack Developer and founder of Yulwa. With a deep focus on crafting high-performance digital ecosystems, I bridge the gap between complex cloud infrastructure and intuitive user experiences.
              </p>
              <div className="flex gap-4 mb-8">
                {socials.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-black hover:sky-gradient transition-all shadow-sm"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {skills.map((skill) => (
                <div key={skill.name} className="glass-card p-4 rounded-2xl border-slate-200 dark:border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">{skill.name}</span>
                    <span className="text-[10px] text-lime-600 dark:text-lime-400 font-black">{skill.level}</span>
                  </div>
                  <div className="h-1 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full sky-gradient" 
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/paljordawa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sky-gradient text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-lime-500/20"
              >
                <Github className="w-5 h-5" /> Follow on GitHub
              </a>
              <button className="glass-card px-8 py-4 rounded-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 hover:bg-slate-200 dark:hover:bg-white/10 transition-all border border-slate-200 dark:border-white/10">
                <Globe className="w-5 h-5" /> Portfolio <ExternalLink className="w-4 h-4 opacity-50" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};