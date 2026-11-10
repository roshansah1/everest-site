import { Link } from 'react-router-dom'
import { streamers } from '../data.js'

export default function Live() {
  return (
    <section className="page">
      <div className="wrap">
        <h1 className="page-title">
          Watch <span>live</span>
        </h1>
        <p className="lede">Whitelisted players stream the city from this board.</p>
        {streamers.length === 0 ? (
          <div className="empty-live">
            <span className="live-pill">Offline</span>
            <h2>Nobody is on the board yet</h2>
            <p>Whitelist opens first. The live wall follows the people who actually play.</p>
            <Link className="btn btn-lime" to="/apply">
              Apply to play
            </Link>
          </div>
        ) : (
          <div className="team-grid">
            {streamers.map((streamer) => (
              <a key={streamer.url} className="team-card" href={streamer.url} target="_blank" rel="noreferrer">
                <h3>{streamer.name}</h3>
                <p>{streamer.platform}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
