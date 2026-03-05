import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export function CTASection() {
  return (
    <section className="gradient-navy-to-slate text-white py-16 md:py-24">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Montclair&apos;s small businesses deserve the same tools as the big guys.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s build yours. Free 30-minute audit &mdash; we&apos;ll identify exactly what can be automated in your business.
          </p>
          <Button href="/contact" variant="primary">
            Get My Free Automation Audit
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
