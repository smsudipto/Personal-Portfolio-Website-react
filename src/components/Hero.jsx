import { useState } from 'react'
import personalInfo from '../data/personalInfo'
import '../styles/hero.css'

function Hero() {
  const [profileImageFailed, setProfileImageFailed] = useState(false)

  return (
    <section id="home" className="hero-section">
      <div className="hero-content container">
        <div className="hero-copy">
          <p className="hero-kicker">Hello, I am</p>
          <h1>
            {personalInfo.name}
            <span className="hero-title">{personalInfo.title}</span>
          </h1>
          <p className="hero-introduction">{personalInfo.introduction}</p>
          <div className="hero-actions">
            {personalInfo.cvUrl ? (
              <a className="button button-primary" href={personalInfo.cvUrl} download>
                Download CV
              </a>
            ) : (
              <span className="button button-primary button-disabled" aria-disabled="true">
                CV unavailable
              </span>
            )}
            <a className="button button-secondary" href="#projects">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          {personalInfo.profileImage && !profileImageFailed ? (
            <img
              className="profile-image"
              src={personalInfo.profileImage}
              alt="Sudipto Mandal - Software Engineer"
              onError={() => setProfileImageFailed(true)}
            />
          ) : (
            <div className="profile-placeholder" role="img" aria-label="Profile image placeholder">
              <span>SM</span>
              <small>Add profile image</small>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
