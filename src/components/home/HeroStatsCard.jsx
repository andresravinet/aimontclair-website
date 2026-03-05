import { motion } from 'framer-motion'
import { AnimatedCounter } from '../AnimatedCounter'

export function HeroStatsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-sm"
    >
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-2 text-white/60 text-xs font-mono">automation-dashboard</span>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-white/60 text-xs uppercase tracking-wide mb-1">Hours Saved / Week</div>
            <div className="text-3xl font-bold text-white font-display">
              <AnimatedCounter target={8} suffix=" hrs" duration={2000} />
            </div>
            <div className="mt-2 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
              />
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-white/60 text-xs uppercase tracking-wide mb-1">Leads Captured After Hours</div>
            <div className="text-3xl font-bold text-white font-display">
              <AnimatedCounter target={3} suffix="x more" duration={1500} />
            </div>
            <div className="mt-2 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ delay: 1.4, duration: 1, ease: 'easeOut' }}
              />
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-white/60 text-xs uppercase tracking-wide mb-1">Intake Calls Reduced</div>
            <div className="text-3xl font-bold text-white font-display">
              <AnimatedCounter target={60} suffix="%" duration={2000} />
            </div>
            <div className="mt-2 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ delay: 1.6, duration: 1, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="text-white/60 text-xs">Live results from Essex County clients</span>
        </div>
      </div>
    </motion.div>
  )
}
