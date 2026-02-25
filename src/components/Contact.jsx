import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import './styles/Contact.css'

const Contact = () => {
  const contactCards = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'basavarajbankolli76@gmail.com',
      link: 'mailto:basavarajbankolli76@gmail.com',
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'Basavaraj Bankolli',
      link: 'https://www.linkedin.com/in/basavaraj-bankolli-a78208243/',
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'BasavarajBankolli',
      link: 'https://github.com/BasavarajBankolli',
    },
  ]

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="contact-wrapper">
          <div className="contact-intro">
            <h3 className="contact-heading">
              Have a project in mind? <br />
              Let's work together.
            </h3>
            <p className="contact-desc">
              I'm currently looking for new opportunities. Whether you have a
              question, a project idea, or just want to say hi — my inbox is
              always open. I'll try my best to get back to you!
            </p>
          </div>

          <div className="contact-cards">
            {contactCards.map((item, i) => (
              <a
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="contact-card"
                key={i}
              >
                <div className="contact-card-icon">{item.icon}</div>
                <div className="contact-card-info">
                  <span className="contact-card-label">{item.label}</span>
                  <span className="contact-card-value">{item.value}</span>
                </div>
                <div className="contact-card-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact