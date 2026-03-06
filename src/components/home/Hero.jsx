import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { HeroStatsCard } from './HeroStatsCard'

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
        {/* LEFT COLUMN */}
        <div>
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
              Your Montclair Business, Running on Autopilot
            </h1>
          </motion.div>

          <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Drowning in scheduling chaos and admin work? We build AI automation systems for Montclair businesses so you <strong>stop losing leads and hours</strong> to repetitive tasks. You focus on your business. AI handles the rest. No long-term contracts. No enterprise price tags. Live in weeks.
            </p>
          </motion.div>

          {/* Founder strip */}
          <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-3 mt-6 mb-8">
              <img
                src="https://aimontclair.com/lovable-uploads/9e5814cb-d745-4977-94cd-d278473bd69b.png"
                alt="Andres Ravinet"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-brand/40 flex-shrink-0"
                loading="lazy"
              />
              <p className="text-white/80 text-sm italic">
                &ldquo;Hi, I\'m Andres &mdash; I\'ve helped Essex County businesses automate the repetitive work that\'s stealing their time. Let me show you what that looks like for yours.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center">
              <Button href="/contact" variant="primary">
                Get My Free Automation Audit
              </Button>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white transition-colors text-base flex items-center gap-1 underline underline-offset-2"
              >
                See a real example &#8595;
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-white/70 text-sm">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-brand" /> ✓ Fixed Price Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-brand" /> ✓ Local to Montclair
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-brand" /> ✓ Live in 1&ndash;6 weeks
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-brand" /> ✓ No contracts
              </span>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 inline-block mt-6">
              <p className="text-sm font-500">
                Serving Montclair &middot; Bloomfield &middot; Glen Ridge &middot; Verona &middot; Essex County
              </p>
            </div>
            <p className="text-white/50 text-xs mt-3">
              Projects from $500 &middot; Free audit &middot; No commitment
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — stats card */}
        <div className="hidden lg:flex items-center justify-center">
          <HeroStatsCard />
        </div>
      </div>
    </section>
  )
}
