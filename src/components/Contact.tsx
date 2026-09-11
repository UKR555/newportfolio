'use client';

import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { personalDetails } from '@/data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyPhone() {
    navigator.clipboard.writeText(personalDetails.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Get in <span className="orange-gradient-text">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Interested in discussing SDE / AI Engineer roles, project collaborations, or technical opportunities?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email Card */}
          <a
            href={mailto:}
            className="glass-card p-6 rounded-3xl flex flex-col items-center text-center space-y-3 hover:border-orange-500/50 transition-all hover:scale-105"
          >
            <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-base">Email Me</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">{personalDetails.email}</p>
          </a>

          {/* Phone Card */}
          <button
            onClick={copyPhone}
            className="glass-card p-6 rounded-3xl flex flex-col items-center text-center space-y-3 hover:border-orange-500/50 transition-all hover:scale-105"
          >
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-base flex items-center space-x-1">
              <span>{copied ? 'Copied!' : 'Call / WhatsApp'}</span>
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">{personalDetails.phone}</p>
          </button>

          {/* LinkedIn Card */}
          <a
            href={personalDetails.linkedin}
            target="_blank"
            className="glass-card p-6 rounded-3xl flex flex-col items-center text-center space-y-3 hover:border-orange-500/50 transition-all hover:scale-105"
          >
            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
              <Linkedin className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-base">LinkedIn Profile</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">linkedin.com/in/uday554</p>
          </a>
        </div>
      </div>
    </section>
  );
}
