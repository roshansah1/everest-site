import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroScene from '../components/HeroScene.jsx'
import Logo from '../components/Logo.jsx'

const empty = {
  name: '',
  age: '',
  concept: '',
  history: '',
}

export default function Apply() {
  const [signedIn, setSignedIn] = useState(false)
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function submit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="apply-page">
      <HeroScene />
      <header className="apply-bar wrap">
        <Link to="/">← Back to Home</Link>
        <Logo />
      </header>
      <div className={signedIn && !sent ? 'apply-card wide' : 'apply-card'}>
        {!signedIn && (
          <>
            <span className="discord-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M7.2 8.2c2.4-1 4.6-1 7.6 0M8 15.2c1.2.6 2.6.9 4 .9s2.8-.3 4-.9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M6 16.5 4.8 8.8c3-1.6 5.2-2 7.2-2s4.2.4 7.2 2L18 16.5c-2.2 1.4-4.4 2-6 2s-3.8-.6-6-2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </span>
            <h1>Welcome to Vision India</h1>
            <p className="sub">Application desk</p>
            <button className="btn btn-discord" type="button" onClick={() => setSignedIn(true)}>
              Continue with Discord
            </button>
            <p className="fine">
              This preview stays in the browser. Hook a real Discord login before you
              collect applications.
            </p>
          </>
        )}
        {signedIn && !sent && (
          <form onSubmit={submit}>
            <h1>Whitelist application</h1>
            <p className="sub">One character. Write like you will actually play them.</p>
            <label>
              Character name
              <input name="name" value={form.name} onChange={update} required maxLength={48} />
            </label>
            <label>
              Age
              <input name="age" value={form.age} onChange={update} required inputMode="numeric" maxLength={3} />
            </label>
            <label>
              Concept
              <input
                name="concept"
                value={form.concept}
                onChange={update}
                required
                placeholder="Night-shift medic who owes the wrong people"
                maxLength={120}
              />
            </label>
            <label>
              History
              <textarea
                name="history"
                value={form.history}
                onChange={update}
                required
                minLength={40}
                rows={6}
                placeholder="Where they came from, what they want, and who they will not cross."
              />
            </label>
            <button className="btn btn-lime" type="submit">
              Submit application
            </button>
          </form>
        )}
        {sent && (
          <>
            <h1>Application received</h1>
            <p className="sub">
              {form.name} is in the local preview queue. Nothing was sent to a server yet.
            </p>
            <Link className="btn btn-ghost" to="/">
              Back home
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
