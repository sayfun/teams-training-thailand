import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Updates from './pages/Updates'
import Contact from './pages/Contact'
import Corporate from './pages/programs/Corporate'
import Educators from './pages/programs/Educators'
import Youth from './pages/programs/Youth'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs/corporate" element={<Corporate />} />
        <Route path="/programs/educators" element={<Educators />} />
        <Route path="/programs/youth" element={<Youth />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </>
  )
}
