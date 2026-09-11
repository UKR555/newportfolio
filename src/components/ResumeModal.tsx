'use client';

import { X, Download, ExternalLink, Printer, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { personalDetails, workExperience, featuredProjects, educationHistory, certificationsList } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  function handlePrint() {
    window.print();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 my-8">
        {/* Top Sticky Toolbar */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <h3 className="font-bold text-lg flex items-center space-x-2">
            <span>CH Udaya Kumar - Resume</span>
          </h3>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={personalDetails.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

            <a
              href={personalDetails.resumeUrl}
              download="CH_Udaya_Kumar_Resume.pdf"
              className="px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-8 md:p-12 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:p-0">
          {/* Header */}
          <div className="text-center space-y-2 border-b pb-6 border-slate-200 dark:border-slate-800">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
              {personalDetails.name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>{personalDetails.location}</span>
              </span>
              <span>|</span>
              <span className="flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>{personalDetails.phone}</span>
              </span>
              <span>|</span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-orange-500" />
                <span>{personalDetails.email}</span>
              </span>
            </div>
            <div className="flex justify-center space-x-4 text-xs font-semibold text-orange-500 pt-1">
              <a href={personalDetails.linkedin} target="_blank" className="hover:underline flex items-center space-x-1">
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/uday554</span>
              </a>
              <span>|</span>
              <a href={personalDetails.github} target="_blank" className="hover:underline flex items-center space-x-1">
                <Github className="w-3.5 h-3.5" />
                <span>github.com/UKR555</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-orange-500 border-b border-orange-500/30 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {personalDetails.bio} Seeking SDE / AI Engineer roles.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-orange-500 border-b border-orange-500/30 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
              <p><strong className="font-semibold text-slate-900 dark:text-slate-100">• Languages:</strong> Java, Python, SQL, JavaScript, HTML5, CSS3</p>
              <p><strong className="font-semibold text-slate-900 dark:text-slate-100">• AI & Machine Learning:</strong> Artificial Intelligence (AI), Machine Learning (ML), YOLOv8, YOLOv8-Pose, GRU Neural Networks, OpenCV, EasyOCR, Tesseract OCR, Weka API, NumPy</p>
              <p><strong className="font-semibold text-slate-900 dark:text-slate-100">• Backend & Web:</strong> Spring Boot 2.7, RESTful APIs, Spring Data JPA, Hibernate</p>
              <p><strong className="font-semibold text-slate-900 dark:text-slate-100">• Databases:</strong> MySQL, MongoDB</p>
              <p><strong className="font-semibold text-slate-900 dark:text-slate-100">• Tools & Frameworks:</strong> Git, GitHub, Docker, Postman, IntelliJ IDEA, VS Code, Maven, Figma, Vercel</p>
              <p><strong className="font-semibold text-slate-900 dark:text-slate-100">• Core CS Fundamentals:</strong> Data Structures & Algorithms (DSA), Object-Oriented Programming, Operating Systems, Computer Networks, System Design</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-orange-500 border-b border-orange-500/30 pb-1">
              Professional Experience
            </h2>
            {workExperience.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">{exp.company}</h3>
                    <p className="text-xs italic text-slate-600 dark:text-slate-400">{exp.role}</p>
                  </div>
                  <div className="text-right text-xs text-slate-500 font-medium">
                    <p>{exp.location}</p>
                    <p>{exp.period}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="pl-1">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-orange-500 border-b border-orange-500/30 pb-1">
              Projects
            </h2>
            {featuredProjects.map((project, pIdx) => (
              <div key={pIdx} className="space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
                    <span>{project.title}</span>
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-xs font-semibold text-orange-500 hover:underline flex items-center space-x-1"
                    >
                      <span>[GitHub Repo]</span>
                    </a>
                  )}
                </div>
                <p className="text-xs text-slate-500 italic">
                  <strong>Technologies:</strong> {project.techStack.join(', ')}
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-orange-500 border-b border-orange-500/30 pb-1">
              Education
            </h2>
            {educationHistory.map((edu, eIdx) => (
              <div key={eIdx} className="flex justify-between items-start text-xs">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                  <p className="text-slate-600 dark:text-slate-400 italic">{edu.degree}</p>
                </div>
                <div className="text-right font-semibold">
                  <p className="text-slate-500">{edu.period}</p>
                  <p className="text-emerald-600 dark:text-emerald-400">{edu.score}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-orange-500 border-b border-orange-500/30 pb-1">
              Certifications & Achievements
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {certificationsList.map((cert, cIdx) => (
                <li key={cIdx} className="leading-relaxed">
                  <strong className="font-semibold text-slate-900 dark:text-slate-100">{cert.title}</strong> ({cert.issuer}): {cert.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Information */}
          <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-4">
            <p><strong className="font-semibold text-slate-900 dark:text-slate-100">• Spoken Languages:</strong> English (Professional), Kannada (Native), Telugu (Native), Hindi (Conversational)</p>
            <p><strong className="font-semibold text-slate-900 dark:text-slate-100">• Technical Interests:</strong> Advanced Data Structures, Open-Source Contributions, AI Systems Architecture</p>
          </div>
        </div>
      </div>
    </div>
  );
}
