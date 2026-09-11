'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { workExperience, educationHistory, certificationsList } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-100 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Experience & <span className="orange-gradient-text">Education</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Professional AI/ML internship background, academic foundations, and engineering certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/30">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            {workExperience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-3xl space-y-4 border border-orange-500/20"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-bold">{exp.role}</h4>
                    <p className="text-sm font-semibold text-orange-500">{exp.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 font-medium">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <div className="pt-6 space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500 text-white">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold">Certifications & Achievements</h4>
              </div>

              {certificationsList.map((cert, cIdx) => (
                <div key={cIdx} className="glass-card p-5 rounded-2xl space-y-1">
                  <h5 className="font-bold text-sm">{cert.title}</h5>
                  <p className="text-xs text-orange-500 font-semibold">{cert.issuer}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            {educationHistory.map((edu, eIdx) => (
              <motion.div
                key={eIdx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-3xl space-y-3 border border-blue-500/20"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-bold">{edu.institution}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">{edu.degree}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 font-medium">
                    {edu.period}
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-bold">
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}