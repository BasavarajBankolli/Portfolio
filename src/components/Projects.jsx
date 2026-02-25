import { FiFolder, FiExternalLink, FiGithub } from 'react-icons/fi'
import './styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'FaceTrack: Intelligent Attendance System',
      desc: 'A microservices-based face recognition system to automate attendance logging with ~95% accuracy.',
      points: [
        'Built REST APIs in Flask for real-time data ingestion and secure operations.',
        'Integrated Django with OpenCV achieving ~95% accuracy in face detection.',
        'Deployed using an AWS-based pipeline to ensure scalability and reliability.',
      ],
      tech: ['Flask', 'MongoDB', 'OpenCV', 'AWS', 'Django'],
      github: 'https://github.com/BasavarajBankolli/FaceTrack',
    },
    {
      title: 'CodeApti: Quiz & Analytics Platform',
      desc: 'A full-stack mock exam platform with role-based access control, OAuth2 authentication, and analytics.',
      points: [
        'Built role-based access control and OAuth2 authentication.',
        'Designed score tracking and visualizations using dynamic plots/graphs.',
        'Handled deployment on AWS for high availability and scalability.',
      ],
      tech: ['Django', 'SQLite', 'React', 'OAuth2', 'AWS'],
      github: 'https://github.com/BasavarajBankolli/QuizApp',
    },
  ]

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
          <div className="section-divider" />
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-header">
                <div className="project-folder"><FiFolder /></div>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FiGithub />
                </a>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <ul className="project-points">
                {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
              <div className="project-tech">
                {p.tech.map((t, j) => <span className="project-tech-tag" key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects