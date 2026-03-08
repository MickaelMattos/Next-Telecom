// src/pages/Planos.jsx
import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PLANOS, CANAIS, BRAND } from '../data'
import '../styles/pages/planos.css'

/* ─── Apenas 5 banners ─────────────────────────────────────────── */
const BANNERS = [
  '/images/banner-velocidade.png',
  '/images/banner-experiencia.png',
  '/images/banner-watch.png',
  '/images/next-baners-2.png',
  '/images/next-baners.png',
]

/* ─── Slider ───────────────────────────────────────────────────── */
function BannerSlider() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % BANNERS.length),
      4500,
    )
    return () => clearInterval(t)
  }, [])
  return (
    <div className="pl-slider">
      {BANNERS.map((src, i) => (
        <div
          key={i}
          className={`pl-slider__slide ${i === active ? 'pl-slider__slide--on' : ''}`}
        >
          <img src={src} alt={`Banner ${i + 1}`} />
        </div>
      ))}
      <div className="pl-slider__dots">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`pl-slider__dot ${i === active ? 'pl-slider__dot--on' : ''}`}
          />
        ))}
      </div>
      <button
        className="pl-slider__btn pl-slider__btn--l"
        onClick={() =>
          setActive((a) => (a - 1 + BANNERS.length) % BANNERS.length)
        }
      >
        ‹
      </button>
      <button
        className="pl-slider__btn pl-slider__btn--r"
        onClick={() => setActive((a) => (a + 1) % BANNERS.length)}
      >
        ›
      </button>
    </div>
  )
}

/* ─── Card de plano com expand no hover ────────────────────────── */
function PlanCard({ p }) {
  const hasStreaming = p.streaming.length > 0
  return (
    <div
      className={`pl-card ${p.pop ? 'pl-card--pop' : ''} ${hasStreaming ? 'pl-card--stream' : ''}`}
    >
      {p.pop && <div className="pl-card__badge">MAIS POPULAR</div>}

      {/* Ícone de streaming — badge canto superior direito */}
      {hasStreaming && (
        <div className="pl-card__stream-icon">
          <img src="/images/icon-streaming.png" alt="Streaming incluso" />
        </div>
      )}

      {/* Cabeçalho sempre visível */}
      <div className="pl-card__head">
        <div className="pl-card__nome">{p.nome}</div>
        <div className="pl-card__vel">
          {p.vel}
          <span>MB</span>
        </div>
        <div className="pl-card__wifi">{p.wifi}</div>
        <div className="pl-card__price-wrap">
          <div className="pl-card__price">
            <sup>R$</sup>
            {p.desc.toFixed(2).replace('.', ',')}
          </div>
          <div className="pl-card__price-sub">/mês com desconto</div>
          <div className="pl-card__price-old">
            De R${p.preco.toFixed(2).replace('.', ',')}
          </div>
        </div>
      </div>

      {/* Expand no hover */}
      <div className="pl-card__expand">
        <ul className="pl-card__items">
          {p.itens.map((it) => (
            <li key={it}>
              <span>✓</span>
              {it}
            </li>
          ))}
        </ul>

        {hasStreaming && (
          <img src="/images/icons-planos.png" alt="Streamings" />
        )}

        <a
          href={BRAND.wa}
          target="_blank"
          rel="noopener noreferrer"
          className="pl-card__btn pl-card__btn--outline"
        >
          Assinar agora →
        </a>
      </div>
    </div>
  )
}

/* ─── Carrossel infinito de canais (CSS puro, sem JS) ──────────── */
const ALL_CHANNELS = [...CANAIS.abertos, ...CANAIS.paramount]

function ChannelCarousel() {
  // Triplicamos para garantir loop visual perfeito em qualquer largura
  const items = [...ALL_CHANNELS, ...ALL_CHANNELS, ...ALL_CHANNELS]
  return (
    <div className="carousel-wrap">
      <div className="carousel-track">
        {items.map((c, i) => (
          <div key={i} className="carousel-item">
            <img src={c.img} alt={c.n} />
            <span>{c.n}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Página ───────────────────────────────────────────────────── */
export default function Planos() {
  useScrollReveal()
  return (
    <div className="pl-page">
      {/* 1 — BANNERS */}
      <section className="pl-hero">
        <BannerSlider />
      </section>

      {/* 2 — CARDS */}
      <section className="section pl-section-cards">
        <div className="container">
          <div className="pl-section-header">
            <h2>Escolha o seu plano</h2>
            <p>
              Instalação gratuita · Suporte 24h · R$10 de desconto pagando no
              vencimento
            </p>
          </div>
          <div className="pl-cards-grid">
            {PLANOS.map((p) => (
              <PlanCard key={p.id} p={p} />
            ))}
          </div>
          <p className="pl-nota">
            * Preços válidos para novos clientes. Reajuste anual pelo IGP-DI
            (FGV). Sujeito à viabilidade técnica da sua região.
          </p>
        </div>
      </section>

      {/* 3 — BANNERS NEXT (sem link) */}
      <section className="pl-banners-watch">
        <div className="container">
          <div className="pl-banners-grid">
            <div className="pl-banner-item reveal">
              <img src="/images/paramount-logo-black.png" alt="Paramount+" />
            </div>
            <div className="pl-banner-item reveal">
              <img src="/images/watch-logo-black.png" alt="WatchBr" />
            </div>
          </div>
        </div>
      </section>

      {/* 4 — CARROSSEL DE CANAIS */}
      <section className="section section--alt pl-section-canais">
        <div className="container">
          <div className="pl-section-header reveal">
            <h2>Canais inclusos nos planos Ultra e Max</h2>
            <p>
              Acesso completo ao Watch BR e Paramount+ com fibra de 600MB ou
              800MB.
            </p>
          </div>
        </div>
        {/* O carrossel fica fora do container para ocupar 100% da largura */}
        <div className="reveal">
          <ChannelCarousel />
        </div>
      </section>
    </div>
  )
}
