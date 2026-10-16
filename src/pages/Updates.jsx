import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../utils/wpApi'
import { useFadeIn } from '../components/useFadeIn'

export default function Updates() {
  const r = useFadeIn()
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setError('Could not load updates. Please try again later.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main style={{paddingTop:'70px'}}>
      <section className="section" style={{background:'var(--white)'}}>
        <div className="fu" ref={r} style={{marginBottom:'3rem'}}>
          <div className="section-label">What's on</div>
          <h1 className="section-title">Updates.</h1>
          <p className="section-sub">Upcoming sessions, past events, and stories from the field.</p>
        </div>

        {loading && <p style={{color:'var(--grey)', fontSize:'0.9rem'}}>Loading…</p>}
        {error   && <p style={{color:'var(--grey)', fontSize:'0.9rem'}}>{error}</p>}

        {!loading && !error && (
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px,1fr))', gap:'1.5rem'}}>
            {posts.map((p, i) => (
              <Link
                to={`/blog/${p.slug}`}
                className="ev-card fu"
                key={p.slug}
                ref={r}
                style={{transitionDelay:`${(i % 6) * 0.07}s`, textDecoration:'none', display:'block', borderRadius:'16px', overflow:'hidden', border:'1px solid var(--border)', background:'var(--white)'}}
              >
                {p.img
                  ? <img src={p.img} alt={p.title} style={{width:'100%', height:'200px', objectFit:'cover', display:'block'}} />
                  : <div style={{width:'100%', height:'200px', background:'var(--off)'}} />
                }
                <div style={{padding:'1.4rem'}}>
                  <span style={{display:'inline-block', background:'var(--off)', color:'var(--navy)', fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.07em', textTransform:'uppercase', padding:'0.28rem 0.7rem', borderRadius:'100px', marginBottom:'0.7rem'}}>{p.category}</span>
                  <div style={{fontFamily:'var(--font-d)', fontSize:'1rem', fontWeight:700, color:'var(--navy)', lineHeight:1.35, marginBottom:'0.5rem'}}>{p.title}</div>
                  <div style={{fontSize:'0.85rem', lineHeight:1.65, color:'var(--grey)', marginBottom:'0.6rem'}}>{p.excerpt}</div>
                  <div style={{fontSize:'0.78rem', color:'var(--grey)'}}>{p.dateLabel}</div>
                </div>
              </Link>
            ))}
            {posts.length === 0 && <p style={{color:'var(--grey)', fontSize:'0.9rem'}}>No posts yet.</p>}
          </div>
        )}
      </section>
    </main>
  )
}
