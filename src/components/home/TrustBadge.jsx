import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export function TrustBadge() {
  const items = [
    { icon: '✓', label: '50+ NJ Businesses' },
    { icon: '✓', label: '24-Hour Response' },
    { icon: '✓', label: 'Fixed Pricing' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="bg-brand/10 border-b border-brand/20 backdrop-blur-sm py-3 px-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-semibold text-cream">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-accent">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
