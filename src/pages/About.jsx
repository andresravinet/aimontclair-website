import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'

export default function About() {
  useEffect(() => {
    document.title = 'About | AI Montclair'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Meet Andres Ravinet — a Montclair resident who spent years in tech and decided to put that to work for the local businesses he walks past every day.'
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
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-3">{"I'm Andres. I live here too."}</h1>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                AI Montclair isn&apos;t an agency. It&apos;s me &mdash; a Montclair resident who spent years in tech and decided to put that to work for the businesses I walk past every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold font-display text-navy mb-6">Why I started this</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                I kept noticing the same thing. Smart people running good businesses, doing things manually that could run themselves. A dentist office where every appointment change required a phone call. A contractor missing leads because he was on a job site when someone called. A law firm losing potential clients because no one answered at 6 PM on a Friday.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                These aren&apos;t technology problems. They&apos;re process problems with technology solutions. And the gap between &ldquo;knowing AI exists&rdquo; and &ldquo;actually using it in your business&rdquo; is exactly where I work.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                I understand businesses before I touch any technology. I sit with you, learn how things actually run, and find the 2 or 3 places where the right system changes everything. Then I build it, test it, and hand it off running.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                No jargon. No 12-week engagements. No mystery.
              </p>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold font-display text-navy mb-8">How I work</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl border border-slate-100 hover:shadow-md hover:border-brand/20 transition-all duration-200">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">Community first</h3>
                  <p className="text-gray-600">
                    {"I'm not here to land a big contract and disappear. I'm here because this is my town and I want the businesses in it to thrive."}
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-slate-100 hover:shadow-md hover:border-brand/20 transition-all duration-200">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">Process before technology</h3>
                  <p className="text-gray-600">
                    {"I won't recommend a single tool until I understand how your business actually works. The tech is always second."}
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-slate-100 hover:shadow-md hover:border-brand/20 transition-all duration-200">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">Real outcomes, fixed price</h3>
                  <p className="text-gray-600">
                    {"You'll know exactly what you're getting and exactly what it costs. No retainers, no surprise invoices."}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-50 rounded-2xl p-10 text-center">
              <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
                If you run a business in Montclair or Essex County and you&apos;re doing something by hand that feels like it shouldn&apos;t be &mdash; let&apos;s talk. 30 minutes. I&apos;ll tell you honestly whether automation makes sense for you.
              </p>
              <Button href="/contact" variant="primary">
                {"Let's Talk \u2192"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
