import React, { useRef, useEffect } from 'react';
import { X, MapPin, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Illustrations';
import { useLanguage } from '../context/LanguageContext';

import AboutMe from '../sections/AboutMe';
import Education from '../sections/Education';
import TechStack from '../sections/TechStack';
import Experience from '../sections/Experience';
import Portfolio from '../sections/Portfolio';
import Services from '../sections/Services';
import Updates from '../sections/Updates';
import Contact from '../sections/Contact';

export default function ContentWindow({ activeSection, setActiveSection }) {
  const { t } = useLanguage();
  const scrollContainerRef = useRef(null);

  // Scroll to top of content window when section switches
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />;
      case 'education':
        return <Education />;
      case 'techStack':
        return <TechStack />;
      case 'experience':
        return <Experience />;
      case 'portfolio':
        return <Portfolio />;
      case 'services':
        return <Services />;
      case 'updates':
        return <Updates />;
      case 'contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <main className="relative flex-1 h-full rounded-3xl window-panel flex flex-col overflow-hidden shadow-2xl transition-all duration-300">
      {/* Decorative Dashed Top-Left Corner Bracket matching Image 1 */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 pointer-events-none z-20 hidden xs:block">
        <svg width="40" height="40" sm:width="46" sm:height="46" viewBox="0 0 46 46" fill="none">
          <path
            d="M 1 45 L 1 1 L 45 1"
            stroke="var(--color-window-header-accent)"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Top-Right Window Control Button matching Image 1 */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
        <button
          onClick={() => setActiveSection('about')}
          title={t.actions.closeWindow}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-card-border)]/50 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* FIXED WINDOW HEADER: Greeting, Big Title, Metadata Links */}
      <header className="px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 pb-4 sm:pb-5 border-b border-[var(--color-window-border)]/50 shrink-0 text-center relative z-10">
        {/* "Hi there..." greeting with 3D isometric cube icon matching Image 1 */}
        <div className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-text-secondary)] mb-1">
          {/* Isometric cubes icon matching Image 1 */}
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--color-accent)] fill-current opacity-80" fill="none">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8L12 11.8 5.2 8 12 4.2zM5 9.7l6 3.4v6.8l-6-3.4V9.7zm8 10.2v-6.8l6-3.4v6.8l-6 3.4z"/>
          </svg>
          <span className="font-chakra tracking-wider">{t.greeting}</span>
        </div>

        {/* Big Name Title: "I'm Abdullah Al Mamun" matching Image 1 typography */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 font-chakra">
          <span className="text-[var(--color-text-primary)] font-normal">I'm </span>
          <span className="text-[var(--color-text-primary)] font-bold">{t.name} </span>
          <span className="text-[var(--color-window-header-accent)] font-bold">{t.surname}</span>
        </h1>

        {/* Info Meta Row: Location · Email · LinkedIn · GitHub */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:gap-x-4 text-[11px] sm:text-xs font-medium text-[var(--color-text-secondary)]">
          {/* Location */}
          <div className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
            <span>{t.location}</span>
          </div>

          <span className="text-[var(--color-text-muted)] opacity-60 hidden xs:inline">·</span>

          {/* Email */}
          <a
            href={`mailto:${t.email}`}
            className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
            <span>{t.email}</span>
          </a>

          <span className="text-[var(--color-text-muted)] opacity-60 hidden sm:inline">·</span>

          {/* LinkedIn */}
          <a
            href={t.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
            <span>{t.linkedin}</span>
          </a>

          <span className="text-[var(--color-text-muted)] opacity-60 hidden sm:inline">·</span>

          {/* GitHub */}
          <a
            href={t.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
            <span>{t.github}</span>
          </a>
        </div>
      </header>

      {/* SCROLLABLE CONTENT BODY: Content scrolls ONLY inside this container! */}
      <div
        ref={scrollContainerRef}
        className="flex-1 px-4 sm:px-6 md:px-10 py-6 overflow-y-auto custom-scrollbar"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="max-w-5xl mx-auto animate-in fade-in duration-300">
          {renderSection()}
        </div>
      </div>
    </main>
  );
}
