// src/pages/Contato.jsx
import { useState } from 'react'
import { Spinner } from '../components/ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { BRAND } from '../data'
import '../styles/pages/contato.css'

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const CANAIS = [
  {
    img: '/images/icon-whatsapp.png',
    tipo: 'WhatsApp',
    valor: '(21) 99658-4222',
    sub: 'Resposta rápida · todos os dias',
    href: BRAND.wa,
    btn: 'Abrir conversa',
    cor: '#25D366', corBg: 'rgba(37,211,102,0.08)', corBorder: 'rgba(37,211,102,0.3)',
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/>
      </svg>
    ),
    tipo: 'Telefone',
    valor: '(21) 2636-1252',
    sub: 'Também: (21) 2635-9113',
    href: 'tel:+552126361252',
    btn: 'Ligar agora',
    cor: '#A50E22', corBg: 'rgba(165,14,34,0.07)', corBorder: 'rgba(165,14,34,0.28)',
  },
  {
    img: '/images/icon-instagram.png',
    tipo: 'Instagram',
    valor: '@nextprovedor',
    sub: 'Promoções e novidades',
    href: BRAND.ig,
    btn: 'Seguir',
    cor: '#E1306C', corBg: 'rgba(225,48,108,0.07)', corBorder: 'rgba(225,48,108,0.28)',
  },
  {
    img: '/images/icon-facebook.png',
    tipo: 'Facebook',
    valor: '/nextprovedor',
    sub: 'Comunidade de clientes',
    href: BRAND.fb,
    btn: 'Curtir página',
    cor: '#1877F2', corBg: 'rgba(24,119,242,0.07)', corBorder: 'rgba(24,119,242,0.28)',
  },
]

