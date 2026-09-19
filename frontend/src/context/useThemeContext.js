import { useContext } from 'react';

import ThemeContext from './themeContext.jsx';

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      'useThemeContext must be used inside ThemeProvider.',
    );
  }

  return context;
}