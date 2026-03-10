import { motion } from 'framer-motion'
import { Clock, PhoneCall, MessageSquare, UserCheck } from 'lucide-react'

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
      description: 'Admin chaos eating your day. You spent 40 minutes yesterday moving one appointment. Your patients are frustrated. Your front desk is exhausted. And it happens again tomorrow.',
    },
    {
      icon: PhoneCall,
      title: 'Losing valuable leads after hours',
      description: 'Someone needed a contractor Friday evening. You were finishing a job. By Monday they\'d already hired someone else. This happens every week — and costs you real money.',
    },
    {
      icon: MessageSquare,
      title: 'Your team drowning in repetitive work',
      description: 'Do you take Delta Dental? What are your hours? Is there parking? Your staff answers these same 12 questions every single day. On phone, email, DMs. It\'s never-ending.',
    },
    {
      icon: UserCheck,
      title: 'The follow-up that never happened',
      description: 'You did great work for that client six months ago. You meant to check in. You didn\'t. Now they\'re using someone else — not because they wanted to, but because the other guy actually followed up.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-canvas grain-overlay">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-accent mb-3">Sound familiar?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Feeling overwhelmed? You&apos;re not alone.
          </h2>
          <p className="text-lg text-cream-muted max-w-2xl">
            Admin chaos. Lost leads. Team stretched thin. These aren&apos;t signs of a struggling business — they&apos;re signs of a growing one that never had the right systems set up.
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
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 hover:shadow-lg transition-all duration-200 h-full">
                  <Icon className="w-8 h-8 text-cream-muted mb-4" />
                  <h3 className="text-lg font-bold text-cream mb-2">{point.title}</h3>
                  <p className="text-cream-muted text-sm">{point.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
