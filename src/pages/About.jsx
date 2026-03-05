import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'
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
              <div
                className="w-32 h-32 rounded-full bg-navy border-4 border-white border-opacity-30 flex items-center justify-center"
                style={{ background: '#0f2a4a' }}
              >
                <span className="text-white text-4xl font-bold">AR</span>
              </div>
              <p className="text-gray-400 text-xs mt-2 text-center">[ Photo coming soon ]</p>
            </div>

            {/* Intro */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Meet Andres Ravinet</h1>
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
              <h2 className="text-3xl font-bold text-navy mb-6">The Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Andres Ravinet is a technology consultant and trainer based right here in Montclair, NJ.
                Over the past several years he has worked with law firms, medical offices, retail shops,
                and service businesses across Essex County &mdash; helping them replace manual, time-consuming
                processes with smart automation that actually sticks.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                After seeing enterprise organizations transform their operations with AI, Andres noticed
                a gap: the small businesses on Main Street wanted the same tools, but everything built
                for the Fortune 500 was too expensive, too complex, and too slow. So he built AI Montclair
                to close that gap.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Every project is fixed-price with no long-term contracts. Most go live in one to six weeks.
                You work directly with Andres &mdash; no offshore teams, no account managers in the way.
                Just a neighbor who knows your community and can get things done.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                His belief is simple: enterprise-grade automation should be accessible to Main Street,
                not just Fortune 500. A two-person law firm deserves the same efficiency tools as a
                hundred-person firm &mdash; built to fit their budget and their reality.
              </p>
            </div>

            {/* Why AI Montclair */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-navy mb-8">Why AI Montclair</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="text-lg font-bold text-navy mb-2">Local &amp; Accountable</h3>
                  <p className="text-gray-600">
                    Based in Montclair. We know Essex County. When something needs fixing, you call
                    Andres directly &mdash; not a help desk.
                  </p>
                </Card>
                <Card>
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="text-lg font-bold text-navy mb-2">Fixed Pricing, No Surprises</h3>
                  <p className="text-gray-600">
                    Every project has a flat price agreed upfront. No hourly billing creep,
                    no scope surprises, no long-term contracts you have to fight to exit.
                  </p>
                </Card>
                <Card>
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="text-lg font-bold text-navy mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">
                    Live in weeks, not months. Most automations are up and running in one to
                    six weeks &mdash; you see results fast without a drawn-out project.
                  </p>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-50 rounded-2xl p-10 text-center">
              <h2 className="text-2xl font-bold text-navy mb-3">Ready to automate your business?</h2>
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
