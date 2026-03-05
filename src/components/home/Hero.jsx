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

          <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 leading-relaxed">
            Stop wasting time on repetitive tasks. We help local businesses in Montclair and Essex County automate the work that's slowing you down—so you can focus on what matters.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button href="/contact" variant="primary">
              Book Free Consultation
            </Button>
            <Button href="#how-it-works" variant="secondary">
              See How It Works
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-sm font-500">
              Serving Montclair · Bloomfield · Glen Ridge · Verona · Essex County
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
