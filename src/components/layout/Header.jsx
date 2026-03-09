import { useState, useEffect, useRef } from 'react'
import {List, X, CaretDown} from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'

const industryItems = [
  { emoji: '⚖️', label: 'Law Firms', href: '/industries/law-firms', desc: 'Intake, billing, and client communication' },
  { emoji: '🏥', label: 'Medical & Dental', href: '/industries/medical-dental', desc: 'Scheduling, reminders, and front desk relief' },
  { emoji: '🏠', label: 'Real Estate', href: '/industries/real-estate', desc: 'Lead response, listings, and client nurture' },
  { emoji: '💪', label: 'Gyms & Fitness', href: '/industries/gyms-fitness', desc: 'Member retention and trial conversion' },
  { emoji: '🍽️', label: 'Restaurants', href: '/industries/restaurants', desc: 'Reservations, reviews, and slow night promos' },
  { emoji: '🔧', label: 'Home Services', href: '/industries/home-services', desc: 'Lead capture, scheduling, and reviews' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const linkClass = (path) =>
    'font-500 transition-colors ' +
    (isActive(path) ? 'text-accent' : 'text-cream/70 hover:text-cream')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIndustriesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/95 backdrop-blur-md border-b border-cream/10'
          : 'bg-canvas/80 backdrop-blur-md border-b border-cream/5'
      }`}
    >
      <nav className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/logo-vector-white.svg"
            alt="AI Montclair"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Menu: Services > Industries > About > Contact */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/services" className={linkClass('/services')}>Services</Link>

          {/* Industries Dropdown */}
          <div className="relative" ref={dropdownRef} onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
            <button
              className={'flex items-center gap-1 font-500 transition-colors ' +
                (location.pathname.startsWith('/industries') ? 'text-accent' : 'text-cream/70 hover:text-cream')}
              onClick={() => setIndustriesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={industriesOpen}
            >
              Industries
              <CaretDown size={16} className={'transition-transform duration-200 ' + (industriesOpen ? 'rotate-180' : '')} />
            </button>

            <div
              className={'absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-200 origin-top ' +
                (industriesOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none')}
              style={{ transformOrigin: 'top center' }}
            >
              <div className="py-2">
                {industryItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIndustriesOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-lg flex-shrink-0">
                      {item.emoji}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">{item.label}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/about" className={linkClass('/about')}>About</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
          <Link
            to="/audit"
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            Free AI Audit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 transition-colors text-cream"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>

        {/* Mobile Menu: Services > Industries > About > Contact */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 border-b md:hidden bg-canvas/95 backdrop-blur-md border-cream/10">
            <div className="container-custom py-4 flex flex-col gap-4">
              <Link to="/services" className={linkClass('/services')} onClick={() => setIsOpen(false)}>Services</Link>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  className={'flex items-center gap-1 font-500 transition-colors w-full text-left ' +
                    (location.pathname.startsWith('/industries') ? 'text-accent' : 'text-cream/70')}
                  onClick={() => setMobileIndustriesOpen((v) => !v)}
                >
                  Industries
                  <CaretDown size={16} className={'ml-1 transition-transform duration-200 ' + (mobileIndustriesOpen ? 'rotate-180' : '')} />
                </button>
                {mobileIndustriesOpen && (
                  <div className="mt-2 pl-4 flex flex-col gap-3">
                    {industryItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-center gap-2 text-sm transition-colors text-cream/70 hover:text-cream"
                        onClick={() => { setIsOpen(false); setMobileIndustriesOpen(false) }}
                      >
                        <span>{item.emoji}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about" className={linkClass('/about')} onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/contact" className={linkClass('/contact')} onClick={() => setIsOpen(false)}>Contact</Link>
              <Link
                to="/audit"
                className="bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm text-center"
                onClick={() => setIsOpen(false)}
              >
                Free AI Audit
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
