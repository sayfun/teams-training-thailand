const WP_API = 'https://teamstrainingthailand.com/wp-json/wp/v2'

function decodeHtml(str) {
  return str
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&#8211;/g, '–').replace(/&#8212;/g, '—').replace(/&#8230;/g, '…')
    .replace(/&#8216;/g, '‘').replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“').replace(/&#8221;/g, '”')
}

function stripTags(html) {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function calcReadTime(html) {
  const words = stripTags(html).split(/\s+/).length
  return `${Math.max(1, Math.round(words / 200))} min`
}

const CAT_COLORS = {
  'Upcoming Events': 'gold',
  'Past Events':     'navy',
  'Food for thought':'grey',
  'Team Building':   'navy',
}

function normalizePost(p) {
  const cats      = p._embedded?.['wp:term']?.[0] || []
  const primaryCat = cats[0]?.name || 'Article'
  const img       = p._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
  const excerpt   = stripTags(p.excerpt.rendered).slice(0, 160)

  return {
    slug:          p.slug,
    title:         decodeHtml(p.title.rendered),
    excerpt,
    content:       p.content.rendered,
    dateLabel:     formatDate(p.date),
    img,
    category:      primaryCat,
    categoryColor: CAT_COLORS[primaryCat] || 'gold',
    readTime:      calcReadTime(p.content.rendered),
    seoTitle:      decodeHtml(p.title.rendered),
    seoDesc:       excerpt,
  }
}

export async function getPosts() {
  const res = await fetch(`${WP_API}/posts?_embed&per_page=50&orderby=date&order=desc`)
  if (!res.ok) throw new Error('Failed to fetch posts')
  return (await res.json()).map(normalizePost)
}

export async function getPost(slug) {
  const res = await fetch(`${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed`)
  if (!res.ok) throw new Error('Failed to fetch post')
  const posts = await res.json()
  return posts[0] ? normalizePost(posts[0]) : null
}

export async function getRelated(slug, category, n = 2) {
  const res = await fetch(`${WP_API}/posts?_embed&per_page=20&orderby=date&order=desc`)
  if (!res.ok) return []
  const posts = await res.json()
  return posts
    .filter(p => p.slug !== slug)
    .filter(p => (p._embedded?.['wp:term']?.[0] || []).some(c => c.name === category))
    .slice(0, n)
    .map(normalizePost)
}
