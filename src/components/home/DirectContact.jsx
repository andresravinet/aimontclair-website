import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function DirectContact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="bg-brand text-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-6">Get a same-day answer</h3>
            <p className="text-brand-light mb-8 leading-relaxed">
              Have a specific problem? Need an honest assessment before committing? Call for a no-pressure consultation. We usually pick up.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+19085551234"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-brand font-semibold rounded-lg hover:bg-brand-light transition-colors w-full sm:w-auto justify-center"
              >
                <Phone size={20} />
                Call now (908) 555-1234
              </a>
              <p className="text-sm text-brand-light/80">Monday–Friday, 9am–6pm EST</p>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-4">
            <motion.div variants={itemVariants} className="flex gap-3 items-start">
              <Clock size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">Free audit</p>
                <p className="text-sm text-brand-light/80">Understand what\'s possible in 15 mins</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-3 items-start">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">Local (really)</p>
                <p className="text-sm text-brand-light/80">Montclair-based. Know your business type.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-3 items-start">
              <Mail size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">Or email us</p>
                <p className="text-sm text-brand-light/80">andres@aimontclair.com — we read everything</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
