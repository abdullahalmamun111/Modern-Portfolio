import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Authentic SVG Brand Logos for Tech Stack
 */
export function TechLogo({ id, className = "w-9 h-9" }) {
  switch (id) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'javascript':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect width="100" height="100" rx="16" fill="#f7df1e" />
          <path
            d="M 28 72 C 31 77 36 80 43 80 C 50 80 55 76 55 69 C 55 62 50 59 44 56 L 39 54 C 29 49 23 44 23 33 C 23 21 32 14 45 14 C 54 14 62 18 66 26 L 56 32 C 53 27 49 25 44 25 C 38 25 34 28 34 33 C 34 39 38 42 45 45 L 50 47 C 62 52 68 58 68 69 C 68 82 58 90 43 90 C 31 90 22 83 17 73 Z"
            fill="#000000"
            transform="translate(18, 0)"
          />
          <path
            d="M 22 17 L 33 17 L 33 69 C 33 77 28 81 20 81 C 15 81 10 79 7 76 L 11 67 C 13 69 16 71 19 71 C 21 71 23 70 23 66 Z"
            fill="#000000"
            transform="translate(5, 0)"
          />
        </svg>
      );

    case 'typescript':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect width="100" height="100" rx="16" fill="#3178c6" />
          <path
            d="M 18 30 L 50 30 L 50 38 L 39 38 L 39 80 L 29 80 L 29 38 L 18 38 Z"
            fill="#ffffff"
          />
          <path
            d="M 52 70 C 55 76 60 80 67 80 C 74 80 79 76 79 70 C 79 63 74 60 68 57 L 63 55 C 53 50 48 45 48 35 C 48 23 57 17 69 17 C 78 17 85 21 89 29 L 80 35 C 77 30 73 28 68 28 C 63 28 59 31 59 35 C 59 41 63 43 70 46 L 75 48 C 86 53 91 59 91 70 C 91 82 82 90 67 90 C 56 90 48 83 44 73 Z"
            fill="#ffffff"
          />
        </svg>
      );

    case 'nodejs':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Green hexagon */}
          <polygon
            points="50,10 88,32 88,76 50,98 12,76 12,32"
            fill="#5fa04e"
          />
          <path
            d="M 50 24 L 72 37 L 72 63 L 50 76 L 28 63 L 28 37 Z"
            fill="#333333"
          />
          <path
            d="M 50 30 L 66 40 L 66 60 L 50 70 L 34 60 L 34 40 Z"
            fill="#5fa04e"
          />
          <text
            x="50"
            y="55"
            fill="#ffffff"
            fontSize="18"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            JS
          </text>
        </svg>
      );

    case 'express':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Matching user Image 2 & Image 3 exact "ex" styling */}
          <rect width="100" height="100" rx="18" fill="#1e1833" />
          <text
            x="50"
            y="64"
            fill="#ffffff"
            fontSize="44"
            fontWeight="300"
            fontFamily="'Chakra Petch', sans-serif, system-ui"
            textAnchor="middle"
            letterSpacing="-2"
          >
            ex
          </text>
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* MongoDB Green Leaf */}
          <path
            d="M 50 10 C 50 10 24 35 24 58 C 24 75 35 88 50 94 C 65 88 76 75 76 58 C 76 35 50 10 50 10 Z"
            fill="#47a248"
          />
          <path
            d="M 50 10 C 50 10 50 25 50 94 C 65 88 76 75 76 58 C 76 35 50 10 50 10 Z"
            fill="#499d4a"
          />
          <path
            d="M 50 14 C 49 32 47 65 50 92 C 51 65 50 32 50 14 Z"
            fill="#ffffff"
            opacity="0.6"
          />
        </svg>
      );

    case 'tailwind':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            d="M 26 40 C 31 20 45 20 50 30 C 55 40 60 45 70 45 C 80 45 86 35 90 25 C 85 45 71 45 66 35 C 61 25 56 20 46 20 C 36 20 30 30 26 40 Z"
            fill="#38bdf8"
          />
          <path
            d="M 10 65 C 15 45 29 45 34 55 C 39 65 44 70 54 70 C 64 70 70 60 74 50 C 69 70 55 70 50 60 C 45 50 40 45 30 45 C 20 45 14 55 10 65 Z"
            fill="#38bdf8"
          />
        </svg>
      );

    case 'firebase':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M 22 75 L 36 15 L 48 38 Z" fill="#ffa000" />
          <path d="M 22 75 L 78 75 L 56 30 Z" fill="#f57c00" />
          <path d="M 48 38 L 56 30 L 78 75 L 22 75 Z" fill="#ffca28" opacity="0.9" />
          <path d="M 36 15 L 48 38 L 22 75 Z" fill="#ff8f00" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Git diamond */}
          <rect
            x="18"
            y="18"
            width="64"
            height="64"
            rx="12"
            fill="#f05032"
            transform="rotate(45 50 50)"
          />
          {/* Branch lines and dots */}
          <circle cx="36" cy="50" r="5.5" fill="#ffffff" />
          <circle cx="64" cy="38" r="5.5" fill="#ffffff" />
          <circle cx="64" cy="62" r="5.5" fill="#ffffff" />
          <line x1="36" y1="50" x2="64" y2="38" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <line x1="48" y1="45" x2="64" y2="62" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'html5':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="15,10 85,10 78,86 50,94 22,86" fill="#e34f26" />
          <polygon points="50,16 79,16 73,81 50,87" fill="#f06529" />
          {/* '5' */}
          <path
            d="M 50 30 L 32 30 L 33 44 L 50 44 L 50 56 L 34 56 L 35 68 L 50 72 L 50 83 L 30 77 L 27 20 L 50 20 Z"
            fill="#ebebeb"
          />
          <path
            d="M 50 30 L 68 30 L 67 44 L 50 44 L 50 30 Z M 50 56 L 66 56 L 64 77 L 50 83 L 50 72 L 60 69 L 61 56 Z"
            fill="#ffffff"
          />
        </svg>
      );

    case 'css3':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="15,10 85,10 78,86 50,94 22,86" fill="#1572b6" />
          <polygon points="50,16 79,16 73,81 50,87" fill="#33a9dc" />
          {/* '3' */}
          <path
            d="M 50 20 L 73 20 L 71 34 L 50 34 Z M 50 44 L 70 44 L 68 64 L 50 70 L 50 83 L 73 75 L 75 28 L 50 28 Z"
            fill="#ffffff"
          />
          <path
            d="M 50 20 L 27 20 L 28 34 L 50 34 Z M 50 44 L 38 44 L 39 56 L 50 56 Z M 50 70 L 38 67 L 37 60 L 26 60 L 28 75 L 50 83 Z"
            fill="#ebebeb"
          />
        </svg>
      );

    case 'nextjs':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="46" fill="#000000" stroke="#333333" strokeWidth="2" />
          <path
            d="M 36 28 L 44 28 L 68 68 L 60 68 Z"
            fill="url(#nextGrad)"
          />
          <rect x="36" y="28" width="8" height="44" fill="#ffffff" />
          <rect x="62" y="28" width="8" height="28" fill="#ffffff" />
          <defs>
            <linearGradient id="nextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'shopify':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Shopify Green Bag */}
          <path
            d="M 72 26 C 71 26 70 25 70 24 C 68 18 63 12 55 12 C 48 12 43 17 41 23 C 37 24 33 26 29 27 L 24 78 L 66 88 L 84 81 L 72 26 Z"
            fill="#96bf48"
          />
          <path
            d="M 50 17 C 54 17 58 20 60 25 L 43 28 C 44 21 47 17 50 17 Z"
            fill="#5e8e3e"
          />
          <path
            d="M 46 83 L 24 78 L 29 27 C 33 26 37 24 41 23 L 46 83 Z"
            fill="#7ab55c"
          />
          {/* White 'S' */}
          <path
            d="M 54 44 C 47 42 45 40 45 37 C 45 34 48 31 54 31 C 59 31 61 33 63 36 L 68 33 C 65 28 60 26 53 26 C 45 26 39 31 39 38 C 39 45 44 48 51 50 C 58 52 60 55 60 58 C 60 63 56 66 49 66 C 42 66 38 62 36 57 L 31 60 C 34 67 40 71 49 71 C 59 71 66 65 66 57 C 66 49 61 46 54 44 Z"
            fill="#ffffff"
          />
        </svg>
      );

    case 'liquid':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect width="100" height="100" rx="18" fill="#004c3f" />
          {/* Droplet + brackets */}
          <path
            d="M 50 18 C 50 18 30 42 30 58 C 30 69 39 78 50 78 C 61 78 70 69 70 58 C 70 42 50 18 50 18 Z"
            fill="#008060"
          />
          <path
            d="M 50 25 C 50 25 36 45 36 58 C 36 66 42 72 50 72 Z"
            fill="#5c6ac4"
            opacity="0.8"
          />
          <text
            x="50"
            y="62"
            fill="#ffffff"
            fontSize="22"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="monospace"
          >
            {'{{ }}'}
          </text>
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-white`}>
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'redux':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect width="100" height="100" rx="16" fill="#764abc" />
          {/* Triquetra / Atom */}
          <circle cx="50" cy="50" r="10" fill="#ffffff" />
          <ellipse cx="50" cy="50" rx="28" ry="12" fill="none" stroke="#ffffff" strokeWidth="4" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="28" ry="12" fill="none" stroke="#ffffff" strokeWidth="4" transform="rotate(90 50 50)" />
          <ellipse cx="50" cy="50" rx="28" ry="12" fill="none" stroke="#ffffff" strokeWidth="4" transform="rotate(150 50 50)" />
        </svg>
      );

    default:
      return (
        <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center font-bold text-[var(--color-accent)] text-xs">
          {id?.slice(0, 2)?.toUpperCase()}
        </div>
      );
  }
}

export default function TechStack() {
  const { t } = useLanguage();
  const tech = t.techStackSection || {};
  const skillsList = tech.skills || [];

  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: tech.tabAll || 'All' },
    { id: 'frontend', label: tech.tabFrontend || 'Frontend' },
    { id: 'backend', label: tech.tabBackend || 'Backend' },
    { id: 'database', label: tech.tabDatabase || 'Database' },
    { id: 'shopify', label: tech.tabShopify || 'Shopify' },
    { id: 'tools', label: tech.tabTools || 'Tools' }
  ];

  const filteredSkills =
    activeTab === 'all'
      ? skillsList
      : skillsList.filter((s) => {
          if (activeTab === 'shopify') {
            return s.category === 'shopify' || s.id === 'shopify' || s.id === 'liquid';
          }
          if (activeTab === 'frontend') {
            return s.category === 'frontend' || s.id === 'liquid';
          }
          if (activeTab === 'backend') {
            return s.category === 'backend' || s.id === 'firebase';
          }
          if (activeTab === 'tools') {
            return s.category === 'tools' || s.id === 'git' || s.id === 'github';
          }
          return s.category === activeTab;
        });

  return (
    <div className="space-y-8 pb-10">
      {/* ======================================================== */}
      {/* 1. Header Section matching Image 1                       */}
      {/* ======================================================== */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-xs text-[var(--color-text-secondary)] font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          <span>{tech.subtitle || 'Explore'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-chakra font-bold tracking-tight">
          <span className="text-[var(--color-text-primary)]">
            {tech.titlePrefix || 'My'}{' '}
          </span>
          <span className="text-[var(--color-accent)]">
            {tech.titleHighlight || 'Tech Stack'}
          </span>
        </h2>
      </div>

      {/* ======================================================== */}
      {/* 2. Filter Tabs matching Image 1 & 2                      */}
      {/* ======================================================== */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex flex-wrap justify-center p-1 rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] shadow-xs gap-1">
          {tabs.map((tab) => {
            const count =
              tab.id === 'all'
                ? skillsList.length
                : skillsList.filter((s) => {
                    if (tab.id === 'shopify') return s.category === 'shopify' || s.id === 'liquid';
                    if (tab.id === 'frontend') return s.category === 'frontend' || s.id === 'liquid';
                    if (tab.id === 'backend') return s.category === 'backend' || s.id === 'firebase';
                    if (tab.id === 'tools') return s.category === 'tools';
                    return s.category === tab.id;
                  }).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-chakra transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md shadow-purple-500/20'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-medium'
                }`}
              >
                {tab.label} {count > 0 && `(${count})`}
              </button>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. Tech Stack Grid matching Image 2 & 3                  */}
      {/* ======================================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4.5">
        {filteredSkills.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-purple-500/80 p-4 sm:p-5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 cursor-pointer select-none"
          >
            {/* Top Icon with 3D Flip/Spin on Hover (matching Image 3) */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] flex items-center justify-center p-2.5 shadow-inner transition-transform duration-700 ease-out [perspective:1000px] group-hover:[transform:rotateY(360deg)]">
              <TechLogo id={item.iconId || item.id} className="w-full h-full object-contain drop-shadow-sm" />
            </div>

            {/* Tech Name */}
            <span className="font-chakra text-xs sm:text-sm font-bold text-[var(--color-text-primary)] mt-3 tracking-tight truncate max-w-full">
              {item.name}
            </span>

            {/* Progress Bar matching Image 2 & 3 */}
            <div className="w-full h-1.5 rounded-full bg-[var(--color-window-bg)] border border-[var(--color-card-border)]/60 overflow-hidden mt-3 relative">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-700 ease-out"
                style={{ width: `${item.percentage}%` }}
              />
            </div>

            {/* Percentage Indicator matching Image 3 */}
            <div className="text-[11px] sm:text-xs font-chakra font-semibold text-purple-400 dark:text-purple-300 mt-1.5 transition-all duration-300 opacity-75 group-hover:opacity-100 group-hover:scale-105">
              {item.percentage}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
