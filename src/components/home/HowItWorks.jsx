import { motion } from 'framer-motion'
import { Card } from '../ui/Card'

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Free Audit',
      description: 'Day 1. I meet with your team, map your workflows, and lock in scope. For websites, we nail down pages, goals, and content. No cost, no obligation.',
    },
    {
      number: '2',
      title: 'Build',
      description: 'Days 2–4. I build to fit — website, app, or automation. Websites go from blank page to first draft in 2 days. Automations take 1–2 weeks. Fixed price, no surprises.',
    },
    {
      number: '3',
      title: 'Go Live',
      description: 'Day 5+. Most websites are live within 5 days of the audit. Automations show results in the first 1–2 weeks. I stay close until it\'s working.',
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
    <section id="how-it-works" className="py-16 md:py-24 bg-warm-cream">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.p variants={itemVariants} className="text-xs tracking-[0.2em] uppercase font-semibold text-brand mb-3">The process</motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How it works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl">
            From first call to live &mdash; in days.
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg">
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

        {/* Website delivery timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 border border-brand/20 rounded-xl p-6 bg-brand/5"
        >
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-brand mb-4">Website delivery — typical timeline</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex-1">
              <div className="text-2xl font-bold font-display text-navy">Day 1</div>
              <div className="text-sm text-gray-600">Audit &amp; scope locked</div>
            </div>
            <div className="hidden sm:block text-gray-300 text-xl px-4">→</div>
            <div className="flex-1">
              <div className="text-2xl font-bold font-display text-navy">Day 3</div>
              <div className="text-sm text-gray-600">First draft, your review</div>
            </div>
            <div className="hidden sm:block text-gray-300 text-xl px-4">→</div>
            <div className="flex-1">
              <div className="text-2xl font-bold font-display text-navy">Day 5</div>
              <div className="text-sm text-gray-600">Site goes live</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
