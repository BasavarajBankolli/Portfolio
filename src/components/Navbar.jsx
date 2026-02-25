import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import './styles/Navbar.css'

const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Open Source', href: '#opensource' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Coding', href: '#coding' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          <span className="logo-br">&lt;</span>
          <span className="logo-tx">BB</span>
          <span className="logo-br">/&gt;</span>
        </a>

        <div className={`navbar-links ${mobileOpen ? 'active' : ''}`}>
          {links.map((l, i) => (
            <a key={i} href={l.href} className="nav-link" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <a href="/Basavaraj_Bankolli_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
            Resume
          </a>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar