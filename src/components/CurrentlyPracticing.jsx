import React from 'react';
import { 
  Sparkles, 
  Boxes, 
  Layers, 
  ShieldCheck, 
  KeyRound, 
  Zap, 
  Flame, 
  FileCode2, 
  CreditCard,
  Compass
} from 'lucide-react';
import { currentlyPracticing } from '../data/portfolioData';

export default function CurrentlyPracticing() {
  const iconMap = {
    Boxes: Boxes,
    Layers: Layers,
    ShieldCheck: ShieldCheck,
    KeyRound: KeyRound,
    Zap: Zap,
    Flame: Flame,
    FileCode2: FileCode2,
    CreditCard: CreditCard
  };

  return (
    <section id="practicing" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Transparency Disclaimer */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-wide uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Learning Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Currently Practicing & Upskilling
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Transparently sharing the concepts and modern tools I am currently coding in my personal practice lab to expand my full-stack proficiency.
          </p>

          <div className="inline-block mt-2 px-4 py-2 rounded-xl bg-violet-950/40 border border-violet-500/30 text-violet-200 text-xs">
            <span className="font-semibold text-violet-300">Note for Recruiters:</span> These topics represent active learning and implementation practice, presented transparently rather than claimed as senior-level production experience.
          </div>
        </div>

        {/* Grid of Learning Topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentlyPracticing.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div 
                key={item.topic}
                className="group relative rounded-2xl bg-[#0E1524] p-5 border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Status Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover:text-violet-300 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-medium text-violet-300 bg-violet-500/15 border border-violet-500/30 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
                      <span>Practicing</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-violet-200 transition-colors">
                    {item.topic}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-mono">Module #{index + 1}</span>
                  <span className="text-slate-400 group-hover:text-sky-400 transition-colors">Hands-on Lab</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
