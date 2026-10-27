import React from 'react';
import { Briefcase, CheckCircle2, GitBranch, Shield } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Internship
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world frontend development experience, team practices, and source control fundamentals.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className="relative rounded-2xl bg-gradient-to-b from-[#0F1624] to-[#0A0E1A] p-6 sm:p-8 border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-2">
                    <Shield className="w-3 h-3 text-indigo-400" />
                    <span>Verified Internship</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center space-x-2 text-sky-400 font-semibold text-base mt-1">
                    <span>{exp.company}</span>
                    <span className="text-slate-600">&bull;</span>
                    <span className="text-xs text-slate-400 font-normal">{exp.location}</span>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/60 text-xs font-mono text-slate-300 self-start">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Frontend Engineering Track</span>
                </div>
              </div>

              {/* Overview & Core Responsibilities */}
              <div className="py-6 space-y-4">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Key Hands-on Contributions:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-slate-400 mr-2">Tech Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                  <GitBranch className="w-3.5 h-3.5 text-sky-400" />
                  <span>GitHub Version Control</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
