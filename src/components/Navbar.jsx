// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Logo } from './ui'
import { BRAND } from '../data'

const NAV_ITEMS = [
  { label: 'Home',         path: '/'           },
  { label: 'Planos',       path: '/planos'      },
  { label: 'Câmeras',      path: '/cameras'     },
  { label: 'Quem Somos',   path: '/quem-somos'  },
  { label: 'FAQ',          path: '/faq'         },
  { label: 'Contato',      path: '/contato'     },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const { pathname }      = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu]         = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 42)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Fecha menu ao navegar
  useEffect(() => { setMenu(false); window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <nav className={`navbar ${scrolled || menu ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
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
            <button className="theme-toggle" onClick={toggle} title="Alternar tema">
              {dark ? '☀️ Claro' : '🌙 Escuro'}
            </button>

            <a href={BRAND.portal} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
              👤 Área do Cliente
            </a>

            <button
              className="navbar__burger"
              onClick={() => setMenu(m => !m)}
              aria-label="Menu"
            >
              {menu ? '✕' : '☰'}
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
          <a href={BRAND.portal} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
            👤 Área do Cliente
          </a>
        </div>
      )}
    </>
  )
}
