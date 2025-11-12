import { motion } from 'framer-motion'
import { Globe, ShoppingCart, Rocket, Bot, MessageSquare, Zap, Workflow, Cog } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Website Design & Development', items: ['Static Websites', 'eCommerce Websites', 'Landing Pages'], category: 'Web' },
  { icon: Bot, title: 'AI Chatbot Development', items: ['Custom Business Chatbots', 'WhatsApp / Website Chat Integrations', 'Lead Generation Bots'], category: 'AI Chatbots' },
  { icon: Zap, title: 'Automation Solutions', items: ['CRM / Lead Automations', 'Workflow AI Integration'], category: 'Automation' },
]

export default function Services() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden group"
        >
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
          <div className="relative">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-white mt-4 text-xl font-semibold">{s.title}</h3>
            <ul className="mt-3 space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-white/70 text-sm">• {item}</li>
              ))}
            </ul>
            <a href="#work" className="inline-block mt-4 text-sm text-cyan-300 hover:text-white transition-colors">View related projects →</a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
