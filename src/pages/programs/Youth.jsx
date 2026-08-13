import { Link } from 'react-router-dom'
import { useFadeIn } from '../../components/useFadeIn'
import '../ProgramPage.css'

const ITEMS = ["Self-awareness and emotional intelligence","Communication and active listening","Collaboration and team roles","Leadership and supporting others","Resilience and adaptability","Confidence under pressure"]

const WORKSHOPS = [
  { icon:'💬', title:'Communication Workshops', desc:'Kids learn to express themselves clearly, listen without interrupting, and speak up in a group setting that actually feels safe. We practise the habits that make real conversation possible.' },
  { icon:'🤝', title:'Teamwork Workshops', desc:'Activities that reveal how kids naturally lead, follow, and collaborate — then give them better tools to do it intentionally. They leave knowing what kind of teammate they want to be.' },
  { icon:'❤️', title:'Empathy-Centred Workshops', desc:'Understanding others starts with understanding yourself. These sessions help young people name emotions, read a room, and build kinder relationships — skills no textbook teaches directly.' },
  { icon:'🤖', title:'AI Workshops', desc:'Age-appropriate explorations of how AI tools work, what they can and can\'t do, and how to stay curious and critical. For the generation that will grow up alongside these technologies.' },
]

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
          <img src="https://wp.teamstrainingthailand.com/wp-content/uploads/2026/02/WhatsApp-Image-2569-02-16-at-17.06.08-1-e1771246947605-1024x607.jpeg" alt="Youth program — TEAMS Training Thailand" />
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
          <div className="section-label">Workshop formats</div>
          <h2 className="section-title">Four ways we <em>work with kids.</em></h2>
          <p className="section-sub">Each workshop type addresses a different dimension of growth — and every session is tailored to the age group, school culture, or camp context.</p>
        </div>
        <div className="workshops-grid fu" ref={r} style={{transitionDelay:'0.1s'}}>
          {WORKSHOPS.map((w, i) => (
            <div className="workshop-card" key={i}>
              <div className="workshop-icon">{w.icon}</div>
              <div className="workshop-title">{w.title}</div>
              <p className="workshop-desc">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{background:'var(--off)'}}>
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
