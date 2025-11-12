import { motion } from 'framer-motion'

const milestones = [
  { year: '2020', title: 'Founded WebNivra', desc: 'Started with a vision to blend design and AI to create smart digital experiences.' },
  { year: '2021', title: 'First 50 Projects', desc: 'Delivered websites and chatbots for startups and SMEs across industries.' },
  { year: '2022', title: 'Automation Suite', desc: 'Launched automation solutions integrating CRMs and workflows.' },
  { year: '2023', title: 'Global Clients', desc: 'Expanded to serve clients in 12+ countries with a growing team.' },
]

export default function About() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h3 className="text-white text-2xl font-semibold">About WebNivra</h3>
        <p className="text-white/70 mt-4 max-w-prose">
          WebNivra is a creative digital agency that designs stunning, high-performing websites and builds intelligent AI chatbot systems for businesses.
          Our approach is futuristic, professional, and minimal — blending creativity with smart technology.
        </p>
        <p className="text-white/70 mt-4 max-w-prose">
          We craft human-centered experiences backed by automation and AI, helping brands scale faster and serve customers better.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="space-y-6 pl-10">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[38px] top-2 h-3 w-3 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-[0_0_20px] shadow-cyan-400/40" />
              <h4 className="text-white font-semibold">{m.year} — {m.title}</h4>
              <p className="text-white/70 text-sm mt-1">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
