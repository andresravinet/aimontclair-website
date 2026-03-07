import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Stethoscope, Phone, FileText, Clock, Users, Calendar, ChevronDown, ChevronUp, ArrowRight, CheckCircle, XCircle, Shield } from 'lucide-react'

const painPoints = [
  {
    icon: Phone,
    text: "Your front desk answers the same 12 questions 30 times a day: hours, insurance, parking, what to bring",
  },
  {
    icon: Clock,
    text: "No-show rate is 15-20% because reminder calls go out manually the day before — when you can remember",
  },
  {
    icon: FileText,
    text: "New patient paperwork is a stack of PDFs printed at check-in, filled out by hand, then entered into your system manually",
  },
  {
    icon: Calendar,
    text: "You're losing patients who tried to book online and couldn't — they found another practice that had online scheduling",
  },
  {
    icon: Users,
    text: "Post-appointment follow-ups for chronic care patients fall through the cracks when the day gets busy",
  },
]

const automationCategories = [
  {
    title: 'Patient Scheduling',
    items: [
      'Online self-booking available 24/7 — patients pick their own time',
      'New patient intake forms sent digitally before the appointment',
      'Confirmation sent instantly, reminders at 72h + 24h + 2h',
      'No-show → rescheduling link sent automatically',
      'Cancellation → auto-fill slot from waitlist',
    ],
  },
  {
    title: 'Front Desk Relief',
    items: [
      'AI chatbot handles: hours, location, insurance questions, new patient FAQs',
      '"Do you take my insurance?" — answered instantly, 24/7',
      'New patient → welcome email with what to bring, parking, forms link',
      'After-hours calls → chatbot captures contact info + reason for call',
    ],
  },
  {
    title: 'Patient Retention',
    items: [
      '6-month recall: "It\'s been 6 months since your last cleaning — ready to book?"',
      'Chronic care follow-up: automated check-in messages between appointments',
      'Post-procedure: "How are you feeling? Here\'s your aftercare guide"',
      'Birthday messages (simple but effective for patient loyalty)',
    ],
  },
  {
    title: 'Billing & Admin',
    items: [
      'Post-appointment: explanation of benefits summary sent automatically',
      'Outstanding balance → automated payment reminder sequence',
      'Insurance verification triggered automatically before appointment',
    ],
  },
]

const beforeSteps = [
  'Calls to book → on hold → receptionist manually checks calendar → appointment confirmed verbally',
  'Arrives and fills out paper forms for 20 minutes in waiting room',
  'Staff manually enters forms into system',
  'Reminder call made day before (if staff remembers)',
]

const afterSteps = [
  'Books online in 90 seconds at 11 PM',
  'Digital intake forms sent → completed before arrival',
  'Confirmation + 3 automated reminders sent',
  'Arrives, forms already in system, walks straight to exam room',
  'Post-appointment: care summary + review request sent automatically',
]

const results = [
  { stat: '40-50%', label: 'Fewer no-shows for dental practices using automated reminders' },
  { stat: '60%', label: 'Front desk call volume drop when AI handles common questions' },
  { stat: 'Measurably better', label: 'New patient experience with digital intake' },
]

export default function MedicalDental() {
  const [openCategory, setOpenCategory] = useState(null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-teal-500/20 text-teal-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-teal-500/30">
              HIPAA-conscious workflows for solo practices and small group practices
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Front Desk Is Drowning.<br />It Doesn't Have to Be.
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              AI automation for medical and dental practices in Essex County — so your team spends time with patients, not on hold with insurance companies.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get My Free Practice Automation Audit <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Does your day look like this?</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4 text-center">What We Automate for Your Practice</h2>
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

      {/* HIPAA Note */}
      <section className="bg-teal-50 py-12 px-4 border-y border-teal-100">
        <div className="max-w-3xl mx-auto flex items-start gap-4">
          <Shield className="text-teal-600 flex-shrink-0 mt-1" size={28} />
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">A Note on HIPAA</h3>
            <p className="text-slate-700 leading-relaxed">
              All automation workflows we build for medical and dental practices are designed with HIPAA compliance in mind. We use compliant tools, secure data handling, and never store PHI in unauthorized systems. We'll walk you through every tool before we build.
            </p>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">The New Patient Experience</h2>
          <p className="text-slate-600 text-center mb-12">What changes for every new patient from day one.</p>
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
            <span className="font-bold text-slate-900">$600–$1,800</span> depending on practice size. Fixed price, no surprises.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Give your front desk their day back.
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            We'll walk through your current intake and scheduling workflow and show you exactly where automation saves time — before you commit to anything.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get My Free Practice Automation Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/services/ai-chatbot" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-teal-400 text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <Stethoscope size={18} className="text-teal-500" /> AI Chatbot for Patient FAQs
            </Link>
            <Link to="/services/scheduling-automation" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-teal-400 text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <Calendar size={18} className="text-teal-500" /> Scheduling Automation
            </Link>
            <Link to="/services/workflow-automation" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-teal-400 text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <FileText size={18} className="text-teal-500" /> Workflow Automation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
