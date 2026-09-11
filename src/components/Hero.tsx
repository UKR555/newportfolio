'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { personalDetails } from '@/data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Available for SDE & AI/ML Engineer Roles</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="orange-gradient-text">{personalDetails.name}</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300">
            {personalDetails.title}
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {personalDetails.bio}
          </p>

          <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 pt-2">
            <span className="flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>{personalDetails.location}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>GITAM B.Tech CSE ('26)</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 shadow-xl shadow-orange-500/30 flex items-center space-x-2 transition-all hover:scale-105"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-300 dark:hover:bg-slate-700 transition-all hover:scale-105"
            >
              View Projects
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-full border border-orange-500/40 text-orange-500 hover:bg-orange-500/10 font-semibold text-sm flex items-center space-x-2 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Resume PDF</span>
            </button>
          </div>

          <div className="flex items-center space-x-5 pt-4">
            <a href={personalDetails.github} target="_blank" className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:text-orange-500 transition-all hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalDetails.linkedin} target="_blank" className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:text-orange-500 transition-all hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${personalDetails.email}`} className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:text-orange-500 transition-all hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-full blur-2xl opacity-40 animate-pulse-slow" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/50 shadow-2xl bg-slate-900 flex items-center justify-center">
              <img
                src={`https://github.com/${personalDetails.githubUsername}.png`}
                alt={personalDetails.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}