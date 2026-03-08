// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import { Logo } from './ui'
import { BRAND } from '../data'

/* SVG sociais inline */
const IcIG = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
    <defs>
      <linearGradient id="ft-ig" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ft-ig)" />
    <circle
      cx="12"
      cy="12"
      r="4.5"
      stroke="#fff"
      strokeWidth="1.7"
      fill="none"
    />
    <circle cx="17.5" cy="6.5" r="1.1" fill="#fff" />
  </svg>
)
const IcFB = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#1877F2" />
    <path
      d="M13.5 21v-7h2.2l.3-2.5H13.5v-1.5c0-.7.2-1.2 1.2-1.2h1.3V6.1c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.8H8.7V13.5H11v7h2.5z"
      fill="#fff"
    />
  </svg>
)
const IcWA = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#25D366" />
    <path
      d="M17.47 14.38c-.26-.13-1.53-.76-1.77-.84-.24-.09-.41-.13-.58.13-.17.26-.65.84-.8 1.02-.15.17-.29.19-.55.06-.26-.13-1.1-.41-2.1-1.3-.77-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.16.17-.26.26-.44.09-.17.04-.33-.02-.46-.06-.13-.58-1.4-.8-1.91-.21-.5-.42-.43-.58-.44h-.5c-.17 0-.45.06-.68.33-.24.26-.9.88-.9 2.15s.92 2.49 1.05 2.66c.13.17 1.8 2.75 4.37 3.86.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.08 1.53-.63 1.74-1.23.22-.61.22-1.13.15-1.23-.06-.1-.22-.16-.48-.29z"
      fill="#fff"
    />
  </svg>
)

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Planos', to: '/planos' },
  { label: 'Câmeras', to: '/cameras' },
  { label: 'Quem Somos', to: '/quem-somos' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contato', to: '/contato' },
  { label: 'Contratos', to: '/contratos' },
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* Faixa principal */}
      <div className="footer__main">
        <div className="footer__main-inner">
          {/* Logo + tagline */}
          <Link to="/" className="footer__logo-wrap">
            <Logo height={36} />
            <span className="footer__tagline">Fibra óptica em Maricá/RJ</span>
          </Link>

          {/* Links de nav */}
          <nav className="footer__nav">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="footer__nav-link">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Sociais */}
          <div className="footer__socials">
            <a
              href={BRAND.ig}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              title="Instagram"
            >
              <IcIG />
            </a>
            <a
              href={BRAND.fb}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              title="Facebook"
            >
              <IcFB />
            </a>
            <a
              href={BRAND.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              title="WhatsApp"
            >
              <IcWA />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span>
            © 2025 Next Provedor · CNPJ {BRAND.cnpj} · {BRAND.cidade}
          </span>
          <span>Autorizado pela ANATEL · Processo nº {BRAND.anatel}</span>
        </div>
      </div>
    </footer>
  )
}
