import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Briefcase, Heart, Home, Dumbbell, UtensilsCrossed, Wrench } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const industries = [
  {
    icon: Briefcase,
    title: 'Law Firms',
    hook: 'Less admin. More billable hours.',
    href: '/industries/law-firms',
  },
  {
    icon: Heart,
    title: 'Medical & Dental',
    hook: 'Your front desk, finally breathing.',
    href: '/industries/medical-dental',
  },
  {
    icon: Home,
    title: 'Real Estate',
    hook: 'Every lead responded to in minutes.',
    href: '/industries/real-estate',
  },
  {
    icon: Dumbbell,
    title: 'Gyms & Fitness',
    hook: 'Keep members. Stop chasing leads.',
    href: '/industries/gyms-fitness',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    hook: 'More tables filled. Fewer calls answered.',
    href: '/industries/restaurants',
  },
  {
    icon: Wrench,
    title: 'Home Services',
    hook: 'Never miss a lead while you\'re on the job.',
    href: '/industries/home-services',
  },
]

export function Industries() {
  return (
    <section className="bg-warm-cream py-20">
      <div className="container-custom">
        <div className="mb-12">
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-brand mb-3">Industries we serve</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">We know your industry</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Every business is different. Click your industry to see exactly what I&apos;d automate for you.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.div key={industry.href} variants={cardVariants} whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                <Link to={industry.href}>
                  <div className="bg-white rounded-xl border border-slate-100 p-6 h-full flex flex-col" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{industry.title}</h3>
                    <p className="text-sm text-slate-500 mt-1 flex-1">{industry.hook}</p>
                    <span className="text-sm font-medium text-brand mt-4">Learn more &rarr;</span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
