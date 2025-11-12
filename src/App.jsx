import { useEffect, useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import WorkGrid from './components/WorkGrid'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true)
  const workRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  const scrollToWork = () => {
    const el = document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white">
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
      <Navbar />
      <Hero onViewWork={scrollToWork} />

      <Section id="about" subtitle="Who we are" title="Futuristic design. Smart technology.">
        <About />
      </Section>

      <Section id="services" subtitle="What we do" title="Services built to scale your brand">
        <Services />
      </Section>

      <Section id="work" subtitle="Our Portfolio" title="Selected Work">
        <WorkGrid ref={workRef} />
      </Section>

      <Section id="contact" subtitle="Get in Touch" title="Have a project in mind?">
        <Contact />
      </Section>

      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60">
          <p>© {new Date().getFullYear()} WebNivra. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span>Available for new projects</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
