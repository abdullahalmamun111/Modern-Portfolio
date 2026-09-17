import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
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

      <div className="space-y-5">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)] p-6 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-chakra text-base md:text-lg font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[var(--color-accent)]" />
                {exp.role}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-accent)] font-medium bg-[var(--color-accent-light)] px-2.5 py-1 rounded-full w-fit">
                <Calendar className="w-3.5 h-3.5" />
                <span>{exp.period}</span>
              </div>
            </div>

            <div className="text-xs font-medium text-[var(--color-accent)] mb-4">
              {exp.company} • <span className="text-[var(--color-text-muted)]">{exp.type}</span>
            </div>

            <ul className="space-y-2">
              {exp.highlights.map((h, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2 text-xs md:text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
