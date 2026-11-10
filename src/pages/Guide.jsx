import { guideSteps, site } from '../data.js'

export default function Guide() {
  return (
    <section className="page">
      <div className="wrap narrow">
        <h1 className="page-title">
          Join <span>guide</span>
        </h1>
        <ol className="steps">
          {guideSteps.map((step, index) => (
            <li key={step.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <article id="brand" className="brand-box">
          <h2>Brand kit</h2>
          <p>
            The mark is the peak in the nav, set in Outfit, on a near-black field with
            cyan and lime. Ask in Discord before you put it on a thumbnail.
          </p>
          <a className="btn btn-ghost" href={site.discord} target="_blank" rel="noreferrer">
            Request assets
          </a>
        </article>
      </div>
    </section>
  )
}
