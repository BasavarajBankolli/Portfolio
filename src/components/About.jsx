import { FiTerminal, FiGitBranch, FiServer, FiCloud } from 'react-icons/fi'
import './styles/About.css'

const About = () => {
  const highlights = [
    { icon: <FiGitBranch />, title: 'Open Source', desc: 'Active contributor to Go & AWX projects' },
    { icon: <FiServer />, title: 'Backend Dev', desc: 'REST APIs, Flask, Django, databases' },
    { icon: <FiTerminal />, title: 'Systems', desc: 'Linux, Git, debugging, shell scripting' },
    { icon: <FiCloud />, title: 'Cloud & CI', desc: 'AWS, Docker, GitHub Actions' },
  ]

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Professional <span className="highlight">Summary</span></h2>
          <div className="section-divider" />
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Open-source contributor and backend engineer with hands-on experience in
              <strong> AWX</strong>, <strong>Linux systems</strong>, and <strong>Go development</strong>.
              I actively contribute to the Go project by submitting documentation improvements
              and collaborating with maintainers.
            </p>
            <p>
              I contribute to AWX by writing integration tests, validating issues, and working
              closely with maintainers to improve reliability across releases. Passionate about
              backend systems, open-source development, and building reliable software.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, i) => (
              <div className="highlight-card" key={i}>
                <div className="highlight-icon">{item.icon}</div>
                <div>
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About