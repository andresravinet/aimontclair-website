import { motion } from 'framer-motion'
import { Briefcase, Calendar, Home } from 'lucide-react'

const caseStudies = [
  {
    Icon: Briefcase,
    business: 'Essex County Law Firm',
    result: 'Reduced client intake calls by 60%',
    detail:
      'Before: 3 staff hours daily managing intake calls and scheduling conflicts. After: AI chatbot handles initial screening, qualifies leads, and books consultations automatically.',
    tag: 'AI Chatbot + Scheduling',
  },
  {
    Icon: Calendar,
    business: 'Montclair Medical Practice',
    result: 'Saved 8 hours/week on appointment management',
    detail:
      'Before: Front desk overwhelmed with reminder calls and reschedules. After: Automated reminder sequences and self-serve rescheduling cut no-shows by 45%.',
    tag: 'Scheduling Automation',
  },
  {
    Icon: Home,
    business: 'Essex County Home Services Company',
    result: '3x more after-hours leads captured',
    detail:
      'Before: Losing leads when no one was available to answer. After: 24/7 chatbot qualifies and captures leads, even on weekends.',
    tag: 'AI Chatbot',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Client Results
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real outcomes from AI automation projects with local NJ businesses.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {caseStudies.map(({ Icon, business, result, detail, tag }, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-lime bg-opacity-15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-navy" />
                </div>
                <p className="text-sm font-semibold text-gray-500">{business}</p>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{result}</h3>
              <p className="text-gray-600 text-base leading-relaxed flex-1">{detail}</p>
              <div className="mt-5">
                <span className="inline-block bg-lime bg-opacity-20 text-navy text-xs font-semibold px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Results reflect typical client outcomes. Business names withheld at client request.
        </p>
      </div>
    </section>
  )
}
