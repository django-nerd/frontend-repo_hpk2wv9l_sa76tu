import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div>
        <h3 className="text-white text-2xl font-semibold">Let’s build something great</h3>
        <p className="text-white/70 mt-3 max-w-prose">Tell us about your project, and we’ll get back within 24 hours.</p>
        <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input required className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" required className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="jane@company.com" />
              </div>
            </div>
            <div>
              <label className="text-sm text-white/70">Service Interest</label>
              <select className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50">
                <option className="bg-[#1E1E2F]">Website Design & Development</option>
                <option className="bg-[#1E1E2F]">AI Chatbot Development</option>
                <option className="bg-[#1E1E2F]">Automation Solutions</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea required rows="5" className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Share a brief about your project..." />
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-pink-500/30 transition-shadow"
            >
              {loading ? 'Sending...' : (<><Send className="h-4 w-4" /> Submit</>)}
            </motion.button>
          </form>
        </div>
      </div>
      <div className="relative min-h-[320px]">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-3xl" />
        <div className="relative p-6 rounded-2xl h-full border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-start justify-center">
          <p className="text-white/80">Email</p>
          <h4 className="text-white text-xl font-semibold">hello@webnivra.com</h4>
          <p className="text-white/80 mt-6">Follow</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="px-3 py-1 rounded-full border border-white/10 text-white/80 hover:bg-white/10">Twitter</a>
            <a href="#" className="px-3 py-1 rounded-full border border-white/10 text-white/80 hover:bg-white/10">LinkedIn</a>
            <a href="#" className="px-3 py-1 rounded-full border border-white/10 text-white/80 hover:bg-white/10">Dribbble</a>
          </div>
        </div>
        <button className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
