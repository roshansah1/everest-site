import { team } from '../data.js'

export default function Team() {
  return (
    <section className="page">
      <div className="wrap">
        <h1 className="page-title">
          Team behind
          <span>Vision India</span>
        </h1>
        <p className="lede">
          The roster that keeps the city online, fair, and worth coming back to.
        </p>
        <div className="team-grid">
          {team.map((member) => (
            <article key={member.alias} className="team-card">
              <span
                className="avatar"
                style={{ background: `linear-gradient(160deg, hsl(${member.hue} 70% 55%), hsl(${member.hue} 40% 18%))` }}
              >
                {member.alias.slice(0, 1)}
              </span>
              <h3>{member.alias}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
