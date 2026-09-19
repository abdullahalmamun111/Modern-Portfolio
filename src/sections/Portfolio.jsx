import React, { useState } from 'react';
import { 
  ExternalLink, 
  Film, 
  CloudSun, 
  Briefcase, 
  HeartHandshake, 
  Trophy, 
  Gamepad2, 
  Layers 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Safe Inline GitHub SVG Icon
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
      />
    </svg>
  );
}

// Category Icons
function getProjectIcon(iconType) {
  switch (iconType) {
    case 'film':
      return <Film className="w-5 h-5 text-rose-500" />;
    case 'cloud':
      return <CloudSun className="w-5 h-5 text-sky-500" />;
    case 'briefcase':
      return <Briefcase className="w-5 h-5 text-amber-500" />;
    case 'heart':
      return <HeartHandshake className="w-5 h-5 text-red-500" />;
    case 'trophy':
      return <Trophy className="w-5 h-5 text-emerald-500" />;
    case 'gamepad':
      return <Gamepad2 className="w-5 h-5 text-purple-500" />;
    default:
      return <Layers className="w-5 h-5 text-[var(--color-accent)]" />;
  }
}

export default function Portfolio() {
  const { t } = useLanguage();
  const portfolioData = t.portfolioSection || {};
  const projects = portfolioData.items || [];

  const [activeTab, setActiveTab] = useState('all');

  const totalCount = projects.length;
  const frontendCount = projects.filter((p) => p.category === 'frontend').length;
  const fullstackCount = projects.filter((p) => p.category === 'fullstack').length;

  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'frontend') return p.category === 'frontend';
    if (activeTab === 'fullstack') return p.category === 'fullstack';
    return true;
  });

  const tabs = [
    { id: 'all', label: portfolioData.tabAll || 'All', count: totalCount },
    { id: 'frontend', label: portfolioData.tabFrontend || 'Frontend', count: frontendCount },
    { id: 'fullstack', label: portfolioData.tabFullStack || 'Full Stack', count: fullstackCount }
  ];

  return (
    <div className="space-y-8 pb-8">
      {/* Header section (Wavy underline completely removed) */}
      <div className="text-center space-y-1.5 pt-2">
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          <Layers className="w-4 h-4 text-[var(--color-accent)]" />
          <span>{portfolioData.subtitle || 'Take a look at'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-chakra">
          <span className="text-[var(--color-text-primary)]">
            {portfolioData.titlePrefix}{' '}
          </span>
          <span className="text-[var(--color-accent)]">
            {portfolioData.titleHighlight}
          </span>
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center items-center">
        <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] shadow-xs gap-1.5">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-white shadow-md shadow-[var(--color-accent)]/20'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-card-bg)]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isActive
                      ? 'bg-white/25 text-white'
                      : 'bg-[var(--color-card-bg)] text-[var(--color-text-muted)] border border-[var(--color-card-border)]'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="group relative rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)]/70 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent)]/10 hover:-translate-y-1"
          >
            <div>
              {/* Header: Title not truncated + Circular Badge */}
              <div className="flex items-start justify-between gap-3 mb-3.5">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold font-chakra text-base sm:text-lg text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <span className="inline-block text-xs font-semibold text-[var(--color-accent)] mt-1">
                    {proj.categoryName}
                  </span>
                </div>

                <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center bg-[var(--color-window-bg)] border-2 border-[var(--color-card-border)] shadow-sm group-hover:scale-105 group-hover:border-[var(--color-accent)]/40 transition-transform">
                  {getProjectIcon(proj.iconType)}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--color-window-bg)] border border-[var(--color-card-border)]/60 text-[var(--color-text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {proj.description}
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-card-border)]/50">
              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="p-2 rounded-lg bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-colors cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}

              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                  className="p-2 rounded-lg bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}