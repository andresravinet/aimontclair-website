import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Scale, Phone, FileText, Clock, DollarSign, MessageSquare, ChevronDown, ChevronUp, ArrowRight, CheckCircle, XCircle } from 'lucide-react'

const painPoints = [
  {
    icon: Phone,
    text: "You miss calls while you're in court — and those calls are potential clients who hire someone else",
  },
  {
    icon: FileText,
    text: "Your intake process is 6 emails, 2 phone calls, and a PDF that has to be printed, signed, and scanned",
  },
  {
    icon: Clock,
    text: "You spend 20 minutes before every consultation looking up information you've asked the client 3 times already",
  },
  {
    icon: DollarSign,
    text: "Invoices go out late because billing is always the last thing on the list",
  },
  {
    icon: MessageSquare,
    text: "A client calls asking for an update — you spend 10 minutes finding where the case is before you can answer",
  },
]

const automationCategories = [
  {
    title: 'Client Intake',
    items: [
      'New lead from website → instant response email within 60 seconds',
      'Intake questionnaire sent automatically — client fills it out before the first call',
      'Conflicts check triggered automatically',
      'Consultation scheduled without a single phone call',
      'New client welcome packet sent on signing — engagement letter, what to expect, contact info',
    ],
  },
  {
    title: 'Scheduling & Follow-up',
    items: [
      'Consultation reminders sent automatically (48h + 2h before)',
      'No-show triggers rescheduling link automatically — no staff needed',
      'Court date reminders sent to clients automatically',
      'Post-consultation follow-up if they haven\'t signed',
    ],
  },
  {
    title: 'Billing & Admin',
    items: [
      'Invoice sent automatically upon milestone or date trigger',
      'Overdue invoice → 3-step follow-up sequence (friendly → firm → escalate)',
      'Time entry reminders sent to attorneys at end of day',
      'Expense receipts → auto-categorized and logged',
    ],
  },
  {
    title: 'Communication',
    items: [
      'After-hours website visitor → AI chatbot answers FAQs, qualifies lead, books consultation',
      'Client portal update → automatic notification to client',
      'New document uploaded → client notified instantly',
    ],
  },
]

const beforeSteps = [
  'Form sits in your inbox until Monday',
  'You respond Monday morning — lead has already called 4 other firms',
  'If they\'re still interested, you play phone tag to schedule',
  'You send intake questionnaire manually',
  'Half of them don\'t fill it out before the consultation',
  'Consultation runs long because you\'re gathering info you should already have',
]

const afterSteps = [
  '9:01 PM: Automatic response: "Thanks for reaching out. We handle personal injury cases in Essex County. Here\'s a link to schedule a free 15-minute consultation."',
  'Client books at 9:05 PM for Tuesday',
  'Intake questionnaire sent automatically — client completes it Sunday',
  '48h reminder sent Monday',
  'Tuesday: You walk into the consultation already knowing their case details',
  'Result: higher close rate, shorter consultation, better client experience',
]

const results = [
  { stat: '45 min → 10', label: 'Intake time reduced from 45 minutes to under 10' },
  { stat: '40%', label: 'More leads converted when response time drops below 5 minutes' },
  { stat: '5-8 hrs/wk', label: 'Attorneys recover in admin time every week' },
]

export default function LawFirms() {
  const [openCategory, setOpenCategory] = useState(null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-teal-500/20 text-teal-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-teal-500/30">
              Built for solo practitioners, small firms, and boutique practices in NJ
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Less Admin.<br />More Billable Hours.
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              AI automation for Essex County law firms — so your attorneys spend time practicing law, not chasing intake forms and playing phone tag.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get My Free Law Firm Automation Audit <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-slate-700 leading-relaxed border-l-4 border-teal-500 pl-6 italic">
            "You went to law school to practice law. But some days it feels like you're running an admin operation with a law practice on the side. Intake calls that go nowhere. Clients who no-show consultations. Invoices that chase themselves. Documents that need to be in three systems. New client packets sent manually every time."
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Sound familiar?</h2>
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
                <pain.icon className="text-teal-500 mb-3" size={24} />
                <p className="text-slate-700 leading-relaxed">"{pain.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">What We Automate for Law Firms</h2>
          <p className="text-slate-400 text-center mb-12">Click each category to see exactly what gets automated.</p>
          <div className="space-y-3">
            {automationCategories.map((cat, i) => (
              <div key={i} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenCategory(openCategory === i ? null : i)}
                >
                  <span className="text-white font-semibold text-lg">{cat.title}</span>
                  {openCategory === i ? (
                    <ChevronUp className="text-teal-400" size={20} />
                  ) : (
                    <ChevronDown className="text-teal-400" size={20} />
                  )}
                </button>
                {openCategory === i && (
                  <div className="px-6 pb-6">
                    <ul className="space-y-3">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-300">
                          <span className="text-teal-400 mt-0.5 flex-shrink-0">→</span>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Here's What Actually Changes</h2>
          <p className="text-slate-600 text-center mb-12">
            A new personal injury lead fills out your contact form at 9 PM on a Friday.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="text-red-400" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Without Automation</h3>
              </div>
              <ol className="space-y-4">
                {beforeSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="bg-red-200 text-red-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="text-teal-500" size={24} />
                <h3 className="text-xl font-bold text-slate-900">With Automation</h3>
              </div>
              <ol className="space-y-4">
                {afterSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="bg-teal-200 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-slate-700 mb-6">Practice Areas We've Helped</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Personal Injury', 'Family Law', 'Estate Planning', 'Criminal Defense', 'Real Estate Law', 'Employment Law'].map((area) => (
              <span key={area} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">The Numbers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-slate-900 rounded-2xl p-8"
              >
                <div className="text-4xl font-bold text-teal-400 mb-3">{r.stat}</div>
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
            Most law firm automation packages: <span className="font-bold text-slate-900">$800–$2,500</span> (one-time setup). Fixed price, no surprises.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get your time back?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            We'll audit your current intake, scheduling, and billing workflows — and show you exactly what can be automated, in plain English.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get My Free Law Firm Automation Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/services/ai-chatbot" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-teal-400 text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <MessageSquare size={18} className="text-teal-500" /> AI Chatbot for Lead Capture
            </Link>
            <Link to="/services/scheduling-automation" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-teal-400 text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <Clock size={18} className="text-teal-500" /> Scheduling Automation
            </Link>
            <Link to="/services/workflow-automation" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-teal-400 text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <Scale size={18} className="text-teal-500" /> Workflow Automation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
