import { useFadeIn } from '../components/useFadeIn'
import './Contact.css'

export default function Contact() {
  const r = useFadeIn()
  return (
    <main style={{paddingTop:'70px'}}>
      <section className="section contact-section">
        <div className="contact-inner">
          <div className="fu" ref={r}>
            <div className="section-label">Get in touch</div>
            <h1 className="section-title">Let's build<br /><em>something together.</em></h1>
            <p className="section-sub" style={{marginBottom:'2.5rem'}}>Tell us who you're developing — your team, your students, your kids. We'll design something around them.</p>
            <div className="contact-methods">
              <a href="mailto:info@teamstrainingthailand.com" className="cm-row">
                <div className="cm-icon">✉️</div>
                <div><div className="cm-label">Email</div><div className="cm-val">info@teamstrainingthailand.com</div></div>
              </a>
              <a href="https://instagram.com/teamstrainingthailand" target="_blank" rel="noreferrer" className="cm-row">
                <div className="cm-icon">📸</div>
                <div><div className="cm-label">Instagram</div><div className="cm-val">@teamstrainingthailand</div></div>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579948450407" target="_blank" rel="noreferrer" className="cm-row">
                <div className="cm-icon">👥</div>
                <div><div className="cm-label">Facebook</div><div className="cm-val">TEAMS Training Thailand</div></div>
              </a>
              <div className="cm-row">
                <div className="cm-icon">💬</div>
                <div>
                  <div className="cm-label">LINE OA</div>
                  <div className="cm-val">Scan the QR code below</div>
                  <img src="https://teamstrainingthailand.com/wp-content/uploads/2025/09/Screenshot-2568-09-02-at-22.21.42.png" alt="LINE OA QR Code" className="line-qr" />
                </div>
              </div>
            </div>
          </div>
          <div className="fu contact-form-wrap" ref={r} style={{transitionDelay:'0.15s'}}>
            <h2>Send us a message</h2>
            <p>We'll get back to you within 24 hours.</p>
            <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Thank you! We\'ll be in touch soon.') }}>
              <div className="form-row">
                <div className="form-field">
                  <label>First name</label>
                  <input type="text" placeholder="Your first name" required />
                </div>
                <div className="form-field">
                  <label>Last name</label>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>
              <div className="form-field">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-field">
                <label>I'm interested in</label>
                <select>
                  <option value="">Select a program</option>
                  <option>Corporate team building</option>
                  <option>Educator program</option>
                  <option>Youth camp or workshop</option>
                  <option>Something custom</option>
                </select>
              </div>
              <div className="form-field">
                <label>Tell us about your group</label>
                <textarea placeholder="Who are you developing? How many people? Any specific goals?" rows={5} />
              </div>
              <button type="submit" className="btn-primary" style={{width:'100%', textAlign:'center', border:'none', cursor:'pointer'}}>Send message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
