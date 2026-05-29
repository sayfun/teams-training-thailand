import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">TEAMS<span>.</span> Training Thailand</div>
          <p className="footer-tagline">Great leaders start as great teammates.</p>
          <p className="footer-desc">Bangkok-based experiential learning. We develop empathy, leadership, communication and teamwork — for kids, educators, and professionals.</p>
          <div className="footer-social">
            <a href="https://instagram.com/teamstrainingthailand" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61579948450407" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
        <div className="footer-cols">
          <div>
            <div className="footer-col-title">Programs</div>
            <Link to="/programs/corporate">Corporate</Link>
            <Link to="/programs/educators">Educators</Link>
            <Link to="/programs/youth">Youth</Link>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <Link to="/about">About</Link>
            <Link to="/updates">Updates</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <div className="footer-col-title">Get in touch</div>
            <a href="mailto:info@teamstrainingthailand.com">info@teamstrainingthailand.com</a>
            <a href="https://instagram.com/teamstrainingthailand">@teamstrainingthailand</a>
            <span className="footer-line">LINE OA available</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 TEAMS Training Thailand · Bangkok, Thailand</p>
        <p>Where teams learn to be human.</p>
      </div>
    </footer>
  )
}
