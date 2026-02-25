import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import './styles/Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot" />
          Open to opportunities
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Basavaraj</span>
          <br />
          <span className="hero-role">Backend Engineer &</span>
          <br />
          <span className="hero-role-accent">Open Source Contributor</span>
        </h1>

        <p className="hero-desc">
          I build reliable backend systems, contribute to open-source projects like
          <strong> Go</strong> and <strong>AWX</strong>, and solve complex problems with
          clean, efficient code. Currently pursuing B.E. in Information Science.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-btn primary">
            View My Work <FiArrowDown />
          </a>
          <a href="#contact" className="hero-btn secondary">
            Get In Touch
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/BasavarajBankolli" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/basavaraj-bankolli-a78208243/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:basavarajbankolli76@gmail.com" className="social-link" aria-label="Email">
            <FiMail />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero