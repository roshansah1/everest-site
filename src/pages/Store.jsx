import { useState } from 'react'
import { products, site } from '../data.js'

export default function Store() {
  const [note, setNote] = useState('')

  return (
    <section className="page">
      <div className="wrap">
        <h1 className="page-title">
          City <span>store</span>
        </h1>
        <p className="lede">
          Perks that skip a queue or change a look. They do not buy a character, a
          gang, or a win.
        </p>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <span>{product.tag}</span>
              <h3>{product.name}</h3>
              <p>{product.text}</p>
              <button className="btn btn-ghost" type="button" onClick={() => setNote(product.name)}>
                {note === product.name ? 'Noted' : 'Notify me'}
              </button>
            </article>
          ))}
        </div>
        {note && (
          <p className="lede">
            {note} is not on sale yet. Watch {site.discord.replace('https://', '')} for the
            opening.
          </p>
        )}
      </div>
    </section>
  )
}
