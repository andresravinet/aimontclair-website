import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { CheckCircle } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Free Audit',
      description: 'We meet with your team, map your current workflows, and identify quick wins and bottlenecks. No cost, no obligation.',
    },
    {
      number: '2',
      title: 'Custom Build',
      description: 'Based on the audit, we build a custom solution that fits your stack and your team. We start small, deliver fast, and measure impact.',
    },
    {
      number: '3',
      title: 'See Results',
      description: 'Most teams see time savings in the first 2–4 weeks. We iterate based on feedback and help you scale what works.',
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
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-light">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How It Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your business.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lime text-navy flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
