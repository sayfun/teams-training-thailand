import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getPost, getRelated } from '../utils/wpApi'
import './BlogPost.css'

const TAG_COLORS = { gold: 'tag-gold', navy: 'tag-navy', grey: 'tag-grey' }

export default function BlogPost() {
  const { slug }    = useParams()
  const navigate    = useNavigate()
  const [post, setPost]       = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getPost(slug).then(p => {
      if (!p) { navigate('/blog', { replace: true }); return }
      setPost(p)
      document.title = `${p.seoTitle} — TEAMS Training Thailand`
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', p.seoDesc)
      getRelated(slug, p.category, 2).then(setRelated)
    }).catch(() => navigate('/blog', { replace: true }))
      .finally(() => setLoading(false))

    return () => {
      document.title = 'TEAMS Training Thailand — Great leaders start as great teammates.'
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', 'TEAMS Training Thailand — Experiential learning that develops leadership, empathy, and teamwork for kids, educators, and corporate teams in Bangkok.')
    }
  }, [slug])

  if (loading) return (
    <main style={{ paddingTop: '70px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: 'var(--grey)' }}>Loading…</p>
    </main>
  )

  if (!post) return null

  return (
    <main className="post-main" style={{ paddingTop: '70px' }}>

      {/* Hero */}
      <div className="post-hero">
        {post.img
          ? <img src={post.img} alt={post.title} className="post-hero-img" />
          : <div className="post-hero-img" style={{ background: 'var(--navy)' }} />}
        <div className="post-hero-overlay" />
        <div className="post-hero-content">
          <span className={`blog-tag ${TAG_COLORS[post.categoryColor] || 'tag-gold'}`}>
            {post.category}
          </span>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span>{post.dateLabel}</span>
            <span>· {post.readTime} read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="post-layout">
        <article className="post-body">
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="post-back">
            <Link to="/blog" className="btn-secondary">← Back to Blog</Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="post-sidebar">
          <div className="sidebar-block">
            <div className="sidebar-label">Published</div>
            <div className="sidebar-val">{post.dateLabel}</div>
          </div>
          <div className="sidebar-block">
            <div className="sidebar-label">Read time</div>
            <div className="sidebar-val">{post.readTime}</div>
          </div>
          <div className="sidebar-block">
            <div className="sidebar-label">Category</div>
            <div className="sidebar-val">{post.category}</div>
          </div>
          <div className="sidebar-cta">
            <p>Interested in running a program like this?</p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.78rem' }}>Get in touch</Link>
          </div>
        </aside>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section related-section">
          <div className="section-label">More from TEAMS</div>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>You might also <em>like.</em></h2>
          <div className="related-grid">
            {related.map(rp => (
              <Link to={`/blog/${rp.slug}`} className="blog-card" key={rp.slug}>
                <div className="blog-card-img-wrap">
                  {rp.img
                    ? <img src={rp.img} alt={rp.title} className="blog-card-img" />
                    : <div className="blog-card-img-placeholder" />}
                </div>
                <div className="blog-card-body">
                  <span className={`blog-tag ${TAG_COLORS[rp.categoryColor] || 'tag-gold'}`}>{rp.category}</span>
                  <h3 className="blog-card-title">{rp.title}</h3>
                  <p className="blog-card-excerpt">{rp.excerpt}</p>
                  <div className="blog-card-meta">
                    <span>{rp.dateLabel}</span>
                    <span>· {rp.readTime} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
