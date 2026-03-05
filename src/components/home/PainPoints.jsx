import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { AlertCircle, Clock, Zap } from 'lucide-react'

export function PainPoints() {
  const points = [
    {
      icon: AlertCircle,
      title: 'Too Much Admin',
      description: 'Drowning in scheduling, form-filling, and data entry that you could automate.',
    },
    {
      icon: Clock,
      title: 'Missing Follow-ups',
      description: 'Leads and clients fall through the cracks because reminders aren\'t getting sent.',
    },
    {
      icon: Zap,
      title: 'Wasted Hours on Repetitive Work',
      description: 'Your team spends time on tasks that AI can handle-time they should spend on clients.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-navy text-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sound Familiar?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 max-w-2xl mx-auto">
            Most small business owners face the same challenges. The good news: they're fixable.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {points.map((point, idx) => {
            const Icon = point.icon
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card>
                  <Icon className="w-12 h-12 text-lime mb-4" />
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
