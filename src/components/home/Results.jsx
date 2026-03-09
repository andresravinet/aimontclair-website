import { motion } from 'framer-motion'
import {TrendUp, Clock, Lightning} from '@phosphor-icons/react'

const results = [
  {
    icon: Clock,
    metric: '15+ hrs',
    label: 'Saved per week',
    description: 'Average hours recovered from automation',
    color: 'text-blue-400',
    bg: 'bg-blue-50'
  },
  {
    icon: TrendingUp,
    metric: '50%',
    label: 'Fewer no-shows',
    description: 'Automated reminders + rescheduling',
    color: 'text-green-400',
    bg: 'bg-green-50'
  },
  {
    icon: Zap,
    metric: '3x',
    label: 'More leads captured',
    description: 'After-hours automation working 24/7',
    color: 'text-amber-400',
    bg: 'bg-amber-50'
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
    <section className="py-16 md:py-24 bg-canvas grain-overlay">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Real Results from Our Clients
          </h2>
          <p className="text-lg text-cream-muted max-w-2xl mx-auto">
            Quantified outcomes. No hype. Just automation that works.
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
                <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-white/5">
                      <Icon className={`${result.color}`} size={24} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className={`text-3xl font-bold ${result.color}`}>
                      {result.metric}
                    </p>
                    <p className="text-sm font-semibold text-cream mt-1">
                      {result.label}
                    </p>
                  </div>
                  <p className="text-sm text-cream-muted">
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
          className="mt-12 bg-white/5 border border-white/10 rounded-xl p-8 text-center"
        >
          <p className="text-cream-muted mb-2">
            <span className="font-semibold text-cream">Average project:</span> Live in 3-4 weeks
          </p>
          <p className="text-cream-muted">
            <span className="font-semibold text-cream">Pricing:</span> $500-$5,000+ depending on scope. Free audit to start.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
