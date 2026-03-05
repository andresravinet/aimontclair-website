import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1B2A]/95 backdrop-blur-sm shadow-lg border-b border-transparent'
          : 'bg-white border-b border-gray-100 card-shadow'
      }`}
    >
      <nav className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className={`text-2xl font-bold transition-colors ${scrolled ? 'text-white' : 'text-navy'}`}>
          AI Montclair
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-500 transition-colors ${
                isActive(item.href)
                  ? 'text-brand'
                  : scrolled
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-navy'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-white' : 'text-navy'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`absolute top-full left-0 right-0 border-b md:hidden ${scrolled ? 'bg-[#0D1B2A]/95 backdrop-blur-sm border-gray-700' : 'bg-white border-gray-100'}`}>
            <div className="container-custom py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-500 transition-colors ${
                    isActive(item.href)
                      ? 'text-brand'
                      : scrolled
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-navy'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
