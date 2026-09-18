import { useThemeContext } from '../../../context/themeContext.jsx';
import './themeToggle.css';

function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeContext();

  return (
<button
  type="button"
  className="theme-toggle"
  onClick={toggleTheme}
  aria-label={
    isDark
      ? 'Switch to light theme'
      : 'Switch to dark theme'
  }
  aria-pressed={isDark}
>
  <span
    className="theme-toggle__icon"
    aria-hidden="true"
  >
    {isDark ? '☀️' : '🌙'}
  </span>
</button>
  );
}

export default ThemeToggle;