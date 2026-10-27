import React from 'react';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Languages
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Driven by Clean Code & Full-Stack Fundamentals
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of my academic foundation, internship journey, and professional mindset as a fresher MERN developer.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>Professional Profile</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a dedicated <strong className="text-white font-semibold">MERN Stack Web Developer</strong> completing my Diploma in Computer Science & Technology from the Abacus Institute of Engineering and Management (passing in 2026 with an aggregate of <strong className="text-sky-300 font-semibold">85%</strong>).
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                During my web development internship at <strong className="text-white font-semibold">NexCent Ecommerce</strong>, I gained real-world exposure building responsive, multi-device web layouts with semantic HTML, modern CSS, and JavaScript, while managing source control through Git and GitHub.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I focus on writing clean, modular JavaScript and React code, creating structured REST APIs with Express and Node.js, and implementing database persistence with MongoDB. I approach technical challenges with eagerness, curiosity, and disciplined problem-solving.
              </p>

              {/* Languages Box */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  <Languages className="w-4 h-4 text-indigo-400" />
                  <span>Languages Known</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.languages.map((lang) => (
                    <div 
                      key={lang.name}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center space-x-2"
                    >
                      <span className="font-semibold text-white">{lang.name}</span>
                      <span className="text-[10px] text-slate-400">({lang.proficiency})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What I Bring to a Team */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <h4 className="text-base font-bold text-white mb-3">What I Bring to an Engineering Team</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strong foundation in modern JavaScript (ES6+), React hooks, component lifecycles, and state management.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Experience with Node.js and Express.js RESTful routing, CRUD operations, and Axios integration.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Pixel-accurate UI development transforming Figma designs into fully responsive web interfaces.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>High receptivity to mentorship, code reviews, and fast adoption of team conventions.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Key Details & Quick Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Education Snapshot */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10">
              <div className="flex items-start space-x-3.5">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">Academic Record</span>
                  <h4 className="text-base font-bold text-white mt-0.5">Diploma in CST (2026)</h4>
                  <p className="text-xs text-slate-300 mt-1">Abacus Institute of Engineering and Management</p>
                  <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
                    Aggregate: 85%
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Professional Internship */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10">
              <div className="flex items-start space-x-3.5">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider">Internship Experience</span>
                  <h4 className="text-base font-bold text-white mt-0.5">NexCent Ecommerce</h4>
                  <p className="text-xs text-slate-300 mt-1">Web Development Intern</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Responsive web pages, frontend layout implementation, and GitHub collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Location & Readiness */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10">
              <div className="flex items-start space-x-3.5">
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-violet-400 uppercase tracking-wider">Location & Availability</span>
                  <h4 className="text-base font-bold text-white mt-0.5">Kolkata, West Bengal</h4>
                  <p className="text-xs text-slate-300 mt-1">India &bull; Open to Onsite, Hybrid, & Remote Roles</p>
                  <div className="mt-2 flex items-center space-x-2 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Ready for immediate joining</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
