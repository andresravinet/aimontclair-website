import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'

export function InlineCTA({ industry = null }) {
  const text = industry
    ? `Stop wasting hours in your ${industry}.`
    : 'Stop wasting hours on repetitive admin work.'

  return (
    <div className="text-center py-12 bg-gradient-to-b from-transparent to-blue-50 px-4">
      <p className="text-slate-700 text-lg font-semibold mb-2">{text}</p>
      <p className="text-gray-600 text-sm mb-6">
        Let us show you exactly how much time you\'ll get back.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Zap size={18} /> Get Your Free Audit Today
        </Link>
        <span className="text-xs text-gray-500">
          ✓ No credit card required
        </span>
      </div>
    </div>
  )
}
