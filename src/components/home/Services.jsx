import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Bot, Calendar, Zap, GraduationCap, ArrowRight } from 'lucide-react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function Services() {
  const services = [
    {
      slug: 'ai-chatbot',
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Branded assistants that greet visitors on your website and social channels, answer common questions, qualify leads, and book appointments — all without staff involvement. Your website answers questions and books consultations while you\'re closed.',
    },
    {
      slug: 'scheduling-automation',
      icon: Calendar,
      title: 'Scheduling Automation',
      description: "I map your current process, then add the right nudges so clients show up and staff waste less time. Tailored to your stack and industry. No more phone tag. Clients book, reschedule, and get reminders automatically.",
    },
    {
      slug: 'workflow-automation',
      icon: Zap,
      title: 'Workflow Automation',
      description: "When you have a unique workflow, I build to fit — integrations, internal tools, and specialty automations that move the needle. Start small, measure impact, and scale what works. The repetitive work gets done. You stop thinking about it.",
    },
    {
      slug: 'ai-training',
      icon: GraduationCap,
      title: 'Team Training',
      description: "Hands-on workshops that give your team the skills to use AI tools confidently every day. Each workshop is tailored to your team's current skill level and business goals. Your team actually uses the tools — because they understand them.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-warm-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-brand mb-3">What I do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Four services, one goal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Automate the repetitive work and get your team&apos;s time back.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div key={idx} variants={card}>
                <Link to={`/services/${service.slug}`}>
                  <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                    <Icon className="w-10 h-10 text-brand mb-4" />
                    <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-brand font-bold text-sm">
                      See how it works
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
