import { useState } from 'react'
import { Link } from 'react-router-dom'
import { quickLinks, scenes, site, trailers } from '../data.js'
import HeroScene from '../components/HeroScene.jsx'
import TrailerModal from '../components/TrailerModal.jsx'
import posterImage from '../assets/vision-india-poster.png'

export default function Home() {
  const [trailer, setTrailer] = useState(null)
  const [lead, ...rest] = trailers

  return (
    <>
      <section className="hero">
        <HeroScene />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="chip">#VisionIndiaRP</span>
            <h1>
              Welcome to
              <span>Vision India Roleplay</span>
            </h1>
            <p>
              Your next story starts here. Build your name, find your people, and
              make every moment in Vision India count.
            </p>
            <div className="hero-actions">
              <a className="btn btn-lime" href={site.discord} target="_blank" rel="noreferrer">
                Join Discord
              </a>
              <Link className="btn btn-ghost" to="/apply">
                Apply Now
              </Link>
            </div>
          </div>
          <div className="media-stack">
            <button className="brand-poster" type="button" onClick={() => setTrailer(lead)}>
              <img src={posterImage} alt="Vision India Roleplay — VI Roleplay" />
              <span className="play" aria-hidden="true" />
              <span className="sr-only">Play {lead.title}</span>
            </button>
            <div className="media-row">
              {rest.map((item) => (
                <TrailerButton key={item.id} trailer={item} onOpen={setTrailer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>
              Feel the pulse of <span>Vision India</span>
            </h2>
            <p>
              Night convoys, rooftop deals, and the quiet hours between them. Every
              frame is a story that has not finished yet.
            </p>
          </div>
          <div className="gallery">
            {scenes.slice(0, 3).map((scene) => (
              <Scene key={scene.title} scene={scene} />
            ))}
          </div>
          <div className="gallery gallery-b">
            {scenes.slice(3).map((scene) => (
              <Scene key={scene.title} scene={scene} />
            ))}
          </div>

          <div className="live-banner">
            <span className="live-pill">Live now</span>
            <div>
              <h3>
                Notable crews of <span>Vision India</span>
              </h3>
              <p>Whitelisted players who stream the city once the season is open.</p>
            </div>
            <Link className="btn btn-lime" to="/live">
              Watch Live
            </Link>
          </div>

          <div className="quick-grid">
            {quickLinks.map((item) => {
              const inner = (
                <>
                  <span className="quick-icon">
                    <QuickIcon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="visit">Visit →</span>
                </>
              )
              return item.href ? (
                <a key={item.title} className="quick-card" href={item.href} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <Link key={item.title} className="quick-card" to={item.to}>
                  {inner}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <TrailerModal trailer={trailer} onClose={() => setTrailer(null)} />
    </>
  )
}

function TrailerButton({ trailer, tall, onOpen }) {
  return (
    <button
      className={`media${tall ? ' media-lg' : ''} tone-${trailer.tone}`}
      type="button"
      onClick={() => onOpen(trailer)}
    >
      <span className="media-caption">{trailer.kicker}</span>
      <span className="play" aria-hidden="true" />
      <span className="sr-only">Play {trailer.title}</span>
    </button>
  )
}

function Scene({ scene }) {
  return (
    <article className={`tile tone-${scene.tone}`}>
      <span>{scene.title}</span>
    </article>
  )
}

function QuickIcon({ name }) {
  if (name === 'bag') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 8h12l-1 12H7L6 8z" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 8 V6.5 a3 3 0 0 1 6 0 V8" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    )
  }
  if (name === 'mark') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 8 v8 M8 12 h8" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    )
  }
  if (name === 'file') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3 h7 l5 5 v13 H7 Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M14 3 v5 h5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 15.5c-2.2-.4-4-2-4-4.2C3 8.6 5.4 6.5 8.4 6.5c2.2 0 4 1.2 4.9 3 1-.7 2.2-1 3.4-1 2.8 0 4.8 2 4.8 4.4 0 2.5-1.9 4.4-4.5 4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M8 14.5 h8 v3.2 a1.6 1.6 0 0 1-1.6 1.6 h-4.8 A1.6 1.6 0 0 1 8 17.7Z" fill="currentColor" />
    </svg>
  )
}
