'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork, RefreshCw } from 'lucide-react';
import { featuredProjects, personalDetails } from '@/data/portfolioData';
import { fetchLiveGitHubRepos, GitHubRepo } from '@/lib/github';

export default function Projects() {
  const [liveRepos, setLiveRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      const data = await fetchLiveGitHubRepos(personalDetails.githubUsername);
      setLiveRepos(data);
      setLoading(false);
    }
    loadRepos();
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-xs font-semibold uppercase">
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Featured <span className="orange-gradient-text">Projects & Repositories</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Architected computer vision detection systems, machine learning web engines, and production backend APIs.
          </p>
        </div>

        {/* Deep-Dive Resume Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-3xl space-y-4 hover:border-orange-500/60 transition-all hover:scale-[1.02] shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="text-xs font-semibold text-orange-500 flex items-center space-x-1 hover:underline"
                >
                  <span>View Source Code</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Auto-Synced GitHub Repos Section */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold flex items-center space-x-2">
                <span>GitHub Live Repositories</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-mono">
                  Auto-Sync Active
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                New repositories created on GitHub (@{personalDetails.githubUsername}) render here automatically.
              </p>
            </div>
            <a
              href={personalDetails.github}
              target="_blank"
              className="text-xs text-orange-500 font-semibold flex items-center space-x-1 hover:underline"
            >
              <span>Explore GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-10 text-slate-500 space-x-2">
              <RefreshCw className="w-5 h-5 animate-spin text-orange-500" />
              <span>Fetching live repositories from GitHub...</span>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveRepos.map((repo) => (
                <div
                  key={repo.id}
                  className="glass-card p-5 rounded-2xl space-y-3 flex flex-col justify-between hover:border-orange-500/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-base truncate pr-2">{repo.name}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono">
                        {repo.language || 'Code'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {repo.description || 'No description provided.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <Star className="w-3.5 h-3.5 text-amber-500" />
                        <span>{repo.stargazers_count}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <GitFork className="w-3.5 h-3.5" />
                        <span>{repo.forks_count}</span>
                      </span>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      className="text-orange-500 hover:underline flex items-center space-x-1"
                    >
                      <span>Repo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
