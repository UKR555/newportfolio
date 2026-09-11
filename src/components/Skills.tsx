'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsCategories } from '@/data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Technical <span className="orange-gradient-text">Competencies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Hands-on technical stack matching production engineering standards across AI/ML and Full-Stack SDE domains.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillsCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all }
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Badges */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {skillsCategories[activeTab].skills.map((skill, i) => (
            <div
              key={i}
              className="glass-card p-4 rounded-2xl flex items-center space-x-3 hover:border-orange-500/50 transition-all hover:scale-105"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span className="font-semibold text-sm">{skill}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
