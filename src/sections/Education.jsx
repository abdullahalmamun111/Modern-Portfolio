import React, { useState } from 'react';
import {
  Calendar,
  Building2,
  MapPin,
  Sparkles,
  Award,
  ExternalLink,
  Download,
  X,
  FileText
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EducationAvatar } from '../components/Illustrations';

export default function Education() {
  const { t } = useLanguage();
  const edu = t.educationSection || {};
  const academicItems = edu.academicItems || [];
  const onlineItems = edu.onlineItems || [];

  const [activeTab, setActiveTab] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const allItems = [...academicItems, ...onlineItems];

  const filteredItems =
    activeTab === 'academic'
      ? academicItems
      : activeTab === 'online'
      ? onlineItems
      : allItems;

  return (
    <div className="space-y-8 pb-10">
      {/* ======================================================== */}
      {/* 1. Header Section matching Image 1                       */}
      {/* ======================================================== */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-xs text-[var(--color-text-secondary)] font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          <span>{edu.subtitle || 'This is my'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-chakra font-bold tracking-tight">
          <span className="text-[var(--color-accent)]">
            {edu.titlePrefix || 'Education'}{' '}
          </span>
          <span className="text-[var(--color-text-primary)]">
            {edu.titleHighlight || 'Background'}
          </span>
        </h2>
      </div>

      {/* ======================================================== */}
      {/* 2. Filter Tabs matching Image 1                          */}
      {/* ======================================================== */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="inline-flex p-1 rounded-xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] shadow-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-chakra transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[var(--color-accent)] text-slate-950 font-bold shadow-sm'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-medium'
            }`}
          >
            {edu.tabAll || 'All'} ({allItems.length})
          </button>
          <button
            onClick={() => setActiveTab('academic')}
            className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-chakra transition-all cursor-pointer ${
              activeTab === 'academic'
                ? 'bg-[var(--color-accent)] text-slate-950 font-bold shadow-sm'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-medium'
            }`}
          >
            {edu.tabAcademic || 'Academic'} ({academicItems.length})
          </button>
          <button
            onClick={() => setActiveTab('online')}
            className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-chakra transition-all cursor-pointer ${
              activeTab === 'online'
                ? 'bg-[var(--color-accent)] text-slate-950 font-bold shadow-sm'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-medium'
            }`}
          >
            {edu.tabOnline || 'Online Courses'} ({onlineItems.length})
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. Timeline Items matching Image 1 & 2                   */}
      {/* ======================================================== */}
      <div className="relative pl-6 sm:pl-16 space-y-8 sm:space-y-10">
        {/* Continuous vertical timeline line */}
        <div className="absolute left-6 sm:left-7 top-4 bottom-4 w-0.5 bg-[var(--color-card-border)]/80 dark:bg-slate-700/60" />

        {filteredItems.map((item, idx) => (
          <div key={item.id || idx} className="relative flex items-start gap-4 sm:gap-6 group">
            {/* Timeline Left Avatar Circle */}
            <div className="absolute -left-6 sm:-left-7 top-4 -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
              <EducationAvatar type={item.badgeType} />
            </div>

            {/* Timeline Right Content Card */}
            <div className="flex-1 rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)] p-5 sm:p-7 transition-all duration-300 hover:shadow-lg">
              {/* Card Top Row: Title & Date Pill */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-2">
                <h3 className="font-chakra text-base sm:text-lg md:text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
                  {item.degree}
                </h3>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-xs text-[var(--color-text-secondary)] font-medium w-fit shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Sub-row: Institution, Location, Grade & Status Badges */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[var(--color-text-secondary)] mb-4">
                <span className="flex items-center gap-1.5 font-medium text-[var(--color-text-primary)]">
                  <Building2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  {item.institution}
                </span>

                {item.location && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {item.location}
                    </span>
                  </>
                )}

                {item.grade && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                    {item.grade}
                  </span>
                )}

                {item.status && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30">
                    {item.status}
                  </span>
                )}

                {item.hasCertificate && (
                  <button
                    onClick={() => setSelectedCert(item)}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[var(--color-accent)] text-slate-950 hover:opacity-90 transition-opacity cursor-pointer shadow-xs ml-auto"
                  >
                    <Award className="w-3.5 h-3.5" /> View Certificate
                  </button>
                )}
              </div>

              {/* Body Paragraph */}
              <p className="text-xs sm:text-[13px] md:text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed">
                {item.description}
              </p>

              {/* Bullet Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-3.5 space-y-2 text-xs sm:text-[13px] text-[var(--color-text-secondary)]">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Bottom Tags matching Image 1 */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-5 pt-3.5 border-t border-[var(--color-card-border)]/50">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] sm:text-xs font-medium bg-[#1e4a68]/15 dark:bg-[#1e4a68]/40 border border-[#2b6b94]/30 text-[var(--color-accent)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ======================================================== */}
      {/* 4. CERTIFICATE MODAL POPUP                               */}
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
                    {selectedCert.degree}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[var(--color-text-secondary)] truncate">
                    {selectedCert.institution} • {selectedCert.period}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {selectedCert.certFile && (
                  <a
                    href={selectedCert.certFile}
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
            <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1 flex flex-col items-center">
              {selectedCert.certFile && (
                <div className="w-full flex flex-col items-center gap-3.5">
                  <div className="w-full rounded-xl overflow-hidden border border-[var(--color-card-border)] bg-black/40 flex items-center justify-center p-1 sm:p-2 shadow-inner">
                    <img
                      src={selectedCert.certFile}
                      alt={selectedCert.degree}
                      className="max-h-[60vh] w-auto max-w-full object-contain rounded-lg shadow-md"
                    />
                  </div>

                  <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-muted)] pt-1 px-1">
                    <p className="text-center sm:text-left text-[var(--color-text-secondary)] leading-relaxed">
                      {selectedCert.description}
                    </p>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={selectedCert.certFile}
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
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
