import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function Section({ id, title, subtitle, children }) {
  const controls = useAnimation()

  useEffect(() => {
    const el = document.getElementById(id)
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 })
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [controls, id])

  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        {(title || subtitle) && (
          <div className="mb-12">
            {subtitle && <p className="text-sm uppercase tracking-widest text-white/60">{subtitle}</p>}
            {title && <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">{title}</h2>}
          </div>
        )}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ duration: 0.6 }}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
