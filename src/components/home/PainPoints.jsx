import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import {Clock, PhoneCall, ChatDots, UserCheck} from '@phosphor-icons/react'

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
      title: 'The phone tag loop',
      description: 'You spent 40 minutes yesterday moving one appointment. Your patients are frustrated. Your front desk is exhausted. And it happens again tomorrow.',
    },
    {
      icon: PhoneCall,
      title: 'The 6 PM call you missed',
      description: 'Someone needed a contractor Friday evening. You were finishing a job. By Monday they\'d already hired the other guy. This happens every week.',
    },
    {
      icon: MessageSquare,
      title: 'The same 12 questions, every day',
      description: 'Do you take Delta Dental? What are your hours? Is there parking? Your staff answers these on the phone, in email, and in DMs. It\'s the same answer every time.',
    },
    {
      icon: UserCheck,
      title: 'The follow-up that never happened',
      description: 'You did great work for that client six months ago. You meant to check in. You didn\'t. Now they\'re using someone else — not because they wanted to, but because the other guy followed up.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#F5F0E8]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Sound familiar?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            These aren&apos;t signs of a struggling business. They&apos;re signs of a busy one that never had the right systems set up.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
