import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, GOOGLE_PLAY_DEV, openMailClient } from '../data/appAssets'
import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <BrandLogo to="/" className="mb-3" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Building smart mobile applications for everyday life.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={(e) => {
                e.preventDefault()
                openMailClient()
              }}
              className="inline-block mt-3 text-slate-500 hover:text-white text-sm transition-colors cursor-pointer"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Products</h4>
            <ul className="space-y-2">
              {[['/apps', 'Our Apps'], ['/websites', 'Our Websites'], ['https://www.getmortgagecalc.com/', 'GetMortgageCalc'], [GOOGLE_PLAY_DEV, 'Google Play']].map(([to, label]) => (
                <li key={to}>
                  {to.startsWith('http') ? (
                    <a href={to} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">{label}</a>
                  ) : (
                    <Link to={to} className="text-slate-400 hover:text-white text-sm transition-colors">{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2">
              {[['/privacy-policy', 'Privacy Policy'], ['/terms', 'Terms & Conditions']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Tech Seekers. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Active Google Play Developer · Android & Flutter Specialists</p>
        </div>
      </div>
    </footer>
  )
}
