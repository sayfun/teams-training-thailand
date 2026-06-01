import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../utils/wpApi'
import { useFadeIn } from '../components/useFadeIn'
import './Blog.css'

const TAG_COLORS = { gold: 'tag-gold', navy: 'tag-navy', grey: 'tag-grey' }

export default function Blog() {
  const r = useFadeIn()
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)
  const [active, setActive]   = useState('All')

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setError('Could not load posts. Please try again later.'))
      .finally(() => setLoading(false))
  }, [])

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))]
  const visible    = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="section blog-hero">
        <div className="fu" ref={r}>
          <div className="section-label">Blog &amp; Updates</div>
          <h1 className="section-title">What we've been <em>up to.</em></h1>
          <p className="section-sub">Program updates, upcoming events, and articles on experiential learning, team building, and leadership development in Thailand.</p>
        </div>

        {!loading && !error && (
          <div className="blog-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn${active === cat ? ' active' : ''}`}
                onClick={() => setActive(cat)}
              >{cat}</button>
            ))}
          </div>
        )}
      </section>

      <section className="section blog-grid-section" style={{ paddingTop: 0 }}>
        {loading && <p className="blog-empty">Loading posts…</p>}
        {error   && <p className="blog-empty">{error}</p>}

        {!loading && !error && (
          <div className="blog-grid">
            {visible.map((post, i) => (
              <Link
                to={`/blog/${post.slug}`}
                className="blog-card fu"
                key={post.slug}
                ref={r}
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div className="blog-card-img-wrap">
                  {post.img
                    ? <img src={post.img} alt={post.title} className="blog-card-img" />
                    : <div className="blog-card-img-placeholder" />}
                </div>
                <div className="blog-card-body">
                  <span className={`blog-tag ${TAG_COLORS[post.categoryColor] || 'tag-gold'}`}>
                    {post.category}
                  </span>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <span>{post.dateLabel}</span>
                    <span>· {post.readTime} read</span>
                  </div>
                </div>
              </Link>
            ))}
            {visible.length === 0 && <p className="blog-empty">No posts in this category yet.</p>}
          </div>
        )}
      </section>

      <div className="cta-strip">
        <div className="fu" ref={r}>
          <h2>Have a program in mind?</h2>
          <p>Tell us who you're developing — we'll design something for them.</p>
        </div>
        <div className="fu" ref={r} style={{ transitionDelay: '0.12s' }}>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </div>
    </main>
  )
}
