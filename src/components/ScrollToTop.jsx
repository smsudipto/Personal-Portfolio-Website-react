import { useEffect, useState } from 'react'
import '../styles/scrollToTop.css'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-to-top${isVisible ? ' is-visible' : ''}`}
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <span aria-hidden="true">↑</span>
    </button>
  )
}

export default ScrollToTop
