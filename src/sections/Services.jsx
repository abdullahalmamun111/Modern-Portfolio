import React from 'react';
import { LineChart, Database, FileSpreadsheet, Cpu, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Interactive BI Dashboard Development",
      description: "Designing end-to-end Power BI & Tableau dashboards with dynamic DAX metrics, automated drill-downs, and executive visual reporting.",
      icon: LineChart
    },
    {
      title: "Data Cleaning & Preprocessing",
      description: "Transforming unstructured or noisy business data into clean, structured schemas ready for rigorous analysis and statistical modeling.",
      icon: Database
    },
    {
      title: "Advanced Excel Automation & Modeling",
      description: "Building complex financial models, automated Pivot tables, Power Query macros, and custom business analysis workbooks.",
      icon: FileSpreadsheet
    },
    {
      title: "Predictive Analytics & Machine Learning",
      description: "Implementing statistical algorithms in Python to uncover correlations, cluster behavior, and forecast future business trends.",
      icon: Cpu
    }
  ];

  return (
    <div className="space-y-8 pb-6">
      <div className="flex items-center space-x-2.5 mb-6">
        <div className="w-1 h-5 bg-[var(--color-accent)] rounded-full" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
          <span className="font-light text-[var(--color-text-secondary)]">Specialized </span>
          <span>Services</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)] p-6 transition-all duration-300 hover:shadow-md group"
            >
              <div className="p-3 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)] w-fit mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm md:text-base text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                {srv.title}
              </h3>
              <p className="text-xs md:text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                {srv.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
