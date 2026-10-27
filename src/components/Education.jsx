import React from 'react';
import { GraduationCap, Languages, School } from 'lucide-react';
import { educationData, personalInfo } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Background
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal technical education and secondary schooling that formed my analytical and problem-solving foundation.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <div 
              key={idx}
              className={`glass-panel rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:border-emerald-500/30 ${
                idx === 0 
                  ? 'border-emerald-500/30 bg-gradient-to-r from-[#0F1829] to-[#0A101D] shadow-xl shadow-emerald-500/5' 
                  : 'border-white/10'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    {idx === 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                        Primary Credential
                      </span>
                    )}
                    <span className="text-xs font-mono text-slate-400">
                      {edu.year}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                    <School className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                {/* Score Badge */}
                <div className="self-start sm:self-center">
                  <div className={`px-4 py-2 rounded-xl text-center border ${
                    idx === 0 
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                      : 'bg-slate-900 border-white/10 text-slate-200'
                  }`}>
                    <span className="block text-xl font-extrabold">{edu.score}</span>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider">{edu.scoreType}</span>
                  </div>
                </div>
              </div>

              {edu.details && (
                <p className="mt-4 pt-4 border-t border-white/5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Languages & Communication Banner */}
        <div className="max-w-4xl mx-auto mt-12 p-6 rounded-2xl glass-panel border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Languages for Workplace Collaboration</h4>
                <p className="text-xs text-slate-400">Effective communicator in multilingual and cross-functional team environments</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {personalInfo.languages.map((lang) => (
                <div key={lang.name} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs">
                  <span className="font-semibold text-white">{lang.name}: </span>
                  <span className="text-slate-400">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
