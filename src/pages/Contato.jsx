// src/pages/Contato.jsx
import { useState, useEffect } from 'react'
import { Spinner } from '../components/ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { BRAND } from '../data'
import '../styles/pages/contato.css'

/* ─── Banners ───────────────────────────────────────────────────── */
const BANNERS = [
  '/images/banner-velocidade.png',
  '/images/banner-experiencia.png',
  '/images/banner-watch.png',
]

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
    <div className="ct-slider">
      {BANNERS.map((src, i) => (
        <div
          key={i}
          className={`ct-slider__slide ${i === active ? 'ct-slider__slide--on' : ''}`}
        >
          <img src={src} alt={`Banner ${i + 1}`} />
        </div>
      ))}
      <div className="ct-slider__dots">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`ct-slider__dot ${i === active ? 'ct-slider__dot--on' : ''}`}
          />
        ))}
      </div>
      <button
        className="ct-slider__btn ct-slider__btn--l"
        onClick={() =>
          setActive((a) => (a - 1 + BANNERS.length) % BANNERS.length)
        }
      >
        ‹
      </button>
      <button
        className="ct-slider__btn ct-slider__btn--r"
        onClick={() => setActive((a) => (a + 1) % BANNERS.length)}
      >
        ›
      </button>
    </div>
  )
}

/* ─── SVGs dos ícones (inline, sem dependência) ─────────────────── */
const IcPin = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const IcClock = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const IcPhone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
  </svg>
)

/* ─── Canais de contato ─────────────────────────────────────────── */
const CANAIS = [
  {
    key: 'whatsapp',
    img: '/images/icon-whatsapp.png',
    tipo: 'WhatsApp',
    valor: '(21) 99658-4222',
    sub: 'Atendimento todos os dias',
    href: BRAND.wa,
    btn: 'Iniciar conversa',
    accent: '#25D366',
  },
  {
    key: 'telefone',
    icon: <IcPhone />,
    tipo: 'Telefone',
    valor: '(21) 2636-1252',
    sub: 'Também: (21) 2635-9113',
    href: 'tel:+552126361252',
    btn: 'Ligar agora',
    accent: '#A50E22',
  },
  {
    key: 'instagram',
    // Logo Instagram em SVG inline — sem dependência externa
    svgLogo: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
          fill="url(#ig-grad)"
        />
        <circle
          cx="12"
          cy="12"
          r="4.5"
          stroke="#fff"
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
      </svg>
    ),
    tipo: 'Instagram',
    valor: '@next_provedor',
    sub: 'Promoções e novidades',
    href: BRAND.ig,
    btn: 'Ver perfil',
    accent: '#E1306C',
  },
  {
    key: 'facebook',
    svgLogo: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#1877F2" />
        <path
          d="M13.5 21v-7h2.2l.3-2.5H13.5v-1.5c0-.7.2-1.2 1.2-1.2h1.3V6.1c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.8H8.7V13.5H11v7h2.5z"
          fill="#fff"
        />
      </svg>
    ),
    tipo: 'Facebook',
    valor: '/nextprovedor',
    sub: 'Comunidade de clientes',
    href: BRAND.fb,
    btn: 'Visitar página',
    accent: '#1877F2',
  },
]

/* ─── Horários (das imagens) ────────────────────────────────────── */
const HORARIOS = [
  {
    setor: 'Suporte Técnico',
    linhas: [
      { dia: 'Segunda a Sexta', hora: '08h – 21:30h' },
      { dia: 'Sábado', hora: '08h – 20h' },
      { dia: 'Domingo e Feriado', hora: '08h – 17h' },
    ],
  },
  {
    setor: 'Administrativo',
    linhas: [
      { dia: 'Segunda a Sexta', hora: '08h – 18h' },
      { dia: 'Sábado', hora: '08h – 17h' },
    ],
  },
  {
    setor: 'Financeiro',
    linhas: [
      { dia: 'Segunda a Sexta', hora: '08h – 18h' },
      { dia: 'Sábado', hora: '08h – 17h' },
    ],
  },
]

/* ─── Página ─────────────────────────────────────────────────────── */
export default function Contato() {
  useScrollReveal()

  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  })
  const [status, setStatus] = useState(null)
  const [touched, setTouched] = useState({})

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'err')
      if (res.ok)
        setForm({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: '',
        })
    } catch {
      setStatus('err')
    }
  }

  return (
    <div className="ct-page">
      {/* 1 — BANNERS */}
      <section className="ct-hero-slider">
        <BannerSlider />
      </section>

      {/* 2 — CANAIS DE CONTATO */}
      <section className="section ct-section-canais">
        <div className="container">
          <div className="ct-section-label reveal">Fale conosco</div>
          <div className="ct-canais-grid">
            {CANAIS.map((c, i) => (
              <a
                key={c.key}
                href={c.href}
                target={c.href.startsWith('tel') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`ct-canal reveal delay-${i + 1}`}
                style={{ '--accent': c.accent }}
              >
                {/* Ícone */}
                <div className="ct-canal__icon">
                  {c.img ? (
                    <img src={c.img} alt={c.tipo} />
                  ) : (
                    c.svgLogo || (
                      <span style={{ color: c.accent }}>{c.icon}</span>
                    )
                  )}
                </div>

                {/* Texto */}
                <div className="ct-canal__body">
                  <div className="ct-canal__tipo">{c.tipo}</div>
                  <div className="ct-canal__valor">{c.valor}</div>
                  <div className="ct-canal__sub">{c.sub}</div>
                </div>

                {/* Seta */}
                <div className="ct-canal__arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — ENDEREÇO + HORÁRIOS */}
      <section className="section section--alt ct-section-info">
        <div className="container">
          <div className="ct-info-grid">
            {/* Endereço */}
            <div className="ct-info-card reveal-left">
              <div className="ct-info-card__title">
                <IcPin /> Onde estamos
              </div>
              <div className="ct-addr-list">
                {[
                  {
                    l: 'Endereço',
                    v: 'Rua Gilmar dos Santos Duarte, nº 350 – Lj 209 Q 14 Lt 3A',
                  },
                  { l: 'Local', v: 'Shopping Center Inoã' },
                  { l: 'Cidade', v: 'Inoã · Maricá – RJ' },
                  { l: 'CEP', v: BRAND.cep },
                ].map((d) => (
                  <div key={d.l} className="ct-addr-row">
                    <span className="ct-addr-row__label">{d.l}</span>
                    <span className="ct-addr-row__val">{d.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horários */}
            <div className="ct-info-card reveal-right">
              <div className="ct-info-card__title">
                <IcClock /> Horário de Atendimento
              </div>
              <div className="ct-horarios">
                {HORARIOS.map((s) => (
                  <div key={s.setor} className="ct-horario-setor">
                    <div className="ct-horario-setor__nome">{s.setor}</div>
                    {s.linhas.map((r) => (
                      <div key={r.dia} className="ct-horario-row">
                        <span className="ct-horario-row__dia">{r.dia}</span>
                        <span className="ct-horario-row__hora">{r.hora}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — MAPA + FORMULÁRIO */}
      <section className="section ct-section-main">
        <div className="container">
          <div className="ct-main-grid">
            {/* Mapa */}
            <div className="ct-map-wrap reveal-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.9506212108627!2d-42.93501132468943!3d-22.915192079249167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x998d703b82f987%3A0x835f0570aae696ae!2sNext%20Provedor%20de%20Acesso%20a%20Internet!5e0!3m2!1spt-BR!2sbr!4v1772584816840!5m2!1spt-BR!2sbr"
                title="Localização Next Provedor"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Formulário */}
            <div className="ct-form-card reveal-right">
              <div className="ct-form-card__header">
                <h2 className="ct-form-card__title">Envie uma mensagem</h2>
                <p className="ct-form-card__sub">
                  Respondemos em até 24h úteis. Prefere rapidez? Use o WhatsApp.
                </p>
              </div>

              {status === 'ok' && (
                <div className="ct-alert ct-alert--ok">
                  Mensagem enviada! Entraremos em contato em breve.
                </div>
              )}
              {status === 'err' && (
                <div className="ct-alert ct-alert--err">
                  Falha ao enviar. Tente via{' '}
                  <a href={BRAND.wa} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                  .
                </div>
              )}

              <form onSubmit={handleSubmit} className="ct-form" noValidate>
                <div className="ct-form__row">
                  <div className="form-group">
                    <label className="form-label">Nome completo *</label>
                    <input
                      required
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-input ${touched.nome && !form.nome ? 'form-input--err' : ''}`}
                      placeholder="Seu nome"
                    />
                    {touched.nome && !form.nome && (
                      <span className="ct-field-err">Campo obrigatório</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Telefone / WhatsApp *</label>
                    <input
                      required
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-input ${touched.telefone && !form.telefone ? 'form-input--err' : ''}`}
                      placeholder="(21) 00000-0000"
                    />
                    {touched.telefone && !form.telefone && (
                      <span className="ct-field-err">Campo obrigatório</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    E-mail <span className="ct-optional">(opcional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Assunto *</label>
                  <select
                    required
                    name="assunto"
                    value={form.assunto}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-select ${touched.assunto && !form.assunto ? 'form-input--err' : ''}`}
                  >
                    <option value="">Selecione o assunto...</option>
                    <option>Quero contratar um plano</option>
                    <option>Dúvida sobre meu plano atual</option>
                    <option>Problema técnico / sem internet</option>
                    <option>2ª via de fatura</option>
                    <option>Aluguel de câmeras de segurança</option>
                    <option>Cancelamento</option>
                    <option>Outros</option>
                  </select>
                  {touched.assunto && !form.assunto && (
                    <span className="ct-field-err">Selecione um assunto</span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Mensagem *
                    <span className="ct-char-count">
                      {form.mensagem.length}/500
                    </span>
                  </label>
                  <textarea
                    required
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={500}
                    className={`form-textarea ${touched.mensagem && !form.mensagem ? 'form-input--err' : ''}`}
                    placeholder="Descreva como podemos te ajudar..."
                  />
                  {touched.mensagem && !form.mensagem && (
                    <span className="ct-field-err">Campo obrigatório</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--full ct-submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <Spinner /> Enviando...
                    </>
                  ) : (
                    'Enviar mensagem'
                  )}
                </button>

                <p className="ct-form__lgpd">
                  Seus dados são protegidos conforme a LGPD (Lei 13.709/2018).
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
