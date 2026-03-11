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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

function AnimatedHeadline({ text }) {
  const words = text.split(' ')
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-wrap gap-2 md:gap-3">
      {words.map((word, idx) => (
        <motion.span key={idx} variants={wordVariants} className="text-4xl md:text-6xl font-bold font-display leading-tight text-cream">
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="bg-canvas grain-overlay text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
        {/* LEFT COLUMN */}
        <div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <AnimatedHeadline text="Your neighbor who builds the systems." />
          </motion.div>

          <motion.div custom={1.5} initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-xl text-cream-muted mb-4 leading-relaxed">
              Stop losing hours to scheduling chaos, missed leads, and repetitive work. I help Montclair businesses &mdash; dental offices, law firms, contractors, restaurants &mdash; reclaim their time with AI and automation that actually works.
            </p>
          </motion.div>

          <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-sm font-semibold text-cream/80 mb-6 leading-relaxed">
              Fixed pricing. Live in 1-6 weeks. Your automation, your rules.
            </p>
          </motion.div>

          {/* Founder strip with parallax */}
          <motion.div 
            custom={2.5} 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="flex items-start gap-3 mt-6 mb-8">
              <img
                src="/andres-headshot.png"
                alt="Andres Ravinet"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-brand/40 flex-shrink-0"
                loading="lazy"
              />
              <p className="text-cream/70 text-sm italic">
                &ldquo;A dental office near me had a full waiting list and a front desk spending half the day on the phone managing appointments. Not because they were bad at their jobs — no one had ever set up a better way. We fixed it in two weeks.&rdquo;
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

        {/* RIGHT COLUMN — subtle workflow visualization */}
        <div className="hidden lg:flex items-center justify-center relative">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <svg width="280" height="280" viewBox="0 0 280 280" className="text-brand/20">
              <circle cx="140" cy="60" r="28" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="220" cy="140" r="28" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="140" cy="220" r="28" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="60" cy="140" r="28" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M 140 88 L 192 112" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 220 168 L 168 192" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 140 248 L 88 224" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 60 112 L 112 88" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
              <circle cx="140" cy="140" r="40" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
            </svg>
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-center justify-center opacity-10"
          >
            <div className="w-48 h-48 border border-brand rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
