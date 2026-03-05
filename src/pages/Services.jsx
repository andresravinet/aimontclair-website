import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { MessageSquare, Clock, Workflow, BookOpen } from 'lucide-react'

const serviceDetails = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'We build branded assistants that greet visitors on your website and social channels, answer common questions, qualify leads, and book appointments hands-free. Assistants are trained on your policies, pricing, and tone. Handoffs to staff are seamless when needed.',
    benefits: [
      'Available 24/7 to answer customer questions',
      'Qualify leads before they reach your team',
      'Book appointments and confirmations automatically',
      'Reduce support team workload by 60%+',
    ],
    timeline: '2-4 weeks',
    integrations: ['Website', 'Facebook Messenger', 'WhatsApp', 'Custom APIs'],
  },
  {
    icon: Clock,
    title: 'Scheduling Automation',
    description: 'We\'ll map your current process, then add the right nudges so clients show up and staff waste less time. Tailored automations to your stack and industry.',
    benefits: [
      'Reduce no-show rates with smart reminders',
      'Sync bookings across all your platforms',
      'Auto-confirm appointments and collect deposits',
      'Save your team 5+ hours per week',
    ],
    timeline: '1-3 weeks',
    integrations: ['Google Calendar', 'Outlook', 'Acuity Scheduling', 'Calendly', 'Custom systems'],
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'When you have a unique workflow, we build to fit-integrations, internal tools, and specialty automations that move the needle. We start small, measure impact, and scale what works.',
    benefits: [
      'Connect your apps so data flows automatically',
      'Custom automations for your unique business',
      'Measure ROI before scaling',
      'Reduce manual data entry by 80%+',
    ],
    timeline: '3-6 weeks',
    integrations: ['Zapier', 'Make', 'Clio', 'Dentrix', 'HubSpot', 'Email', 'Custom integrations'],
  },
  {
    icon: BookOpen,
    title: 'Team Training',
    description: 'We deliver hands-on workshops that empower your team to confidently use AI tools and modern digital workflows. Each workshop is tailored to your team\'s current skill level and business goals.',
    benefits: [
      'Hands-on training for your entire team',
      'Customized to your tools and workflows',
      'Ongoing support and Q&A',
      'Empower your team to innovate',
    ],
    timeline: 'Flexible',
    integrations: ['All platforms you use'],
  },
]

export default function Services() {
  useEffect(() => {
    document.title = 'Services | AI Montclair'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Explore our AI automation services: chatbots, scheduling, workflow automation, and team training.'
    )
  }, [])

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
    <>
      {/* Hero */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Custom AI automation solutions built for your business, your team, and your timeline.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {serviceDetails.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={containerVariants}
                className={`mb-20 ${idx !== serviceDetails.length - 1 ? 'pb-12 border-b border-gray-200' : ''}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <motion.div variants={itemVariants}>
                    <Icon className="w-16 h-16 text-brand mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="font-bold text-navy mb-3">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-brand font-bold">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <Card className="p-4">
                        <p className="text-sm text-gray-600">Timeline</p>
                        <p className="font-bold text-navy">{service.timeline}</p>
                      </Card>
                    </div>

                    <Button href="/contact" variant="primary">
                      Get Started
                    </Button>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="p-8 bg-slate-light">
                      <h3 className="font-bold text-navy mb-4">Compatible With</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.integrations.map((integration, i) => (
                          <span
                            key={i}
                            className="bg-white text-navy px-3 py-2 rounded-full text-sm font-500 card-shadow"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure which service is right for you?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your business and find the perfect fit. Free audit, zero obligation.
          </p>
          <Button href="/contact" variant="primary">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
