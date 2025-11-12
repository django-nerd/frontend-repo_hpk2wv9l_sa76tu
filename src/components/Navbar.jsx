import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Our Work' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -50% 0px', threshold: 0.25 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/10 border-b border-white/10' : 'bg-transparent'
    }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-lg shadow-indigo-500/30"></div>
            <span className="font-semibold tracking-tight text-white">WebNivra</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-sm transition-colors hover:text-white ${
                  active === s.id ? 'text-white' : 'text-white/70'
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black/30 backdrop-blur-xl border-b border-white/10">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`block w-full text-left py-2 text-white/80 hover:text-white ${
                active === s.id ? 'font-semibold' : ''
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
