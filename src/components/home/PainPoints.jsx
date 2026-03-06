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
      title: 'Scheduling Chaos',
      description: 'You spent 45 minutes yesterday playing phone tag to schedule a 20-minute appointment. Your customers are frustrated. You\'re exhausted.',
    },
    {
      icon: AlertCircle,
      title: 'Losing Leads While You Sleep',
      description: "That hot lead texted Friday at 6 PM. No one answered. By Monday, they hired a competitor. You\'ll never know.",
    },
    {
      icon: Zap,
      title: 'Drowning in Repetitive Admin',
      description: "You didn\'t start this business to answer the same 12 questions by email every week. But here you are. Stuck.",
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
            The Scheduling Chaos Stops Here
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Sound familiar? Every day you waste managing admin is a day you\'re not growing your business. We fix that.
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
