import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import {
  GraduationCap,
  Check,
  ArrowRight,
  Scale,
  Stethoscope,
  Home,
  Users,
} from 'lucide-react'

const tracks = [
  {
    id: 'law',
    icon: Scale,
    label: 'Law Firm',
    items: [
      'Using AI to draft demand letters, research memos, and client summaries',
      'AI-assisted contract review — what to look for, what to watch out for',
      'Building a firm-specific AI prompt library your whole team uses',
      'What AI can and cannot do with privileged information — important guardrails',
    ],
  },
  {
    id: 'medical',
    icon: Stethoscope,
    label: 'Medical / Dental',
    items: [
      'Using AI for patient communication drafts — appointment reminders, follow-ups, post-visit summaries',
      'AI for insurance documentation and coding assistance',
      'HIPAA considerations when using AI tools — what is safe, what is not',
      'Building a practice-specific AI workflow your front desk can actually use',
    ],
  },
  {
    id: 'realestate',
    icon: Home,
    label: 'Real Estate',
    items: [
      'AI-powered listing descriptions that actually make buyers click',
      'Using AI for market analysis summaries — give clients data without doing all the work',
      'Automating follow-up sequences for leads with AI-written messages',
      'AI tools for social media content creation — listings, market updates, neighborhood guides',
    ],
  },
  {
    id: 'general',
    icon: Users,
    label: 'Gyms / Restaurants / Retail',
    items: [
      'ChatGPT for customer responses, social posts, and email campaigns',
      'AI for scheduling, FAQs, and customer service scripts',
      'Building a content calendar with AI in 30 minutes',
      'AI tools for hiring: job descriptions, interview questions, onboarding documents',
    ],
  },
]

const formats = [
  {
    name: 'Workshop (Half-Day)',
    duration: '4 hours',
    price: '$800',
    team: 'Teams up to 8',
    description:
      "Hands-on session where everyone practices with real tools and real workflows. Everyone leaves with a prompt library and a list of 10 things they can automate starting Monday.",
    highlight: false,
  },
  {
    name: '1:1 Coaching',
    duration: '4 weekly sessions',
    price: '$600',
    team: 'You + Andres',
    description:
      "Weekly 1-hour sessions, custom to your business and your tools. Focused on what you personally need to get faster and better. No generic curriculum.",
    highlight: true,
  },
  {
    name: 'Team Onboarding (Full-Day)',
    duration: '8 hours',
    price: '$1,600',
    team: 'Larger teams',
    description:
      "Full-day intensive with a custom AI playbook built for your business. Includes advanced modules, department-specific workflows, and a 30-day follow-up plan.",
    highlight: false,
  },
]

const outcomes = [
  'Custom AI prompt library built for your specific role and industry',
  'Step-by-step workflows for your most common tasks',
  '"What NOT to do with AI" guardrails — critical for legal and medical teams',
  '30-day post-training support via email',
]

const gap = [
  {
    stat: '3 years',
    label: 'Since ChatGPT launched',
  },
  {
    stat: '90%',
    label: 'Of teams still use it for casual emails only',
  },
  {
    stat: '10x',
    label: 'More output from teams that have been properly trained',
  },
  {
    stat: 'Growing',
    label: 'The gap between trained and untrained teams',
  },
]

export default function AITraining() {
  const [activeTab, setActiveTab] = useState('law')
  const active = tracks.find((t) => t.id === activeTab)

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
              <GraduationCap className="w-8 h-8 text-brand" />
              <p className="text-brand font-semibold text-sm uppercase tracking-wide">
                Hands-on training for NJ small business teams
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Team Could Be Using AI Every Day. Most Aren&#39;t.
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Hands-on AI training for NJ small business teams — practical, non-technical, and
              built around the work you actually do.
            </p>
            <Button href="/contact" variant="primary">
              Book a Training Session <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              The Gap Is Getting Wider
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl leading-relaxed mb-10">
              ChatGPT has been out for 3 years. Most small business teams are still using it to
              write the occasional email. Meanwhile, the businesses that trained their teams are
              doing 10x more with the same staff. That gap is only getting wider — and it compounds
              every month you wait.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {gap.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="text-center">
                    <p className="text-3xl font-bold text-brand mb-2">{item.stat}</p>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Teach */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What We Teach — By Industry
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              Every training is built around the actual work your team does. No generic AI overview
              slides. Real tools, real workflows, real practice.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {tracks.map((t) => {
                const Icon = t.icon
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeTab === t.id
                        ? 'bg-brand text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {t.label}
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
                    {active.label} Team Training Curriculum
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {active.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Training Formats
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              We have an option for solo operators, small teams, and larger companies. All hands-on.
              All specific to your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {formats.map((format, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card
                    className={`h-full flex flex-col ${
                      format.highlight ? 'border-2 border-brand' : ''
                    }`}
                  >
                    {format.highlight && (
                      <div className="bg-brand text-white text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-navy mb-1">{format.name}</h3>
                    <p className="text-gray-500 text-sm mb-1">{format.duration} &middot; {format.team}</p>
                    <p className="text-3xl font-bold text-brand mb-4">{format.price}</p>
                    <p className="text-gray-600 flex-1">{format.description}</p>
                    <div className="mt-6">
                      <Button href="/contact" variant="primary">
                        Book This Format
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What You Walk Away With
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              Not slides. Not a PDF that sits in your Downloads folder. Actual working tools your
              team can use the next day.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {outcomes.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-brand flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy mb-8">Explore Our Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { slug: 'ai-chatbot', label: 'AI Chatbot', desc: 'Your website should be working while you sleep.' },
              { slug: 'scheduling-automation', label: 'Scheduling Automation', desc: 'Stop playing phone tag. Let clients book themselves.' },
              { slug: 'workflow-automation', label: 'Workflow Automation', desc: 'If you do it more than once a week, we can automate it.' },
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
              Ready to Make Your Team 10x More Productive?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Tell us about your team, your industry, and your current tools. We will design a
              training session around exactly what you need.
            </p>
            <Button href="/contact" variant="primary">
              Book a Training Session <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
