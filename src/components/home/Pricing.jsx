import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

export function Pricing() {
  return (
    <section className="py-20 bg-canvas grain-overlay">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-cream mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-cream-muted max-w-2xl mx-auto">
            Every project starts with a free audit. We agree on a fixed price before any work begins &mdash; no surprises, no hourly billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Starter */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-200">
            <div className="text-sm font-semibold text-brand uppercase tracking-wide mb-2">Starter</div>
            <div className="text-4xl font-bold font-display text-cream mb-1">$500<span className="text-lg font-normal text-cream-muted">+</span></div>
            <div className="text-cream-muted text-sm mb-6">Single automation</div>
            <ul className="space-y-3 mb-8">
              {['One focused automation', 'Live in 1\u20132 weeks', 'Training included', '30-day support'].map(item => (
                <li key={item} className="flex items-center gap-2 text-cream-muted text-sm">
                  <CheckCircle size={16} className="text-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="block text-center py-2.5 px-4 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white transition-colors duration-200">
              Get Started
            </Link>
          </div>

          {/* Growth — featured */}
          <div className="bg-brand/10 border border-brand/30 rounded-2xl p-8 hover:bg-brand/20 hover:-translate-y-1 transition-all duration-200 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
            <div className="text-sm font-semibold text-brand uppercase tracking-wide mb-2">Growth</div>
            <div className="text-4xl font-bold font-display text-cream mb-1">$1,500<span className="text-lg font-normal text-cream-muted">+</span></div>
            <div className="text-cream-muted text-sm mb-6">Full automation suite</div>
            <ul className="space-y-3 mb-8">
              {['2\u20133 connected automations', 'Live in 2\u20134 weeks', 'Staff training included', '60-day support', 'Monthly check-in call'].map(item => (
                <li key={item} className="flex items-center gap-2 text-cream/90 text-sm">
                  <CheckCircle size={16} className="text-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="block text-center py-2.5 px-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors duration-200">
              Get My Free Audit
            </Link>
          </div>

          {/* Custom */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-200">
            <div className="text-sm font-semibold text-brand uppercase tracking-wide mb-2">Custom</div>
            <div className="text-4xl font-bold font-display text-cream mb-1">$5,000<span className="text-lg font-normal text-cream-muted">+</span></div>
            <div className="text-cream-muted text-sm mb-6">Enterprise-grade for SMBs</div>
            <ul className="space-y-3 mb-8">
              {['Complex multi-system builds', 'Live in 4\u20136 weeks', 'Deep integrations (Clio, Dentrix, HubSpot)', 'Ongoing retainer available', 'Priority support'].map(item => (
                <li key={item} className="flex items-center gap-2 text-cream-muted text-sm">
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
        <div className="text-center">
          <p className="text-cream-muted text-sm">
            Not sure which fits? <Link to="/contact" className="text-accent font-medium hover:underline">Start with a free 30-minute audit</Link> &mdash; we&apos;ll recommend the right scope.
          </p>
        </div>
      </div>
    </section>
  )
}
