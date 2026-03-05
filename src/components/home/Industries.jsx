import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Scale, Stethoscope, Home, Dumbbell, ShoppingBag, UtensilsCrossed } from 'lucide-react'

export function Industries() {
  const industries = [
    {
      icon: Scale,
      title: 'Law Firms',
      benefit: 'Automate intake, reduce no-shows, manage client follow-ups.',
    },
    {
      icon: Stethoscope,
      title: 'Medical & Dental',
      benefit: 'HIPAA-conscious scheduling, appointment reminders, intake forms.',
    },
    {
      icon: Home,
      title: 'Real Estate',
      benefit: 'Lead qualification, showing scheduling, pipeline automation.',
    },
    {
      icon: Dumbbell,
      title: 'Fitness & Wellness',
      benefit: 'Member onboarding, class bookings, check-in automation.',
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      benefit: 'Customer service chatbots, order tracking, loyalty workflows.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurants',
      benefit: 'Reservation automation, order notifications, staffing workflows.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Industries We Serve
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with small businesses across Montclair, Bloomfield, Glen Ridge, Verona, and Essex County.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, idx) => {
            const Icon = industry.icon
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card>
                  <Icon className="w-10 h-10 text-lime mb-4" />
                  <h3 className="text-lg font-bold text-navy mb-2">{industry.title}</h3>
                  <p className="text-gray-600 text-sm">{industry.benefit}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
