import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import Skills from './components/Skills'

const getInitialTheme = () => {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch {
      // Theme still works when storage is unavailable.
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
