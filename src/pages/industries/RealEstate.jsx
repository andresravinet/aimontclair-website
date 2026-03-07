import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Phone, Clock, Mail, Users, TrendingUp, ChevronDown, ChevronUp, ArrowRight, CheckCircle, XCircle } from 'lucide-react'

const painPoints = [
  {
    icon: Phone,
    text: "You're in a 2-hour showing and 3 new leads came in. By the time you respond, two of them have already called another agent.",
  },
  {
    icon: Clock,
    text: "Your Zillow leads get a form response that goes to your email. You see it 4 hours later. Zillow says the average response time for top agents is under 5 minutes.",
  },
  {
    icon: TrendingUp,
    text: "Every new listing requires: MLS upload, social posts, email blast, buyer alert updates. You do each one manually.",
  },
  {
    icon: Users,
    text: "You have 200 past clients you should be staying in touch with. The last time you reached out to most of them was closing day.",
  },
  {
    icon: Mail,
    text: "Open house sign-ins are on paper. Those leads never make it into your CRM.",
  },
]

const automationCategories = [
  {
    title: 'Lead Response',
    items: [
      'New lead from any source (Zillow, Realtor.com, website, social) → instant personalized response within 60 seconds',
      'Lead qualification questions sent automatically: timeline, pre-approval status, areas of interest',
      'If no response in 24h → follow-up sent automatically',
      'Hot lead (clicked multiple listings, visited site 3x) → you get a text alert immediately',
    ],
  },
  {
    title: 'Listing Launch',
    items: [
      'New listing → auto-post to Facebook, Instagram with property details',
      'Buyer alert sent to your list filtered by bedrooms/price/location',
      'Open house → event created + promoted automatically',
      'Price reduction → all interested buyers notified within minutes',
    ],
  },
  {
    title: 'Client Nurture',
    items: [
      'Past clients: quarterly market update emails (automated, personalized by neighborhood)',
      '"Your home\'s estimated value has changed" — annual automated home value report',
      'Anniversary of closing day: "Happy home anniversary!" — simple, memorable, keeps you top of mind',
      'Referral request: sent automatically 90 days after closing when satisfaction is highest',
    ],
  },
  {
    title: 'Transaction Management',
    items: [
      'Offer submitted → all parties notified + document checklist triggered',
      'Inspection scheduled → client reminder + what to expect guide sent',
      'Closing approaching → final checklist sent to buyer/seller automatically',
      'Post-closing → review request + referral ask sent at the right moment',
    ],
  },
]

const results = [
  { stat: '8x', label: 'Higher lead conversion rate when you respond in under 5 minutes vs 30 minutes (NAR data)' },
  { stat: '2-3/year', label: 'Extra referrals generated from automated past-client nurture' },
  { stat: '2-3 hrs', label: 'Saved per new listing with automated launch workflow' },
]

export default function RealEstate() {
  const [openCategory, setOpenCategory] = useState(null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-brand/20 text-brand text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-brand/30">
              Built for independent agents and small brokerages in Essex County
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Every Lead Is Time-Sensitive.<br />Start Acting Like It.
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              AI automation for NJ real estate agents — so you respond to every lead in minutes, not hours, even when you're in a showing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get My Free Real Estate Automation Audit <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">The leads are there. The timing isn't.</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4 text-center">What We Automate for Agents</h2>
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
                    <ChevronUp className="text-brand" size={20} />
                  ) : (
                    <ChevronDown className="text-brand" size={20} />
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">The 7 PM Lead</h2>
          <p className="text-slate-600 text-center mb-12">
            A buyer submits a contact form on your website about a 4-bed in Montclair.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="text-red-400" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Without Automation</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                You see it at 9 PM. You respond. They've already booked a showing with another agent. Another commission gone.
              </p>
            </div>
            <div className="bg-brand-light border border-brand-light rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="text-brand" size={24} />
                <h3 className="text-xl font-bold text-slate-900">With Automation</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold">7:00:42 PM</span> — Automatic response: "Thanks for your interest! I specialize in Montclair and have 3 similar listings to show you. Are you pre-approved and looking to move within 90 days? I can set up showings as early as this weekend."
              </p>
              <p className="text-slate-700 mt-4 font-semibold">They respond. You have a client.</p>
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
            Most real estate automation packages: <span className="font-bold text-slate-900">$800–$2,000</span> (one-time setup). Fixed price, no surprises.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop losing leads while you're doing your job.
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            We'll audit your lead response, listing launch, and nurture workflows — and show you the revenue you're leaving on the table.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get My Free Real Estate Automation Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/services/ai-chatbot" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-brand text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <Home size={18} className="text-brand" /> AI Chatbot for Lead Capture
            </Link>
            <Link to="/services/workflow-automation" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-brand text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <TrendingUp size={18} className="text-brand" /> Workflow Automation
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
