import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { Scale, Stethoscope, Home, Dumbbell, ShoppingBag, UtensilsCrossed, Wrench } from 'lucide-react'

const industries = [
  {
    icon: Scale,
    title: 'Law Firms',
    href: '/industries/law-firms',
    description: 'Managing cases, client intake, and follow-ups takes time away from billable work.',
    useCases: [
      'Automate intake forms and collect information 24/7',
      'Smart reminders to reduce missed appointments',
      'Case status updates to clients automatically',
      'Chatbot answers common legal questions',
    ],
    roi: 'Save 8+ hours per week on admin work',
  },
  {
    icon: Stethoscope,
    title: 'Medical & Dental Practices',
    href: '/industries/medical-dental',
    description: 'Compliance, scheduling, and patient communication are critical and time-consuming.',
    useCases: [
      'HIPAA-compliant scheduling and reminders',
      'Reduce no-show rates by 40%+',
      'Automate insurance verification',
      'Patient intake forms and follow-ups',
    ],
    roi: 'Reduce no-shows, improve patient retention',
  },
  {
    icon: Home,
    title: 'Real Estate',
    href: '/industries/real-estate',
    description: 'Lead qualification and follow-up are the difference between closing deals and losing them.',
    useCases: [
      'Qualify leads with a custom chatbot',
      'Automatically schedule showings',
      'Send property updates and market reports',
      'Nurture cold leads while you focus on hot ones',
    ],
    roi: 'More qualified leads, faster close rates',
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Wellness',
    href: '/industries/gyms-fitness',
    description: 'Member onboarding, class scheduling, and retention are ongoing challenges.',
    useCases: [
      'Automate class bookings and cancellations',
      'Send workout reminders and motivation',
      'New member onboarding flows',
      'Membership renewal automation',
    ],
    roi: 'Higher member retention, more class attendance',
  },
  {
    icon: Wrench,
    title: 'Home Services',
    href: '/industries/home-services',
    description: 'Customer service, inventory, and order tracking are labor-intensive.',
    useCases: [
      'Instant lead response while you\'re in the field',
      'Automated scheduling and job reminders',
      'Review generation after every completed job',
      'Seasonal campaign automation',
    ],
    roi: 'Win more jobs, get more 5-star reviews',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    href: '/industries/restaurants',
    description: 'Reservations, orders, and staffing are complex and error-prone.',
    useCases: [
      'Reservation booking and confirmations',
      'Order notifications to kitchen and delivery',
      'Staff scheduling automation',
      'Loyalty program management',
    ],
    roi: 'Fewer no-shows, faster service, happier staff',
  },
]

export default function Industries() {
  useEffect(() => {
    document.title = 'Industries | AI Montclair'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'AI automation solutions for law, medical, real estate, fitness, retail, and restaurants in Montclair, NJ.'
    )
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Tailored AI automation solutions for law, medical, real estate, fitness, retail, and restaurants.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="space-y-16"
          >
            {industries.map((industry, idx) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`pb-12 ${idx !== industries.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div>
                      <Icon className="w-14 h-14 text-brand mb-4" />
                      <h2 className="text-3xl font-bold text-navy mb-3">{industry.title}</h2>
                      <p className="text-lg text-gray-600">{industry.description}</p>
                      {industry.href && (
                        <Link to={industry.href} className="inline-flex items-center gap-1 mt-4 text-brand font-semibold hover:text-brand transition-colors">
                          See {industry.title} details →
                        </Link>
                      )}
                    </div>

                    <Card className="lg:col-span-2 p-8">
                      <h3 className="font-bold text-navy mb-4">Common Use Cases</h3>
                      <ul className="space-y-3 mb-6">
                        {industry.useCases.map((useCase, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-brand font-bold flex-shrink-0">→</span>
                            <span className="text-gray-700">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600 font-500">Expected ROI</p>
                        <p className="text-lg font-bold text-navy">{industry.roi}</p>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI automation can work for your industry. Start with a free audit.
          </p>
          <a href="/contact" className="btn-primary">
            Schedule Your Free Audit
          </a>
        </div>
      </section>
    </>
  )
}
