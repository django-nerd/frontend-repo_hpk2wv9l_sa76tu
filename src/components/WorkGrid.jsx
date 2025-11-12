import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const allProjects = [
  {
    id: 1,
    title: 'Aurora Commerce',
    desc: 'High-converting eCommerce storefront with rich animations.',
    image: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop',
    tags: ['eCommerce'],
    category: 'eCommerce'
  },
  {
    id: 2,
    title: 'Nimbus AI Bot',
    desc: 'Custom AI assistant for lead qualification and FAQs.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    tags: ['AI Bot'],
    category: 'AI Chatbots'
  },
  {
    id: 3,
    title: 'Zen Branding Suite',
    desc: 'Minimal brand system with typography and color kit.',
    image: 'https://images.unsplash.com/photo-1739503557144-c108cd2835e2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxaZW4lMjBCcmFuZGluZyUyMFN1aXRlfGVufDB8MHx8fDE3NjI5Mzc3NTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['Branding'],
    category: 'Branding'
  },
  {
    id: 4,
    title: 'Static Site – Atlas',
    desc: 'Lightning-fast static website for a SaaS product.',
    image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1200&auto=format&fit=crop',
    tags: ['Static'],
    category: 'Static Websites'
  },
  {
    id: 5,
    title: 'Flow CRM Automations',
    desc: 'Automated lead routing and email sequences.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    tags: ['Automation'],
    category: 'Automation'
  },
  {
    id: 6,
    title: 'Lumen Landing',
    desc: 'Conversion-focused landing page with A/B testing.',
    image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1200&auto=format&fit=crop',
    tags: ['Landing'],
    category: 'Landing Pages'
  }
]

const filters = ['All', 'Static Websites', 'eCommerce', 'AI Chatbots', 'Branding']

export default function WorkGrid() {
  const [filter, setFilter] = useState('All')
  const projects = allProjects.filter(p => filter === 'All' || p.category === filter)
  const [active, setActive] = useState(null)

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full border transition-all ${
              filter === f
                ? 'border-white/30 text-white bg-white/10'
                : 'border-white/10 text-white/70 hover:text-white hover:border-white/30'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            layout
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <button onClick={() => setActive(p)} className="text-left w-full">
              <div className="overflow-hidden">
                <img src={p.image} alt={p.title} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-white/70 text-sm mt-1">{p.desc}</p>
                <div className="flex gap-2 flex-wrap mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-white border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none rounded-2xl" />
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="max-w-3xl w-full bg-[#151526] border border-white/10 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.image} alt={active.title} className="h-72 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-white text-2xl font-semibold">{active.title}</h3>
                <p className="text-white/70 mt-2">{active.desc}</p>
                <div className="flex gap-2 flex-wrap mt-4">
                  {active.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-white border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <button onClick={() => setActive(null)} className="px-4 py-2 rounded-full border border-white/20 text-white/90 hover:bg-white/10">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
