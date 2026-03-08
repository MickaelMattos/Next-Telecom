// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './ui'
import { BRAND } from '../data'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Planos', path: '/planos' },
  { label: 'Câmeras', path: '/cameras' },
  { label: 'Quem Somos', path: '/quem-somos' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contato', path: '/contato' },
]

const IcUser = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="15"
    height="15"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 42)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    setMenu(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <nav className={`navbar ${scrolled || menu ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo — ancorado à esquerda */}
          <Link to="/" className="navbar__logo">
            <Logo height={38} />
          </Link>

          {/* Links desktop */}
          <nav className="navbar__links">
            {NAV_ITEMS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`navbar__link ${pathname === path ? 'navbar__link--active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Direita */}
          <div className="navbar__right">
            <a
              href={BRAND.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__portal-btn"
            >
              <IcUser />
              <span>Área do Cliente</span>
            </a>

            <button
              className="navbar__burger"
              onClick={() => setMenu((m) => !m)}
              aria-label="Menu"
            >
              {menu ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  width="20"
                  height="20"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  width="20"
                  height="20"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menu && (
        <div className="navbar__mobile">
          {NAV_ITEMS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`navbar__mobile-link ${pathname === path ? 'navbar__mobile-link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <a
            href={BRAND.portal}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__portal-btn navbar__portal-btn--mobile"
          >
            <IcUser />
            <span>Área do Cliente</span>
          </a>
        </div>
      )}
    </>
  )
}
