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
      <div className="bg-navy py-3 px-4 flex flex-col sm:flex-row items-center justify-center gap-3 shadow-lg">
        <span className="text-white text-sm sm:text-base font-medium">
          Ready to automate your business?
        </span>
        <a
          href="mailto:hello@aimontclair.com"
          className="bg-brand text-white text-sm sm:text-base font-bold px-5 py-2 rounded-lg hover:bg-brand/90 transition-colors whitespace-nowrap"
        >
          Book Free Consultation &rarr;
        </a>
      </div>
    </div>
  )
}
