import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import {ChatDots, Check, ArrowRight, Scales, Stethoscope, House, Barbell, ForkKnife, Wrench} from '@phosphor-icons/react'

const industries = [
  {
    id: 'law',
    icon: Scale,
    label: 'Law Firm',
    pain: 'A potential client called Friday at 6 PM. No one answered. By Monday they had hired someone else. This happens every week.',
    example: {
      visitor: 'Do you handle DUI cases?',
      bot: 'Yes, we handle DUI defense in Essex County. Would you like to schedule a free 15-minute consultation with an attorney? I can check availability right now.',
    },
  },
  {
    id: 'dental',
    icon: Stethoscope,
    label: 'Dental / Medical',
    pain: 'Your front desk spends 2 hours a day answering "do you take my insurance?" and "what are your hours?" — the same 12 questions, over and over.',
    example: {
      visitor: 'Do you take Delta Dental?',
      bot: "Yes, we're in-network with Delta Dental PPO. Are you a new patient? I can schedule your first appointment — we usually have openings within the week.",
    },
  },
  {
    id: 'realestate',
    icon: Home,
    label: 'Real Estate',
    pain: 'A buyer submitted a contact form at 9 PM. You saw it at 8 AM. They had already toured 3 homes with another agent.',
    example: {
      visitor: 'Is 42 Elm Street still available?',
      bot: "Yes, it's still active! It's a 3BR/2BA listed at $649,000. Would you like to schedule a showing? I can check the agent's availability for this week.",
    },
  },
  {
    id: 'gym',
    icon: Dumbbell,
    label: 'Gym / Fitness',
    pain: "Someone visits your website at midnight, ready to sign up. There's no way to ask questions or get started. They close the tab.",
    example: {
      visitor: "What's included in the membership?",
      bot: 'Our membership includes unlimited classes, personal training orientation, and 24/7 access. Want me to show you our current membership options and pricing?',
    },
  },
  {
    id: 'restaurant',
    icon: UtensilsCrossed,
    label: 'Restaurant',
    pain: "You get 40 calls a day asking 'do you have a table for 4 Saturday at 7?' Your staff answers every one manually.",
    example: {
      visitor: 'Do you have outdoor seating?',
      bot: "Yes, we have a heated patio open through November. Want me to check availability for a specific date? I can also send you our current menu.",
    },
  },
  {
    id: 'homeservices',
    icon: Wrench,
    label: 'Home Services',
    pain: "You're on a job site all day. Leads fill out your contact form. You can't respond for hours. They've already called 3 other contractors.",
    example: {
      visitor: 'Can you give me a quote for a bathroom remodel?',
      bot: "Absolutely. To get you an accurate quote, can I ask a few quick questions? What's the approximate square footage, and are you looking to replace fixtures only or do a full gut renovation?",
    },
  },
]

const results = [
  { stat: '40%', label: 'More leads captured after hours — law firms' },
  { stat: '60%', label: 'Reduction in front desk call volume — medical offices' },
  { stat: '10x', label: 'Faster lead response — real estate agents' },
  { stat: '35%', label: 'More membership signups — gyms using 24/7 chat' },
]

const features = [
  'Answers your 20 most common questions instantly, 24/7',
  'Qualifies leads before they ever reach you',
  'Books appointments directly into your calendar',
  'Captures contact info from every visitor, even if they never fill out a form',
  'Escalates urgent requests to you via text immediately',
  "Speaks your brand's voice — not robotic FAQ",
]

const steps = [
  {
    number: '1',
    title: 'We Learn Your Business',
    description: 'We spend time understanding your services, your most common questions, your tone, and how you like to qualify leads. Nothing generic.',
  },
  {
    number: '2',
    title: 'We Build and Train',
    description: 'We build your chatbot and train it on your specific content — your FAQs, your pricing, your service area, your brand voice.',
  },
  {
    number: '3',
    title: 'You Go Live',
    description: "We install it on your site and test it with you. Usually live within 2 weeks. You'll wonder how you went without it.",
  },
]

export default function AIChatbot() {
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
              <ChatDots className="w-8 h-8 text-brand" />
              <p className="text-brand font-semibold text-sm uppercase tracking-wide">
                Built for law firms, medical offices, gyms, and more
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Website Should Be Working While You Sleep
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              An AI chatbot answers questions, qualifies leads, and books appointments 24/7 — even
              on weekends, even at 11 PM.
            </p>
            <Button href="/contact" variant="primary">
              See It In Action <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Industry Pain Tabs */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Sound Familiar?
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              Pick your industry. We've seen this exact problem hundreds of times.
            </p>

            {/* Tabs */}
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

            {/* Active Panel */}
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Pain */}
                <Card className="border-l-4 border-red-400">
                  <h3 className="text-lg font-bold text-navy mb-3">The Problem</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{active.pain}</p>
                </Card>

                {/* Chat Example */}
                <Card className="bg-gray-50">
                  <h3 className="text-lg font-bold text-navy mb-4">What the chatbot does instead</h3>
                  <div className="space-y-3">
                    <div className="flex justify-end">
                      <div className="bg-gray-200 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs text-sm text-gray-800">
                        {active.example.visitor}
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-brand text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs text-sm">
                        {active.example.bot}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    Instant. Accurate. Available at 2 AM.
                  </p>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What It Actually Does
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              Not just a FAQ page. A real lead-generation and booking machine.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-brand flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{f}</p>
                </motion.div>
              ))}
            </div>
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
              Results That Move the Needle
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

      {/* How We Build It */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
              How We Build It
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <Card className="h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
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
              <p className="text-gray-500 text-sm mb-1">One-time setup</p>
              <p className="text-4xl font-bold text-brand mb-2">Starting from $800</p>
              <p className="text-gray-600 mb-6">
                Optional: $150/mo for ongoing maintenance, updates, and support
              </p>
              <div className="space-y-3">
                {[
                  'Custom chatbot trained on your business',
                  'Installed and tested on your website',
                  'Integration with your calendar or booking system',
                  'Lead capture and escalation setup',
                  '2 weeks of post-launch support',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-6 italic">
                Every business is different. We will give you a clear quote before starting.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy mb-8">Explore Our Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { slug: 'scheduling-automation', label: 'Scheduling Automation', desc: 'Stop playing phone tag. Let clients book themselves.' },
              { slug: 'workflow-automation', label: 'Workflow Automation', desc: 'If you do it more than once a week, we can automate it.' },
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
              Ready to See What Your Chatbot Would Look Like?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We will show you a working demo built for your industry. Free. No obligation.
            </p>
            <Button href="/contact" variant="primary">
              Get My Free Chatbot Demo <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
