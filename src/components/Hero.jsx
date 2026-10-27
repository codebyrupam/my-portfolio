import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Mail, 
  Check, 
  Copy, 
  Terminal 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-sky-600/15 via-indigo-600/10 to-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Elevator Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Fresher MERN Stack Developer &bull; Ready to Join
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br />
                <span className="text-gradient-accent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-tight">
                {personalInfo.role}
              </p>
            </div>

            {/* Location & Tagline */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Description tailored for recruiters */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Computer Science diploma graduate (2026, 85%) with hands-on e-commerce internship experience. Specializing in responsive React.js interfaces, Node.js REST APIs, and modern JavaScript engineering.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/70 transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm border border-white/10 transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Quick Metrics Cards */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center lg:text-left min-w-0">
                <span className="text-xl font-bold text-sky-400 block">85%</span>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate" title="Diploma Score (CST)">Diploma (CST)</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center lg:text-left min-w-0">
                <span className="text-xl font-bold text-indigo-400 block">Intern</span>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate" title="NexCent Ecommerce">NexCent Ecom</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center lg:text-left min-w-0">
                <span className="text-xl font-bold text-violet-400 block">MERN</span>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate" title="React, Node, Mongo, Express">React &bull; Node</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center lg:text-left min-w-0">
                <span className="text-xl font-bold text-emerald-400 block">2026</span>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate" title="AIEM Graduate">AIEM Grad</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Code Window */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/30 to-indigo-500/30 rounded-2xl blur-xl opacity-50 transition-all pointer-events-none" />

              {/* Code Card Window */}
              <div className="relative rounded-2xl bg-[#0B0F19] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
                
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs text-slate-400 font-medium">rupam-profile.js</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-sky-400">ES6+</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-5 space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
                  <div>
                    <span className="text-indigo-400">const</span>{' '}
                    <span className="text-sky-300">candidate</span> = {'{'}
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"{personalInfo.name}"</span>,
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-300">"{personalInfo.role}"</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">location:</span>{' '}
                    <span className="text-emerald-300">"Kolkata, India"</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">education:</span> {'{'}
                    <div className="pl-4">
                      <span className="text-slate-400">institution:</span>{' '}
                      <span className="text-amber-300">"Abacus Institute (AIEM)"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">degree:</span>{' '}
                      <span className="text-amber-300">"Diploma CST (2026)"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">score:</span>{' '}
                      <span className="text-sky-400">85%</span>
                    </div>
                    {'}'},
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">experience:</span> {'{'}
                    <div className="pl-4">
                      <span className="text-slate-400">company:</span>{' '}
                      <span className="text-indigo-300">"NexCent Ecommerce"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">role:</span>{' '}
                      <span className="text-indigo-300">"Web Development Intern"</span>
                    </div>
                    {'}'},
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                    <span className="text-sky-300">"React.js"</span>,{' '}
                    <span className="text-sky-300">"Node.js"</span>,{' '}
                    <span className="text-sky-300">"Express"</span>,{' '}
                    <span className="text-sky-300">"MongoDB"</span>,{' '}
                    <span className="text-sky-300">"Tailwind"</span>
                    ],
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">fresherMindset:</span>{' '}
                    <span className="text-emerald-400 font-semibold">"Ready to learn, build & contribute"</span>
                  </div>

                  <div>{'};'}</div>
                </div>

                {/* Quick Copy Contact Bar inside Window */}
                <div className="p-3.5 bg-slate-900/80 border-t border-white/5 flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400 truncate">
                    <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">{personalInfo.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-[11px] transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                    title="Copy Email Address"
                    aria-label={copiedEmail ? "Email copied to clipboard" : "Copy email address"}
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
