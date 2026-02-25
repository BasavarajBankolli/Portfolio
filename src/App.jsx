import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import OpenSource from './components/OpenSource.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import CodingProfiles from './components/CodingProfiles.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => setDarkMode(prev => !prev)

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <OpenSource />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Contact />
      <Footer />
    </div>
  )
}

export default App