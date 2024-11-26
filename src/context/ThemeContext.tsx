'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'white' | 'light' | 'dark' | null ;

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('white');

  useEffect(() => {
    document.body.className = `bg-${theme}`;
    const primaryNav = document.getElementById('primary-nav');
    theme != null && {
      if (primaryNav) {
        primaryNav.className = `fixed top-0 w-full z-50 bg-${theme}`;
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
