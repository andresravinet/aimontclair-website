import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

export function Pricing() {
  return (
    <section className="py-20 bg-warm-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-brand mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Every project starts with a free audit. I agree on a fixed price before any work begins &mdash; no surprises, no hourly billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Starter */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div className="text-sm font-semibold text-brand uppercase tracking-wide mb-2">Starter</div>
            <div className="text-4xl font-bold font-display text-slate-900 mb-1">$500<span className="text-lg font-normal text-slate-500">+</span></div>
            <div className="text-slate-500 text-sm mb-6">Single automation</div>
            <ul className="space-y-3 mb-8">
              {['One focused automation', 'Live in 1\u20132 weeks', 'Training included', '30-day support'].map(item => (
                <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                  <CheckCircle size={16} className="text-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="block text-center py-2.5 px-4 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white transition-colors duration-200">
              Get started
            </Link>
          </div>

          {/* Growth — featured */}
          <div className="bg-canvas rounded-2xl border border-brand/30 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
            <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Growth</div>
            <div className="text-4xl font-bold font-display text-cream mb-1">$1,500<span className="text-lg font-normal text-cream/60">+</span></div>
            <div className="text-cream/60 text-sm mb-6">Full automation suite</div>
            <ul className="space-y-3 mb-8">
              {['2\u20133 connected automations', 'Live in 2\u20134 weeks', 'Staff training included', '60-day support', 'Monthly check-in call'].map(item => (
                <li key={item} className="flex items-center gap-2 text-cream/90 text-sm">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="block text-center py-2.5 px-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors duration-200">
              Get My Free Audit
            </Link>
          </div>

          {/* Custom */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div className="text-sm font-semibold text-brand uppercase tracking-wide mb-2">Custom</div>
            <div className="text-4xl font-bold font-display text-slate-900 mb-1">$5,000<span className="text-lg font-normal text-slate-500">+</span></div>
            <div className="text-slate-500 text-sm mb-6">Enterprise-grade for SMBs</div>
            <ul className="space-y-3 mb-8">
              {['Complex multi-system builds', 'Live in 4\u20136 weeks', 'Deep integrations (Clio, Dentrix, HubSpot)', 'Ongoing retainer available', 'Priority support'].map(item => (
                <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                  <CheckCircle size={16} className="text-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="block text-center py-2.5 px-4 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white transition-colors duration-200">
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        {/* Bottom note */}
        <div>
          <p className="text-slate-500 text-sm">
            Not sure which fits? <Link to="/contact" className="text-brand font-medium hover:underline">Start with a free 30-minute audit</Link> &mdash; I&apos;ll recommend the right scope.
          </p>
        </div>
      </div>
    </section>
  )
}
