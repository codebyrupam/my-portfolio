import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, 
  Github, 
  CheckCircle2, 
  Info, 
  Sparkles,
  Globe, 
  X 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend UI', 'React / Frontend', 'UI / UX Implementation'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter((p) => p.category === filter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProjectModal(null);
    };
    if (activeProjectModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProjectModal]);

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & Practice Builds
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real implementations built during coursework, internship training, and independent full-stack development practice.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="group" aria-label="Project Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none ${
                filter === cat
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20'
                  : 'bg-[#0F1624] text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col justify-between"
            >
              {/* Card Header & Decorative Banner */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 border border-sky-500/25 text-sky-300">
                    <Sparkles className="w-3 h-3 text-sky-400" />
                    <span>{project.badge}</span>
                  </span>

                  <span className="text-xs font-mono text-slate-500">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-indigo-400 mt-1 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Architectural Highlights */}
                <div className="space-y-2 mb-6 bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Core Technical Implementations:
                  </span>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#131D31] text-slate-200 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-6 py-4 bg-slate-900/70 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  {/* GitHub Repo Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                    title={project.isGithubPlaceholder ? "Opens GitHub Profile (configurable in portfolioData.js)" : "View Repository"}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{project.isGithubPlaceholder ? "GitHub Code" : "Repository"}</span>
                  </a>

                  {/* Live Demo / Practice Status Indicator */}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/25 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-white/5 text-xs font-medium transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                      title="Click for deployment and repository setup instructions"
                    >
                      <Info className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Demo & Config Info</span>
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="text-xs text-sky-400 hover:text-sky-300 font-medium inline-flex items-center space-x-1 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded px-1"
                >
                  <span>Details</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Central Data Notice for Recruiter */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Central Configuration:</span> All project details, URLs, and technology tags are maintained in <code className="text-sky-400 font-mono">src/data/portfolioData.js</code> for effortless customization.
        </div>

      </div>

      {/* Modal for Project Configuration & Architecture Details */}
      {activeProjectModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setActiveProjectModal(null)}
        >
          <div 
            className="relative w-full max-w-xl bg-[#0F1624] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">{activeProjectModal.category}</span>
                <h3 id="project-modal-title" className="text-xl font-bold text-white mt-0.5">{activeProjectModal.title}</h3>
                <p className="text-xs text-slate-400">{activeProjectModal.subtitle}</p>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                aria-label="Close project modal"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-xs sm:text-sm">
              <p className="text-slate-300 leading-relaxed">
                {activeProjectModal.summary}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
                <span className="font-semibold text-white block">Honest Deployment & Repository Transparency:</span>
                <p className="text-slate-400 leading-relaxed">
                  Per strict industry standards, live demo URLs are never fabricated. If this project is currently in local staging or awaiting hosting setup on Vercel/Render, the live demo link is kept transparent.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  To update this project with your exact repository URL or live link, simply edit the <code className="text-sky-300 font-mono">githubUrl</code> and <code className="text-sky-300 font-mono">demoUrl</code> fields in <code className="text-sky-300 font-mono">src/data/portfolioData.js</code>.
                </p>
              </div>

              <div>
                <span className="font-semibold text-white block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProjectModal.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-200 border border-white/10 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end space-x-3">
              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-semibold shadow-md focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                <Github className="w-4 h-4" />
                <span>Open GitHub Profile / Repo</span>
              </a>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 hover:text-white border border-white/10 text-xs font-medium focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
