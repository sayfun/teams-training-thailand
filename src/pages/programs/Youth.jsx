import { Link } from 'react-router-dom'
import { useFadeIn } from '../../components/useFadeIn'
import '../ProgramPage.css'

const ITEMS = ["Self-awareness and emotional intelligence","Communication and active listening","Collaboration and team roles","Leadership and supporting others","Resilience and adaptability","Confidence under pressure"]

export default function Youth() {
  const r = useFadeIn()
  return (
    <main style={{paddingTop:'70px'}}>
      <section className="section prog-hero">
        <div className="fu" ref={r}>
          <div className="section-label">Programs · Youth</div>
          <h1 className="section-title" style={{maxWidth:'640px'}}>Give kids the skills<br />life doesn't always <em>teach directly.</em></h1>
          <p className="section-sub" style={{marginBottom:'2rem'}}>Children and teenagers are constantly navigating teams — classrooms, sports, friendships, family. TEAMS youth programs help them do it better: understanding themselves, communicating clearly, supporting others, and developing the resilience to keep going when things get hard.</p>
          <Link to="/contact" className="btn-primary">Book a session</Link>
        </div>
        <div className="prog-hero-img fu" ref={r} style={{transitionDelay:'0.15s'}}>
          <img src="https://teamstrainingthailand.com/wp-content/uploads/2026/02/WhatsApp-Image-2569-02-16-at-17.06.08-1-e1771246947605-1024x607.jpeg" alt="Youth program — TEAMS Training Thailand" />
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
          <p className="section-sub" style={{marginBottom:'2.5rem'}}>Half-day workshops, multi-day camps, school programs, and after-school sessions. Ages 8–18. All programs bilingual in Thai and English. Upcoming sessions posted in Updates.</p>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>
    </main>
  )
}
