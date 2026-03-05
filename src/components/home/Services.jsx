import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { MessageSquare, Clock, Workflow, BookOpen } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'We build branded assistants that greet visitors on your website and social channels, answer common questions, qualify leads, and book appointments hands-free. Assistants are trained on your policies, pricing, and tone. Handoffs to staff are seamless when needed.',
    },
    {
      icon: Clock,
      title: 'Scheduling Automation',
      description: 'We\'ll map your current process, then add the right nudges so clients show up and staff waste less time. Tailored automations to your stack and industry.',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'When you have a unique workflow, we build to fit-integrations, internal tools, and specialty automations that move the needle. We start small, measure impact, and scale what works.',
    },
    {
      icon: BookOpen,
      title: 'Team Training',
      description: 'We deliver hands-on workshops that empower your team to confidently use AI tools and modern digital workflows. Each workshop is tailored to your team\'s current skill level and business goals.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What We Offer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four core services to automate your business and get your team's time back.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card>
                  <Icon className="w-10 h-10 text-lime mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
