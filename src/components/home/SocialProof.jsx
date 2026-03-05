import { motion } from 'framer-motion'

const results = [
  {
    icon: '⚖️',
    business: 'Law Firm',
    result: 'Reduced intake calls by 60%',
    detail: 'AI chatbot handles initial client screening 24/7',
  },
  {
    icon: '🏥',
    business: 'Medical Office',
    result: 'Saved 8 hours/week',
    detail: 'Automated appointment scheduling and reminders',
  },
  {
    icon: '🛍️',
    business: 'Retail Shop',
    result: '3x more leads captured after hours',
    detail: 'AI assistant answers questions when the store is closed',
  },
]

const trustSignals = [
  '📍 Local to Montclair',
  '💰 Fixed pricing',
  '⚡ Live in 1-6 weeks',
  '🤝 No long-term contracts',
]

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
            Real Results for NJ Businesses
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Typical outcomes from AI automation projects with local small businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-xs font-semibold text-lime uppercase tracking-wide mb-1">
                {item.business}
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{item.result}</h3>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </motion.div>
          ))}
        </div>

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
