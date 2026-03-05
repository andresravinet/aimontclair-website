import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | AI Montclair'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Contact AI Montclair. Schedule your free consultation or reach out with questions about AI automation for your small business.'
    )
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {"Let's Talk About Your Business"}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Tell us what&apos;s slowing you down. We&apos;ll show you how to fix it &mdash; free, no commitment.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Send a Message</h2>
                <form
                  action="https://formspree.io/f/xpwzpkqv"
                  method="POST"
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="name">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime text-base"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="business">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime text-base"
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime text-base"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="phone">
                      Phone <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime text-base"
                      placeholder="(973) 555-0100"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="timesink">
                      {"What's your biggest time sink?"} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="timesink"
                      name="timesink"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime text-base resize-none"
                      placeholder="e.g. Answering the same phone questions all day, manually scheduling appointments, following up with leads..."
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-1 text-sm" htmlFor="source">
                      How did you hear about us?
                    </label>
                    <select
                      id="source"
                      name="source"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime text-base bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="Google">Google</option>
                      <option value="Referral">Referral</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-lime text-navy font-bold py-3 px-6 rounded-lg text-base hover:bg-lime-dark transition-colors"
                  >
                    Send Message &rarr;
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info + Trust Signals Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-navy mb-5">Get in Touch</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-lime flex-shrink-0" />
                    <a href="mailto:hello@aimontclair.com" className="text-lime hover:underline font-medium">
                      hello@aimontclair.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" />
                    <span>Montclair, NJ &mdash; serving all of Essex County</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-lime flex-shrink-0" />
                    <span>We respond within 1 business day</span>
                  </li>
                </ul>
              </div>

              {/* Trust Signals */}
              <div className="bg-slate-50 rounded-2xl p-7">
                <h3 className="text-lg font-bold text-navy mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    'Free 30-minute consultation',
                    'No long-term contracts',
                    'Fixed pricing — no surprises',
                    'Live in 1-6 weeks',
                    'Local to Montclair, NJ',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-lime flex-shrink-0" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div className="border-l-4 border-lime pl-5">
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  &ldquo;Most small business owners I talk to are sitting on 5-10 hours a week of
                  work that can be automated. The first call is just about figuring out where
                  the biggest opportunity is for you.&rdquo;
                </p>
                <p className="text-navy font-semibold mt-3">
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
