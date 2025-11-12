import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onViewWork }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2F]/40 via-[#1E1E2F]/60 to-[#1E1E2F] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 grid md:grid-cols-2 gap-12">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            We Design Stunning Websites & Build Smart AI Chatbots
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg text-white/80 max-w-xl"
          >
            Transforming your ideas into digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-pink-500/30 transition-shadow">Let’s Work Together</a>
            <button onClick={onViewWork} className="px-6 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white/10 transition-colors">View Our Work</button>
          </motion.div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  )
}
