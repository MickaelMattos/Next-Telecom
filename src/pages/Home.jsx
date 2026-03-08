// src/pages/Home.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeader, Btn, MarqueeRow } from '../components/ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PLANOS, CANAIS, BRAND } from '../data'
import '../styles/pages/home.css'

const DIFFS = [
  {
    icon: '🔥',
    title: 'Fibra Óptica Pura',
    desc: 'Cabo de fibra do data center direto à sua casa. Sem coaxial, sem perda.',
  },
  {
    icon: '⚡',
    title: 'Velocidade Real',
    desc: 'Entregamos exatamente o que você contratou — simétrico e estável.',
  },
  {
    icon: '🔧',
    title: 'Suporte 24h',
    desc: 'Técnicos especializados disponíveis a qualquer hora do dia ou da noite.',
  },
  {
    icon: '📍',
    title: 'Empresa Local',
    desc: 'Somos de Maricá/RJ. Equipe rápida, presente e que você conhece.',
  },
  {
    icon: '💳',
    title: 'Sem Fidelidade',
    desc: 'Planos mensais sem multa de cancelamento após os primeiros 12 meses.',
  },
  {
    icon: '🎬',
    title: 'Streaming Incluso',
    desc: 'Paramount+ e Watch nos planos Ultra (600MB) e Max (800MB).',
  },
]

const SLIDES = [
  { img: '/images/banner-velocidade.png', href: BRAND.wa },
  { img: '/images/banner-wifi6.jpg', href: BRAND.wa },
  { img: '/images/banner-watch.png', href: '/planos' },
  { img: '/images/banner-plano-600.jpg', href: BRAND.wa },
  { img: '/images/banner-experiencia.png', href: BRAND.wa },
  { img: '/images/cameras-banner.jpg', href: '/cameras' },
]

