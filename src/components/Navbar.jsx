import { useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { nav, site } from '../data.js'
import Logo from './Logo.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [connectOpen, setConnectOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(site.connectCode)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <header className="nav-wrap">
      <div className="wrap nav">
        <NavLink to="/" className="logo-link" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Logo />
        </NavLink>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `nav-link${item.tone ? ` ${item.tone}` : ''}${isActive ? ' active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <button className="btn btn-cyan nav-connect" type="button" onClick={() => setConnectOpen(true)}>
            Connect
          </button>
        </nav>
      </div>
      {connectOpen &&
        createPortal(
          <div className="modal-back" onClick={() => setConnectOpen(false)} role="presentation">
            <div
              className="connect-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="connect-title"
              onClick={(event) => event.stopPropagation()}
            >
              <h2 id="connect-title">Connect to {site.name}</h2>
              <p>Open FiveM with the join link, or paste the code in the server search.</p>
              <code>{site.connectCode}</code>
              <div className="hero-actions">
                <a className="btn btn-cyan" href={site.connect}>
                  Open FiveM
                </a>
                <button className="btn btn-ghost" type="button" onClick={copyCode}>
                  {copied ? 'Copied' : 'Copy code'}
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </header>
  )
}
