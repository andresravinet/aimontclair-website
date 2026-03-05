import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="gradient-navy-to-slate text-white py-20 md:py-32">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI Automation for Main Street Businesses
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-6 leading-relaxed">
            Stop wasting time on repetitive tasks. We help local businesses in Montclair and Essex County automate the work that&apos;s slowing you down&mdash;so you can focus on what matters.
          </motion.p>

          {/* Founder strip */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <div
              className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm"
              style={{ background: '#0f2a4a', border: '2px solid rgba(255,255,255,0.3)' }}
            >
              AR
            </div>
            <p className="text-gray-300 italic text-base leading-snug">
              &ldquo;Hi, I&apos;m Andres &mdash; I help Montclair businesses automate the admin work that&apos;s killing your productivity.&rdquo;
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12 items-center">
            <Button href="/contact" variant="primary">
              Book Free Consultation
            </Button>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors text-base flex items-center gap-1 underline underline-offset-2"
            >
              See How It Works <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-sm font-500">
              Serving Montclair &middot; Bloomfield &middot; Glen Ridge &middot; Verona &middot; Essex County
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
