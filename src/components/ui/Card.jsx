import { motion } from 'framer-motion'

export function Card({ children, className = '', animate = false }) {
  if (animate) {
    return (
      <motion.div
        className={`bg-white rounded-lg p-6 ${className}`}
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
        whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {children}
      </motion.div>
    )
  }
  return (
    <div className={`bg-white rounded-lg card-shadow card-hover p-6 ${className}`}>
      {children}
    </div>
  )
}
