import { Link } from 'react-router-dom'
import { useFadeIn } from '../components/useFadeIn'

const POSTS = [
  { tag:'Upcoming', title:'Discover Strength & Build Confidence', excerpt:'A half-day workshop for students to explore their personal strengths in a team setting. Ages 8–16. Limited spots.', meta:'26 April 2026 · Sanctuary Studio, Sukhumvit 103', img:'https://teamstrainingthailand.com/wp-content/uploads/2026/04/TEAMS-Posts-Square-6-1024x1024.png', href:'https://teamstrainingthailand.com/discover-strength-build-confidence/' },
  { tag:'Youth Camp', title:'TEAMS Discovery Camp (Ages 8–12)', excerpt:'Two mornings of purposeful activities designed to help kids discover how they lead, communicate and collaborate under pressure.', meta:'March 28–29 · C2 Community, Phayathai', img:'https://teamstrainingthailand.com/wp-content/uploads/2026/02/WhatsApp-Image-2569-02-16-at-17.06.08-1-e1771246947605-1024x607.jpeg', href:'https://teamstrainingthailand.com/teams-discovery-camp/' },
  { tag:'Past Event', title:'Bridging Borders: Thai & Korean Students in Ayutthaya', excerpt:'How we designed a cross-cultural team building day for Thai and Korean students on a shared trip to Ayutthaya.', meta:'January 2026 · Ayutthaya', img:'https://teamstrainingthailand.com/wp-content/uploads/2026/01/WhatsApp-Image-2569-01-11-at-16.19.41-1024x768.jpeg', href:'https://teamstrainingthailand.com/bridging-borders-how-we-united-thai-and-korean-students-on-a-trip-to-ayutthaya/' },
  { tag:'Past Event', title:'TEAMS x Thammasat University', excerpt:'Building connections through teamwork — a full-day program for incoming students at Thammasat University, Bangkok.', meta:'August 2025 · Thammasat University', img:'https://teamstrainingthailand.com/wp-content/uploads/2025/08/IMG_5193-1024x768.jpg', href:'https://teamstrainingthailand.com/teams-x-thammasat-university-building-connections-through-teamwork/' },
  { tag:'Program', title:'The Kind Leaders Project', excerpt:'A multi-session leadership development program focused on kindness as a core leadership competency for young people.', meta:'October 2025', img:'https://teamstrainingthailand.com/wp-content/uploads/2025/10/Poster-2-724x1024.png', href:'https://teamstrainingthailand.com/the-kind-leaders-project/' },
]

export default function Updates() {
  const r = useFadeIn()
  return (
    <main style={{paddingTop:'70px'}}>
      <section className="section" style={{background:'var(--white)'}}>
        <div className="fu" ref={r} style={{marginBottom:'3rem'}}>
          <div className="section-label">What's on</div>
          <h1 className="section-title">Updates.</h1>
          <p className="section-sub">Upcoming sessions, past events, and stories from the field.</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px,1fr))', gap:'1.5rem'}}>
          {POSTS.map((p,i) => (
            <a href={p.href} target="_blank" rel="noreferrer" className="ev-card fu" key={i} ref={r} style={{transitionDelay:`${i*0.07}s`, textDecoration:'none', display:'block', borderRadius:'16px', overflow:'hidden', border:'1px solid var(--border)', transition:'transform 0.25s, box-shadow 0.25s', background:'var(--white)'}}>
              <img src={p.img} alt={p.title} style={{width:'100%', height:'200px', objectFit:'cover', display:'block'}} />
              <div style={{padding:'1.4rem'}}>
                <span style={{display:'inline-block', background:'var(--off)', color:'var(--navy)', fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.07em', textTransform:'uppercase', padding:'0.28rem 0.7rem', borderRadius:'100px', marginBottom:'0.7rem'}}>{p.tag}</span>
                <div style={{fontFamily:'var(--font-d)', fontSize:'1rem', fontWeight:700, color:'var(--navy)', lineHeight:1.35, marginBottom:'0.5rem'}}>{p.title}</div>
                <div style={{fontSize:'0.85rem', lineHeight:1.65, color:'var(--grey)', marginBottom:'0.6rem'}}>{p.excerpt}</div>
                <div style={{fontSize:'0.78rem', color:'var(--grey)'}}>{p.meta}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
