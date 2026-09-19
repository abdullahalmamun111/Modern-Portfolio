import React, { useState } from 'react';
import { Calendar, TrendingUp, X, ExternalLink, Download, ShieldCheck, FileText, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DataAnalystIllustration, CertAvatar, InterestIcon } from '../components/Illustrations';

export default function AboutMe() {
  const { t } = useLanguage();
  const about = t.aboutSection || {};
  const certData = t.certSection || {};
  const interests = t.interestsSection || {};
  const languages = t.languagesSection || {};

  // Active carousel index for certifications
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  // Certificate Modal State
  const [selectedCert, setSelectedCert] = useState(null);

  const certsList = certData.certs || [];
  // For desktop display 3 items sliding window
  const maxStart = Math.max(0, certsList.length - 3);
  const safeStart = Math.min(activeCertIndex, maxStart);
  const visibleCerts = certsList.slice(safeStart, safeStart + 3);

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
    if (flag === 'bd') {
      return (
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/80 shadow-md shrink-0">
          <svg viewBox="0 0 512 512" className="w-full h-full object-cover">
            <rect width="512" height="512" fill="#006a4e" />
            <circle cx="230" cy="256" r="140" fill="#f42a41" />
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
              onClick={() => setSelectedCert(cert)}
              className="group relative rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)] p-6 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              {/* Top right circular badge with arrow / trending up icon */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCert(cert);
                }}
                aria-label="View Certificate"
                title={cert.hasFile ? "View Certificate" : "Certificate Info"}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[var(--color-window-bg)]/80 border border-[var(--color-card-border)] flex items-center justify-center text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)] hover:scale-110 active:scale-95 transition-all cursor-pointer z-10"
              >
                <TrendingUp className="w-3.5 h-3.5" />
              </button>

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

        {/* Carousel Pagination Dots */}
        {maxStart > 0 && (
          <div className="flex items-center justify-center gap-2 mt-7">
            {Array.from({ length: maxStart + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCertIndex(idx)}
                aria-label={`Page ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCertIndex === idx
                    ? 'w-6 bg-[var(--color-accent)]'
                    : 'w-3.5 bg-[var(--color-card-border)] hover:bg-[var(--color-text-muted)]'
                }`}
              />
            ))}
          </div>
        )}
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

      {/* ======================================================== */}
      {/* 5. CERTIFICATE MODAL POPUP                               */}
      {/* ======================================================== */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[var(--color-card-border)] bg-[var(--color-card-bg)]">
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base md:text-lg font-chakra font-bold text-[var(--color-text-primary)] truncate">
                    {selectedCert.titlePrefix} {selectedCert.titleSuffix}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[var(--color-text-secondary)] truncate">
                    {selectedCert.issuerName || 'Verified Credential'} • {selectedCert.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {selectedCert.hasFile && (selectedCert.certImage || selectedCert.certFile) && (
                  <a
                    href={selectedCert.certImage || selectedCert.certFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-accent)] text-slate-950 text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Open Full Size</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-card-border)] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1 flex flex-col">
              {selectedCert.hasFile && (selectedCert.certImage || selectedCert.certFile) ? (
                /* High-Res Certificate Image Viewer */
                <div className="w-full flex flex-col items-center gap-3.5">
                  <div className="w-full rounded-xl overflow-hidden border border-[var(--color-card-border)] bg-black/40 flex items-center justify-center p-1 sm:p-2 shadow-inner">
                    <img
                      src={selectedCert.certImage || selectedCert.certFile}
                      alt={`${selectedCert.titlePrefix} ${selectedCert.titleSuffix}`}
                      className="max-h-[60vh] w-auto max-w-full object-contain rounded-lg shadow-md"
                    />
                  </div>

                  <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-muted)] pt-1 px-1">
                    <p className="text-center sm:text-left text-[var(--color-text-secondary)] leading-relaxed">
                      {selectedCert.issuer}
                    </p>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={selectedCert.certImage || selectedCert.certFile}
                        download="Abdullah_Almamun_Certificate.jpg"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-accent)] text-slate-950 font-semibold hover:opacity-90 transition-opacity"
                      >
                        <Download className="w-3.5 h-3.5" /> Download Image
                      </a>
                      {selectedCert.certPdf && (
                        <a
                          href={selectedCert.certPdf}
                          download="Abdullah_Almamun_Certificate.pdf"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-text-primary)] font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
                        >
                          <FileText className="w-3.5 h-3.5" /> PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* Meaningful details for certifications without uploaded file */
                <div className="w-full py-4 sm:py-8 px-2 max-w-lg mx-auto flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)] shadow-lg shadow-[var(--color-accent)]/10">
                    <ShieldCheck className="w-8 h-8" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                      Verified Curriculum Completed
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-chakra text-[var(--color-text-primary)]">
                      {selectedCert.titlePrefix} {selectedCert.titleSuffix}
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      Institution: <span className="text-[var(--color-text-primary)] font-medium">{selectedCert.issuerName || 'Accredited Institution'}</span> • Completed: <span className="text-[var(--color-text-primary)] font-medium">{selectedCert.date}</span>
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-left w-full space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)]">
                      <FileText className="w-4 h-4 shrink-0" />
                      <span>Certification Details</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                      {selectedCert.issuer}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/90 text-left w-full flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <p className="leading-relaxed">
                      The official digital credential document for this course will be uploaded here shortly. Proof of completion and verified project submissions can be provided upon request.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-5 py-2 rounded-xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-xs font-medium text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
