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
      description: 'We build branded assistants that greet visitors on your website and social channels, answer common questions, qualify leads, and book appointments hands-free. Assistants are trained on your policies, pricing, and tone. Your website answers questions and books consultations while you\'re closed. No staff required.',
    },
    {
      slug: 'scheduling-automation',
      icon: Calendar,
      title: 'Scheduling Automation',
      description: "We'll map your current process, then add the right nudges so clients show up and staff waste less time. Tailored automations to your stack and industry. No more phone tag. Clients book, reschedule, and get reminders automatically.",
    },
    {
      slug: 'workflow-automation',
      icon: Zap,
      title: 'Workflow Automation',
      description: "When you have a unique workflow, we build to fit — integrations, internal tools, and specialty automations that move the needle. We start small, measure impact, and scale what works. The repetitive work gets done. You stop thinking about it.",
    },
    {
      slug: 'ai-training',
      icon: GraduationCap,
      title: 'Team Training',
      description: "We deliver hands-on workshops that empower your team to confidently use AI tools and modern digital workflows. Each workshop is tailored to your team's current skill level and business goals. Your team actually uses the tools — because they understand them.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F5F0E8]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Four core services to automate your business and get your team&apos;s time back.
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
                      Learn more
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
