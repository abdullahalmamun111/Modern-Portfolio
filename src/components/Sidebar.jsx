import React, { useState, useRef } from 'react';
import {
  UserCheck,
  GraduationCap,
  Wrench,
  Briefcase,
  Folder,
  Code,
  Rss,
  SquarePen,
  ChevronLeft,
  ChevronRight,
  Snowflake,
  Moon,
  Flame,
  Wand2,
  FileDown,
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { AvatarPortrait, BangladeshFlag, UsFlag } from './Illustrations';
import AudioPronunciation from './AudioPronunciation';
import LanguageDropdown from './popups/LanguageDropdown';
import ThemeDropdown from './popups/ThemeDropdown';
import confetti from 'canvas-confetti';

export default function Sidebar({
  activeSection,
  setActiveSection,
  isCollapsed,
  setIsCollapsed,
  magicCursorEnabled,
  setMagicCursorEnabled,
  showToast,
  isMobile = false,
  onCloseMobile
}) {
  const { t, activeLanguageObj } = useLanguage();
  const { theme } = useTheme();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const langBtnRef = useRef(null);
  const themeBtnRef = useRef(null);

  const navItems = [
    { id: 'about', label: t.nav.about, icon: UserCheck },
    { id: 'education', label: t.nav.education, icon: GraduationCap },
    { id: 'techStack', label: t.nav.techStack, icon: Wrench },
    { id: 'experience', label: t.nav.experience, icon: Briefcase },
    { id: 'portfolio', label: t.nav.portfolio, icon: Folder },
    { id: 'services', label: t.nav.services, icon: Code },
    { id: 'updates', label: t.nav.updates, icon: Rss },
    { id: 'contact', label: t.nav.contact, icon: SquarePen }
  ];

  // Handle Resume Download
  const handleDownloadResume = () => {
    showToast(t.actions.resumeDownloading);
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abdullah_Al_Mamun_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.9, x: 0.1 }
    });

    setTimeout(() => {
      showToast(t.actions.resumeDownloaded);
    }, 800);
  };

  // Active Theme Icon
  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'midnight':
        return <Flame className="w-4 h-4" />;
      default:
        return <Snowflake className="w-4 h-4" />;
    }
  };

  // Flag Icon
  const renderActiveFlag = () => {
    if (activeLanguageObj.flag === 'bd' || activeLanguageObj.code === 'bn') {
      return <BangladeshFlag className="w-4 h-4" />;
    }
    if (activeLanguageObj.flag === 'us' || activeLanguageObj.code === 'en') {
      return <UsFlag className="w-4 h-4" />;
    }
    return (
      <span className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-slate-300/40">
        <svg viewBox="0 0 512 512" className="w-full h-full object-cover">
          <path fill="#ff9933" d="M0 0h512v170.7H0z"/>
          <path fill="#ffffff" d="M0 170.7h512v170.7H0z"/>
          <path fill="#128807" d="M0 341.3h512V512H0z"/>
          <circle cx="256" cy="256" r="45" fill="none" stroke="#000080" strokeWidth="10"/>
        </svg>
      </span>
    );
  };

  return (
    <aside
      className={`relative flex flex-col justify-between ${
        isMobile ? 'w-full h-full rounded-2xl p-4' : 'rounded-3xl glass-panel'
      } transition-all duration-300 z-30 select-none ${
        !isMobile ? (isCollapsed ? 'w-20 px-2.5 py-6' : 'w-64 xl:w-72 px-5 py-6') : ''
      } h-full shrink-0 shadow-lg`}
    >
      {/* Desktop Collapse/Expand Toggle Tab on Right Edge matching Image 1 & 2 */}
      {!isMobile && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? t.actions.expandSidebar : t.actions.collapseSidebar}
          className="absolute -right-3.5 top-16 w-7 h-7 rounded-full bg-[var(--color-window-bg)] border border-[var(--color-sidebar-border)] shadow-md flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:scale-110 transition-all cursor-pointer z-40"
        >
          {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
        </button>
      )}

      {/* Mobile Close Button in Drawer Header */}
      {isMobile && (
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-[var(--color-sidebar-border)]/60">
          <span className="font-chakra font-bold text-sm text-[var(--color-text-primary)]">
            Navigation Menu
          </span>
          <button
            onClick={onCloseMobile}
            className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            ✕
          </button>
        </div>
      )}

      {/* TOP SECTION: Avatar & Profile Info */}
      <div className="flex flex-col items-center text-center">
        {/* Profile Avatar */}
        <div className="transition-all duration-300 mb-3">
          <AvatarPortrait className={isCollapsed && !isMobile ? 'w-12 h-12 rounded-xl' : 'w-22 h-22 sm:w-24 sm:h-24'} />
        </div>

        {/* Name & Audio Pronunciation Button */}
        {(!isCollapsed || isMobile) && (
          <div className="flex flex-col items-center animate-in fade-in duration-200">
            <div className="flex items-center space-x-1.5 font-bold text-base xl:text-lg tracking-tight">
              <span className="text-[var(--color-text-primary)] font-chakra text-lg xl:text-xl">
                {t.name}
              </span>
              <span className="text-[var(--color-accent)] font-chakra text-lg xl:text-xl">
                {t.surname}
              </span>
              <AudioPronunciation name={`${t.name} ${t.surname}`} />
            </div>

            {/* Subtitle / Role */}
            <p className="text-[11.5px] font-medium text-[var(--color-text-secondary)] mt-0.5 tracking-wide">
              {t.title}
            </p>
          </div>
        )}
      </div>

      {/* MIDDLE SECTION: Navigation Menu */}
      <nav className="my-4 flex flex-col space-y-1 overflow-y-auto custom-scrollbar max-h-[calc(100vh-280px)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              title={isCollapsed ? item.label : undefined}
              className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl font-medium text-[13px] xl:text-[13.5px] transition-all cursor-pointer text-left group ${
                isActive
                  ? 'bg-[var(--color-nav-active-bg)] text-[var(--color-nav-active-text)] shadow-sm'
                  : 'text-[var(--color-nav-text)] hover:bg-[var(--color-nav-hover-bg)] hover:text-[var(--color-nav-hover-text)]'
              } ${isCollapsed ? 'justify-center px-2' : ''}`}
            >
              <Icon
                className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                  isActive ? 'text-white' : 'text-[var(--color-nav-text)]'
                }`}
              />
              {!isCollapsed && (
                <span className="truncate tracking-wide">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* BOTTOM TOOLBAR: Language, Theme, Magic Cursor, Resume Download */}
      <div className="relative pt-3 border-t border-[var(--color-sidebar-border)]/50">
        <div className={`flex items-center justify-between ${isCollapsed ? 'flex-col gap-2' : 'px-1'}`}>
          {/* 1. Smart Language Switcher */}
          <div className="relative">
            <button
              ref={langBtnRef}
              onClick={() => {
                setIsLangOpen(!isLangOpen);
                setIsThemeOpen(false);
              }}
              title={t.actions.toggleLanguage}
              className="flex items-center space-x-1 p-1.5 rounded-lg text-[var(--color-toolbar-icon)] hover:text-[var(--color-toolbar-icon-hover)] hover:bg-[var(--color-nav-hover-bg)] transition-all cursor-pointer"
            >
              {renderActiveFlag()}
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>
            <LanguageDropdown
              isOpen={isLangOpen}
              onClose={() => setIsLangOpen(false)}
              anchorRef={langBtnRef}
            />
          </div>

          {/* 2. Theme Switcher */}
          <div className="relative">
            <button
              ref={themeBtnRef}
              onClick={() => {
                setIsThemeOpen(!isThemeOpen);
                setIsLangOpen(false);
              }}
              title={t.actions.toggleTheme}
              className="p-1.5 rounded-lg text-[var(--color-toolbar-icon)] hover:text-[var(--color-toolbar-icon-hover)] hover:bg-[var(--color-nav-hover-bg)] transition-all cursor-pointer"
            >
              {getThemeIcon()}
            </button>
            <ThemeDropdown
              isOpen={isThemeOpen}
              onClose={() => setIsThemeOpen(false)}
              anchorRef={themeBtnRef}
            />
          </div>

          {/* 3. Magic Cursor Toggle */}
          <button
            onClick={() => {
              const newState = !magicCursorEnabled;
              setMagicCursorEnabled(newState);
              showToast(newState ? t.actions.cursorEnabled : t.actions.cursorDisabled);
            }}
            title={t.actions.toggleMagicCursor}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              magicCursorEnabled
                ? 'text-[var(--color-accent)] bg-[var(--color-accent-light)]'
                : 'text-[var(--color-toolbar-icon)] hover:text-[var(--color-toolbar-icon-hover)] hover:bg-[var(--color-nav-hover-bg)]'
            }`}
          >
            <Wand2 className="w-4 h-4" />
          </button>

          {/* 4. Download Resume */}
          <button
            onClick={handleDownloadResume}
            title={t.actions.downloadResume}
            className="p-1.5 rounded-lg text-[var(--color-toolbar-icon)] hover:text-[var(--color-toolbar-icon-hover)] hover:bg-[var(--color-nav-hover-bg)] transition-all cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
