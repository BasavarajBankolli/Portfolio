import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import './styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Coding', href: '#coding' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          
          <div className="footer-quick-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((l, i) => (
                <a href={l.href} className="footer-link" key={i}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Basavaraj Bankolli. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer