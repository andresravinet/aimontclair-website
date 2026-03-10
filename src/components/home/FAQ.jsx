import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: 'How much does it cost?',
      a: 'Projects start with a free audit. Most pilots range from a few hundred to a few thousand dollars. I agree on a clear fixed price before work begins.',
    },
    {
      q: 'How long does it take?',
      a: 'Quick wins can ship in 1-2 weeks. Larger rollouts typically take 3-6 weeks with weekly check-ins.',
    },
    {
      q: 'How do you handle data and privacy?',
      a: 'I follow least-privilege access, encrypt data in transit, and use reputable providers.',
    },
    {
      q: 'Are you HIPAA compliant?',
      a: 'I can design HIPAA-conscious workflows and use vendor BAAs where applicable.',
    },
    {
      q: 'What systems can you integrate with?',
      a: 'Google/Outlook Calendars, Clio, Dentrix, HubSpot, Email/SMS, Zapier/Make for custom flows.',
    },
    {
      q: 'Can we pause or cancel?',
      a: 'Yes. You can pause or cancel at any time. I\'ll make sure you get a clean handoff.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-warm-cream">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Common questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-3"
        >
          {faqs.map((faq, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full bg-white rounded-lg card-shadow p-6 flex items-center justify-between hover:card-hover transition-all text-left"
              >
                <span className="font-600 text-navy text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand flex-shrink-0 transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIdx === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-lg p-6 mt-0 border border-gray-100 border-t-0"
                >
                  <p className="text-gray-700">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
