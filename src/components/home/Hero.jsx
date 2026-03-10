import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
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
    <section className="bg-canvas grain-overlay text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
        {/* LEFT COLUMN */}
        <div>
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight text-cream">
              Your neighbor who builds the systems.
            </h1>
          </motion.div>

          <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-xl text-cream-muted mb-4 leading-relaxed">
              Stop losing hours to scheduling chaos, missed leads, and repetitive work. I help Montclair businesses &mdash; dental offices, law firms, contractors, restaurants &mdash; reclaim their time with AI and automation that actually works.
            </p>
          </motion.div>

          <motion.div custom={1.5} initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-sm font-semibold text-cream/80 mb-6 leading-relaxed">
              I build websites in 5 days and custom apps in days &mdash; fixed price, no agency wait.
            </p>
          </motion.div>

          {/* Founder strip */}
          <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-start gap-3 mt-6 mb-8">
              <img
                src="/andres-headshot.png"
                alt="Andres Ravinet"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-brand/40 flex-shrink-0"
                loading="lazy"
              />
              <p className="text-cream/70 text-sm italic">
                &ldquo;A dental office near me had a full waiting list and a front desk spending half the day on the phone managing appointments. Not because they were bad at their jobs &mdash; no one had ever set up a better way. We fixed it in two weeks.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center">
              <Button href="/contact" variant="primary" icon={ArrowRight}>
                Get Your Free Automation Audit
              </Button>
              <a
                href="#how-it-works"
                className="text-cream-muted hover:text-cream transition-colors text-base flex items-center gap-2 underline underline-offset-2"
              >
                See how it works
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="bg-brand/20 backdrop-blur-sm rounded-lg p-4 inline-block mt-6 border border-brand/40">
              <p className="text-sm font-600 text-cream">
                Serving Montclair, Glen Ridge, Verona, Bloomfield, and the greater Essex County area
              </p>
            </div>
            <p className="text-cream/50 text-xs mt-3">
              Projects from $500 &middot; Free audit &middot; No commitment
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — empty on purpose to keep layout */}
        <div className="hidden lg:flex items-center justify-center" />
      </div>
    </section>
  )
}
