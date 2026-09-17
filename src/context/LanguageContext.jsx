import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const ALL_LANGUAGES = [
  { code: 'en', name: 'English', flag: 'us', flagIcon: '🇺🇸' },
  { code: 'bn', name: 'বাংলা', flag: 'bd', flagIcon: '🇧🇩' },
  { code: 'hi', name: 'हिंदी', flag: 'in', flagIcon: '🇮🇳' },
];

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', currentLang);
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setCurrentLang(langCode);
    }
  };

  const t = translations[currentLang] || translations.en;

  // Crucial requirement: The currently active language is excluded from the selector options!
  const selectableLanguages = ALL_LANGUAGES.filter((lang) => lang.code !== currentLang);
  const activeLanguageObj = ALL_LANGUAGES.find((lang) => lang.code === currentLang) || ALL_LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        changeLanguage,
        t,
        selectableLanguages,
        activeLanguageObj,
        allLanguages: ALL_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
