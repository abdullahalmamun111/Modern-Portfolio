import React from 'react';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const expData = t.experienceSection || {};
  const experiences = expData.items || [];

  return (
    <div className="space-y-8 pb-6">
      <div className="flex items-center space-x-2.5 mb-6">
        <div className="w-1.5 h-6 bg-[var(--color-accent)] rounded-full shrink-0" />
        <h2 className="text-xl sm:text-2xl font-chakra tracking-tight">
          <span className="font-bold text-[var(--color-text-primary)]">
            {expData.titlePrefix}{' '}
          </span>
          <span className="font-bold text-[var(--color-accent)]">
            {expData.titleHighlight}
          </span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative space-y-5">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/40 to-transparent hidden sm:block" />

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative flex gap-4 sm:gap-6"
          >
            {/* Timeline dot (desktop) */}
            <div className="hidden sm:flex flex-col items-center shrink-0 z-10">
              <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center shadow-md ${
                idx === 0
                  ? 'bg-gradient-to-br from-purple-500 to-indigo-600 border-purple-400 shadow-purple-500/30'
                  : 'bg-[var(--color-card-bg)] border-[var(--color-accent)]/60'
              }`}>
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company} className="w-7 h-7 object-cover rounded-lg" />
                ) : (
                  <Briefcase className={`w-4 h-4 ${idx === 0 ? 'text-white' : 'text-[var(--color-accent)]'}`} />
                )}
              </div>
            </div>

            {/* Card */}
            <div className="flex-1 rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)]/70 p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent)]/10 hover:-translate-y-0.5">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-3 sm:hidden">
                  {exp.logo ? (
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-[var(--color-card-border)] bg-white shrink-0 p-0.5 shadow-xs">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover rounded-lg" />
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                  )}
                  <h3 className="font-chakra text-base font-bold text-[var(--color-text-primary)]">
                    {exp.role}
                  </h3>
                </div>
                <h3 className="font-chakra text-base md:text-lg font-bold text-[var(--color-text-primary)] hidden sm:block">
                  {exp.role}
                </h3>
                {/* Period badge */}
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-accent)] font-medium bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 px-2.5 py-1 rounded-full w-fit whitespace-nowrap shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Company + location + type */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                <span className="text-xs font-semibold text-[var(--color-accent)]">{exp.company}</span>
                {exp.location && (
                  <>
                    <span className="text-[var(--color-text-muted)] opacity-50 text-xs">•</span>
                    <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </>
                )}
                {exp.type && (
                  <>
                    <span className="text-[var(--color-text-muted)] opacity-50 text-xs">•</span>
                    <span className="text-xs text-[var(--color-text-muted)] italic">{exp.type}</span>
                  </>
                )}
              </div>

              {/* Highlights */}
              <ul className="space-y-2">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 text-xs md:text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
