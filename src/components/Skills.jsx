import { FiCode, FiServer, FiTerminal, FiCheckCircle, FiCloud } from 'react-icons/fi'
import './styles/Skills.css'

const Skills = () => {
  const categories = [
    { icon: <FiCode />, title: 'Languages', skills: ['Go', 'Python', 'SQL', 'Bash', 'C++'] },
    { icon: <FiServer />, title: 'Backend', skills: ['REST APIs', 'Flask', 'Django', 'MongoDB', 'SQLite'] },
    { icon: <FiTerminal />, title: 'Systems', skills: ['Linux', 'Git', 'Debugging', 'Code Reviews'] },
    { icon: <FiCheckCircle />, title: 'Testing', skills: ['pytest', 'Integration Testing', 'CI Workflows'] },
    { icon: <FiCloud />, title: 'Cloud', skills: ['AWS', 'Docker', 'GitHub Actions'] },
  ]

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>
          <div className="section-divider" />
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-icon">{cat.icon}</div>
              <h3 className="skill-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((s, j) => <span className="skill-tag" key={j}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills