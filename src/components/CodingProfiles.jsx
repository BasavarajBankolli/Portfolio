import { FiExternalLink } from 'react-icons/fi'
import './styles/CodingProfiles.css'

const CodingProfiles = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      rating: '1810',
      rank: 'Knight',
      color: '#FFA116',
      emoji: <img src="LC.png" alt="icon" />,
      link: 'https://leetcode.com/u/pb_46/', // UPDATE
      stats: ['Knight Badge', 'Max Rating: 1850'],
    },
    {
      platform: 'Codeforces',
      rating: '1420',
      rank: 'Specialist',
      color: '#1DA1F2',
      emoji: <img src="CF.png" alt="icon" />,
      link: 'https://codeforces.com/profile/basavarajbankolli', // UPDATE
      stats: ['Specialist Rank', 'Max Rating: 1420'],
    },
    {
      platform: 'CodeChef',
      rating: '1550',
      rank: '3★',
      color: '#5B4638',
      emoji: <img src="CC.png" alt="" />,
      link: 'https://www.codechef.com/users/pb_76', // UPDATE
      stats: ['3-Star Coder', 'Max Rating: 1600'],
    },
    
  ]

  return (
    <section className="section" id="coding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Competitive Programming</span>
          <h2 className="section-title">Coding <span className="highlight">Profiles</span></h2>
          <div className="section-divider" />
        </div>

        <div className="coding-grid">
          {profiles.map((p, i) => (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-card"
              key={i}
            >
              <div className="coding-card-top">
                <span className="coding-emoji">{p.emoji}</span>
                <FiExternalLink className="coding-external" />
              </div>
              <h3 className="coding-platform">{p.platform}</h3>
              <div className="coding-rating-wrap">
                <span className="coding-rating">{p.rating}</span>
                <span className="coding-rank" style={{ color: p.color }}>{p.rank}</span>
              </div>
              <div className="coding-stats">
                {p.stats.map((s, j) => <span className="coding-stat" key={j}>{s}</span>)}
              </div>
              <div className="coding-card-glow" style={{ background: p.color }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles