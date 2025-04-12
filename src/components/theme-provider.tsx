"use client";
import { useState, useEffect, createContext, useContext } from 'react';
import { getCookie, setCookie } from 'cookies-next';

type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ 
  children,
  initialTheme 
}: { 
  children: React.ReactNode;
  initialTheme?: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Usa el initialTheme si está disponible (desde el servidor)
    if (initialTheme) return initialTheme;
    
    // Lógica solo para cliente
    if (typeof window !== 'undefined') {
      return (getCookie('theme') as Theme) ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light'; // fallback para SSR
  });

  useEffect(() => {
    // Aplica el tema al documento
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    setCookie('theme', theme, { path: '/' });
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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