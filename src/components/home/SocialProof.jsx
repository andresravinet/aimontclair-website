import { motion } from 'framer-motion'
import { AnimatedCounter } from '../AnimatedCounter'

const results = [
  {
    icon: '⚖️',
    business: 'Law Firm',
    stat: 60,
    suffix: '%',
    result: 'Reduced intake calls',
    detail: 'AI chatbot handles initial client screening 24/7',
  },
  {
    icon: '🏥',
    business: 'Medical Office',
    stat: 8,
    suffix: ' hrs',
    result: 'Saved per week',
    detail: 'Automated appointment scheduling and reminders',
  },
  {
    icon: '🛍️',
    business: 'Retail Shop',
    stat: 3,
    suffix: 'x',
    result: 'More leads captured after hours',
    detail: 'AI assistant answers questions when the store is closed',
  },
]

const trustSignals = [
  '📍 Local to Montclair',
  '💰 Fixed pricing',
  '⚡ Live in 1-6 weeks',
  '🤝 No long-term contracts',
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Real Results. Real Montclair Businesses.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            See what happened when local businesses stopped losing hours to admin work.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {results.map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="h-1 bg-gradient-to-r from-brand to-teal-400 rounded-t-xl" />
              <div className="p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-xs font-semibold text-brand uppercase tracking-wide mb-1">
                  {item.business}
                </div>
                <div className="text-4xl font-bold text-brand mb-1">
                  <AnimatedCounter target={item.stat} suffix={item.suffix} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.result}</h3>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-gray-400 mb-12">
          Results based on typical client outcomes. Names withheld for privacy.
        </p>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-4">
          {trustSignals.map((signal, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-navy shadow-sm"
            >
              {signal}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
