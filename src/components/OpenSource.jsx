import { FiGitPullRequest, FiExternalLink } from 'react-icons/fi'
import './styles/OpenSource.css'

const OpenSource = () => {
  const contributions = [
    {
      title: 'Go Project',
      role: 'Open Source Contributor',
      period: '2025 — Present',
      points: [
        'Improved documentation in the toolchain (cmd/fix), clarifying analyzer flag behavior.',
        'Followed Gerrit-based workflows and collaborated with Go maintainers.',
        'Contributed to code reviews and adhered to open-source contribution standards.',
      ],
      link: 'https://github.com/BasavarajBankolli/go',
      tags: ['Go', 'Documentation', 'Gerrit'],
    },
    {
      title: 'AWX',
      role: 'Open Source Contributor',
      period: '2025 — Present',
      points: [
        'Developed integration tests and validated issues, improving reliability across releases.',
        'Ensured expected behavior through systematic testing and issue reproduction.',
        'Collaborated with maintainers through code reviews and issue discussions.',
      ],
      link: 'https://github.com/BasavarajBankolli/awx',
      tags: ['Python', 'Testing', 'Ansible'],
    },
  ]

  return (
    <section className="section" id="opensource">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contributions</span>
          <h2 className="section-title">Open Source <span className="highlight">Work</span></h2>
          <div className="section-divider" />
        </div>

        <div className="oss-grid">
          {contributions.map((item, i) => (
            <div className="oss-card" key={i}>
              <div className="oss-card-header">
                <div className="oss-icon"><FiGitPullRequest /></div>
                <div className="oss-header-text">
                  <h3 className="oss-title">{item.title}</h3>
                  <span className="oss-role">{item.role}</span>
                </div>
                <span className="oss-period">{item.period}</span>
              </div>

              <ul className="oss-points">
                {item.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>

              <div className="oss-card-footer">
                <div className="oss-tags">
                  {item.tags.map((t, j) => <span className="oss-tag" key={j}>{t}</span>)}
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="oss-link">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpenSource