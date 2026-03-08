// src/pages/Home.jsx
import { useEffect, useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { MarqueeRow } from '../components/ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PLANOS, CANAIS, BRAND } from '../data'
import '../styles/pages/home.css'

/* ══════════════════════════════════════════════
   DADOS LOCAIS
══════════════════════════════════════════════ */
const SLIDES = [
  { img: '/images/banner-velocidade.png', alt: 'Velocidade máxima com a Next' },
  {
    img: '/images/banner-experiencia.png',
    alt: 'Melhor experiência na internet',
  },
  { img: '/images/banner-watch.png', alt: 'Watch e Paramount+ na Next' },
]

const DIFFS = [
  {
    icon: <IcFiber />,
    t: 'Fibra Óptica Pura',
    d: 'Cabo de fibra do data center direto à sua casa. Sem coaxial, sem perda de sinal.',
  },
  {
    icon: <IcSpeed />,
    t: 'Velocidade Real',
    d: 'Entregamos a velocidade contratada — simétrica, estável e sem throttling.',
  },
  {
    icon: <IcSupport />,
    t: 'Suporte Humanizado',
    d: 'Técnicos especializados disponíveis a qualquer hora. Atendimento humano, não robô.',
  },
  {
    icon: <IcPin2 />,
    t: 'Equipe Local',
    d: 'Empresa de Maricá/RJ. Chamado técnico resolvido em até 48h conforme contrato.',
  },
  {
    icon: <IcCard />,
    t: 'Sem Multa',
    d: 'Planos mensais. Após 12 meses de fidelidade, cancelamento sem multa alguma.',
  },
  {
    icon: <IcPlay />,
    t: 'Streaming Incluso',
    d: 'Paramount+ e Watch Canais grátis nos planos Ultra e Max. Sem taxa extra.',
  },
]

/* Horários de atendimento (suporte técnico — mais amplo) */
const HORARIOS_SUPORTE = [
  { dia: 'Segunda a Sexta', open: '08:00', close: '18:00' },
  { dia: 'Sábado', open: '08:00', close: '17:00' },
]

/* ══════════════════════════════════════════════
   SVG ICONS — inline, zero dependência
══════════════════════════════════════════════ */
function IcFiber() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}
function IcSpeed() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}
function IcSupport() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}
function IcPin2() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IcCard() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  )
}
function IcPlay() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <polyline points="8 21 12 17 16 21" />
    </svg>
  )
}
function IcWA() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        d="M23.5 19.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
        fill="#fff"
      />
    </svg>
  )
}
function IcPhone2() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16v.92z" />
    </svg>
  )
}
function IcClock2() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function IcMapPin() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

/* ══════════════════════════════════════════════
   HOOK: contador animado
══════════════════════════════════════════════ */
function useCounter(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return val
}

/* ══════════════════════════════════════════════
   BANNER SLIDER
══════════════════════════════════════════════ */
function BannerSlider() {
  const [active, setActive] = useState(0)
  const len = SLIDES.length
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % len), 4800)
    return () => clearInterval(t)
  }, [len])
  return (
    <div className="hm-slider">
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hm-slider__slide ${i === active ? 'hm-slider__slide--on' : ''}`}
        >
          <img src={s.img} alt={s.alt} />
        </div>
      ))}
      <button
        className="hm-slider__btn hm-slider__btn--l"
        onClick={() => setActive((a) => (a - 1 + len) % len)}
      >
        ‹
      </button>
      <button
        className="hm-slider__btn hm-slider__btn--r"
        onClick={() => setActive((a) => (a + 1) % len)}
      >
        ›
      </button>
      <div className="hm-slider__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`hm-slider__dot ${i === active ? 'hm-slider__dot--on' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PLANO CARD (hover expand — igual Planos.jsx)
══════════════════════════════════════════════ */
function PlanCard({ p, delay }) {
  return (
    <div
      className={`hm-plan hm-plan--d${delay} ${p.pop ? 'hm-plan--pop' : ''}`}
    >
      {p.pop && <div className="hm-plan__badge">MAIS POPULAR</div>}

      <div className="hm-plan__head">
        <div className="hm-plan__nome">{p.nome}</div>
        <div className="hm-plan__vel">
          {p.vel}
          <span>MB</span>
        </div>
        <div className="hm-plan__wifi">{p.wifi}</div>
        <div className="hm-plan__prices">
          <span className="hm-plan__old">
            R${p.preco.toFixed(2).replace('.', ',')}
          </span>
          <span className="hm-plan__new">
            <sup>R$</sup>
            {p.desc.toFixed(2).replace('.', ',')}
            <sub>/mês</sub>
          </span>
        </div>
        <div className="hm-plan__disc-tag">com desconto pontual</div>
      </div>

      <div className="hm-plan__expand">
        <ul className="hm-plan__items">
          {p.itens.map((it) => (
            <li key={it}>
              <span>✓</span>
              {it}
            </li>
          ))}
        </ul>
        {p.streaming.length > 0 && (
          <img src="/images/icons-planos.png" alt="Streamings" />
        )}
        <a
          href={BRAND.wa}
          target="_blank"
          rel="noopener noreferrer"
          className="hm-plan__btn"
        >
          Quero esse plano →
        </a>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   INDICADOR DE HORÁRIO (verde/vermelho ao vivo)
══════════════════════════════════════════════ */
function useIsOpen() {
  const check = useCallback(() => {
    const now = new Date()
    const day = now.getDay() // 0=dom, 1=seg … 6=sab
    const h = now.getHours()
    const m = now.getMinutes()
    const mins = h * 60 + m

    // Horário Suporte Técnico
    if (day >= 1 && day <= 5) return mins >= 8 * 60 && mins < 17 * 60 + 30
    if (day === 6) return mins >= 8 * 60 && mins < 17 * 60
    return mins >= 0 * 60 && mins < 0 * 60 // dom/feriado
  }, [])

  const [open, setOpen] = useState(check)
  useEffect(() => {
    const t = setInterval(() => setOpen(check()), 30_000)
    return () => clearInterval(t)
  }, [check])
  return open
}

/* ══════════════════════════════════════════════
   STATS com contagem animada
══════════════════════════════════════════════ */
const STATS = [
  { target: 800, suffix: 'MB', label: 'Velocidade máxima' },
  { target: 99, suffix: '%', label: 'Disponibilidade' },
  { target: 24, suffix: 'h', label: 'Suporte incluso' },
  { target: 5, suffix: '★', label: 'Satisfação clientes' },
]

function StatItem({ stat, trigger }) {
  const val = useCounter(stat.target, 1600, trigger)
  return (
    <div className="hm-stat">
      <div className="hm-stat__val">
        {val}
        <span>{stat.suffix}</span>
      </div>
      <div className="hm-stat__label">{stat.label}</div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PÁGINA
══════════════════════════════════════════════ */
export default function Home() {
  useScrollReveal()
  const isOpen = useIsOpen()

  /* Dispara contadores quando stats entram na viewport */
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStatsVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="hm-page">
      {/* ══ 1 — HERO ══════════════════════════════════ */}
      <section className="hm-hero">
        {/* Fundo imagem */}
        <div
          className="hm-hero__bg"
          style={{ backgroundImage: "url('/images/hero-tv.jpg')" }}
        />
        {/* Overlay gradiente */}
        <div className="hm-hero__overlay" />
        {/* Partículas de grid */}
        <div className="hm-hero__grid" />
        {/* Glow de fundo */}
        <div className="hm-hero__glow" />

        <div className="container hm-hero__inner">
          <div className="hm-hero__text">
            {/* Eyebrow */}
            <div className="hm-hero__eyebrow">
              <span className="hm-hero__dot" />
              FIBRA ÓPTICA · MARICÁ / RJ
            </div>

            <h1 className="hm-hero__title">
              INTERNET
              <br />
              <span>SEM LIMITES</span>
            </h1>

            <p className="hm-hero__sub">
              Fibra óptica pura direto na sua casa.
              <br />
              Planos a partir de <strong>R$&nbsp;59,90/mês</strong> com
              desconto.
            </p>
          </div>

          {/* Velocidade visual — lado direito */}
          <div className="hm-hero__speed-card">
            <div className="hm-speed-ring">
              <div className="hm-speed-ring__inner">
                <div className="hm-speed-val">800</div>
                <div className="hm-speed-unit">MBPS</div>
              </div>
            </div>
            <div className="hm-speed-label">Velocidade máxima</div>
            <div className="hm-speed-sub">Super Wi-Fi 6 · Plano Max</div>
          </div>
        </div>
      </section>

      {/* ══ 2 — STATS CONTADORES ════════════════════ */}
      <section className="hm-stats-bar" ref={statsRef}>
        <div className="container hm-stats-inner">
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} trigger={statsVisible} />
          ))}
        </div>
      </section>

      {/* ══ 3 — BANNER SLIDER ══════════════════════ */}
      <section className="hm-slider-section">
        <BannerSlider />
      </section>

      {/* ══ 4 — PLANOS ══════════════════════════════ */}
      <section className="section hm-section-plans">
        <div className="container">
          <div className="hm-section-head reveal">
            <div className="hm-section-label">Nossos Planos</div>
            <h2>
              A velocidade certa <br className="br-mobile" />
              para você
            </h2>
            <p>
              Passe o mouse sobre o plano para ver todos os detalhes. <br />
              Desconto de <strong>R$10</strong> pagando no vencimento.
            </p>
          </div>

          {/* Psicologia: âncora de preço + tag de desconto */}
          <div className="hm-plans-grid">
            {PLANOS.map((p, i) => (
              <PlanCard key={p.id} p={p} delay={(i % 3) + 1} />
            ))}
          </div>

          <div className="hm-plans-cta reveal">
            <Link to="/planos" className="hm-cta hm-cta--outline">
              Ver comparativo completo →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 5 — STREAMING ════════════════════════════ */}
      <section className="section hm-section-streaming">
        <div className="container">
          <div className="hm-streaming-split">
            {/* Texto — lado esquerdo */}
            <div className="hm-streaming-text reveal-left">
              <div className="hm-section-label">TV & Streaming</div>
              <h2>
                Paramount+ e Watch
                <br />
                inclusos no plano
              </h2>
              <p>
                Nos planos <strong>Ultra (600MB)</strong> e{' '}
                <strong>Max (800MB)</strong>: acesso completo ao Hub Watch com
                canais abertos e pagos, mais o Paramount+ com séries e filmes
                exclusivos.
                <br />
                <br />
                <strong>Sem pagar nada a mais.</strong> Só contrate o plano.
              </p>
              <div className="hm-streaming-logos">
                <img src="/images/paramount-logo-black.png" alt="Paramount+" />
                <img src="/images/watch-logo-black.png" alt="WatchBr+" />
              </div>
            </div>

            {/* Canais — lado direito */}
            <div className="hm-streaming-channels reveal-right">
              <div className="hm-channels-label">Canais disponíveis</div>
              <div className="hm-marquee-wrap">
                <MarqueeRow
                  items={[...CANAIS.abertos, ...CANAIS.paramount]}
                  dir="left"
                  imgHeight={58}
                />
                <MarqueeRow
                  items={[...CANAIS.paramount, ...CANAIS.abertos]}
                  dir="right"
                  imgHeight={58}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6 — WHATSAPP + LOCALIZAÇÃO + HORÁRIO ═══ */}
      <section className="section hm-section-contact">
        <div className="container">
          <div className="hm-contact-grid">
            {/* WhatsApp CTA — psicologia: botão pulsando */}
            <div className="hm-wa-card reveal-left">
              <div className="hm-wa-card__icon">
                <IcWA />
              </div>
              <h3>Fale agora pelo WhatsApp</h3>
              <p>
                Tire dúvidas, contrate um plano ou solicite suporte. Nossa
                equipe responde rápido — todos os dias.
              </p>
              <a
                href={BRAND.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="hm-wa-btn"
              >
                Iniciar conversa →
              </a>
            </div>

            {/* Localização + Horários */}
            <div className="hm-info-col">
              {/* Status ao vivo */}
              <div
                className={`hm-status-badge ${isOpen ? 'hm-status-badge--open' : 'hm-status-badge--closed'}`}
              >
                <span className="hm-status-dot" />
                {isOpen
                  ? 'Atendimento aberto agora'
                  : 'Fora do horário de atendimento'}
              </div>

              {/* Horários */}
              <div className="hm-info-card reveal">
                <div className="hm-info-card__title">
                  <IcClock2 /> Horário de Atendimento
                </div>
                <div className="hm-horario-group">
                  <div className="hm-horario-label">Suporte Técnico</div>
                  {HORARIOS_SUPORTE.map((r) => {
                    // Calcula se esse slot está ativo agora
                    const now = new Date()
                    const day = now.getDay()
                    const mins = now.getHours() * 60 + now.getMinutes()
                    const [oh, om] = r.open.split(':').map(Number)
                    const [ch, cm] = r.close.split(':').map(Number)
                    const isThisSlot =
                      (r.dia === 'Segunda a Sexta' && day >= 1 && day <= 5) ||
                      (r.dia === 'Sábado' && day === 6) ||
                      (r.dia === 'Domingo e Feriado' && day === 0)
                    const active =
                      isThisSlot && mins >= oh * 60 + om && mins < ch * 60 + cm
                    return (
                      <div
                        key={r.dia}
                        className={`hm-horario-row ${active ? 'hm-horario-row--active' : ''}`}
                      >
                        <span>{r.dia}</span>
                        <span className="hm-horario-time">
                          {active && (
                            <span className="hm-time-dot hm-time-dot--green" />
                          )}
                          {r.open}h – {r.close}h
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Endereço */}
              <div className="hm-info-card hm-info-card--addr reveal">
                <div className="hm-info-card__title">
                  <IcMapPin /> Onde estamos
                </div>
                <div className="hm-addr">
                  <strong>Shopping Center Inoã</strong>
                  <br />
                  Rua Gilmar dos Santos Duarte, nº 350 – Lj 209
                  <br />
                  Inoã · Maricá – RJ · CEP 24.942-290
                </div>
                <a
                  href={`https://wa.me/5521996584222?text=Olá! Gostaria de saber mais sobre a cobertura na minha região.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hm-addr-link"
                >
                  Verificar cobertura na minha rua →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 7 — DIFERENCIAIS ════════════════════════ */}
      <section className="section hm-section-diffs">
        <div className="container">
          <div className="hm-section-head reveal">
            <div className="hm-section-label">Por que escolher a Next</div>
            <h2>O que nos diferencia</h2>
          </div>
          <div className="hm-diffs-grid">
            {DIFFS.map((d, i) => (
              <div key={d.t} className={`hm-diff reveal delay-${(i % 3) + 1}`}>
                <div className="hm-diff__icon">{d.icon}</div>
                <div className="hm-diff__title">{d.t}</div>
                <div className="hm-diff__desc">{d.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
