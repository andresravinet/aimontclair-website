import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Zap, Users, Target } from 'lucide-react'

export default function About() {
  useEffect(() => {
    document.title = 'About | AI Montclair'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Meet Andres Ravinet, AI automation consultant based in Montclair, NJ. Making AI accessible to Main Street businesses.'
    )
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AI Montclair</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Local expertise. Hands-on service. Real results for small businesses.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">Meet Andres Ravinet</h2>
              <p className="text-lg text-gray-700 mb-4">
                Based in Montclair, NJ, Andres is an AI automation consultant with a mission: make artificial intelligence accessible and useful for small business owners.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                After years helping larger organizations implement automation and AI, Andres noticed a gap. Most small businesses wanted to automate but found enterprise solutions too expensive, too complex, or not built for their reality.
              </p>
              <p className="text-lg text-gray-700">
                So he created AI Montclair—a consulting practice focused exclusively on local small businesses. The approach is simple: start small, measure impact, and scale what works. No bloated contracts. No months-long implementations. Just smart automation that delivers real time savings.
              </p>
            </div>

            {/* Why AI Montclair */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-8">Why AI Montclair</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <Zap className="w-10 h-10 text-lime mb-4" />
                  <h3 className="font-bold text-navy mb-2">Local Expertise</h3>
                  <p className="text-gray-600 text-sm">
                    Based in Montclair. We understand your community, your challenges, and your timeline.
                  </p>
                </Card>
                <Card>
                  <Users className="w-10 h-10 text-lime mb-4" />
                  <h3 className="font-bold text-navy mb-2">Hands-On Service</h3>
                  <p className="text-gray-600 text-sm">
                    You get direct access. No offshore teams, no corporate handoffs. Just Andres and your business.
                  </p>
                </Card>
                <Card>
                  <Target className="w-10 h-10 text-lime mb-4" />
                  <h3 className="font-bold text-navy mb-2">Real Results</h3>
                  <p className="text-gray-600 text-sm">
                    We focus on measurable time savings and ROI—not buzzwords or vaporware.
                  </p>
                </Card>
              </div>
            </div>

            {/* Philosophy */}
            <div className="mb-12 bg-slate-light rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy mb-4">Our Philosophy</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-lime font-bold">✓</span>
                  <span className="text-gray-700"><strong>Start small.</strong> Prove value on a low-risk pilot before scaling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime font-bold">✓</span>
                  <span className="text-gray-700"><strong>Measure impact.</strong> Every automation tracks time saved and ROI.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime font-bold">✓</span>
                  <span className="text-gray-700"><strong>Scale what works.</strong> Build on wins. Iterate based on real feedback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime font-bold">✓</span>
                  <span className="text-gray-700"><strong>Fit your tools.</strong> Integrate with your existing systems, not replace them.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime font-bold">✓</span>
                  <span className="text-gray-700"><strong>Transparent pricing.</strong> Fixed prices. No surprises. No lock-in.</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">Let's Talk</h2>
              <p className="text-gray-700 mb-6">
                If you'd like to discuss how AI automation could work for your business, let's schedule a conversation.
              </p>
              <Button href="/contact" variant="primary">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
