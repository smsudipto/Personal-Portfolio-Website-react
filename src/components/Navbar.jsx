import { useState } from 'react'
import personalInfo from '../data/personalInfo'
import useActiveSection from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'
import '../styles/navbar.css'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = navigationItems.map((item) => item.href.slice(1))

function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          {personalInfo.name}
        </a>

        <button
          className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
        >
          {navigationItems.map((item) => {
            const sectionId = item.href.slice(1)

            return (
            <a
              className={activeSection === sectionId ? 'is-active' : ''}
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              aria-current={activeSection === sectionId ? 'location' : undefined}
            >
              {item.label}
            </a>
            )
          })}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
