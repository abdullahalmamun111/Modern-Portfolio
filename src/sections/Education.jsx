import React, { useState } from 'react';
import {
  Calendar,
  Building2,
  MapPin,
  Sparkles,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EducationAvatar } from '../components/Illustrations';
import CertificateModal from '../components/CertificateModal';

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
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
}
