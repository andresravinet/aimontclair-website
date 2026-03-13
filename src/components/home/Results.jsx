import { motion } from 'framer-motion'
import { TrendingUp, Clock, Zap } from 'lucide-react'

const results = [
  {
    icon: Clock,
    metric: '15+ hrs',
    label: 'Saved per week',
    description: 'Average hours recovered from automation',
  },
  {
    icon: TrendingUp,
    metric: '50%',
    label: 'Fewer no-shows',
    description: 'Automated reminders + rescheduling',
  },
  {
    icon: Zap,
    metric: '3x',
    label: 'More leads captured',
    description: 'After-hours automation working 24/7',
  }
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function Results() {
  return (
    <section className="py-16 md:py-24 bg-warm-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-brand mb-3">What changes</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Real results from real Montclair clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            These aren\'t hypothetical numbers. They\'re what happens when the busy work gets automated.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {results.map((result, idx) => {
            const Icon = result.icon
            return (
              <motion.div key={idx} variants={card} className="group">
                <div className="bg-white rounded-xl p-8 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-brand/10">
                      <Icon className="text-brand" size={24} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="text-3xl font-bold text-brand">
                      {result.metric}
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mt-1">
                      {result.label}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {result.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-brand/5 to-brand-dark/5 rounded-xl p-8 border border-slate-100 text-left"
        >
          <p className="text-gray-600 mb-3">
            <span className="font-semibold text-navy">How long does this take?</span> Most projects go live in 3-4 weeks. We move fast.
          </p>
          <p className="text-gray-600 mb-3">
            <span className="font-semibold text-navy">What does it cost?</span> $500-$5,000+ depending on what you\'re automating. No surprise fees.
          </p>
          <p className="text-gray-600">
            <span className="font-semibold text-navy">What\'s first?</span> A free 30-minute conversation about where automation would help most.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
