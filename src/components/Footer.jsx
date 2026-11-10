import { Link } from 'react-router-dom'
import { site } from '../data.js'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p>
            Build a life in Vision India. Crews, jobs, and long scenes start once you are
            whitelisted.
          </p>
          <div className="socials">
            <a href={site.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
              <Icon type="instagram" />
            </a>
            <a href={site.youtube} aria-label="YouTube" target="_blank" rel="noreferrer">
              <Icon type="youtube" />
            </a>
            <a href={site.discord} aria-label="Discord" target="_blank" rel="noreferrer">
              <Icon type="discord" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <Link to="/store">Store</Link>
          <Link to="/live">Watch Live</Link>
          <Link to="/guide">Guide</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className="wrap copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  )
}

function Icon({ type }) {
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    )
  }
  if (type === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 9.5 L16 12 L11 14.5 Z" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 7.5 h9 a3 3 0 0 1 3 3 v4 a3 3 0 0 1-3 3 H11 l-3.5 2.5 v-2.5 H6 a3 3 0 0 1-3-3 v-4 a3 3 0 0 1 3-3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}
