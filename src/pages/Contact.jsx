import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  useEffect(() => {
    document.title = 'Contact | AI Montclair'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Contact AI Montclair. Schedule your free consultation or reach out with questions.'
    )
  }, [])

  const onSubmit = (data) => {
    // Submit to Formspree
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://formspree.io/f/xeojzaqe' // PLACEHOLDER - owner to update
    form.style.display = 'none'

    Object.keys(data).forEach(key => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = data[key]
      form.appendChild(input)
    })

    document.body.appendChild(form)
    form.submit()
    form.remove()

    reset()
    alert('Thank you for your message! We\'ll respond within 1 business day.')
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Ready to automate? We'll get back to you within 1 business day.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card>
                <Mail className="w-8 h-8 text-lime mb-3" />
                <h3 className="font-bold text-navy mb-2">Email</h3>
                <a href="mailto:hello@aimontclair.com" className="text-lime hover:underline">
                  hello@aimontclair.com
                </a>
              </Card>

              <Card>
                <MapPin className="w-8 h-8 text-lime mb-3" />
                <h3 className="font-bold text-navy mb-2">Service Area</h3>
                <p className="text-gray-600 text-sm">
                  Montclair · Bloomfield · Glen Ridge · Verona · Essex County, NJ
                </p>
              </Card>

              <Card>
                <Clock className="w-8 h-8 text-lime mb-3" />
                <h3 className="font-bold text-navy mb-2">Response Time</h3>
                <p className="text-gray-600 text-sm">
                  We respond within 1 business day. Free consultation, no commitment.
                </p>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-navy font-600 mb-2">Name</label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-navy font-600 mb-2">Email</label>
                    <input
                      type="email"
                      {...register('email', { required: 'Email is required' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-navy font-600 mb-2">Business Type</label>
                    <select
                      {...register('businessType', { required: 'Please select a business type' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime"
                    >
                      <option value="">Select...</option>
                      <option value="Law Firm">Law Firm</option>
                      <option value="Medical/Dental">Medical/Dental</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Fitness/Wellness">Fitness/Wellness</option>
                      <option value="Retail">Retail</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>}
                  </div>

                  <div>
                    <label className="block text-navy font-600 mb-2">Message</label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime h-32"
                      placeholder="Tell us about your business and what you'd like to automate..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button variant="primary" className="w-full justify-center">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Not ready to reach out yet?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our services and industries to learn more about how we can help.
          </p>
          <a href="/services" className="btn-primary">
            Learn More
          </a>
        </div>
      </section>
    </>
  )
}
