import React, { useEffect } from 'react';
import { X, FileText, Download, Mail, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-[#0F1624] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accents */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-xl font-bold text-white">Curriculum Vitae</h3>
              <p className="text-xs text-slate-400">{personalInfo.name} &bull; {personalInfo.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-4">
          <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-500/20 text-xs sm:text-sm text-slate-300 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">How to connect your PDF file:</span>
              <p className="mt-1 text-slate-400">
                Place your actual CV PDF file into the <code className="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 font-mono text-xs">public/resume.pdf</code> folder of this project. Any click on the button below immediately triggers the direct download of your CV.
              </p>
            </div>
          </div>

          {/* Quick Summary of CV Credentials */}
          <div className="space-y-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">CV Summary Snapshot</p>
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block text-xs">Latest Qualification:</span>
                <span className="font-medium text-white">Diploma CST (2026, 85%)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Target Position:</span>
                <span className="font-medium text-white">Fresher MERN Developer</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Internship:</span>
                <span className="font-medium text-white">NexCent Ecommerce</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Location:</span>
                <span className="font-medium text-white">Kolkata, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownload}
            className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium shadow-lg shadow-sky-500/20 transition-all transform active:scale-95 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (resume.pdf)</span>
          </button>
          <a
            href={`mailto:${personalInfo.email}?subject=Interview%20Opportunity%20-%20Fresher%20MERN%20Developer`}
            className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
          >
            <Mail className="w-4 h-4" />
            <span>Email Rupam Directly</span>
          </a>
        </div>
      </div>
    </div>
  );
}
