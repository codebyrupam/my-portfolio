import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Practicing', href: '#practicing' },
    { name: 'Contact', href: '#contact' },
  ];

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Robust scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if user is near bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'practicing', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#080B11]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3' 
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Monogram */}
            <a 
              href="#hero" 
              className="group flex items-center space-x-3 text-white transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded-xl"
              aria-label="Rupam Ghosh Portfolio Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-violet-600 p-[1px] shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-shadow">
                <div className="w-full h-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300 text-sm">
                    RG
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors text-sm sm:text-base">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                  MERN Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none ${
                      isActive
                        ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Icons & Resume CTA */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in new tab)"
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (opens in new tab)"
                className="p-2 text-slate-400 hover:text-[#0A66C2] hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 transition-all transform active:scale-95 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={onOpenResume}
                className="sm:hidden inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-md bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-medium focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                <Download className="w-3 h-3" />
                <span>CV</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
                className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#090D16]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-6 transition-all animate-fadeIn">
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-sky-400">&rarr;</span>
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  closeMobileMenu();
                  onOpenResume();
                }}
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-sky-500/20 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                <Download className="w-4 h-4" />
                <span>Download CV / Resume</span>
              </button>

              <div className="flex items-center justify-center space-x-4 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs text-slate-400 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none p-1 rounded"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-600">&bull;</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs text-slate-400 hover:text-sky-400 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none p-1 rounded"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Dimmed backdrop when mobile menu is open to dismiss it on outside tap */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
