
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const ThemeContext = createContext(null);

const THEME_STORAGE_KEY = 'chops-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedTheme = window.localStorage.getItem(
    THEME_STORAGE_KEY,
  );

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  if (
    window.matchMedia &&
    window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
  ) {
    return 'dark';
  }

  return 'light';
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      theme,
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark'
        ? 'light'
        : 'dark',
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isDark: theme === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      'useThemeContext must be used inside ThemeProvider.',
    );
  }

  return context;
}

export { ThemeProvider };
