import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Dumbbell, Users, Clock, Phone, MessageSquare, TrendingUp, ChevronDown, ChevronUp, ArrowRight, CheckCircle, XCircle } from 'lucide-react'

const painPoints = [
  {
    icon: Users,
    text: "Members stop coming after week 3. Nobody notices until their membership has been inactive for 2 months.",
  },
  {
    icon: Clock,
    text: "Someone visits your website at 10 PM ready to sign up. There's no way to ask questions or get started. They close the tab and join the gym down the street.",
  },
  {
    icon: MessageSquare,
    text: "You're managing 20 clients across text messages, Instagram DMs, and email. You've missed messages. Clients have shown up when you're already with someone.",
  },
  {
    icon: Phone,
    text: "Class cancellations go out in a group text that half your members don't see.",
  },
  {
    icon: TrendingUp,
    text: "Your trial members convert at 30%. With better follow-up, that number could be 60%.",
  },
]

const automationCategories = [
  {
    title: 'Member Acquisition',
    items: [
      'Website visitor at any hour → AI chatbot answers: pricing, class schedule, trial offers',
      'Trial signup → welcome sequence: day 1 check-in, day 3 class suggestion, day 7 conversion offer',
      'Lead who hasn\'t committed → 5-day nurture sequence with class schedule, success stories, easy sign-up link',
    ],
  },
  {
    title: 'Member Retention',
    items: [
      'Member hasn\'t visited in 7 days → "We miss you" message with class schedule',
      'Member hasn\'t visited in 14 days → personal check-in from you (automated but personal-feeling)',
      'Member hasn\'t visited in 30 days → re-engagement offer (1 free class, discounted month)',
      'Membership expiring in 30 days → renewal reminder sequence starts automatically',
    ],
  },
  {
    title: 'Class & Scheduling',
    items: [
      'Class cancelled → instant notification to all registered members',
      'New class added → announcement to member list + waitlist',
      'Class filling up → "Only 3 spots left" alert to waitlist',
      'Personal training session → automatic reminder 24h + 1h before',
    ],
  },
  {
    title: 'Revenue',
    items: [
      'Membership expiring → renewal offer sent automatically',
      'Lapsed member (cancelled 3+ months ago) → win-back campaign at 6 months',
      'Referral program: automated ask after member hits 30-day milestone',
      'Merchandise/supplement promos → targeted to active members based on class attendance',
    ],
  },
]

const results = [
  { stat: '30-40%', label: 'Reduction in member churn for studios with automated retention sequences' },
  { stat: '2x', label: 'Trial conversion rate with a structured 7-day follow-up sequence' },
  { stat: '4-6 hrs/wk', label: 'Saved by personal trainers on scheduling and communication admin' },
]

export default function GymsFitness() {
  const [openCategory, setOpenCategory] = useState(null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-brand/20 text-brand text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-brand/30">
              Built for boutique studios, CrossFit boxes, personal trainers, and yoga studios
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Keep Members.<br />Stop Chasing Leads.<br />Grow.
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              AI automation for gyms, fitness studios, and personal trainers in Essex County — so you spend time coaching, not managing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get My Free Studio Automation Audit <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">You got into fitness to change lives. Not to manage a CRM.</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4 text-center">What We Automate for Your Studio</h2>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">The 9 PM Instagram Visitor</h2>
          <p className="text-slate-600 text-center mb-12">
            Someone finds your Instagram on a Sunday night, clicks your bio link.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="text-red-400" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Without Automation</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                They see a phone number. It's Sunday. They move on. By Monday morning they've already signed up somewhere else.
              </p>
            </div>
            <div className="bg-brand-light border border-brand-light rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="text-brand" size={24} />
                <h3 className="text-xl font-bold text-slate-900">With Automation</h3>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>They land on your site. Chatbot: "Welcome! Are you looking for group classes, personal training, or both? We have a free 7-day trial this week."</p>
                <p>They sign up. Day 1 welcome email. Day 3 class recommendation. Day 7: "How's your week going? Here's a special rate to keep going."</p>
                <p className="font-semibold">They become a member without a single manual touch.</p>
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
            Most fitness studio automation packages: <span className="font-bold text-slate-900">$600–$1,800</span> (one-time setup). Fixed price, no surprises.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your members need a coach, not a customer service rep.
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Let's audit your current member journey — from first click to 6-month retention — and show you exactly where automation makes the difference.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get My Free Studio Automation Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/services/ai-chatbot" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-brand text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <Dumbbell size={18} className="text-brand" /> AI Chatbot for Signups
            </Link>
            <Link to="/services/scheduling-automation" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-brand text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <Clock size={18} className="text-brand" /> Scheduling Automation
            </Link>
            <Link to="/services/workflow-automation" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-brand text-slate-700 px-5 py-3 rounded-lg transition-colors">
              <TrendingUp size={18} className="text-brand" /> Workflow Automation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
