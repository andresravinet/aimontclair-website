import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { AlertCircle, Clock, Zap } from 'lucide-react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function PainPoints() {
  const points = [
    {
      icon: Clock,
      title: 'Too Much Admin',
      description: 'You spent 45 minutes yesterday playing phone tag to schedule a 20-minute appointment.',
    },
    {
      icon: AlertCircle,
      title: 'Missing Follow-ups',
      description: "A hot lead contacted you Friday at 6 PM. By Monday morning, they'd already hired someone else.",
    },
    {
      icon: Zap,
      title: 'Wasted Hours on Repetitive Work',
      description: "You didn't start this business to answer the same 12 questions by email every week.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-navy text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sound Familiar?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Most small business owners face the same challenges. The good news: they&apos;re fixable.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {points.map((point, idx) => {
            const Icon = point.icon
            return (
              <motion.div key={idx} variants={card}>
                <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                  <Icon className="w-12 h-12 text-brand mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-base">{point.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
