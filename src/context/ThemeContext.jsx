import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = [
  { id: 'dark', nameKey: 'dark', label: 'Dark Theme', icon: 'moon' },
  { id: 'light', nameKey: 'light', label: 'Light Theme', icon: 'snowflake' },
  { id: 'midnight', nameKey: 'midnight', label: 'Midnight Theme', icon: 'flame' },
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const selectTheme = (newTheme) => {
    if (THEMES.some((t) => t.id === newTheme)) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: selectTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
