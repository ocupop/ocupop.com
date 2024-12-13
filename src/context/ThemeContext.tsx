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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (typeof window !== 'undefined') {
      document.body.className = `bg-${theme}`;
      const primaryNav = document.getElementById('primary-nav');
      if (primaryNav) {
        primaryNav.className = `fixed top-0 w-full z-50 bg-${theme}/0`;
      }
    }
  }, [theme, mounted]);

  if (!mounted) {
    return null; // or a loading state
  }

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


// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, setTheme] = useState<Theme>('white');

//   useEffect(() => {
//   if (typeof window !== 'undefined') {
//     document.body.className = `bg-${theme}`;
//     if (theme != null) {
//       const primaryNav = document.getElementById('primary-nav');
//       if (primaryNav) {
//         primaryNav.className = `fixed top-0 w-full z-50 bg-${theme}/0`;
//       }
//     }
//   }
// }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// }
