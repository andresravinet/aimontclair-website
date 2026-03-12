import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function InlineCTA({ industry = null }) {
  const text = industry
    ? `Stop wasting hours in your ${industry}.`
    : 'Stop wasting hours on repetitive admin work.'

  return (
    <div className="text-left py-12 bg-warm-cream px-4">
      <p className="text-slate-700 text-lg font-semibold mb-2">{text}</p>
      <p className="text-gray-600 text-sm mb-6">
        Let me show you exactly how much time you&apos;ll get back.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
        >
          <ArrowRight size={18} /> Get Your Free 15-Min Audit Today
        </Link>
        <span className="text-xs text-gray-500 self-center">
          ✓ No credit card required
        </span>
      </div>
    </div>
  )
}
