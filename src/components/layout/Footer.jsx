import {Envelope, MapPin} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">AI Montclair</h3>
            <p className="text-gray-400 text-sm mb-3">
              AI automation for small businesses in Montclair and Essex County, NJ.
            </p>
            <p className="text-gray-500 text-xs">
              Serving Montclair, Bloomfield, Glen Ridge, Verona &amp; Essex County, NJ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-600 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-600 mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/services/ai-chatbot" className="hover:text-brand transition-colors">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link to="/services/scheduling-automation" className="hover:text-brand transition-colors">
                  Scheduling Automation
                </Link>
              </li>
              <li>
                <Link to="/services/workflow-automation" className="hover:text-brand transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-training" className="hover:text-brand transition-colors">
                  AI Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-600 mb-4">Contact & Social</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <Envelope size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@aimontclair.com" className="hover:text-brand transition-colors">
                  hello@aimontclair.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Montclair, NJ 07043</span>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/AI+Montclair+Montclair+NJ" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                  Find us on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} AI Montclair. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Serving Montclair &middot; Bloomfield &middot; Glen Ridge &middot; Verona &middot; Essex County
          </p>
        </div>
      </div>
    </footer>
  )
}
