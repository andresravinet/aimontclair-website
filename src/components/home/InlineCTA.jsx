import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function InlineCTA({ industry = null }) {
  const text = industry
    ? `Want results like this for your ${industry}?`
    : 'Want to see what this looks like for your business?'

  return (
    <div className="text-center py-10">
      <p className="text-slate-600 text-lg mb-4">{text}</p>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
      >
        Get My Free Automation Audit <ArrowRight size={18} />
      </Link>
    </div>
  )
}
