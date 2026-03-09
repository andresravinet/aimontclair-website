import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {Wrench, Phone, Clock, Star, CurrencyDollar, Users, CaretDown, CaretUp, ArrowRight, CheckCircle, XCircle} from '@phosphor-icons/react'

const painPoints = [
  {
    icon: Phone,
    text: "You're on a roof at 2 PM. Three people called. You called back at 6 PM. Two of them already hired someone else.",
  },
  {
    icon: Clock,
    text: "You quote a job on Tuesday. You forget to follow up. Friday you find out they went with another contractor because they thought you weren't interested.",
  },
  {
    icon: Users,
    text: "Your schedule lives in your head and on a paper calendar. You've driven to a job that was cancelled 2 hours ago.",
  },
  {
    icon: Star,
    text: "You've done great work for 300 customers. Zero of them have left you a Google review. You haven't asked.",
  },
  {
    icon: DollarSign,
    text: "Every completed job should generate a referral. Most don't, because you never asked at the right moment.",
  },
]

const automationCategories = [
  {
    title: 'Lead Response',
    items: [
      'New inquiry from website, Google, Angi, or Thumbtack → instant response within 60 seconds',
      '"Thanks for reaching out. We service [area]. What\'s the job? I\'ll get you a quote within 2 hours."',
      'If no response after quote → 24h follow-up sent automatically',
      'If still no response → 72h final follow-up ("Still interested? Happy to answer any questions")',
    ],
  },
  {
    title: 'Scheduling & Dispatch',
    items: [
      'Job booked → automatic confirmation + address confirmation + arrival window sent',
      'Day before: reminder to customer with your name, what you\'re doing, and arrival time',
      'Job cancelled by customer → notification to you immediately + slot opened for rebooking',
      'Running late → easy one-tap message to customer ("Running 30 min behind, see you at 2:30")',
    ],
  },
  {
    title: 'After the Job',
    items: [
      'Job completed → invoice sent automatically within 1 hour',
      '24h after completion: "How did we do?" — 1-click satisfaction check',
      'If satisfied → review request sent to Google immediately',
      'If not satisfied → direct message to you so you can address it before it becomes a public review',
      '30 days after job → "How\'s everything holding up? Any other projects we can help with?"',
    ],
  },
  {
    title: 'Seasonal & Recurring',
    items: [
      'Annual service customers → reminder sent 30 days before service is due',
      'Weather event (freeze warning, storm) → proactive outreach to HVAC, plumbing customers',
      'Spring startup / fall shutdown campaigns → automated to past customers automatically',
      'Referral ask: "Know anyone who needs [service]? We\'d love the introduction."',
    ],
  },
]

const results = [
  { stat: '78%', label: 'Of contractors who respond in under 5 minutes win the job (vs 30% for 30-minute response)' },
  { stat: '5-10x', label: 'More Google reviews from automated review requests — the #1 factor in local search ranking' },
  { stat: '20-30%', label: 'Of lapsed customers recovered automatically with annual service reminders' },
]

export default function HomeServices() {
  const [openCategory, setOpenCategory] = useState(null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-brand/20 text-brand text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-brand/30">
              Built for solo operators and small crews in the trades
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Stop Losing Jobs Because<br />You Were on a Job.
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              AI automation for Essex County contractors, plumbers, HVAC techs, and home service businesses — so you never miss a lead while you're in the field.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get My Free Home Services Automation Audit <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">You do great work. The business side is killing you.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6"
              >
                <pain.icon className="text-brand mb-3" size={24} />
                <p className="text-slate-700 leading-relaxed">"{pain.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">What We Automate for Home Service Businesses</h2>
          <p className="text-slate-400 text-center mb-12">Click each category to see the detail.</p>
          <div className="space-y-3">
            {automationCategories.map((cat, i) => (
              <div key={i} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenCategory(openCategory === i ? null : i)}
                >
                  <span className="text-white font-semibold text-lg">{cat.title}</span>
                  {openCategory === i ? (
                    <CaretUp className="text-brand" size={20} />
                  ) : (
                    <CaretDown className="text-brand" size={20} />
                  )}
                </button>
                {openCategory === i && (
                  <div className="px-6 pb-6">
                    <ul className="space-y-3">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-300">
                          <span className="text-brand mt-0.5 flex-shrink-0">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">The Missed Call Problem</h2>
          <p className="text-slate-600 text-center mb-12">
            It's 2:15 PM. You're finishing a job. A homeowner in Glen Ridge just submitted a request on your website for gutter cleaning.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="text-red-400" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Without Automation</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                You call back at 5:30 PM. They already scheduled someone they found on Google. Another job lost — and you never even knew you were in the running.
              </p>
            </div>
            <div className="bg-brand-light border border-brand-light rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="text-brand" size={24} />
                <h3 className="text-xl font-bold text-slate-900">With Automation</h3>
              </div>
              <div className="space-y-3 text-slate-700">
                <p><span className="font-semibold">2:15:43 PM</span> — Automatic response:</p>
                <p className="bg-white border border-teal-200 rounded-lg p-3 italic text-sm">
                  "Thanks for reaching out! We service Glen Ridge and usually have availability within the week. What's the address and scope of work? We'll get you a quote by end of day."
                </p>
                <p className="font-semibold">They reply. You have a job.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">The Numbers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-slate-800 rounded-2xl p-8 border border-slate-700"
              >
                <div className="text-4xl font-bold text-brand mb-3">{r.stat}</div>
                <p className="text-slate-300 text-sm leading-relaxed">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Simple, Fixed Pricing</h2>
          <p className="text-slate-600 text-lg">
            Most home services automation packages: <span className="font-bold text-slate-900">$600–$1,800</span> (one-time setup). Fixed price, no surprises.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your work speaks for itself. Let your business do the same.
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            We'll audit your lead response, scheduling, and follow-up workflow — and show you exactly how many jobs you're losing to slower competitors.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get My Free Home Services Automation Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/services/ai-chatbot" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-brand text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <Wrench size={18} className="text-brand" /> AI Chatbot for Lead Capture
            </Link>
            <Link to="/services/workflow-automation" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-brand text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <Star size={18} className="text-brand" /> Review Generation Automation
            </Link>
            <Link to="/services/scheduling-automation" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-brand text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <Clock size={18} className="text-brand" /> Scheduling Automation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
