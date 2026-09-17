import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();
  const edu = t.educationSection || {};
  const educationList = edu.items || [];

  return (
    <div className="space-y-8 pb-6">
      <div className="flex items-center space-x-2.5 mb-6">
        <div className="w-1.5 h-6 bg-[var(--color-accent)] rounded-full shrink-0" />
        <h2 className="text-xl sm:text-2xl font-chakra tracking-tight">
          <span className="font-bold text-[var(--color-text-primary)]">
            {edu.titlePrefix}{' '}
          </span>
          <span className="font-bold text-[var(--color-accent)]">
            {edu.titleHighlight}
          </span>
        </h2>
      </div>

      <div className="space-y-5">
        {educationList.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)] p-6 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-chakra text-base md:text-lg font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[var(--color-accent)]" />
                {item.degree}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-accent)] font-medium bg-[var(--color-accent-light)] px-2.5 py-1 rounded-full w-fit">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.period}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] mb-3">
              <span className="font-medium text-[var(--color-text-primary)]">{item.institution}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                {item.location}
              </span>
            </div>

            <p className="text-xs md:text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
