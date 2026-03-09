import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import {ChatDots, Clock, GitBranch, BookOpen, ArrowRight} from '@phosphor-icons/react'

const services = [
  {
    slug: 'ai-chatbot',
    icon: MessageSquare,
    title: 'AI Chatbots',
    subtitle: 'Intelligent Assistants That Work 24/7',
    description: 'Branded AI assistants that greet visitors, answer questions, qualify leads, and book appointments automatically. Available 24/7 on your website, Facebook Messenger, WhatsApp, and more.',
    highlight: 'Reduce support team time by 60%+',
  },
  {
    slug: 'scheduling',
    icon: Clock,
    title: 'Scheduling Automation',
    subtitle: 'Reduce No-Shows, Eliminate Phone Tag',
    description: 'Smart scheduling automations that sync your calendar systems, send intelligent reminders, and let clients reschedule without calling you.',
    highlight: 'Cut no-shows by 30-50%',
  },
  {
    slug: 'workflow-automation',
    icon: Workflow,
    title: 'Workflow Automation',
    subtitle: 'Custom Automations That Move the Needle',
    description: 'Custom integrations and automations built for your unique business. Connect apps, eliminate manual data entry, and gain visibility into efficiency.',
    highlight: 'Eliminate 80%+ of manual work',
  },
  {
    slug: 'ai-training',
    icon: BookOpen,
    title: 'Team Training & AI Workshops',
    subtitle: 'Empower Your Team to Innovate',
    description: 'Hands-on workshops that empower your team to confidently use AI tools and modern digital workflows. Customized to your specific tools and skill level.',
    highlight: 'Higher adoption, 5-10 hrs saved per week',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Services() {
  useEffect(() => {
    document.title = 'Services | AI Montclair'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Explore our AI automation services: chatbots, scheduling, workflow automation, and team training.'
    )
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Four core services to automate your business, reduce manual work, and get your team&apos;s time back.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
            className="space-y-8"
          >
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div key={idx} variants={item}>
                  <Link to={`/services/${service.slug}`}>
                    <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                          <div className="flex items-center gap-4 mb-4">
                            <Icon className="w-10 h-10 text-brand flex-shrink-0" />
                            <div>
                              <h2 className="text-2xl md:text-3xl font-bold text-navy">{service.title}</h2>
                              <p className="text-brand font-bold text-sm md:text-base mt-1">{service.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 text-lg mb-4">{service.description}</p>
                          <div className="flex items-center gap-2 text-brand font-bold">
                            Explore service
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="flex items-center justify-center bg-brand-light rounded-lg p-6">
                          <p className="text-center font-bold text-navy text-base md:text-lg">
                            {service.highlight}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
              Choose the Right Service for You
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg card-shadow">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-6 font-bold text-navy">Service</th>
                    <th className="text-left p-6 font-bold text-navy">Best For</th>
                    <th className="text-left p-6 font-bold text-navy">Timeline</th>
                    <th className="text-left p-6 font-bold text-navy">Investment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-slate-light">
                    <td className="p-6 font-bold text-navy">AI Chatbots</td>
                    <td className="p-6 text-gray-600">Lead capture, customer support, 24/7 availability</td>
                    <td className="p-6 text-gray-600">2-4 weeks</td>
                    <td className="p-6 text-brand font-bold">$1,500 – $3,500</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-slate-light">
                    <td className="p-6 font-bold text-navy">Scheduling Automation</td>
                    <td className="p-6 text-gray-600">Reduce no-shows, sync calendars, reminders</td>
                    <td className="p-6 text-gray-600">1-3 weeks</td>
                    <td className="p-6 text-brand font-bold">$800 – $2,000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-slate-light">
                    <td className="p-6 font-bold text-navy">Workflow Automation</td>
                    <td className="p-6 text-gray-600">Custom integrations, unique workflows, data sync</td>
                    <td className="p-6 text-gray-600">3-6 weeks</td>
                    <td className="p-6 text-brand font-bold">$2,000 – $5,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-light">
                    <td className="p-6 font-bold text-navy">Team Training</td>
                    <td className="p-6 text-gray-600">Team adoption, skill-building, ongoing support</td>
                    <td className="p-6 text-gray-600">1-2 days</td>
                    <td className="p-6 text-brand font-bold">$1,000 – $3,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Free Audit',
                  desc: 'We understand your business, challenges, and goals. Zero obligation.',
                },
                {
                  step: '2',
                  title: 'Custom Plan',
                  desc: 'We design a tailored solution with timeline and investment.',
                },
                {
                  step: '3',
                  title: 'Build & Deploy',
                  desc: 'We build, test, train your team, and launch.',
                },
                {
                  step: '4',
                  title: 'Optimize',
                  desc: 'We measure ROI and optimize based on real data.',
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card className="text-center">
                    <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-navy mb-2 text-lg">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12">
              Whether you&apos;re in law, healthcare, real estate, fitness, or retail — we have solutions tailored to your industry.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                'Law Firms',
                'Medical & Dental',
                'Real Estate',
                'Gyms & Fitness',
                'Retail & E-commerce',
              ].map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card className="text-center py-8">
                    <p className="font-bold text-navy text-base md:text-lg">{industry}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your business and find the perfect solution. Free audit, zero obligation.
            </p>
            <Button href="/contact" variant="primary">
              Get My Free Automation Audit
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
