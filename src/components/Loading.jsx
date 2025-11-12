import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-[#0f0f1a]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3"
      >
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 animate-pulse" />
        <p className="text-white/80 tracking-wide">WebNivra</p>
      </motion.div>
    </div>
  )
}
