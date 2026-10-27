import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070B] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-violet-600 p-[1px] shadow-md shadow-sky-500/20">
                <div className="w-full h-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono font-bold text-sky-400 text-xs">RG</span>
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Fresher MERN Stack Web Developer focused on building high-performance React user interfaces and dependable backend REST APIs.
            </p>

            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">Quick Navigation</span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-sky-400 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded">About Me</a>
              <a href="#skills" className="hover:text-sky-400 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded">Technical Stack</a>
              <a href="#projects" className="hover:text-sky-400 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded">Featured Projects</a>
              <a href="#experience" className="hover:text-sky-400 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded">Work Experience</a>
              <a href="#education" className="hover:text-sky-400 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded">Education & Diploma</a>
              <a href="#practicing" className="hover:text-sky-400 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded">Currently Practicing</a>
              <a href="#contact" className="hover:text-sky-400 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded">Contact Details</a>
            </div>
          </div>

          {/* Col 3: Socials & Back to Top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-3">Connect Online</span>
              <div className="flex items-center space-x-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile (opens in new tab)"
                  className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-sky-500/40 transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile (opens in new tab)"
                  className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send direct email"
                  className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-xs transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
