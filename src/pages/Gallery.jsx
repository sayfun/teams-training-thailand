import { useState, useEffect } from 'react'
import { useFadeIn } from '../components/useFadeIn'
import './Gallery.css'

const WP_API = 'https://wp.teamstrainingthailand.com/wp-json/wp/v2/media?media_type=image&per_page=100&orderby=date&order=desc&_fields=id,source_url,alt_text,caption,title'

export default function Gallery() {
  const r = useFadeIn()
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    fetch(WP_API)
      .then(res => res.json())
      .then(data => {
        setImages(Array.isArray(data) ? data.filter(img => img.source_url) : [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (lightbox === null) return
    const handler = e => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft') setLightbox(i => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % images.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, images.length])

  const caption = lightbox !== null ? images[lightbox]?.caption?.rendered?.replace(/<[^>]+>/g, '').trim() : ''

  return (
    <main style={{paddingTop:'70px'}}>
      <section className="section gallery-section">
        <div className="fu" ref={r} style={{marginBottom:'3rem'}}>
          <div className="section-label">Photos</div>
          <h1 className="section-title">Gallery.</h1>
          <p className="section-sub">Moments from our programs, camps, and workshops.</p>
        </div>

        {loading && (
          <div className="gallery-loading">
            <div className="gallery-spinner" />
            <p>Loading photos…</p>
          </div>
        )}

        {!loading && images.length === 0 && (
          <div className="gallery-empty">No photos found.</div>
        )}

        {!loading && images.length > 0 && (
          <div className="gallery-grid">
            {images.map((img, i) => (
              <button
                key={img.id}
                className="gallery-item fu"
                ref={r}
                style={{transitionDelay:`${(i % 12) * 0.04}s`}}
                onClick={() => setLightbox(i)}
                aria-label={img.alt_text || img.title?.rendered || 'View photo'}
              >
                <img
                  src={img.source_url}
                  alt={img.alt_text || img.title?.rendered || 'TEAMS Training Thailand'}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lb-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <button
            className="lb-prev"
            onClick={e => { e.stopPropagation(); setLightbox(i => (i - 1 + images.length) % images.length) }}
            aria-label="Previous"
          >‹</button>

          <div className="lb-img-wrap" onClick={e => e.stopPropagation()}>
            <img
              src={images[lightbox].source_url}
              alt={images[lightbox].alt_text || ''}
            />
            {caption && <p className="lb-caption">{caption}</p>}
            <p className="lb-counter">{lightbox + 1} / {images.length}</p>
          </div>

          <button
            className="lb-next"
            onClick={e => { e.stopPropagation(); setLightbox(i => (i + 1) % images.length) }}
            aria-label="Next"
          >›</button>
        </div>
      )}
    </main>
  )
}
