import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/Button'

export default function AuditPage() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Free AI Audit | AI Montclair'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Get a free 20-minute AI audit for your business. Discover exactly where AI can save you time — no charge, no obligation.'
    )
  }, [])

  const handleSubmit = (e) => {
    // Formspree handles the submission; we just show the thank-you message after
    setTimeout(() => setSubmitted(true), 500)
  }

  if (submitted) {
    return (
      <section className="min-h-screen gradient-navy-to-slate text-white flex items-center justify-center py-16 md:py-24">
        <div className="container-custom max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-brand/20 backdrop-blur-sm rounded-2xl border border-brand/40 p-12 md:p-16">
              <CheckCircle size={64} className="mx-auto mb-6 text-brand" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Thank You!</h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We&apos;ve got your audit request. We&apos;ll review your business and schedule a time to dig into where AI can save you the most time.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Look for a message from us within 24 hours.
              </p>
              <Button href="/" variant="primary" icon={ArrowRight}>
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Find Out Exactly Where AI Can Save You Time
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Free, 20 minutes. No charge. No obligation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Audit Form Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Book Your Free Audit</h2>
                <form
                  action="https://formspree.io/f/xpwzpkqv"
                  method="POST"
                  className="space-y-5"
                  onSubmit={handleSubmit}
                >
                  {/* Name */}
                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="name">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white text-slate-900 placeholder:text-slate-400 text-base"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="business">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white text-slate-900 placeholder:text-slate-400 text-base"
                      placeholder="Smith & Associates"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="industry">
                      Industry <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white text-slate-900 text-base"
                    >
                      <option value="">Select your industry...</option>
                      <option value="Law Firm">Law Firm</option>
                      <option value="Medical/Dental">Medical/Dental</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Gym/Fitness">Gym/Fitness</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Home Services">Home Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Biggest Time Drain */}
                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="timesink">
                      What&apos;s eating most of your time? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="timesink"
                      name="timesink"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white text-slate-900 placeholder:text-slate-400 text-base resize-none"
                      placeholder="e.g. Answering the same client questions, scheduling back-and-forth, manual data entry, proposal creation..."
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white text-slate-900 placeholder:text-slate-400 text-base"
                      placeholder="you@business.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="phone">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white text-slate-900 placeholder:text-slate-400 text-base"
                      placeholder="(973) 555-0100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-colors duration-200 text-lg cursor-pointer"
                  >
                    Book My Free Audit →
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">How This Works</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We&apos;ll look at how your business runs right now and tell you exactly what could be automated. No sales pitch. Just honest recommendations about where AI can save you the most time.
                </p>
                <p className="text-gray-600 italic text-base">
                  Most business owners are surprised how much time they&apos;re leaving on the table.
                </p>
              </div>

              {/* What to Expect */}
              <div className="bg-slate-50 rounded-2xl p-7">
                <h3 className="text-lg font-bold text-navy mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    '20-minute video call (at your convenience)',
                    'We ask about your biggest pain points',
                    'You get specific recommendations',
                    'No obligation to move forward',
                    'No long-term contracts ever',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle size={18} className="text-brand flex-shrink-0" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Audit */}
              <div className="border-l-4 border-brand pl-5">
                <p className="text-gray-600 italic text-base leading-relaxed">
                  &ldquo;Most of the businesses I talk to don&apos;t realize they&apos;re sitting on 5-10 hours a week of automatable work. After the audit, it&apos;s crystal clear what to fix first.&rdquo;
                </p>
                <p className="text-navy font-semibold mt-3 text-sm">
                  &mdash; Andres Ravinet, AI Montclair
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
