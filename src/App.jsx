import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
import Preloader from './components/Preloader';
import MagicCursor from './components/MagicCursor';
import Sidebar from './components/Sidebar';
import ContentWindow from './components/ContentWindow';
import { AvatarPortrait } from './components/Illustrations';
import { Menu, X, UserCheck, Wrench, Folder, SquarePen, Moon, Snowflake, Flame } from 'lucide-react';

function PortfolioApp() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [magicCursorEnabled, setMagicCursorEnabled] = useState(() => {
    return localStorage.getItem('magic_cursor_enabled') !== 'false';
  });
  const [toast, setToast] = useState(null);

  const { t, activeLanguageObj, selectableLanguages, changeLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem('magic_cursor_enabled', magicCursorEnabled);
  }, [magicCursorEnabled]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const handleSelectSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

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

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('midnight');
    else setTheme('light');
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden flex flex-col md:flex-row items-center justify-center select-none bg-[var(--color-page-bg)]">
      {/* 1. Futuristic Sci-Fi Preloader on first visit */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* 2. Magic Cursor Effect (Desktop only) */}
      <MagicCursor enabled={magicCursorEnabled} />

      {/* 3. Ambient Background Light Blobs matching Image 1 */}
      <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-page-blob)] blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-[var(--color-page-blob)] blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[30%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-[var(--color-accent-light)] opacity-35 blur-2xl pointer-events-none -z-10" />

      {/* ======================================================== */}
      {/* MOBILE TOP APP BAR (< md)                                */}
      {/* ======================================================== */}
      <header className="md:hidden w-full h-14 px-4 bg-[var(--color-sidebar-bg)] border-b border-[var(--color-sidebar-border)] flex items-center justify-between backdrop-blur-md shrink-0 z-30">
        <div className="flex items-center space-x-2.5">
          <AvatarPortrait className="w-8 h-8 rounded-lg" />
          <div className="flex flex-col">
            <span className="font-chakra font-bold text-sm tracking-tight text-[var(--color-text-primary)]">
              {t.name} {t.surname}
            </span>
            <span className="text-[10px] text-[var(--color-accent)] font-medium -mt-0.5">
              {t.nav[activeSection] || 'Portfolio'}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-1.5">
          {/* Quick theme cycle button on mobile header */}
          <button
            onClick={cycleTheme}
            className="p-2 rounded-xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-[var(--color-toolbar-icon)] active:scale-95 transition-all"
            title="Toggle theme"
          >
            {getThemeIcon()}
          </button>

          {/* Menu Drawer Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-[var(--color-text-primary)] active:scale-95 transition-all"
            title="Open menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* MOBILE SLIDE-IN DRAWER (< md)                            */}
      {/* ======================================================== */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop with blur */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-76 sm:w-80 max-w-[85vw] h-full bg-[var(--color-sidebar-bg)] border-r border-[var(--color-sidebar-border)] shadow-2xl p-4 flex flex-col z-10 animate-in slide-in-from-left duration-250">
            <Sidebar
              activeSection={activeSection}
              setActiveSection={handleSelectSection}
              isCollapsed={false}
              setIsCollapsed={() => {}}
              magicCursorEnabled={magicCursorEnabled}
              setMagicCursorEnabled={setMagicCursorEnabled}
              showToast={showToast}
              isMobile={true}
              onCloseMobile={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MAIN LAYOUT WRAPPER (Desktop & Mobile Adaptive)          */}
      {/* ======================================================== */}
      <div className="w-full flex-1 min-h-0 max-w-[1720px] max-h-[960px] p-2.5 sm:p-4 md:p-6 lg:p-7 flex gap-4 md:gap-5 lg:gap-6 items-stretch justify-center pb-20 md:pb-6">
        {/* Desktop Static Sidebar (Hidden on mobile) */}
        <div className="hidden md:flex h-[92vh] max-h-[880px] shrink-0">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={handleSelectSection}
            isCollapsed={isSidebarCollapsed}
            setIsCollapsed={setIsSidebarCollapsed}
            magicCursorEnabled={magicCursorEnabled}
            setMagicCursorEnabled={setMagicCursorEnabled}
            showToast={showToast}
            isMobile={false}
          />
        </div>

        {/* Floating Content Window Card (Scrolls ONLY inside) */}
        <div className="w-full h-full md:h-[92vh] md:max-h-[880px] flex-1 flex min-h-0">
          <ContentWindow
            activeSection={activeSection}
            setActiveSection={handleSelectSection}
          />
        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE BOTTOM FLOATING QUICK-NAV DOCK (< md)             */}
      {/* ======================================================== */}
      <nav className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-2xl glass-panel shadow-2xl border border-[var(--color-sidebar-border)] flex items-center gap-1">
        <button
          onClick={() => handleSelectSection('about')}
          className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
            activeSection === 'about'
              ? 'bg-[var(--color-nav-active-bg)] text-white shadow-xs'
              : 'text-[var(--color-nav-text)] active:bg-[var(--color-nav-hover-bg)]'
          }`}
          title="About"
        >
          <UserCheck className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleSelectSection('techStack')}
          className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
            activeSection === 'techStack'
              ? 'bg-[var(--color-nav-active-bg)] text-white shadow-xs'
              : 'text-[var(--color-nav-text)] active:bg-[var(--color-nav-hover-bg)]'
          }`}
          title="Tech Stack"
        >
          <Wrench className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleSelectSection('portfolio')}
          className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
            activeSection === 'portfolio'
              ? 'bg-[var(--color-nav-active-bg)] text-white shadow-xs'
              : 'text-[var(--color-nav-text)] active:bg-[var(--color-nav-hover-bg)]'
          }`}
          title="Portfolio"
        >
          <Folder className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleSelectSection('contact')}
          className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
            activeSection === 'contact'
              ? 'bg-[var(--color-nav-active-bg)] text-white shadow-xs'
              : 'text-[var(--color-nav-text)] active:bg-[var(--color-nav-hover-bg)]'
          }`}
          title="Contact"
        >
          <SquarePen className="w-4 h-4" />
        </button>

        <div className="w-[1px] h-5 bg-[var(--color-sidebar-border)] mx-1" />

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex flex-col items-center justify-center p-2 rounded-xl text-[var(--color-text-primary)] active:bg-[var(--color-nav-hover-bg)] transition-all"
          title="All Menu Items"
        >
          <Menu className="w-4 h-4" />
        </button>
      </nav>

      {/* Toast Notification Banner */}
      {toast && (
        <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 px-4 py-2.5 rounded-2xl bg-[var(--color-popup-bg)] border border-[var(--color-accent)] text-[var(--color-text-primary)] text-xs font-semibold shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-200">
          {toast}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
