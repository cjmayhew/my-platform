import { useState } from 'react'
import { Menu, Sprout, X } from 'lucide-react'
import { profile } from '../data/resume'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
]

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="nav" aria-label="Main">
      <div className="nav__bar">
        <a className="nav__logo" href="#main" onClick={() => setMenuOpen(false)}>
          <span className="nav__logo-mark" aria-hidden="true">
            <Sprout size={20} />
          </span>
          {profile.name}
        </a>

        <ul className="nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a className="button button--primary nav__cta" href="#contact">
          Say hello
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <ul id="mobile-menu" className="nav__mobile">
          {[...links, { href: '#contact', label: 'Contact' }].map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Nav
