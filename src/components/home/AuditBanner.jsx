import { motion } from 'framer-motion'
import {ArrowRight} from '@phosphor-icons/react'
import { Button } from '../ui/Button'

export function AuditBanner() {
  return (
    <section className="bg-gradient-to-r from-[#0D1B2A] to-brand/20 text-white py-16 md:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display">
              Not sure where to start?
            </h2>
            <p className="text-lg text-gray-300">
              Get a free 20-minute AI audit. We'll show you exactly what could be automated in your business.
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
