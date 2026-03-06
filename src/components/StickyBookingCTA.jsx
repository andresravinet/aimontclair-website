import { useState, useEffect } from 'react'

export function StickyBookingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gradient-to-r from-navy to-blue-900 py-3 px-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl border-t border-brand/40">
        <div>
          <span className="text-white text-sm sm:text-base font-semibold block">
            🎯 Stop Losing Hours to Admin
          </span>
          <span className="text-white/70 text-xs">Limited availability this month</span>
        </div>
        <a
          href="mailto:hello@aimontclair.com"
          className="bg-brand text-white text-sm sm:text-base font-bold px-6 py-2.5 rounded-lg hover:bg-brand-dark transition-all whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Get Free Audit Now
        </a>
      </div>
    </div>
  )
}
