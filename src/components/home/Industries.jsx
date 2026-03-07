import { Link } from 'react-router-dom'
import { Briefcase, Heart, Home, Dumbbell, UtensilsCrossed, Wrench } from 'lucide-react'

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
    <section className="bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">We Know Your Industry</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every business is different. Click your industry to see exactly what we'd automate for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <Link key={industry.href} to={industry.href}>
                <div className="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{industry.title}</h3>
                  <p className="text-sm text-slate-500 mt-1 flex-1">{industry.hook}</p>
                  <span className="text-sm font-medium text-brand mt-4">Learn more &rarr;</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
