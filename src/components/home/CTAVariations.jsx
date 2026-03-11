import { motion } from 'framer-motion'
import { FileText, ArrowRight } from 'lucide-react'

export function CTAVariations() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="bg-canvas grain-overlay text-white py-12 md:py-16 border-t border-brand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold font-display mb-3">Not ready to talk yet?</h3>
            <p className="text-cream-muted leading-relaxed">
              See how we helped a dental office eliminate scheduling chaos, a law firm cut intake time by 70%, and a real estate team close 3x more deals. Real results from real NJ businesses.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 flex-col sm:flex-row">
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand/20 border border-brand/40 rounded-lg text-cream hover:bg-brand/30 transition-colors font-medium"
            >
              <FileText size={18} />
              View Case Studies
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg transition-colors font-medium"
            >
              Still interested?
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
