import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      title: 'Owner, Mitchell Legal Services',
      quote: 'We were losing track of client follow-ups. The automation Andres built cut our admin time in half and our clients love the timely reminders.',
    },
    {
      name: 'Dr. James Chen',
      title: 'Founder, Radiant Dental',
      quote: 'The chatbot answers 90% of our appointment questions. Our front desk finally has time to focus on the complex stuff.',
    },
    {
      name: 'Maria Rodriguez',
      title: 'Team Lead, Essex County Real Estate Group',
      quote: 'Fast, affordable, and Andres actually understands our workflow. We went from concept to live in 3 weeks.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-16 md:py-24 bg-slate-light">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What Clients Say
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real small businesses.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-lime text-lime" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-600 text-navy">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white rounded-lg card-shadow px-6 py-3">
            <p className="text-green-700 font-600">✓ Free consultation, no commitment</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
