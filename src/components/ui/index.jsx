// src/components/ui/index.jsx
import { useState } from 'react'
import { BRAND } from '../../data'

/* ── BOTÃO ────────────────────────────────── */
export function Btn({ children, href, onClick, variant = 'primary', size = '', full, target, rel }) {
  const cls = ['btn', `btn--${variant}`, size && `btn--${size}`, full && 'btn--full']
    .filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={cls}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}>
        {children}
      </a>
    )
  }
  return <button className={cls} onClick={onClick}>{children}</button>
}

/* ── BADGE ────────────────────────────────── */
export function Badge({ children }) {
  return <div className="badge">{children}</div>
}

/* ── CABEÇALHO DE SEÇÃO ───────────────────── */
export function SectionHeader({ badge, title, sub, align = 'center' }) {
  return (
    <div className={`section-header ${align === 'left' ? 'section-header--left' : ''}`}>
      {badge && <Badge>{badge}</Badge>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  )
}

/* ── DIVIDER ──────────────────────────────── */
export function Divider() {
  return (
    <div className="divider">
      <div className="divider__dot" />
    </div>
  )
}

/* ── SPINNER ──────────────────────────────── */
export function Spinner() {
  return <span className="spinner" />
}

/* ── LOGO REAL ────────────────────────────── */
export function Logo({ height = 42 }) {
  return (
    <img
      src="/images/logo.png"
      alt="Next Provedor"
      style={{ height, width: 'auto', display: 'block', objectFit: 'contain' }}
    />
  )
}

/* ── MARQUEE ROW ──────────────────────────── */
export function MarqueeRow({ items, dir = 'left' }) {
  const triple = [...items, ...items, ...items]
  return (
    <div className="marquee-wrapper">
      <div className={`marquee-track marquee-track--${dir}`}>
        {triple.map((c, i) => (
          <div key={i} className="marquee-item">
            {c.img ? (
              <img
                src={c.img}
                alt={c.n}
                style={{ height: 36, width: 'auto', maxWidth: 90, objectFit: 'contain' }}
              />
            ) : (
              <>
                <span className="marquee-item__emoji">{c.e}</span>
                <span className="marquee-item__name">{c.n}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── WHATSAPP FLUTUANTE ───────────────────── */
export function WhatsAppFloat() {
  return (
    <a
      href={BRAND.wa}
      target="_blank"
      rel="noopener noreferrer"
      title="Falar no WhatsApp"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 800,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.6rem',
        boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        textDecoration: 'none',
        animation: 'float 3.5s ease-in-out infinite',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.55)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)'; }}
    >
      💬
    </a>
  )
}
