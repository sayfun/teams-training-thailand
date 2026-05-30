import { Link } from 'react-router-dom'
import { useFadeIn } from '../components/useFadeIn'
import './Home.css'

const FRAMEWORK = [
  { l:'T', w:'Trust',        d:'The foundation of every real team. Nothing works without it.' },
  { l:'E', w:'Empathy',      d:'Understanding others before demanding to be understood.' },
  { l:'A', w:'Adaptability', d:'Thriving when the plan changes — because it always does.' },
  { l:'M', w:'Mindset',      d:'Growth-oriented, curious, and resilient under pressure.' },
  { l:'S', w:'Synergy',      d:'The group becoming more than the sum of its parts.' },
]

const SKILLS = ['Empathy','Communication','Emotional intelligence','Collaboration','Creative thinking','Leadership','Resilience','Self-awareness']

const EVENTS = [
  { tag:'Upcoming',   title:'Discover Strength & Build Confidence',                   meta:'26 April 2026 · Sanctuary Studio, Sukhumvit 103', img:'https://teamstrainingthailand.com/wp-content/uploads/2026/04/TEAMS-Posts-Square-6-1024x1024.png' },
  { tag:'Youth Camp', title:'TEAMS Discovery Camp (Ages 8–12)',                       meta:'March 28–29 · C2 Community, Phayathai',           img:'https://teamstrainingthailand.com/wp-content/uploads/2026/02/WhatsApp-Image-2569-02-16-at-17.06.08-1-e1771246947605-1024x607.jpeg' },
  { tag:'Past Event', title:'Bridging Borders: Thai & Korean Students in Ayutthaya', meta:'January 2026 · Ayutthaya',                        img:'https://teamstrainingthailand.com/wp-content/uploads/2026/01/WhatsApp-Image-2569-01-11-at-16.19.41-1024x768.jpeg' },
]

export default function Home() {
  const r = useFadeIn()

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">Bangkok · Experiential Learning</div>
          <h1 className="hero-title">Great leaders start as great <em>teammates.</em></h1>
          <p className="hero-tagline">Where teams learn to be human.</p>
          <p className="hero-body">TEAMS Training Thailand develops the skills that matter beyond any job description — empathy, leadership, communication, trust — through purposeful activities for kids, educators, and professionals.</p>
          <div className="hero-actions">
            <Link to="/programs/youth" className="btn-primary">Explore programs</Link>
            <Link to="/contact" className="btn-secondary">Talk to us</Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src="https://teamstrainingthailand.com/wp-content/uploads/2026/01/WhatsApp-Image-2569-01-11-at-16.19.41-1024x768.jpeg" alt="TEAMS cross-cultural team building in Ayutthaya" />
          </div>
          <div className="hero-badge">
            <div className="badge-num">3</div>
            <div className="badge-txt"><strong>Program tracks</strong>Youth · Educators · Corporate</div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section programs-section">
        <div className="section-head fu" ref={r}>
          <div className="section-label">Who we work with</div>
          <h2 className="section-title">Built for the people<br />you're <em>developing.</em></h2>
          <p className="section-sub">Every program is tailored to its audience — always grounded in the same human-first methodology.</p>
        </div>
        <div className="programs-grid fu" ref={r} style={{transitionDelay:'0.1s'}}>
          {[
            { icon:'🏢', title:'Corporate',  desc:'Trust, empathy and communication — turning coworkers into a team that actually works together. Tailored to your company\'s goals and culture.', href:'/programs/corporate' },
            { icon:'📚', title:'Educators',  desc:'Personal growth, emotional intelligence and facilitation skills — for teachers and school staff ready to develop themselves as much as their students.', href:'/programs/educators' },
            { icon:'⚡', title:'Youth',      desc:'Empathy, confidence, communication and self-awareness — built through play, dialogue and purposeful challenge for children and teenagers.', href:'/programs/youth' },
          ].map((p,i) => (
            <div className="prog-card" key={i}>
              <div className="prog-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <Link to={p.href} className="prog-link">Learn more →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="section framework-section">
        <div className="framework-inner">
          <div className="fu" ref={r}>
            <div className="section-label">Our methodology</div>
            <h2 className="section-title">The <em>TEAMS</em><br />framework.</h2>
            <p className="section-sub" style={{marginBottom:'2rem'}}>Five qualities we cultivate in every participant — whether they're eight or forty-eight.</p>
            <div className="fw-list">
              {FRAMEWORK.map((f,i) => (
                <div className="fw-row" key={i}>
                  <div className="fw-letter">{f.l}</div>
                  <div><div className="fw-word">{f.w}</div><div className="fw-desc">{f.d}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="fu" ref={r} style={{transitionDelay:'0.18s'}}>
            <div className="fw-box">
              <h3>The skills, not the activity.</h3>
              <p>Sports, outdoor challenges, creative workshops, role-play, dialogue — the format is just the vehicle. The destination is always the same: more capable, more connected, more self-aware humans.</p>
              <p>We don't run off-the-shelf programs. Every session is designed around what your group actually needs.</p>
              <div className="skill-pills">
                {SKILLS.map((s,i) => <span className="skill-pill" key={i}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section events-section">
        <div className="events-header fu" ref={r}>
          <div>
            <div className="section-label">What's on</div>
            <h2 className="section-title">Recent &amp; <em>upcoming.</em></h2>
          </div>
          <Link to="/updates" className="link-pill">View all →</Link>
        </div>
        <div className="events-grid">
          {EVENTS.map((e,i) => (
            <Link to="/updates" className="ev-card fu" key={i} ref={r} style={{transitionDelay:`${i*0.09}s`}}>
              <img className="ev-img" src={e.img} alt={e.title} />
              <div className="ev-body">
                <span className="ev-tag">{e.tag}</span>
                <div className="ev-title">{e.title}</div>
                <div className="ev-meta">{e.meta}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <div className="testi fu" ref={r}>
        <div className="testi-quote">"My daughter came back from the camp more confident, more curious, and kinder to her brother. That's the only review I need to give."</div>
        <div className="testi-attr">— Anchalee P., Parent · Bangkok</div>
      </div>

      {/* CTA */}
      <div className="cta-strip">
        <div className="fu" ref={r}>
          <h2>Ready to design your team's<br /><em>next experience?</em></h2>
          <p>Tell us who you're developing — we'll build something for them. Bilingual delivery in Thai and English.</p>
        </div>
        <div className="contact-list fu" ref={r} style={{transitionDelay:'0.15s'}}>
          <a href="mailto:info@teamstrainingthailand.com" className="contact-row">
            <div className="contact-ic">✉️</div>
            <div><div className="contact-lbl">Email us</div><div className="contact-val">info@teamstrainingthailand.com</div></div>
          </a>
          <a href="https://instagram.com/teamstrainingthailand" target="_blank" rel="noreferrer" className="contact-row">
            <div className="contact-ic">📸</div>
            <div><div className="contact-lbl">Instagram</div><div className="contact-val">@teamstrainingthailand</div></div>
          </a>
          <div className="contact-row">
            <div className="contact-ic">💬</div>
            <div><div className="contact-lbl">LINE OA</div><div className="contact-val">Scan QR on contact page</div></div>
          </div>
        </div>
      </div>
    </main>
  )
}
