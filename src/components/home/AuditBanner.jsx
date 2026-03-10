import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'

export function AuditBanner() {
  return (
    <section className="bg-canvas grain-overlay text-white py-16 md:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1">
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-accent mb-3">Free audit</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display text-cream">
              Not sure where to start?
            </h2>
            <p className="text-lg text-cream-muted">
              Get a free 20-minute AI audit. I&apos;ll show you exactly what could be automated in your business.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/audit" variant="primary" icon={ArrowRight} className="whitespace-nowrap">
              Book Your Free Audit
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
