import React from 'react';
import { Database, LineChart, Code2, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TechStack() {
  const { t } = useLanguage();
  const tech = t.techStackSection || {};
  const categories = tech.categories || [];

  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return LineChart;
      case 1:
        return Code2;
      case 2:
        return Database;
      default:
        return Terminal;
    }
  };

  return (
    <div className="space-y-8 pb-6">
      <div className="flex items-center space-x-2.5 mb-6">
        <div className="w-1.5 h-6 bg-[var(--color-accent)] rounded-full shrink-0" />
        <h2 className="text-xl sm:text-2xl font-chakra tracking-tight">
          <span className="font-bold text-[var(--color-text-primary)]">
            {tech.titlePrefix}{' '}
          </span>
          <span className="font-bold text-[var(--color-accent)]">
            {tech.titleHighlight}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((cat, i) => {
          const Icon = getIcon(i);
          return (
            <div
              key={i}
              className="rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)] p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-chakra font-bold text-sm md:text-base text-[var(--color-text-primary)]">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-[var(--color-text-secondary)] font-medium hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
