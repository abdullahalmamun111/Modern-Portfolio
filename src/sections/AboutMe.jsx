import React, { useState } from 'react';
import { Calendar, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DataAnalystIllustration, CertAvatar, InterestIcon } from '../components/Illustrations';

export default function AboutMe() {
  const { t } = useLanguage();
  const about = t.aboutSection || {};
  const certData = t.certSection || {};
  const interests = t.interestsSection || {};
  const languages = t.languagesSection || {};

  // Active carousel index for certifications
  const [activeCertIndex, setActiveCertIndex] = useState(3); // 4th item active to match Image 2

  const certsList = certData.certs || [];
  // For desktop display 3 items centered around activeCertIndex or sliding window
  const visibleCerts = certsList.slice(0, 3);

  // Render Flag in Languages section
  const renderLangFlag = (flag) => {
    if (flag === 'us') {
      return (
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/80 shadow-md shrink-0">
          <svg viewBox="0 0 512 512" className="w-full h-full object-cover">
            <path fill="#bd3d44" d="M0 0h512v512H0z"/>
            <path stroke="#fff" strokeWidth="37" d="M0 55h512M0 129h512M0 203h512M0 277h512M0 351h512M0 425h512"/>
            <path fill="#192f5d" d="M0 0h256v256H0z"/>
            <circle cx="128" cy="128" r="70" fill="#fff" opacity="0.9"/>
          </svg>
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/80 shadow-md shrink-0">
        <svg viewBox="0 0 512 512" className="w-full h-full object-cover">
          <path fill="#ff9933" d="M0 0h512v170.7H0z"/>
          <path fill="#ffffff" d="M0 170.7h512v170.7H0z"/>
          <path fill="#128807" d="M0 341.3h512V512H0z"/>
          <circle cx="256" cy="256" r="45" fill="none" stroke="#000080" strokeWidth="10"/>
        </svg>
      </div>
    );
  };

  return (
    <div className="space-y-12 md:space-y-16 pb-8">
      {/* ======================================================== */}
      {/* 1. SECTION: A little bit about me... (Image 1)           */}
      {/* ======================================================== */}
      <section>
        {/* Section Heading with Accent Cyan Bar */}
        <div className="flex items-center space-x-3 mb-6 md:mb-8">
          <div className="w-1.5 h-6 bg-[var(--color-accent)] rounded-full shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-chakra tracking-tight">
            <span className="font-normal text-[var(--color-accent)]">
              {about.taglinePrefix}{' '}
            </span>
            <span className="font-bold text-[var(--color-text-primary)]">
              {about.taglineHighlight}
            </span>
          </h2>
        </div>

        {/* Content: Hexagon Illustration + Bio Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
          {/* Data Analyst Hexagon Illustration with desk lines */}
          <div className="shrink-0 transition-transform duration-300 hover:scale-105">
            <DataAnalystIllustration className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56" />
          </div>

          {/* Bio Text Paragraphs */}
          <div className="flex-1 space-y-4 text-[13px] sm:text-[14px] md:text-[14.5px] leading-relaxed text-[var(--color-text-secondary)]">
            <p
              dangerouslySetInnerHTML={{ __html: about.p1 || '' }}
              className="transition-colors"
            />
            <p
              dangerouslySetInnerHTML={{ __html: about.p2 || '' }}
              className="transition-colors"
            />
            <p
              dangerouslySetInnerHTML={{ __html: about.p3 || '' }}
              className="text-[var(--color-text-primary)] font-medium pt-1"
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SECTION: My Certifications (Image 2)                  */}
      {/* ======================================================== */}
      <section>
        {/* Section Heading */}
        <div className="flex items-center space-x-3 mb-6 md:mb-8">
          <div className="w-1.5 h-6 bg-[var(--color-accent)] rounded-full shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-chakra tracking-tight">
            <span className="font-bold text-[var(--color-text-primary)]">
              {certData.titlePrefix}{' '}
            </span>
            <span className="font-bold text-[var(--color-accent)]">
              {certData.titleHighlight}
            </span>
          </h2>
        </div>

        {/* 3 Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleCerts.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)] p-6 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              {/* Top right circular badge with trending up icon */}
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[var(--color-window-bg)]/80 border border-[var(--color-card-border)] flex items-center justify-center text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-all">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>

              {/* Avatar Photo / Logo */}
              <div className="mb-4 mt-1">
                <CertAvatar type={cert.badgeType} />
              </div>

              {/* Certificate Title */}
              <h3 className="text-[15px] sm:text-base font-chakra mb-2 tracking-tight">
                <span className="text-[var(--color-accent)] font-bold">
                  {cert.titlePrefix}{' '}
                </span>
                <span className="text-[var(--color-text-primary)] font-bold">
                  {cert.titleSuffix}
                </span>
              </h3>

              {/* Certificate Description */}
              <p className="text-[12px] sm:text-[12.5px] leading-relaxed text-[var(--color-text-secondary)] mb-5">
                {cert.issuer}
              </p>

              {/* Bottom Date Pill matching Image 2 */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-xs text-[var(--color-text-secondary)] font-medium">
                <Calendar className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots matching Image 2 */}
        <div className="flex items-center justify-center gap-2 mt-7">
          {[0, 1, 2, 3, 4].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveCertIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeCertIndex === idx
                  ? 'w-6 bg-[var(--color-accent)]'
                  : 'w-3.5 bg-[var(--color-card-border)] hover:bg-[var(--color-text-muted)]'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SECTION: Personal interests (Image 3)                 */}
      {/* ======================================================== */}
      <section>
        {/* Section Heading */}
        <div className="flex items-center space-x-3 mb-6 md:mb-8">
          <div className="w-1.5 h-6 bg-[var(--color-accent)] rounded-full shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-chakra tracking-tight">
            <span className="font-bold text-[var(--color-text-primary)]">
              {interests.titlePrefix}{' '}
            </span>
            <span className="font-bold text-[var(--color-accent)]">
              {interests.titleHighlight}
            </span>
          </h2>
        </div>

        {/* 2 columns x 3 rows grid matching Image 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {interests.items?.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)] p-4 sm:p-5 flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:shadow-md group cursor-default"
            >
              {/* Left Soft Rounded Icon Square */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[var(--color-accent)] transition-all">
                <InterestIcon type={item.iconType} />
              </div>

              {/* Right Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-chakra text-sm sm:text-base tracking-tight mb-1">
                  <span className="text-[var(--color-accent)] font-bold">
                    {item.highlight}{' '}
                  </span>
                  <span className="text-[var(--color-text-primary)] font-bold">
                    {item.rest}
                  </span>
                </h3>
                <p className="text-[11.5px] sm:text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. SECTION: Languages I speak (Image 3)                  */}
      {/* ======================================================== */}
      <section>
        {/* Section Heading */}
        <div className="flex items-center space-x-3 mb-6 md:mb-8">
          <div className="w-1.5 h-6 bg-[var(--color-accent)] rounded-full shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-chakra tracking-tight">
            <span className="font-bold text-[var(--color-accent)]">
              {languages.titlePrefix}{' '}
            </span>
            <span className="font-bold text-[var(--color-text-primary)]">
              {languages.titleHighlight}
            </span>
          </h2>
        </div>

        {/* Vertical List of Languages */}
        <div className="space-y-4">
          {languages.items?.map((lang) => (
            <div
              key={lang.id}
              className="flex items-start gap-4 p-2 rounded-xl hover:bg-[var(--color-card-bg)]/40 transition-colors"
            >
              {/* Circular Flag */}
              <div className="mt-0.5 shrink-0">
                {renderLangFlag(lang.flag)}
              </div>

              {/* Language Name & Description */}
              <div className="space-y-1">
                <div className="font-chakra text-sm sm:text-base tracking-tight">
                  <span className="font-bold text-[var(--color-text-primary)]">
                    {lang.name}
                  </span>
                  <span className="text-[var(--color-text-muted)] font-normal ml-2">
                    - {lang.proficiency}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                  {lang.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
