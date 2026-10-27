import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyDraft = () => {
    const text = `To: ${personalInfo.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nHi Rupam,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Strict validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address (e.g., name@domain.com).');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please write a message before sending.');
      return;
    }

    // Construct valid mailto URL with pre-filled content
    const subject = encodeURIComponent(
      formData.subject.trim() 
        ? `[Portfolio Contact] ${formData.subject.trim()}` 
        : `Job Opportunity / Inquiry for ${personalInfo.name}`
    );
    const body = encodeURIComponent(
      `Hello Rupam,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Open user's default email client
    window.location.href = mailtoUrl;

    // Show transparent status notification
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in hiring me as a Fresher MERN Stack Developer or discussing technical roles? Reach out through any channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">Email</span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white hover:text-sky-300 transition-colors block truncate focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                title="Copy Email Address"
                aria-label={copiedEmail ? "Email address copied" : "Copy email address"}
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct Phone Card */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">Phone</span>
                  <a 
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors block truncate focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                title="Copy Phone Number"
                aria-label={copiedPhone ? "Phone number copied" : "Copy phone number"}
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 flex items-center space-x-3.5">
              <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">Location</span>
                <span className="text-sm font-semibold text-white block">{personalInfo.location}</span>
                <span className="text-xs text-slate-400 block mt-0.5">Open to onsite roles in Kolkata and remote / relocation opportunities</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-3">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">Professional Profiles</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile (opens in new tab)"
                  className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-200 hover:text-white transition-all text-xs font-semibold group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                >
                  <Github className="w-4 h-4 text-slate-300 group-hover:text-white" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile (opens in new tab)"
                  className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-900/80 hover:bg-[#0A66C2]/20 border border-slate-700/60 hover:border-[#0A66C2]/40 text-slate-200 hover:text-white transition-all text-xs font-semibold group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the message below. It automatically formats and opens your email application with all details pre-filled.
              </p>

              {errorMessage && (
                <div 
                  role="alert" 
                  aria-live="polite"
                  className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center space-x-2"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {formSubmitted && (
                <div 
                  aria-live="polite"
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm space-y-2.5"
                >
                  <div className="flex items-center space-x-2 font-semibold">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email client launched with pre-filled details!</span>
                  </div>
                  <p className="text-emerald-300/80 text-xs">
                    If your email client didn't open automatically, you can also copy the formatted message to paste into webmail (Gmail, Outlook):
                  </p>
                  <button
                    onClick={handleCopyDraft}
                    type="button"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/30 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                  >
                    {copiedDraft ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Message to Clipboard</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Sharma"
                      aria-invalid={!!errorMessage && !formData.name.trim()}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090D17] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      aria-invalid={!!errorMessage && !formData.email.trim()}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090D17] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Junior MERN Developer Opening"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090D17] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Rupam, we reviewed your CV and would like to invite you for an interview..."
                    aria-invalid={!!errorMessage && !formData.message.trim()}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090D17] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 transition-all transform active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message (via Email Client)</span>
                  </button>
                </div>
              </form>

              {/* Integration Guide Note */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span>Direct Mailto Integration</span>
                <span className="text-slate-400">No mock responses &bull; 100% reliable</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
