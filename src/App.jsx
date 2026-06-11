import React from 'react'
import Navbar from './components/Navbar'
import GlowBackground from './components/GlowBackground'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Certificates from './pages/Certificates'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import SkillNetwork from './pages/Skills'  

export default function App() {
  return (
    <div className="app">
      <GlowBackground />
      <Navbar />
      <main style={{ flex: 1 }}>
        <section id="home">
          <Home />
        </section>
        <div className="section-divider" />
        <section id="projects">
          <Projects />
        </section>
        <div className="section-divider" />
        <section id="gallery">
          <Gallery />
        </section>
        <div className="section-divider" />
        <section id="skills">
          <SkillNetwork />
        </section>
        <div className="section-divider" />
        <section id="certificates">
          <Certificates />
        </section>
        <div className="section-divider" />
        <section id="blog">
          <Blog />
        </section>
        <div className="section-divider" />
        <section id="resume">
          <Resume />
        </section>
        <div className="section-divider" />
        <section id="about">
          <About />
        </section>
        <div className="section-divider" />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Nikhileswar Behera — Built with React
      </footer>
    </div>
  )
}
