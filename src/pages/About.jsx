import { useFadeIn } from '../components/useFadeIn'
import './About.css'

export default function About() {
  const r = useFadeIn()
  return (
    <main style={{paddingTop:'70px'}}>
      <section className="section about-hero">
        <div className="fu" ref={r}>
          <div className="section-label">About TEAMS</div>
          <h1 className="section-title" style={{maxWidth:'640px'}}>We don't run activities.<br />We change how people work <em>together.</em></h1>
          <p className="section-sub">TEAMS Training Thailand is a Bangkok-based experiential learning practice. We design and facilitate purposeful programs that develop the human skills no classroom teaches directly — empathy, trust, leadership, and self-awareness.</p>
        </div>
      </section>

      <section className="section about-founder" style={{background:'var(--off)'}}>
        <div className="founder-inner fu" ref={r}>
          <div className="founder-img-wrap">
            <img src="/kanny.png" alt="Kanny — Founder of TEAMS Training Thailand" />
          </div>
          <div className="founder-content">
            <div className="section-label">The founder</div>
            <h2 className="section-title">Kanny</h2>
            <p className="founder-quote">"Great leaders start as great teammates."</p>
            <p>Kanny brings together two worlds that rarely meet: the classroom and the court. As a former primary school teacher and current basketball coach, she understands how people learn, grow, and get stuck — and how the right environment can unlock something new in anyone.</p>
            <p>Over more than a decade of working with children, teenagers, educators, and corporate teams across Bangkok and Thailand, Kanny developed the TEAMS framework — a methodology built around five qualities that show up in every great team, regardless of age or industry.</p>
            <p>Her programs are bilingual (Thai and English), always tailored, and never off-the-shelf. The activity is just the vehicle. The destination is always the same: more capable, more connected, more self-aware humans.</p>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="fu" ref={r}>
          <div className="section-label">What we believe</div>
          <h2 className="section-title">Our <em>principles.</em></h2>
        </div>
        <div className="values-grid">
          {[
            { n:'01', t:'The activity is never the point.', d:'Sports, games, challenges — these are vehicles. We design every session around the human outcome, not the format.' },
            { n:'02', t:'Every group is different.', d:'We don\'t run packages. We talk to you, understand your people, and build something for them.' },
            { n:'03', t:'Reflection makes it stick.', d:'Activity without debrief is just entertainment. Every TEAMS session includes structured reflection so learning transfers to real life.' },
            { n:'04', t:'Leadership is a team skill.', d:'Great leaders emerge from great team cultures. We work on both simultaneously.' },
          ].map((v,i) => (
            <div className="value-card fu" key={i} ref={r} style={{transitionDelay:`${i*0.08}s`}}>
              <div className="value-num">{v.n}</div>
              <h3>{v.t}</h3>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
