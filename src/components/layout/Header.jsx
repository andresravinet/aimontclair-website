import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
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
    (isActive(path) ? 'text-brand' : scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-navy')

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
          ? 'bg-[#0D1B2A]/95 backdrop-blur-sm shadow-lg border-b border-transparent'
          : 'bg-white border-b border-gray-100 card-shadow'
      }`}
    >
      <nav className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={scrolled ? '/logo-vector-white.svg' : '/logo-vector.svg'}
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
                (location.pathname.startsWith('/industries') ? 'text-brand' : scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-navy')}
              onClick={() => setIndustriesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={industriesOpen}
            >
              Industries
              <ChevronDown size={16} className={'transition-transform duration-200 ' + (industriesOpen ? 'rotate-180' : '')} />
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
          className={'md:hidden p-2 transition-colors ' + (scrolled ? 'text-white' : 'text-navy')}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu: Services > Industries > About > Contact */}
        {isOpen && (
          <div className={'absolute top-full left-0 right-0 border-b md:hidden ' + (scrolled ? 'bg-[#0D1B2A]/95 backdrop-blur-sm border-gray-700' : 'bg-white border-gray-100')}>
            <div className="container-custom py-4 flex flex-col gap-4">
              <Link to="/services" className={linkClass('/services')} onClick={() => setIsOpen(false)}>Services</Link>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  className={'flex items-center gap-1 font-500 transition-colors w-full text-left ' +
                    (location.pathname.startsWith('/industries') ? 'text-brand' : scrolled ? 'text-gray-300' : 'text-gray-700')}
                  onClick={() => setMobileIndustriesOpen((v) => !v)}
                >
                  Industries
                  <ChevronDown size={16} className={'ml-1 transition-transform duration-200 ' + (mobileIndustriesOpen ? 'rotate-180' : '')} />
                </button>
                {mobileIndustriesOpen && (
                  <div className="mt-2 pl-4 flex flex-col gap-3">
                    {industryItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={'flex items-center gap-2 text-sm transition-colors ' + (scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-navy')}
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
