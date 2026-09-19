import React from 'react';
import { 
  Coffee, 
  Code2, 
  Heart, 
  ShoppingBag, 
  Calendar, 
  Building2, 
  MapPin, 
  Eye, 
  ExternalLink,
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

// Icon helper for the 4 circular stats
function getStatIcon(iconType) {
  const props = { className: "w-6 h-6 text-white" };
  switch (iconType) {
    case 'coffee':
      return <Coffee {...props} />;
    case 'code':
      return <Code2 {...props} />;
    case 'heart':
      return <Heart {...props} fill="currentColor" />;
    case 'store':
      return <ShoppingBag {...props} />;
    default:
      return <Layers {...props} />;
  }
}

export default function Updates() {
  const { t } = useLanguage();
  const upData = t.updatesSection || {};
  const stats = upData.stats || [];
  const items = upData.items || [];

  return (
    <div className="space-y-12 pb-8">
      {/* 1. Header matching screenshot */}
      <div className="text-center space-y-1.5 pt-2">
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          <Layers className="w-4 h-4 text-[var(--color-accent)]" />
          <span>{upData.subtitle || 'Take a look at my'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-chakra">
          <span className="text-[var(--color-text-primary)]">
            {upData.titlePrefix}{' '}
          </span>
          <span className="text-[var(--color-accent)]">
            {upData.titleHighlight}
          </span>
        </h2>
      </div>

      {/* 2. Fun Stats Cards (Top 4 Circles) */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((st) => (
            <div 
              key={st.id} 
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:shadow-md group"
            >
              {/* Circular Icon badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--color-window-bg)] border-2 border-[var(--color-card-border)] group-hover:border-[var(--color-accent)] flex items-center justify-center mb-3 shadow-sm transition-transform group-hover:scale-110">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-accent)]/80 flex items-center justify-center shadow-xs">
                  {getStatIcon(st.iconType)}
                </div>
              </div>
              <div className="font-chakra font-extrabold text-base sm:text-lg text-[var(--color-accent)]">
                {st.value}
              </div>
              <div className="text-xs text-[var(--color-text-muted)] mt-0.5">
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Slider Indicators as in screenshot */}
        <div className="flex justify-center items-center gap-1.5 pt-1">
          <span className="w-5 h-1 rounded-full bg-[var(--color-card-border)]" />
          <span className="w-5 h-1 rounded-full bg-[var(--color-card-border)]" />
          <span className="w-6 h-1 rounded-full bg-[var(--color-accent)]" />
          <span className="w-5 h-1 rounded-full bg-[var(--color-card-border)]" />
          <span className="w-5 h-1 rounded-full bg-[var(--color-card-border)]" />
        </div>
      </div>

      {/* 3. Life Updates Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2.5">
          <div className="w-1 h-5 bg-[var(--color-accent)] rounded-full" />
          <h3 className="text-xl sm:text-2xl font-bold font-chakra tracking-tight text-[var(--color-text-primary)]">
            <span>{upData.timelineTitlePrefix || 'Life'}{' '}</span>
            <span className="text-[var(--color-accent)]">
              {upData.timelineTitleHighlight || 'Updates'}
            </span>
          </h3>
        </div>

        {/* Timeline container */}
        <div className="relative pl-6 sm:pl-8 space-y-6">
          {/* Vertical Track Line */}
          <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-0.5 bg-[var(--color-card-border)]" />

          {items.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[23px] sm:-left-[27px] top-6 w-3 h-3 rounded-full bg-[var(--color-card-bg)] border-2 border-[var(--color-accent)] ring-4 ring-[var(--color-window-bg)] group-hover:scale-125 transition-transform" />

              {/* Update Card */}
              <div className="rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)]/60 p-5 sm:p-6 transition-all duration-300 hover:shadow-lg">
                {/* Header Row: Title & Date Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <h4 className="font-chakra font-bold text-base sm:text-lg text-[var(--color-text-primary)]">
                    <span>{item.titlePrefix} </span>
                    <span className="text-[var(--color-accent)]">{item.titleHighlight}</span>
                  </h4>

                  {/* Date Badge */}
                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-accent)] font-medium bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 px-2.5 py-1 rounded-full w-fit whitespace-nowrap shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Meta Row: Org & Location */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-text-muted)] mb-3">
                  {item.org && (
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {item.org}
                    </span>
                  )}
                  {item.location && (
                    <>
                      <span className="opacity-40">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        {item.location}
                      </span>
                    </>
                  )}
                </div>

                {/* Description Body */}
                <p className="text-xs sm:text-[13px] text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Footer Actions: "Get to know more" */}
                <div className="flex items-center gap-2 pt-3 border-t border-[var(--color-card-border)]/50">
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {upData.moreText || 'Get to know'} <strong className="text-[var(--color-text-primary)] font-semibold">{upData.moreHighlight || 'more'}:</strong>
                  </span>

                  <div className="flex items-center gap-1.5 ml-1">
                    {item.links?.github && (
                      <a
                        href={item.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="p-1.5 rounded-lg bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-colors cursor-pointer"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {item.links?.live && (
                      <a
                        href={item.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="p-1.5 rounded-lg bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {item.links?.external && (
                      <a
                        href={item.links.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="External Link"
                        className="p-1.5 rounded-lg bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}