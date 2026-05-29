import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getPost, getRelated } from '../data/posts'
import './BlogPost.css'

const TAG_COLORS = {
  gold: 'tag-gold',
  navy: 'tag-navy',
  grey: 'tag-grey',
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  const related = post ? getRelated(slug, 2) : []

  useEffect(() => {
    if (post) {
      document.title = `${post.seoTitle} — TEAMS Training Thailand`
      let meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', post.seoDesc)
    }
    return () => {
      document.title = 'TEAMS Training Thailand — Great leaders start as great teammates.'
      let meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', 'TEAMS Training Thailand — Experiential learning that develops leadership, empathy, and teamwork for kids, educators, and corporate teams in Bangkok.')
    }
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  return (
    <main className="post-main" style={{ paddingTop: '70px' }}>

      {/* Hero */}
      <div className="post-hero">
        <img src={post.img} alt={post.title} className="post-hero-img" />
        <div className="post-hero-overlay" />
        <div className="post-hero-content">
          <span className={`blog-tag ${TAG_COLORS[post.categoryColor] || 'tag-gold'}`}>
            {post.category}
          </span>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span>{post.dateLabel}</span>
            {post.location && <span>· {post.location}</span>}
            <span>· {post.readTime} read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="post-layout">
        <article className="post-body">
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="post-back">
            <Link to="/blog" className="btn-secondary">← Back to Blog</Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="post-sidebar">
          {post.location && (
            <div className="sidebar-block">
              <div className="sidebar-label">Location</div>
              <div className="sidebar-val">{post.location}</div>
            </div>
          )}
          <div className="sidebar-block">
            <div className="sidebar-label">Date</div>
            <div className="sidebar-val">{post.dateLabel}</div>
          </div>
          <div className="sidebar-block">
            <div className="sidebar-label">Read time</div>
            <div className="sidebar-val">{post.readTime}</div>
          </div>

          <div className="sidebar-cta">
            <p>Interested in running a program like this?</p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.78rem' }}>
              Get in touch
            </Link>
          </div>
        </aside>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section related-section">
          <div className="section-label">More from TEAMS</div>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>You might also like.</h2>
          <div className="related-grid">
            {related.map(rp => (
              <Link to={`/blog/${rp.slug}`} className="blog-card" key={rp.slug}>
                <div className="blog-card-img-wrap">
                  <img src={rp.img} alt={rp.title} className="blog-card-img" />
                </div>
                <div className="blog-card-body">
                  <span className={`blog-tag ${TAG_COLORS[rp.categoryColor] || 'tag-gold'}`}>
                    {rp.category}
                  </span>
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
