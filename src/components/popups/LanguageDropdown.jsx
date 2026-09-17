import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BangladeshFlag, UsFlag } from '../Illustrations';

export default function LanguageDropdown({ isOpen, onClose, anchorRef }) {
  const { selectableLanguages, changeLanguage } = useLanguage();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        anchorRef?.current &&
        !anchorRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  // Render Flag SVGs for clean look
  const renderFlag = (code) => {
    if (code === 'bd' || code === 'bn') {
      return <BangladeshFlag className="w-5 h-5" />;
    }
    if (code === 'us' || code === 'en') {
      return <UsFlag className="w-5 h-5" />;
    }
    // India flag for Hindi
    return (
      <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-slate-300/40 shadow-xs">
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
    <div
      ref={dropdownRef}
      className="absolute bottom-12 left-2 z-50 w-44 rounded-2xl bg-[var(--color-popup-bg)] border border-[var(--color-popup-border)] shadow-xl p-1.5 backdrop-blur-md transition-all duration-200 animate-in fade-in slide-in-from-bottom-2"
    >
      <div className="flex flex-col space-y-1">
        {selectableLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              changeLanguage(lang.code);
              onClose();
            }}
            className="flex items-center space-x-3 px-3 py-2 text-[13px] font-medium text-[var(--color-text-primary)] rounded-xl hover:bg-[var(--color-popup-hover)] transition-all cursor-pointer text-left group"
          >
            {renderFlag(lang.flag)}
            <span className="group-hover:translate-x-0.5 transition-transform">
              {lang.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
