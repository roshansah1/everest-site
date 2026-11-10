import { useEffect } from 'react'

export default function TrailerModal({ trailer, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!trailer) return null

  return (
    <div className="modal-back" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="trailer-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-x" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>
        {trailer.youtubeId ? (
          <iframe
            title={trailer.title}
            src={`https://www.youtube.com/embed/${trailer.youtubeId}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div className={`trailer-fallback tone-${trailer.tone}`}>
            <p>{trailer.kicker}</p>
            <h2 id="trailer-title">{trailer.title}</h2>
            <span>This reel opens with the season.</span>
          </div>
        )}
      </div>
    </div>
  )
}