function BannerSlider() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])
  const prev = () => setActive((a) => (a - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setActive((a) => (a + 1) % SLIDES.length)
  return (
    <div className="slider">
      <div className="slider__track">
        {SLIDES.map((s, i) => (
          <a
            key={i}
            href={s.href}
            className={`slider__slide ${i === active ? 'slider__slide--active' : ''}`}
            target={s.href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
          >
            <img src={s.img} alt={`Banner ${i + 1}`} />
          </a>
        ))}
      </div>
      <button
        className="slider__btn slider__btn--l"
        onClick={prev}
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        className="slider__btn slider__btn--r"
        onClick={next}
        aria-label="Próximo"
      >
        ›
      </button>
      <div className="slider__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`slider__dot ${i === active ? 'slider__dot--on' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  useScrollReveal()

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero__inner">
          {/* Texto à esquerda */}
          <div className="hero__text">
            <span className="hero__tag">📡 Fibra Óptica · Maricá / RJ</span>
            <h1 className="hero__title">
              Internet de verdade
              <br />
              <span>para sua casa.</span>
            </h1>
            <p className="hero__sub">
              Fibra óptica pura, sem travamento e com suporte 24h. Planos a
              partir de <strong>R$ 59,90/mês</strong> com desconto pontual.
            </p>
            <div className="hero__actions">
              <Link to="/planos" className="btn btn--primary btn--lg">
                Ver planos →
              </Link>
              <a
                href={BRAND.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost btn--lg"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="hero__stats">
              {[
                { v: '800MB', l: 'Velocidade máxima' },
                { v: '24h', l: 'Suporte incluso' },
                { v: '5★', l: 'Atendimento' },
              ].map((s) => (
                <div key={s.l} className="hero__stat">
                  <strong>{s.v}</strong>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="hero__media">
            <div className="hero__img-wrap">
              <img
                src="/images/hero-familia.jpg"
                alt="Família conectada com a Next Provedor"
              />
              {/* Badge flutuante */}
              <div className="hero__badge-float">
                <span className="hero__badge-dot" />
                <span>Conexão ativa agora</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha separadora decorativa */}
        <div className="hero__divider" />
      </section>

      {/* ── BANNER SLIDER ── */}
      <section className="section--alt" style={{ padding: '2.5rem 0' }}>
        <div className="container">
          <BannerSlider />
        </div>
      </section>

      {/* ── PLANOS ── */}
      <section className="section home-plans">
        <div className="container">
          <div className="reveal">
            <SectionHeader
              badge="📡 NOSSOS PLANOS"
              title="Escolha o plano ideal para você"
              sub="Sem fidelidade. Desconto de R$10 pagando todo mês no vencimento."
            />
          </div>
          <div className="plans-grid">
            {PLANOS.map((p, i) => (
              <div
                key={p.id}
                className={`plan-card reveal delay-${i + 1} ${p.pop ? 'plan-card--pop' : ''}`}
              >
                {p.pop && <div className="plan-card__tag">MAIS POPULAR</div>}
                <div className="plan-card__vel">
                  {p.vel}
                  <span>MB</span>
                </div>
                <div className="plan-card__wifi">{p.wifi}</div>
                <div className="plan-card__sep" />
                <div className="plan-card__price">
                  <span className="plan-card__from">R$</span>
                  {p.desc.toFixed(2).replace('.', ',')}
                </div>
                <div className="plan-card__label">/mês com desconto</div>
                <div className="plan-card__original">
                  De R${p.preco.toFixed(2).replace('.', ',')}
                </div>
                {p.streaming.length > 0 && (
                  <div className="plan-card__streaming">
                    <img src="/images/watch-logo.png" alt="Watch" />
                    <img src="/images/paramount-logo.png" alt="Paramount+" />
                  </div>
                )}
                <a
                  href={BRAND.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn--sm ${p.pop ? 'btn--primary' : 'btn--outline'}`}
                  style={{ marginTop: 'auto', width: '100%' }}
                >
                  Assinar agora
                </a>
              </div>
            ))}
          </div>
          <div className="plans-footer reveal">
            <p>Instalação gratuita · Sem taxa de adesão · Wi-Fi incluso</p>
            <Link to="/planos" className="btn btn--ghost">
              Ver detalhes completos →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STREAMING ── */}
      <section className="section section--alt home-tv">
        <div className="container">
          <div className="reveal">
            <SectionHeader
              badge="📺 TV & STREAMING"
              title="Watch e Paramount+ inclusos"
              sub="Nos planos Ultra (600MB) e Max (800MB): acesso completo sem custo adicional."
            />
          </div>
          <div className="streaming-badges reveal">
            <div className="streaming-badge">
              <img src="/images/watch-logo.png" alt="Watch BR" />
            </div>
            <div className="streaming-badge">
              <img src="/images/paramount-logo.png" alt="Paramount+" />
            </div>
          </div>
        </div>
        <div className="marquee-block">
          <MarqueeRow
            items={[...CANAIS.abertos, ...CANAIS.paramount]}
            dir="left"
          />
          <MarqueeRow
            items={[...CANAIS.paramount, ...CANAIS.abertos]}
            dir="right"
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/watch" className="btn btn--primary">
            Ver canais disponíveis →
          </Link>
        </div>
      </section>

      {/* ── FAMÍLIA / SPLIT ── */}
      <section className="section home-split">
        <div className="container">
          <div className="split-inner">
            <div className="split__img reveal-left">
              <img src="/images/hero-familia.jpg" alt="Família conectada" />
            </div>
            <div className="split__text reveal-right">
              <span className="badge">🏠 PARA TODA A FAMÍLIA</span>
              <h2>Conectados do jeito que você merece</h2>
              <p>
                Assista, jogue, trabalhe e estude com a velocidade certa. Fibra
                óptica de verdade, sem travamento, sem desculpa.
              </p>
              <ul className="split__list">
                {[
                  'Velocidade simétrica — upload igual ao download',
                  'Wi-Fi 6 incluso nos planos Pro, Ultra e Max',
                  'Suporte técnico 24h todos os dias',
                  'Instalação gratuita para novos clientes',
                ].map((item) => (
                  <li key={item}>
                    <span className="split__check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="split__actions">
                <Link to="/planos" className="btn btn--primary">
                  Escolher meu plano →
                </Link>
                <a
                  href={BRAND.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="section section--alt home-diffs">
        <div className="container">
          <div className="reveal">
            <SectionHeader
              badge="✅ POR QUE NEXT"
              title="O que nos diferencia"
            />
          </div>
          <div className="diffs-grid">
            {DIFFS.map((d, i) => (
              <div
                key={d.title}
                className={`diff-card reveal delay-${(i % 3) + 1}`}
              >
                <div className="diff-card__icon">{d.icon}</div>
                <h3 className="diff-card__title">{d.title}</h3>
                <p className="diff-card__desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÂMERAS TEASER ── */}
      <section className="section home-cameras">
        <div className="container">
          <div className="cameras-card reveal">
            <div className="cameras-card__img">
              <img
                src="/images/cameras-banner.jpg"
                alt="Câmeras de segurança Next"
              />
            </div>
            <div className="cameras-card__body">
              <span className="badge">📷 NOVO SERVIÇO</span>
              <h2>Aluguel de Câmeras de Segurança</h2>
              <p>
                Câmera IP em regime de comodato com armazenamento em cloud.
                Proteja sua casa ou empresa com tecnologia de ponta.
              </p>
              <ul className="cameras-card__list">
                {[
                  'Imagem Full HD',
                  'Armazenamento em Cloud',
                  'App para monitorar',
                  'A partir de R$29,90/mês',
                ].map((i) => (
                  <li key={i}>
                    <span>✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <div className="cameras-card__actions">
                <Link to="/cameras" className="btn btn--primary">
                  Ver planos →
                </Link>
                <a
                  href={BRAND.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  Orçamento grátis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <div>
            <h2>Pronto para conectar de verdade?</h2>
            <p>
              Entre em contato e um consultor te ajuda a escolher o plano ideal.
            </p>
          </div>
          <div className="home-cta__actions">
            <a
              href={BRAND.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ background: '#fff', color: '#A50E22', fontWeight: 700 }}
            >
              💬 Falar no WhatsApp
            </a>
            <Link
              to="/planos"
              className="btn btn--outline"
              style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}
            >
              Ver planos →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
