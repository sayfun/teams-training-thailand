import { Link } from 'react-router-dom'
import { useFadeIn } from '../../components/useFadeIn'
import '../ProgramPage.css'

const ITEMS = ["Leadership under pressure","Trust and psychological safety","Communication styles and listening","Conflict navigation","Decision-making as a group","Empathy across hierarchy"]

export default function Corporate() {
  const r = useFadeIn()
  return (
    <main style={{paddingTop:'70px'}}>
      <section className="section prog-hero">
        <div className="fu" ref={r}>
          <div className="section-label">Programs · Corporate</div>
          <h1 className="section-title" style={{maxWidth:'640px'}}>Turning coworkers into<br />a team that actually <em>works together.</em></h1>
          <p className="section-sub" style={{marginBottom:'2rem'}}>Most corporate teams share a calendar. Fewer share a genuine sense of trust, communication, and purpose. TEAMS corporate programs close that gap — not through lectures or slide decks, but through purposeful activities that surface how your team actually operates, and create the conditions for something better.</p>
          <Link to="/contact" className="btn-primary">Book a session</Link>
        </div>
        <div className="prog-hero-img fu" ref={r} style={{transitionDelay:'0.15s'}}>
          <img src="https://wp.teamstrainingthailand.com/wp-content/uploads/2025/02/Copy-of-455192972_1257494402093634_2774834864595962944_n.jpg" alt="Corporate program — TEAMS Training Thailand" />
        </div>
      </section>

      <section className="section" style={{background:'var(--off)'}}>
        <div className="fu" ref={r}>
          <div className="section-label">What we develop</div>
          <h2 className="section-title">What participants <em>gain.</em></h2>
        </div>
        <div className="items-grid fu" ref={r} style={{transitionDelay:'0.1s'}}>
          {ITEMS.map((item, i) => (
            <div className="item-card" key={i}>
              <div className="item-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{background:'var(--white)'}}>
        <div className="fu" ref={r}>
          <div className="section-label">Format</div>
          <h2 className="section-title">How it <em>works.</em></h2>
          <p className="section-sub" style={{marginBottom:'2.5rem'}}>Half-day or full-day sessions, offsite or in-house. All programs are bilingual (Thai and English) and designed after a consultation with your HR or leadership team.</p>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>
    </main>
  )
}
