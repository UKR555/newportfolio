'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';
import { personalDetails } from '@/data/portfolioData';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-orange-500/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center space-x-2 font-bold text-xl tracking-tight">
          <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center text-white font-mono shadow-lg shadow-orange-500/30">
            <Code2 className="w-5 h-5" />
          </div>
          <span>CH <span className="orange-gradient-text">Udaya Kumar</span></span>
        </a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-orange-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-orange-500 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-orange-500 transition-colors"
            title="Toggle Light/Dark Theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a
            href={personalDetails.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="p-2">
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-700 flex flex-col space-y-4 px-2 pb-4">
          <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
          <a href="#skills" onClick={() => setMobileMenu(false)}>Skills</a>
          <a href="#projects" onClick={() => setMobileMenu(false)}>Projects</a>
          <a href="#experience" onClick={() => setMobileMenu(false)}>Experience</a>
          <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
          <a
            href={personalDetails.resumeUrl}
            target="_blank"
            className="px-4 py-2 rounded-full bg-orange-500 text-white text-center font-semibold"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}