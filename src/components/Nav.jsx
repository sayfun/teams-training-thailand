import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [updatesOpen, setUpdatesOpen] = useState(false)
  const programsTimer = useRef(null)
  const updatesTimer = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setProgramsOpen(false)
    setUpdatesOpen(false)
  }, [location])

  const openPrograms  = () => { clearTimeout(programsTimer.current); setProgramsOpen(true) }
  const closePrograms = () => { programsTimer.current = setTimeout(() => setProgramsOpen(false), 200) }
  const openUpdates   = () => { clearTimeout(updatesTimer.current); setUpdatesOpen(true) }
  const closeUpdates  = () => { updatesTimer.current = setTimeout(() => setUpdatesOpen(false), 200) }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        <span className="logo-teams">TEAMS</span>
        <span className="logo-dot">.</span>
        <span className="logo-rest"> Training Thailand</span>
      </Link>

      <div className={`nav-links${menuOpen ? ' open' : ''}`}>

        {/* Programs dropdown */}
        <div
          className={`nav-dropdown${programsOpen ? ' open' : ''}`}
          onMouseEnter={openPrograms}
          onMouseLeave={closePrograms}
        >
          <button className="nav-link nav-link-btn" onClick={() => setProgramsOpen(v => !v)}>
            Programs <span className="chevron">▾</span>
          </button>
          <div className="dropdown-menu">
            <Link to="/programs/corporate" className="dropdown-item">Corporate</Link>
            <Link to="/programs/educators" className="dropdown-item">Educators</Link>
            <Link to="/programs/youth" className="dropdown-item">Youth</Link>
          </div>
        </div>

        <Link to="/about" className="nav-link">About</Link>

        {/* Updates dropdown */}
        <div
          className={`nav-dropdown${updatesOpen ? ' open' : ''}`}
          onMouseEnter={openUpdates}
          onMouseLeave={closeUpdates}
        >
          <button className="nav-link nav-link-btn" onClick={() => setUpdatesOpen(v => !v)}>
            Updates <span className="chevron">▾</span>
          </button>
          <div className="dropdown-menu">
            <Link to="/updates" className="dropdown-item">Events &amp; News</Link>
            <Link to="/blog" className="dropdown-item">Blog &amp; Articles</Link>
          </div>
        </div>

        <Link to="/contact" className="nav-cta">Book a session</Link>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
