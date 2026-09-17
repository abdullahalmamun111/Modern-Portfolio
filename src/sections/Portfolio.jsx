import React from 'react';
import { ExternalLink, BarChart3, Database, Globe } from 'lucide-react';
import { GithubIcon } from '../components/Illustrations';

export default function Portfolio() {
  const projects = [
    {
      title: "Global Sales & Profit Intelligence Dashboard",
      tag: "Power BI & SQL",
      description: "Interactive multi-page BI reporting system modeling 500k+ global transactions, featuring forecasting, drill-down KPIs, and customer lifetime value metrics.",
      icon: BarChart3,
      tags: ["Power BI", "SQL", "DAX", "Data Modeling"]
    },
    {
      title: "E-Commerce Customer Churn Prediction Engine",
      tag: "Python & Machine Learning",
      description: "Supervised machine learning pipeline evaluating customer behavior to forecast churn risk with 89% accuracy using Random Forest and XGBoost.",
      icon: Database,
      tags: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"]
    },
    {
      title: "Real-Time Financial Sentiment & Market Trends",
      tag: "Data Scraping & NLP",
      description: "Automated ETL script fetching news headlines and Twitter feeds to analyze investor sentiment using VADER sentiment analysis.",
      icon: Globe,
      tags: ["Python", "BeautifulSoup", "NLTK", "Plotly"]
    }
  ];

  return (
    <div className="space-y-8 pb-6">
      <div className="flex items-center space-x-2.5 mb-6">
        <div className="w-1 h-5 bg-[var(--color-accent)] rounded-full" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
          <span className="font-light text-[var(--color-text-secondary)]">Featured </span>
          <span>Portfolio Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((proj, i) => {
          const Icon = proj.icon;
          return (
            <div
              key={i}
              className="rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors p-1 cursor-pointer">
                      <GithubIcon className="w-4 h-4" />
                    </button>
                    <button className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors p-1 cursor-pointer">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-[11px] font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                  {proj.tag}
                </div>

                <h3 className="font-bold text-sm md:text-base text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                  {proj.title}
                </h3>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--color-card-border)]/50">
                {proj.tags.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2 py-0.5 rounded bg-[var(--color-window-bg)] text-[var(--color-text-muted)] font-medium"
                  >
                    {t}
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
