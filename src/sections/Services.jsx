import React from 'react';
import { 
  ShoppingBag, 
  Code2, 
  Layers, 
  Palette, 
  Puzzle, 
  Wrench, 
  Sparkles,
  Quote
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Helper for 'What I do' icons
function getServiceIcon(iconType) {
  const props = { className: "w-5 h-5 text-[var(--color-accent)]" };
  switch (iconType) {
    case 'store':
      return <ShoppingBag {...props} />;
    case 'liquid':
      return <Code2 {...props} />;
    case 'mern':
      return <Layers {...props} />;
    case 'ui':
      return <Palette {...props} />;
    case 'apps':
      return <Puzzle {...props} />;
    case 'troubleshoot':
      return <Wrench {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}

export default function Services() {
  const { t } = useLanguage();
  const srvData = t.servicesSection || {};
  const testimonials = srvData.testimonials || [];
  const workflow = srvData.workflow || [];

  return (
    <div className="space-y-12 pb-8">
      {/* 1. Header Section */}
      <div className="text-center space-y-1.5 pt-2">
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
          <span>{srvData.subtitle || 'You can hire me for'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-chakra">
          <span className="text-[var(--color-text-primary)]">
            {srvData.titlePrefix}{' '}
          </span>
          <span className="text-[var(--color-accent)]">
            {srvData.titleHighlight}
          </span>
        </h2>
      </div>

      {/* 2. Intro Showcase (Illustration + Bio & WhatsApp CTA) */}
      <div className="flex flex-col md:flex-row items-center gap-8 rounded-3xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] p-6 sm:p-8">
        {/* Left Graphic Badge */}
        <div className="shrink-0 flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr from-[var(--color-accent)]/20 via-[var(--color-accent)]/5 to-transparent border border-[var(--color-accent)]/30 shadow-inner p-4 relative group">
          <div className="w-full h-full rounded-2xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] flex flex-col items-center justify-center gap-2 text-center p-3 shadow-sm group-hover:scale-105 transition-transform duration-300">
            <ShoppingBag className="w-9 h-9 text-[var(--color-accent)]" />
            <div className="font-chakra font-bold text-xs uppercase tracking-wider text-[var(--color-text-primary)]">
              Shopify & Web
            </div>
            <span className="text-[10px] text-[var(--color-accent)] font-mono bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full border border-[var(--color-accent)]/20">
              8.5+ Mo Exp
            </span>
          </div>
        </div>

        {/* Right Intro Description */}
        <div className="space-y-4 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
          <p>{srvData.introP1}</p>
          <p>
            {srvData.introP2}{' '}
            <a
              href="https://wa.me/01835371391" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              {srvData.whatsappCta || "Don't hesitate to contact me on WhatsApp by Clicking now."}
            </a>
          </p>
        </div>
      </div>

      {/* 3. Client Testimonials Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2.5">
          <div className="w-1 h-5 bg-[var(--color-accent)] rounded-full" />
          <h3 className="text-xl sm:text-2xl font-bold font-chakra tracking-tight text-[var(--color-text-primary)]">
            <span>{srvData.testimonialsTitlePrefix || 'Client'}{' '}</span>
            <span className="text-[var(--color-accent)]">
              {srvData.testimonialsTitleHighlight || 'testimonials'}
            </span>
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi) => (
            <div key={testi.id} className="flex flex-col items-center">
              {/* Speech Bubble Card */}
              <div className="w-full relative rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 p-5 sm:p-6 transition-all duration-300 shadow-sm flex flex-col justify-between">
                <Quote className="w-4 h-4 text-[var(--color-accent)]/60 mb-2 shrink-0" />
                <p className="text-xs sm:text-[13px] text-[var(--color-text-secondary)] leading-relaxed italic">
                  "{testi.quote}"
                </p>
                {/* Speech bubble downward arrow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-card-bg)] border-b border-r border-[var(--color-card-border)] rotate-45" />
              </div>

              {/* Client Info below bubble */}
              <div className="flex flex-col items-center mt-5 text-center">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-accent)]/40 shadow-sm mb-2"
                />
                <h4 className="font-bold text-sm font-chakra text-[var(--color-text-primary)]">
                  {testi.name}
                </h4>
                <span className="text-[11px] text-[var(--color-text-muted)]">
                  {testi.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. What I Do Section (Skills & Progress Bars) */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center space-x-2.5">
          <div className="w-1 h-5 bg-[var(--color-accent)] rounded-full" />
          <h3 className="text-xl sm:text-2xl font-bold font-chakra tracking-tight text-[var(--color-text-primary)]">
            <span>{srvData.whatIDoTitlePrefix || 'What'}{' '}</span>
            <span className="text-[var(--color-accent)]">
              {srvData.whatIDoTitleHighlight || 'I do'}
            </span>
          </h3>
        </div>

        {/* 2 Rows x 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflow.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)]/60 p-4 sm:p-5 transition-all duration-300 hover:shadow-md"
            >
              {/* Left Circle Icon */}
              <div className="w-10 h-10 rounded-xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                {getServiceIcon(item.iconType)}
              </div>

              {/* Right Content & Progress Bar */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2 mb-1.5">
                  <h4 className="font-bold font-chakra text-xs sm:text-sm text-[var(--color-text-primary)] truncate">
                    <span className="text-[var(--color-accent)]">{item.titlePrefix} </span>
                    <span>{item.titleSuffix}</span>
                  </h4>
                  <span className="text-xs font-mono font-bold text-[var(--color-text-muted)] shrink-0">
                    {item.percentage}%
                  </span>
                </div>

                {/* Progress Line */}
                <div className="w-full h-1.5 rounded-full bg-[var(--color-window-bg)] border border-[var(--color-card-border)]/50 overflow-hidden mb-2">
                  <div
                    className="h-full bg-[var(--color-accent)] rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}