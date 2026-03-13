import { motion } from 'framer-motion'
import { CheckCircle, Users, Clock } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function TrustBanner() {
  const stats = [
    {
      icon: Users,
      label: 'NJ Businesses',
      value: '50+',
      description: 'Dental, Law, Real Estate, Healthcare',
    },
    {
      icon: Clock,
      label: 'Average Time',
      value: '3 Weeks',
      description: 'From kickoff to live automation',
    },
    {
      icon: CheckCircle,
      label: 'Success Rate',
      value: '98%',
      description: 'Projects delivered on schedule',
    },
  ]

  return (
    <section className="bg-canvas text-white py-16 md:py-20 border-b border-brand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.2em] uppercase font-semibold text-cream mb-8 text-center">Why work with us</p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div 
                key={stat.label} 
                variants={itemVariants} 
                className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all"
              >
                <Icon className="w-10 h-10 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-cream/70 font-medium group-hover:text-cream/90 transition-colors">{stat.label}</p>
                  <p className="text-4xl font-bold text-cream mt-1">{stat.value}</p>
                  <p className="text-sm text-cream/60 mt-1 group-hover:text-cream/70 transition-colors">{stat.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
