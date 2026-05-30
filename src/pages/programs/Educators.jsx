import { Link } from 'react-router-dom'
import { useFadeIn } from '../../components/useFadeIn'
import '../ProgramPage.css'

const ITEMS = ["Facilitation skills and techniques","Emotional regulation in the classroom","Building psychological safety","Designing purposeful activities","Understanding group dynamics","Self-awareness as a practitioner"]

export default function Educators() {
  const r = useFadeIn()
  return (
    <main style={{paddingTop:'70px'}}>
      <section className="section prog-hero">
        <div className="fu" ref={r}>
          <div className="section-label">Programs · Educators</div>
          <h1 className="section-title" style={{maxWidth:'640px'}}>Develop yourself so you can <em>develop others.</em></h1>
          <p className="section-sub" style={{marginBottom:'2rem'}}>Educators are asked to build emotional intelligence, leadership, and collaboration in their students — often without having had the space to develop these skills themselves. TEAMS educator programs are for teachers, school staff, and facilitators who want to grow alongside their students.</p>
          <Link to="/contact" className="btn-primary">Book a session</Link>
        </div>
        <div className="prog-hero-img fu" ref={r} style={{transitionDelay:'0.15s'}}>
          <img src="https://teamstrainingthailand.com/wp-content/uploads/2025/08/IMG_5159-scaled.jpg" alt="Educators program — TEAMS Training Thailand" />
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
          <p className="section-sub" style={{marginBottom:'2.5rem'}}>Workshop series, teacher professional development days, or customized school programs. We work with international schools, bilingual schools, and Thai institutions across Bangkok.</p>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>
    </main>
  )
}
