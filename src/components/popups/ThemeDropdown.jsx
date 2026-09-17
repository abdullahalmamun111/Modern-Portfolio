import React, { useRef, useEffect } from 'react';
import { Moon, Snowflake, Flame } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function ThemeDropdown({ isOpen, onClose, anchorRef }) {
  const { theme, setTheme, themes } = useTheme();
  const { t } = useLanguage();
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

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'moon':
        return <Moon className="w-4 h-4 shrink-0" />;
      case 'snowflake':
        return <Snowflake className="w-4 h-4 shrink-0" />;
      case 'flame':
        return <Flame className="w-4 h-4 shrink-0" />;
      default:
        return <Snowflake className="w-4 h-4 shrink-0" />;
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute bottom-12 left-10 z-50 w-48 rounded-2xl bg-[var(--color-popup-bg)] border border-[var(--color-popup-border)] shadow-xl p-1.5 backdrop-blur-md transition-all duration-200 animate-in fade-in slide-in-from-bottom-2"
    >
      <div className="flex flex-col space-y-1">
        {themes.map((item) => {
          const isActive = theme === item.id;
          const translatedLabel = t.themes?.[item.nameKey] || item.label;

          return (
            <button
              key={item.id}
              onClick={() => {
                setTheme(item.id);
                onClose();
              }}
              className={`flex items-center space-x-3 px-3 py-2 text-[13px] font-medium rounded-xl transition-all cursor-pointer text-left ${
                isActive
                  ? 'bg-[var(--color-popup-active)] text-[var(--color-popup-active-text)] shadow-sm'
                  : 'text-[var(--color-text-primary)] hover:bg-[var(--color-popup-hover)]'
              }`}
            >
              {getIcon(item.icon)}
              <span>{translatedLabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
