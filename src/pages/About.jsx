import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'

export default function About() {
  useEffect(() => {
    document.title = 'About | AI Montclair'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Meet Andres Ravinet, AI automation consultant based in Montclair, NJ. Making enterprise-grade automation accessible to Main Street businesses.'
    )
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-28">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Avatar */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative inline-block">
                <img
                  src="https://aimontclair.com/lovable-uploads/9e5814cb-d745-4977-94cd-d278473bd69b.png"
                  alt="Andres Ravinet — AI Montclair"
                  className="w-40 h-40 rounded-full object-cover shadow-xl ring-4 ring-brand/20"
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <div className="w-4 h-4 rounded-full bg-brand animate-pulse" />
                </div>
              </div>
            </div>

            {/* Intro */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-3">Meet Andres Ravinet</h1>
              <p className="text-xl text-brand font-semibold mb-4">AI &amp; Automation Consultant, Montclair NJ</p>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                Helping local businesses across Essex County automate the repetitive work that
                slows them down &mdash; so they can focus on growth, not admin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold font-display text-navy mb-6">About Andres</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Andres Ravinet is a Montclair resident, husband and dad, and a technologist with 20+ years building solutions for small and large organizations. After nearly a decade at Microsoft designing strategy and enterprise solutions, he now focuses on helping Montclair&apos;s small businesses and nonprofits save time with secure and straightforward AI automation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                He dedicates discounted and pro-bono time each month to local nonprofits, and is committed to making AI accessible to all communities &mdash; not just those with enterprise budgets.
              </p>
            </div>

            {/* Impact by Industry */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
              {[
                { industry: 'Law Firms', stat: '5+ hrs/week', detail: '$1,000+/mo recaptured' },
                { industry: 'Medical & Dental', stat: '1 appt/week', detail: 'No-shows eliminated' },
                { industry: 'Real Estate', stat: 'More closings', detail: 'Fewer empty slots' },
                { industry: 'Fitness & Wellness', stat: '$100s/mo', detail: 'Per retained member' },
              ].map(item => (
                <div key={item.industry} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
                  <div className="text-brand font-bold text-lg font-display">{item.stat}</div>
                  <div className="text-slate-500 text-xs mt-1">{item.detail}</div>
                  <div className="text-slate-700 text-sm font-medium mt-2">{item.industry}</div>
                </div>
              ))}
            </div>

            {/* Why AI Montclair */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold font-display text-navy mb-8">Why AI Montclair</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl border border-slate-100 hover:shadow-md hover:border-brand/20 transition-all duration-200">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">Local &amp; Accountable</h3>
                  <p className="text-gray-600">
                    Based in Montclair. We know Essex County. When something needs fixing, you call
                    Andres directly &mdash; not a help desk.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-slate-100 hover:shadow-md hover:border-brand/20 transition-all duration-200">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">Fixed Pricing, No Surprises</h3>
                  <p className="text-gray-600">
                    Every project has a flat price agreed upfront. No hourly billing creep,
                    no scope surprises, no long-term contracts you have to fight to exit.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-slate-100 hover:shadow-md hover:border-brand/20 transition-all duration-200">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">
                    Live in weeks, not months. Most automations are up and running in one to
                    six weeks &mdash; you see results fast without a drawn-out project.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-50 rounded-2xl p-10 text-center">
              <h2 className="text-2xl font-bold font-display text-navy mb-3">Ready to automate your business?</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Start with a free 30-minute conversation. No pitch, no commitment &mdash;
                just an honest look at where automation can help you most.
              </p>
              <Button href="/contact" variant="primary">
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
