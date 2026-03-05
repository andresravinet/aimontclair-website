import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

export function Hero() {
  return (
    <section className="gradient-navy-to-slate text-white py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Montclair Business, Running on Autopilot
            </h1>
          </motion.div>

          <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We build AI automation systems for local NJ businesses — so you stop losing hours to scheduling, follow-ups, and inbox management. No long-term contracts. No enterprise price tags. Live in weeks.
            </p>
          </motion.div>

          {/* Founder strip */}
          <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm"
                style={{ background: '#0f2a4a', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                AR
              </div>
              <p className="text-gray-300 italic text-base leading-snug">
                &ldquo;Hi, I&apos;m Andres &mdash; I&apos;ve helped Essex County businesses automate the repetitive work that&apos;s stealing their time. Let me show you what that looks like for yours.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center">
              <Button href="/contact" variant="primary">
                Get My Free Automation Audit
              </Button>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white transition-colors text-base flex items-center gap-1 underline underline-offset-2"
              >
                See a real example ↓
              </a>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-sm font-500">
                Serving Montclair &middot; Bloomfield &middot; Glen Ridge &middot; Verona &middot; Essex County
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
