function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={isDark ? 'Dark mode enabled. Switch to light mode' : 'Light mode enabled. Switch to dark mode'}
      aria-pressed={isDark}
      onClick={onToggle}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {isDark ? '☾' : '☀'}
      </span>
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle
