import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import {Calendar, Check, ArrowRight, Stethoscope, Scales, Barbell, Scissors, Briefcase, Wrench, X} from '@phosphor-icons/react'

const industries = [
  {
    id: 'dental',
    icon: Stethoscope,
    label: 'Dental / Medical',
    pain: 'Your front desk spends 90 minutes a day on appointment calls. No-show rate is 20%+. Reminder calls go out manually the day before — if they go out at all.',
    before: [
      'Patient calls to book — receptionist checks calendar manually',
      'Back-and-forth to find a time that works',
      'Staff manually sends reminder the day before (if they remember)',
      'Patient no-shows — staff calls to reschedule, plays phone tag',
    ],
    after: [
      'Patient books online 24/7 in 90 seconds',
      'Confirmation sent instantly via email and text',
      'Reminders sent automatically at 48h and 24h before',
      'If no-show: rescheduling link sent automatically',
    ],
  },
  {
    id: 'law',
    icon: Scale,
    label: 'Law Firm',
    pain: 'Scheduling a consultation takes 4-6 emails. Half your consultations are no-shows because there was no reminder system in place.',
    before: [
      'Potential client emails asking to schedule a consultation',
      '4-6 email exchanges to find a mutually available time',
      'No reminder sent — client forgets, no-shows',
      'Attorney sits in an empty conference room',
    ],
    after: [
      'Client clicks your booking link and picks a time instantly',
      'Confirmation email sent with Zoom link or office address',
      'Automated reminder 48h and 1h before the consultation',
      'Pre-consultation intake form collected automatically',
    ],
  },
  {
    id: 'trainer',
    icon: Dumbbell,
    label: 'Personal Trainer',
    pain: "You're managing 15 clients across text messages, Instagram DMs, and email. Someone always shows up when you're already with another client.",
    before: [
      'Client texts asking about available slots this week',
      'You check your mental calendar and reply when you can',
      'Miscommunications lead to double-bookings or no-shows',
      'You spend 2 hours/week just on scheduling back-and-forth',
    ],
    after: [
      'Client books from your live availability — no texts needed',
      'Session confirmed instantly with location or Zoom details',
      'Reminder sent 24h before — client shows up prepared',
      'Cancellations handled automatically, slot opens for others',
    ],
  },
  {
    id: 'salon',
    icon: Scissors,
    label: 'Hair Salon / Spa',
    pain: "You're taking bookings on the phone, through Instagram, through your website, and via text. You've double-booked 3 times this month.",
    before: [
      'Client calls or DMs to book an appointment',
      'You check your book manually and confirm via message',
      'No reminder system — 25% no-show rate on Mondays',
      'Cancellations come in as texts you might miss',
    ],
    after: [
      'Client books online with their preferred stylist and service',
      'Instant confirmation with prep instructions (no-heat policy, etc.)',
      'Reminder with rebooking link sent 48h before',
      'Cancellations auto-open the slot and notify your waitlist',
    ],
  },
  {
    id: 'consultant',
    icon: Briefcase,
    label: 'Consultant',
    pain: 'Your discovery calls are booked manually. Prep questionnaires go out late. Zoom links get forgotten. The client shows up unprepared.',
    before: [
      'Prospect emails asking for a discovery call',
      'Multiple emails to align on a time zone and availability',
      'Zoom link sent manually, sometimes forgotten',
      'No intake form — you start the call cold',
    ],
    after: [
      'Prospect books directly from your site in one click',
      'Zoom link generated automatically in the confirmation',
      'Intake questionnaire sent immediately after booking',
      'Reminder with prep notes sent 24h and 1h before',
    ],
  },
  {
    id: 'homeservices',
    icon: Wrench,
    label: 'Home Services',
    pain: "You schedule jobs on paper or in your head. You drive to a job that was cancelled 2 hours ago and nobody reached you in time.",
    before: [
      'Customer calls to schedule a service visit',
      'You write it in a notebook or try to remember it',
      'No reminder sent — customer cancels last minute, you find out late',
      'You show up to an empty house',
    ],
    after: [
      'Customer books their estimate or service online',
      "You get a notification immediately — it is on your calendar",
      'Customer gets a reminder with your arrival window',
      'Cancellations trigger automatic rescheduling flow',
    ],
  },
]

const automated = [
  'Online self-booking — clients pick their own time, no calls needed',
  'Automatic appointment confirmations via email + text',
  '24 and 48-hour reminder sequences — reduces no-shows by 40-60%',
  'Rescheduling and cancellation handling — no staff required',
  'Pre-appointment intake forms sent automatically after booking',
  'Post-appointment follow-ups and review requests',
]

const results = [
  { stat: '45%', label: 'Fewer no-shows with automated reminders — dental practices' },
  { stat: '0', label: 'Emails to schedule a consultation — law firms' },
  { stat: '5 hrs', label: 'Saved per week on admin — personal trainers' },
  { stat: '3x', label: 'Faster booking process — salons and spas' },
]

export default function SchedulingAutomation() {
  const [activeTab, setActiveTab] = useState('dental')
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
              <Calendar className="w-8 h-8 text-brand" />
              <p className="text-brand font-semibold text-sm uppercase tracking-wide">
                Built for medical offices, law firms, gyms, salons, and more
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stop Playing Phone Tag. Let Clients Book Themselves.
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Automated scheduling means zero back-and-forth emails, zero double-bookings, and zero
              "does Tuesday at 3 work for you?" conversations.
            </p>
            <Button href="/contact" variant="primary">
              Get My Free Scheduling Audit <ArrowRight className="w-4 h-4 ml-2 inline" />
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
              Pick Your Industry
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              See exactly how scheduling automation transforms your workflow — before and after.
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
                className="space-y-6"
              >
                <Card className="border-l-4 border-red-400">
                  <h3 className="text-lg font-bold text-navy mb-2">The Problem</h3>
                  <p className="text-gray-700 text-lg">{active.pain}</p>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Before */}
                  <Card className="border-t-4 border-red-300">
                    <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                      <X className="w-5 h-5 text-red-400" /> Before
                    </h3>
                    <ol className="space-y-3">
                      {active.before.map((step, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-700">
                          <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </Card>

                  {/* After */}
                  <Card className="border-t-4 border-brand">
                    <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-brand" /> After
                    </h3>
                    <ol className="space-y-3">
                      {active.after.map((step, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-700">
                          <span className="w-6 h-6 rounded-full bg-teal-100 text-brand text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </Card>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* What Gets Automated */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Gets Automated
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              Everything from the first booking to the post-appointment review request.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {automated.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
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

      {/* Tools */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-navy mb-4">Tools We Use</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Calendly, Acuity Scheduling, Google Calendar, Outlook, and custom integrations — we
              pick the right tool for your business and your clients. You do not have to switch
              everything you already use.
            </p>
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
              <p className="text-gray-500 text-sm mb-1">Setup</p>
              <p className="text-4xl font-bold text-brand mb-2">Starting from $600</p>
              <p className="text-gray-600 mb-6">
                Optional: $100/mo for ongoing support, updates, and new reminders
              </p>
              <div className="space-y-3">
                {[
                  'Scheduling workflow audit and optimization',
                  'Online booking setup integrated with your calendar',
                  'SMS and email confirmation + reminder automation',
                  'Cancellation and rescheduling flow',
                  'Pre-appointment intake form setup',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-6 italic">
                Clear quote before we start. No surprises.
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
              Let Us Show You What Is Possible For Your Business
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We will audit your current scheduling workflow, identify the gaps, and show you
              exactly what we would automate. Free. Zero obligation.
            </p>
            <Button href="/contact" variant="primary">
              Get My Free Scheduling Audit <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
