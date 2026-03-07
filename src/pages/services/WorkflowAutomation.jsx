import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import {
  Zap,
  Check,
  ArrowRight,
  Scale,
  Stethoscope,
  Home,
  Dumbbell,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react'

const industries = [
  {
    id: 'law',
    icon: Scale,
    label: 'Law Firm',
    automations: [
      'New client intake → auto-create client file, send welcome packet, schedule onboarding call',
      'Court date approaching → send client reminder + prep checklist automatically',
      'Invoice overdue → automated follow-up sequence — not you chasing it manually',
      'New lead from website → instant response email + added to CRM the same second',
    ],
  },
  {
    id: 'dental',
    icon: Stethoscope,
    label: 'Medical / Dental',
    automations: [
      'New patient → intake forms sent, insurance verification triggered, welcome email sent',
      'Lab results in → patient notified automatically, follow-up scheduled if needed',
      'Patient has not been in 6 months → automated reactivation campaign starts',
      'Post-appointment → review request sent automatically 24 hours later',
    ],
  },
  {
    id: 'realestate',
    icon: Home,
    label: 'Real Estate',
    automations: [
      'New listing → auto-post to social media channels + email blast to your buyer list',
      'New lead from Zillow or Realtor.com → instant response + added to follow-up sequence',
      'Showing scheduled → automated confirmation + directions sent to buyer',
      'Offer submitted → notify all parties + trigger document checklist',
    ],
  },
  {
    id: 'gym',
    icon: Dumbbell,
    label: 'Gym / Fitness',
    automations: [
      'New member signup → welcome sequence fires on day 1, day 3, and day 7',
      'Member has not visited in 2 weeks → automated re-engagement message sent',
      'Class cancelled → instant notification to every registered member',
      'Membership expiring → renewal reminder sequence starts 30 days before',
    ],
  },
  {
    id: 'restaurant',
    icon: UtensilsCrossed,
    label: 'Restaurant',
    automations: [
      'New Google review → owner notified instantly, thank-you sent (or negative review escalated)',
      'Reservation confirmed → reminder sent the night before',
      'Catering inquiry submitted → auto-reply with package info + booking link',
      'Slow Tuesday night → same-day promotion triggered to your email list',
    ],
  },
  {
    id: 'homeservices',
    icon: Wrench,
    label: 'Home Services',
    automations: [
      'Job completed → automated invoice sent + review request follows 24 hours later',
      'New lead → instant quote-request acknowledgment + follow-up if no response in 24h',
      'Annual service due → reminder sent to past customers automatically',
      'Weather event → proactive outreach campaign sent to HVAC or plumbing customers',
    ],
  },
]

const process = [
  {
    week: 'Week 1',
    title: 'Discovery',
    description:
      'We spend 2 hours mapping your current workflows. We identify every task you repeat — every email you send 30 times a month, every form you fill out by hand, every system you copy data between.',
  },
  {
    week: 'Weeks 2-3',
    title: 'Build',
    description:
      "We build your automations using tools you already have, or tools we recommend. Make, Zapier, n8n, or custom code — whatever fits your stack. We don't reinvent what's working.",
  },
  {
    week: 'Week 4',
    title: 'Test + Launch',
    description:
      'You test everything. We walk through it with you. We refine anything that feels off. You go live only when it feels right.',
  },
  {
    week: 'Ongoing',
    title: 'Support',
    description:
      "Something breaks or your process changes — we fix it. That's included. We're not a vendor you call a ticket line for. We pick up.",
  },
]

const results = [
  { stat: '80%+', label: 'Reduction in manual data entry' },
  { stat: '5-10x', label: 'Faster critical processes' },
  { stat: '99%', label: 'Data accuracy vs manual entry' },
  { stat: 'Fixed', label: 'Price — always. No surprises.' },
]

export default function WorkflowAutomation() {
  const [activeTab, setActiveTab] = useState('law')
  const active = industries.find((i) => i.id === activeTab)

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
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-brand" />
              <p className="text-brand font-semibold text-sm uppercase tracking-wide">
                Custom automation for every industry
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              If You Do It More Than Once a Week, We Can Automate It
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Custom workflow automation for the repetitive tasks that eat your hours — built
              specifically for your business, not a generic template.
            </p>
            <Button href="/contact" variant="primary">
              Get My Free Workflow Audit <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Honest Truth */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              The Honest Truth
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Most small business owners are doing $15/hour tasks with $200/hour time. Chasing
              invoices. Re-entering data. Copying information between systems. Sending the same
              email 30 times a month. We find those tasks and eliminate them.
            </p>
            <p className="text-xl text-gray-700 mt-4 leading-relaxed">
              Not with a template. Not with a generic tool that barely fits. With a custom
              automation built around exactly how your business works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Automations */}
      <section className="py-8 md:py-16 bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What We Automate
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              Select your industry to see exactly what we would build for you.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {industries.map((ind) => {
                const Icon = ind.icon
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeTab === ind.id
                        ? 'bg-brand text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {ind.label}
                  </button>
                )
              })}
            </div>

            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <h3 className="text-xl font-bold text-navy mb-6">
                    {active.label} Automations We Build
                  </h3>
                  <div className="space-y-4">
                    {active.automations.map((item, idx) => {
                      const [trigger, ...rest] = item.split('→')
                      return (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="flex-1">
                            <span className="font-semibold text-navy">{trigger.trim()}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-brand flex-shrink-0 hidden sm:block" />
                          <div className="flex-1 text-gray-600">
                            {rest.join('→').trim()}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
              What Businesses See
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((r, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="text-center">
                    <p className="text-4xl font-bold text-brand mb-2">{r.stat}</p>
                    <p className="text-sm text-gray-600">{r.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="h-full">
                    <p className="text-brand font-bold text-sm mb-1">{step.week}</p>
                    <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Pricing</h2>
            <Card className="max-w-xl">
              <p className="text-gray-500 text-sm mb-1">Project-based</p>
              <p className="text-4xl font-bold text-brand mb-2">Starting from $1,200</p>
              <p className="text-gray-600 mb-6">
                Depends on complexity. Fixed price, always. You know the number before we start.
              </p>
              <div className="space-y-3">
                {[
                  '2-hour workflow discovery session',
                  'Custom automation design and build',
                  'Integration with your existing tools',
                  'Testing, launch, and documentation',
                  'Ongoing support included',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-6 italic">
                Simple automations start at $1,200. Complex multi-system workflows range from
                $2,500-$5,000+. We scope it clearly before you commit to anything.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy mb-8">Explore Our Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { slug: 'ai-chatbot', label: 'AI Chatbot', desc: 'Your website should be working while you sleep.' },
              { slug: 'scheduling-automation', label: 'Scheduling Automation', desc: 'Stop playing phone tag. Let clients book themselves.' },
              { slug: 'ai-training', label: 'AI Training', desc: 'Your team could be using AI every day. Most are not.' },
            ].map((s, idx) => (
              <Link key={idx} to={`/services/${s.slug}`}>
                <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full">
                  <h3 className="text-lg font-bold text-navy mb-2">{s.label}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                  <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Are You Still Doing Manually?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Tell us what feels repetitive and painful. We will audit it, scope it, and show you
              what it looks like automated. Free. No commitment required.
            </p>
            <Button href="/contact" variant="primary">
              Get My Free Workflow Audit <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
