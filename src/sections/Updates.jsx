import React from 'react';
import { Rss, Bell, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Updates() {
  const updates = [
    {
      date: "September 2026",
      title: "Completed Advanced Data Engineering Specialization",
      tag: "Milestone",
      body: "Deepened proficiency in PostgreSQL optimization, ETL pipeline architecture, and automated cloud data workflows."
    },
    {
      date: "August 2026",
      title: "Published Open Source Power BI Template Library",
      tag: "Community",
      body: "Released a reusable collection of clean minimal theme palettes and pre-configured DAX measures for executive reporting."
    },
    {
      date: "July 2026",
      title: "Exploratory Data Analysis on Global Health Trends",
      tag: "Research",
      body: "Analyzed WHO datasets utilizing Python and Seaborn, publishing findings on interactive web dashboards."
    }
  ];

  return (
    <div className="space-y-8 pb-6">
      <div className="flex items-center space-x-2.5 mb-6">
        <div className="w-1 h-5 bg-[var(--color-accent)] rounded-full" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
          <span className="font-light text-[var(--color-text-secondary)]">Recent </span>
          <span>Updates & Feed</span>
        </h2>
      </div>

      <div className="space-y-4">
        {updates.map((up, i) => (
          <div
            key={i}
            className="rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)] p-5 transition-all duration-300 hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-[var(--color-accent)] px-2 py-0.5 rounded-full bg-[var(--color-accent-light)]">
                  {up.tag}
                </span>
                <span className="text-[11px] text-[var(--color-text-muted)]">{up.date}</span>
              </div>
              <h3 className="font-bold text-sm text-[var(--color-text-primary)]">
                {up.title}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {up.body}
              </p>
            </div>
            <button className="self-end sm:self-center p-2 rounded-xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all cursor-pointer">
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
