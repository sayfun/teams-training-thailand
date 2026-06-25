import { useState } from 'react'
import { useFadeIn } from '../components/useFadeIn'
import './Contact.css'

export default function Contact() {
  const r = useFadeIn()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  return (
    <main style={{paddingTop:'70px'}}>
      <section className="section contact-section">
        <div className="contact-inner">
          <div className="fu" ref={r}>
            <div className="section-label">Get in touch</div>
            <h1 className="section-title">Let's build<br />something <em>together.</em></h1>
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
              <a href="https://www.facebook.com/teamstrainingthailand" target="_blank" rel="noreferrer" className="cm-row">
                <div className="cm-icon">👥</div>
                <div><div className="cm-label">Facebook</div><div className="cm-val">TEAMS Training Thailand</div></div>
              </a>
              <div className="cm-row">
                <div className="cm-icon">💬</div>
                <div>
                  <div className="cm-label">LINE OA</div>
                  <div className="cm-val">Scan the QR code below</div>
                  <img src="https://wp.teamstrainingthailand.com/wp-content/uploads/2025/09/Screenshot-2568-09-02-at-22.21.42.png" alt="LINE OA QR Code" className="line-qr" />
                </div>
              </div>
            </div>
          </div>
          <div className="fu contact-form-wrap" ref={r} style={{transitionDelay:'0.15s'}}>
            <h2>Send us a message</h2>
            <p>We'll get back to you within 24 hours.</p>
            {status === 'success' ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={async e => {
                  e.preventDefault()
                  setStatus('sending')
                  try {
                    const res = await fetch('https://formspree.io/f/xbdbnaej', {
                      method: 'POST',
                      headers: { 'Accept': 'application/json' },
                      body: new FormData(e.target),
                    })
                    if (res.ok) { setStatus('success') }
                    else { setStatus('error') }
                  } catch { setStatus('error') }
                }}
              >
                <div className="form-row">
                  <div className="form-field">
                    <label>First name</label>
                    <input type="text" name="first_name" placeholder="Your first name" required />
                  </div>
                  <div className="form-field">
                    <label>Last name</label>
                    <input type="text" name="last_name" placeholder="Your last name" />
                  </div>
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-field">
                  <label>I'm interested in</label>
                  <select name="program">
                    <option value="">Select a program</option>
                    <option>Corporate team building</option>
                    <option>Educator program</option>
                    <option>Youth camp or workshop</option>
                    <option>Something custom</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Tell us about your group</label>
                  <textarea name="message" placeholder="Who are you developing? How many people? Any specific goals?" rows={5} />
                </div>
                {status === 'error' && <p className="form-error">Something went wrong. Please try again or email us directly.</p>}
                <button type="submit" className="btn-primary" style={{width:'100%', textAlign:'center', border:'none', cursor:'pointer'}} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
