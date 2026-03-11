import { motion } from 'framer-motion'
import { Building2, Stethoscope, Briefcase, Utensils, Home } from 'lucide-react'

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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 24px rgba(7, 104, 159, 0.15)',
  },
}

export function IndustryTrust() {
  const industries = [
    {
      icon: Stethoscope,
      name: 'Medical & Dental',
      value: 'Eliminate phone chaos',
    },
    {
      icon: Briefcase,
      name: 'Law Firms',
      value: 'Automate intake & follow-up',
    },
    {
      icon: Building2,
      name: 'Real Estate',
      value: 'Lead qualification at scale',
    },
    {
      icon: Utensils,
      name: 'Restaurants & Retail',
      value: 'Order & inventory automation',
    },
    {
      icon: Home,
      name: 'Home Services',
      value: 'Dispatch & scheduling',
    },
  ]

  return (
    <section className="bg-warm-cream text-canvas py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display mb-3"
          >
            Trusted by NJ businesses in every industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-canvas/70 max-w-2xl mx-auto"
          >
            Whatever your business looks like, we\'ve helped someone like you reclaim hours and eliminate chaos.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4"
        >
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                variants={badgeVariants}
                whileHover="hover"
                className="bg-white rounded-lg p-6 text-center border border-brand/10 cursor-default"
              >
                <Icon className="w-8 h-8 text-brand mx-auto mb-3" />
                <h3 className="font-semibold text-sm mb-2 font-display">{industry.name}</h3>
                <p className="text-xs text-canvas/60">{industry.value}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
