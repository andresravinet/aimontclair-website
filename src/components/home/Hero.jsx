import { motion } from 'framer-motion'
import {ArrowRight} from '@phosphor-icons/react'

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
    <section className="bg-canvas grain-overlay min-h-screen flex items-center overflow-hidden relative">
      {/* MONTCLAIR watermark */}
      <span
        className="absolute bottom-[-20px] right-0 pointer-events-none select-none text-cream z-0"
        style={{
          fontSize: 'clamp(80px, 15vw, 200px)',
          opacity: 0.04,
          letterSpacing: '0.05em',
          lineHeight: 1,
          fontFamily: 'Sora, system-ui, sans-serif',
          fontWeight: 800,
        }}
      >
        MONTCLAIR
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-0 items-center py-20 relative z-10">
        {/* LEFT COLUMN */}
        <div className="pr-0 lg:pr-12">
          {/* Eyebrow */}
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-6"
          >
            AI Montclair — Montclair, NJ
          </motion.p>

          {/* Massive headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-cream font-display font-bold leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(64px, 9vw, 120px)' }}
          >
            Your neighbor<br />
            who builds the<br />
            systems.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-cream-muted text-lg md:text-xl max-w-md mb-8 leading-relaxed"
          >
            Montclair small businesses run better when their
            back office runs itself. I build that.
          </motion.p>

          {/* CTA button */}
          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base mb-8"
            >
              Get My Free AI Audit
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Founder strip */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-start gap-3"
          >
            <img
              src="/andres-headshot.png"
              alt="Andres Ravinet"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/40 flex-shrink-0"
              loading="lazy"
            />
            <p className="text-cream-muted text-sm italic leading-relaxed">
              &ldquo;A dental office near me had a full waiting list and a front desk spending half the day on the phone managing appointments. We fixed it in two weeks.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — headshot bleeding off right edge */}
        <div className="hidden lg:block relative h-[600px] overflow-hidden">
          <motion.img
            src="/andres-headshot.png"
            alt="Andres Ravinet — AI Montclair"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            className="absolute inset-y-0 left-0 h-full w-auto object-cover object-top rounded-l-2xl"
            style={{
              filter: 'saturate(0.85) contrast(1.1)',
              maxWidth: 'none',
            }}
          />
        </div>
      </div>
    </section>
  )
}
