import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'About', href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 card-shadow">
      <nav className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-navy">
          AI Montclair
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-500 transition-colors ${
                isActive(item.href) ? 'text-lime' : 'text-gray-700 hover:text-navy'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href="/contact" className="btn-primary">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden">
            <div className="container-custom py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-500 transition-colors ${
                    isActive(item.href) ? 'text-lime' : 'text-gray-700 hover:text-navy'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a href="/contact" className="btn-primary">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
