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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's talk about how AI can work for your business. Start with a free consultation—no pressure, no sales pitch.
          </p>
          <Button href="/contact" variant="primary">
            Schedule Your Free Audit
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
