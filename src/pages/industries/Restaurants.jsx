import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { UtensilsCrossed, Phone, Star, Clock, Mail, TrendingUp, ChevronDown, ChevronUp, ArrowRight, CheckCircle, XCircle } from 'lucide-react'

const painPoints = [
  {
    icon: Phone,
    text: "You get 60 calls a day asking your hours, if you take reservations, and if you have a table for 4 Saturday at 7. Your staff answers every one.",
  },
  {
    icon: Star,
    text: "A customer leaves a 2-star review on Google. You don't see it for 3 days. By then, 50 people have read it.",
  },
  {
    icon: TrendingUp,
    text: "Tuesday nights are slow. You know it every week. But you don't have time to run a last-minute promotion.",
  },
  {
    icon: Mail,
    text: "Your catering inquiry form sits in your email. By the time you respond, they've already booked somewhere else.",
  },
  {
    icon: Clock,
    text: "You have 1,200 email subscribers. The last email you sent was 4 months ago.",
  },
]

const automationCategories = [
  {
    title: 'Reservations & Front-of-House',
    items: [
      'AI chatbot on website and Google: handles hours, menu questions, reservation requests',
      'Online reservation confirmation sent instantly + reminder night before',
      'Large party inquiry → automatic response with deposit info and availability check',
      'Reservation no-show → feedback request ("Is everything okay? We\'d love to have you back")',
    ],
  },
  {
    title: 'Review Management',
    items: [
      'New Google/Yelp review → you\'re notified within minutes',
      'Positive review → automatic thank-you response drafted for your approval (or auto-sent)',
      'Negative review → immediate alert + suggested response for your review',
      'Review request sent automatically 2 hours after dining (if you have contact info)',
    ],
  },
  {
    title: 'Filling Slow Periods',
    items: [
      'Tuesday at 3 PM, still 40% capacity for dinner → automated "Tonight only" promo to email list',
      'Slow week detected → last-minute offer sent to subscribers',
      'Holiday coming up → automated promotion campaign starts 2 weeks before',
      'Birthday club → automatic birthday offer sent to subscribers on their birthday',
    ],
  },
  {
    title: 'Catering & Events',
    items: [
      'Catering inquiry → instant response with package info + availability calendar link',
      'Event booked → automated timeline: deposit reminder, menu selection, headcount confirmation, day-of details',
      'Post-event → invoice + thank you + review request + referral ask',
    ],
  },
]

const results = [
  { stat: '70%', label: 'Reduction in reservation-related phone calls with restaurant chatbots' },
  { stat: '3-4x', label: 'More Google reviews from automated review requests' },
  { stat: '20-30%', label: 'Of remaining slow-night capacity filled by last-minute email promos' },
]

export default function Restaurants() {
  const [openCategory, setOpenCategory] = useState(null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-brand/20 text-brand text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-brand/30">
              Built for independent restaurants, cafes, and catering operations in NJ
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              More Tables Filled.<br />Fewer Calls Answered.
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              AI automation for Essex County restaurants — handle reservations, respond to reviews, and fill slow nights without lifting a finger.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get My Free Restaurant Automation Audit <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Running a great restaurant is hard enough.</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4 text-center">What We Automate for Restaurants</h2>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Filling a Slow Tuesday</h2>
          <p className="text-slate-600 text-center mb-12">
            It's 3 PM Tuesday. Your 7 PM seating is at 40% capacity.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="text-red-400" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Without Automation</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                You notice at 5 PM. Too late to do much. Another slow Tuesday. You shrug it off, but it adds up — slow Tuesdays are costing you thousands every month.
              </p>
            </div>
            <div className="bg-brand-light border border-brand-light rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="text-brand" size={24} />
                <h3 className="text-xl font-bold text-slate-900">With Automation</h3>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>At 3 PM, your system detects low reservations. An email goes to your list:</p>
                <p className="bg-white border border-teal-200 rounded-lg p-3 italic text-sm">
                  "Last-minute special tonight — complimentary dessert with any entree, 6-8 PM only."
                </p>
                <p className="font-semibold">15 new reservations by 4 PM. Slow Tuesday solved.</p>
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
            Most restaurant automation packages: <span className="font-bold text-slate-900">$600–$1,800</span> (one-time setup). Fixed price, no surprises.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your food is the product. Let's make the rest run itself.
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            We'll audit your reservations, reviews, and slow-period strategy — and show you exactly how automation fills seats and saves time.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get My Free Restaurant Automation Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/services/ai-chatbot" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-brand text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <UtensilsCrossed size={18} className="text-brand" /> AI Chatbot for Reservations
            </Link>
            <Link to="/services/workflow-automation" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-brand text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <Star size={18} className="text-brand" /> Review Management Automation
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
