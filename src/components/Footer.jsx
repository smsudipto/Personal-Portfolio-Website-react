import personalInfo from '../data/personalInfo'
import '../styles/footer.css'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialItems = [
  { label: 'GitHub', key: 'github' },
  { label: 'LinkedIn', key: 'linkedin' },
  { label: 'Facebook', key: 'facebook' },
]

const currentYear = new Date().getFullYear()

function FooterLink({ href, children }) {
  if (!href) {
    return (
      <span className="footer-social-placeholder">
        {children} <small>(add link)</small>
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} profile`}
    >
      {children}
    </a>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content container">
        <div className="footer-intro">
          <a className="footer-brand" href="#home">
            {personalInfo.name}
          </a>
          <p className="footer-title">{personalInfo.title}</p>
          <p>{personalInfo.introduction}</p>
        </div>

        <div className="footer-column">
          <h2>Quick Navigation</h2>
          <nav className="footer-navigation" aria-label="Footer navigation">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-column">
          <h2>Connect</h2>
          <div className="footer-socials">
            {socialItems.map((item) => (
              <FooterLink
                href={personalInfo.socialLinks[item.key]}
                key={item.key}
              >
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} {personalInfo.name}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
