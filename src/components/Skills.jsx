import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Terminal, 
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database & APIs', icon: Database },
    { id: 'tools', label: 'Tools & Workflow', icon: Wrench },
    { id: 'other', label: 'Foundational', icon: Terminal },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Repertoire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technical Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Honest and verified breakdown of technologies I have implemented in real-world practice, coursework, and internship assignments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="group" aria-label="Skills categories">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20'
                    : 'bg-[#0F1624] text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Frontend Category */}
          {(activeCategory === 'all' || activeCategory === 'frontend') && (
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Frontend</h3>
                      <span className="text-[11px] text-slate-400">Core UI development</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                    5 items
                  </span>
                </div>

                <div className="space-y-3">
                  {skillsData.frontend.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex items-center space-x-2.5">
                        <span className={`w-2 h-2 rounded-full ${skill.highlight ? 'bg-sky-400 ring-2 ring-sky-400/20' : 'bg-slate-500'}`} />
                        <span className="text-xs sm:text-sm font-semibold text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400 px-2 py-0.5 rounded bg-slate-900">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[11px] text-slate-500">
                Applied in responsive e-commerce web pages & interactive React SPAs.
              </p>
            </div>
          )}

          {/* Backend Category */}
          {(activeCategory === 'all' || activeCategory === 'backend') && (
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Backend</h3>
                      <span className="text-[11px] text-slate-400">Server & REST APIs</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                    4 items
                  </span>
                </div>

                <div className="space-y-3">
                  {skillsData.backend.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex items-center space-x-2.5">
                        <span className={`w-2 h-2 rounded-full ${skill.highlight ? 'bg-indigo-400 ring-2 ring-indigo-400/20' : 'bg-slate-500'}`} />
                        <span className="text-xs sm:text-sm font-semibold text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400 px-2 py-0.5 rounded bg-slate-900">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[11px] text-slate-500">
                Practiced building Node/Express servers, endpoint routing & CRUD handlers.
              </p>
            </div>
          )}

          {/* Database & Integration */}
          {(activeCategory === 'all' || activeCategory === 'database') && (
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Database & Integration</h3>
                      <span className="text-[11px] text-slate-400">Data persistence & HTTP</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    3 items
                  </span>
                </div>

                <div className="space-y-3">
                  {skillsData.databaseAndIntegration.map((item) => (
                    <div key={item.name} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-slate-200">{item.name}</span>
                        <span className="text-[11px] font-medium text-slate-400 px-2 py-0.5 rounded bg-slate-900">
                          {item.level}
                        </span>
                      </div>
                      {item.note && (
                        <p className="text-[11px] text-slate-400 mt-1 font-mono">
                          &bull; {item.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[11px] text-slate-500">
                MongoDB basic collections and Axios asynchronous API workflows.
              </p>
            </div>
          )}

          {/* Tools & Workflow */}
          {(activeCategory === 'all' || activeCategory === 'tools') && (
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Tools & Workflow</h3>
                      <span className="text-[11px] text-slate-400">Engineering ecosystem</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded">
                    4 items
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {skillsData.tools.map((tool) => (
                    <div key={tool.name} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                      <span className="text-xs sm:text-sm font-semibold text-white block">{tool.name}</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{tool.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[11px] text-slate-500">
                Git version control used during internship & personal projects.
              </p>
            </div>
          )}

          {/* Foundational / Other */}
          {(activeCategory === 'all' || activeCategory === 'other') && (
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Foundational Programming Languages</h3>
                      <span className="text-[11px] text-slate-400">Academic core fundamentals</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    2 items
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skillsData.otherLanguages.map((lang) => (
                    <div key={lang.name} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">{lang.name}</span>
                        <span className="text-[11px] text-amber-300/90 font-mono bg-amber-500/10 px-2 py-0.5 rounded">
                          {lang.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Core syntax, algorithmic reasoning, and object-oriented concepts from diploma studies.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[11px] text-slate-500">
                Provides a broad multi-language foundation that speeds up grasping new frameworks and backend patterns.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
