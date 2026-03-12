import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export function CTASection() {
  return (
    <section className="bg-canvas grain-overlay text-white py-16 md:py-24">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cream">
            Montclair business owner? Stop losing hours to admin chaos.
          </h2>
          <p className="text-xl text-cream-muted mb-8 max-w-2xl mx-auto">
            I&apos;ll show you exactly where you can reclaim 5+ hours per week. Free 30-minute audit — no obligation, no sales pitch.
          </p>
          <Button href="/contact" variant="primary">
            Get My Free 15-Minute Audit
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
