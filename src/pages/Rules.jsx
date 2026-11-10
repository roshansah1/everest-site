import { rules } from '../data.js'

export default function Rules() {
  return (
    <section className="page">
      <div className="wrap">
        <h1 className="page-title cyan">Server Rules</h1>
        <div className="rules-layout">
          <div>
            {rules.map((group) => (
              <article key={group.id} id={group.id} className="rule-group">
                <h2>{group.title}</h2>
                <ol>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
          <aside className="toc">
            <h3>Table of contents</h3>
            {rules.map((group) => (
              <a key={group.id} href={`#${group.id}`}>
                {group.title}
              </a>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