export default function Contato() {
  useScrollReveal()

  const [form, setForm]     = useState({ nome:'', email:'', telefone:'', assunto:'', mensagem:'' })
  const [status, setStatus] = useState(null)
  const [touched, setTouched] = useState({})

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleBlur   = e => setTouched(t => ({ ...t, [e.target.name]: true }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'err')
      if (res.ok) setForm({ nome:'', email:'', telefone:'', assunto:'', mensagem:'' })
    } catch { setStatus('err') }
  }

  return (
    <div className="ct-page-wrapper">

      {/* ── HERO BANNER ── */}
      <section className="ct-hero">
        <div className="ct-hero__photo" />
        <div className="ct-hero__overlay" />
        <div className="ct-hero__grid" />
        <div className="container ct-hero__content">
          <h1 className="ct-hero__title">Entre em<br /><span>Contato</span></h1>
          <p className="ct-hero__sub">
            Escolha o canal que preferir.<br />Nossa equipe está pronta para te atender.
          </p>
        </div>
      </section>

      {/* ── CANAIS ── */}
      <section className="section ct-section-canais">
        <div className="container">
          <div className="ct-canais-grid">
            {CANAIS.map((c, i) => (
              <a key={c.tipo} href={c.href}
                target={c.href.startsWith('tel') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`ct-canal-card reveal delay-${i + 1}`}
                style={{ '--cor': c.cor, '--cor-bg': c.corBg, '--cor-bd': c.corBorder }}>
                <div className="ct-canal-card__icon-wrap">
                  {c.img
                    ? <img src={c.img} alt={c.tipo} className="ct-canal-icon-img" />
                    : <span style={{ color: c.cor }}>{c.svg}</span>}
                </div>
                <div className="ct-canal-card__body">
                  <div className="ct-canal-card__tipo">{c.tipo}</div>
                  <div className="ct-canal-card__val">{c.valor}</div>
                  <div className="ct-canal-card__sub">{c.sub}</div>
                </div>
                <div className="ct-canal-card__btn">{c.btn} →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENDEREÇO + HORÁRIO (lado a lado) ── */}
      <section className="section section--alt ct-section-info">
        <div className="container">
          <div className="ct-info-grid">

            {/* Endereço */}
            <div className="ct-address-card reveal-left">
              <div className="ct-card-title"><IconPin /> Onde estamos</div>
              <div className="ct-address-lines">
                {[
                  { l:'Endereço', v:'Rua Gilmar dos Santos Duarte, nº 350 – Lj 209 Q 14 Lt 3A' },
                  { l:'Local',    v:'Shopping Center Inoã' },
                  { l:'Cidade',   v:'Inoã · Maricá – RJ' },
                  { l:'CEP',      v: BRAND.cep },
                ].map(d => (
                  <div key={d.l} className="ct-address-line">
                    <span className="ct-address-line__label">{d.l}</span>
                    <span className="ct-address-line__val">{d.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horário */}
            <div className="ct-horario-card reveal-right">
              <div className="ct-card-title"><IconClock /> Horário de Atendimento</div>
              <div className="ct-horario-grid">
                {[
                  { d:'Segunda – Sexta', h:'08h às 18h' },
                  { d:'Sábado',          h:'08h às 12h' },
                  { d:'Suporte Online',  h:'24h · todos os dias' },
                ].map(r => (
                  <div key={r.d} className="ct-horario-row">
                    <span className="ct-horario-row__dia">{r.d}</span>
                    <span className="ct-horario-row__hora">{r.h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAPA (esquerda) + FORMULÁRIO (direita) ── */}
      <section className="section ct-section-main">
        <div className="container">
          <div className="ct-main-grid">

            {/* Mapa */}
            <div className="ct-map-wrap reveal-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.9506212108627!2d-42.93501132468943!3d-22.915192079249167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x998d703b82f987%3A0x835f0570aae696ae!2sNext%20Provedor%20de%20Acesso%20a%20Internet!5e0!3m2!1spt-BR!2sbr!4v1772584816840!5m2!1spt-BR!2sbr"
                title="Localização Next Provedor"
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Formulário */}
            <div className="ct-form-card reveal-right">
              <div className="ct-form-card__header">
                <h2 className="ct-form-card__title">Envie uma mensagem</h2>
                <p className="ct-form-card__sub">Respondemos em até 24h úteis. Prefere rapidez? Use o WhatsApp.</p>
              </div>

              {status === 'ok' && (
                <div className="ct-alert ct-alert--ok">✅ Mensagem enviada! Entraremos em contato em breve.</div>
              )}
              {status === 'err' && (
                <div className="ct-alert ct-alert--err">
                  ❌ Falha ao enviar. Tente via <a href={BRAND.wa} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
                </div>
              )}

              <form onSubmit={handleSubmit} className="ct-form" noValidate>
                <div className="ct-form__row">
                  <div className="form-group">
                    <label className="form-label">Nome completo *</label>
                    <input required name="nome" value={form.nome}
                      onChange={handleChange} onBlur={handleBlur}
                      className={`form-input ${touched.nome && !form.nome ? 'form-input--err' : ''}`}
                      placeholder="Seu nome" />
                    {touched.nome && !form.nome && <span className="ct-field-err">Campo obrigatório</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Telefone / WhatsApp *</label>
                    <input required name="telefone" value={form.telefone}
                      onChange={handleChange} onBlur={handleBlur}
                      className={`form-input ${touched.telefone && !form.telefone ? 'form-input--err' : ''}`}
                      placeholder="(21) 00000-0000" />
                    {touched.telefone && !form.telefone && <span className="ct-field-err">Campo obrigatório</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">E-mail <span className="ct-optional">(opcional)</span></label>
                  <input type="email" name="email" value={form.email}
                    onChange={handleChange} className="form-input"
                    placeholder="seuemail@exemplo.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Assunto *</label>
                  <select required name="assunto" value={form.assunto}
                    onChange={handleChange} onBlur={handleBlur}
                    className={`form-select ${touched.assunto && !form.assunto ? 'form-input--err' : ''}`}>
                    <option value="">Selecione o assunto...</option>
                    <option>Quero contratar um plano</option>
                    <option>Dúvida sobre meu plano atual</option>
                    <option>Problema técnico / sem internet</option>
                    <option>2ª via de fatura</option>
                    <option>Aluguel de câmeras de segurança</option>
                    <option>Cancelamento</option>
                    <option>Outros</option>
                  </select>
                  {touched.assunto && !form.assunto && <span className="ct-field-err">Selecione um assunto</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Mensagem *
                    <span className="ct-char-count">{form.mensagem.length}/500</span>
                  </label>
                  <textarea required name="mensagem" value={form.mensagem}
                    onChange={handleChange} onBlur={handleBlur} maxLength={500}
                    className={`form-textarea ${touched.mensagem && !form.mensagem ? 'form-input--err' : ''}`}
                    placeholder="Descreva como podemos te ajudar..." />
                  {touched.mensagem && !form.mensagem && <span className="ct-field-err">Campo obrigatório</span>}
                </div>

                <button type="submit" className="btn btn--primary btn--full ct-submit-btn"
                  disabled={status === 'sending'}>
                  {status === 'sending' ? <><Spinner /> Enviando...</> : '✉️ Enviar mensagem'}
                </button>

                <p className="ct-form__lgpd">
                  🔒 Seus dados são protegidos conforme a LGPD (Lei 13.709/2018).
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
