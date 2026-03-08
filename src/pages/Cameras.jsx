// src/pages/Cameras.jsx
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { BRAND } from '../data'
import '../styles/pages/cameras.css'

/* ─── SVG Icons inline ───────────────────────────────────────────── */
const IcCamera = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
  >
    <path d="M23 7l-7 5 7 5V7z" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
)
const IcCloud = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
  >
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
  </svg>
)
const IcWrench = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
  >
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
)
const IcPhone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)
const IcShield = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const IcPackage = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
  >
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
)

const FEATURES = [
  {
    Icon: IcCamera,
    t: 'Imagem Full HD',
    d: 'Câmeras com resolução Full HD para máxima nitidez em ambientes internos e externos.',
  },
  {
    Icon: IcCloud,
    t: 'Armazenamento em Cloud',
    d: 'Gravações salvas na nuvem com acesso remoto. Sem risco de perda por furto do DVR.',
  },
  {
    Icon: IcWrench,
    t: 'Suporte',
    d: 'Equipe especializada para instalação, configuração e manutenção do sistema.',
  },
  {
    Icon: IcPhone,
    t: 'Aplicativo Próprio',
    d: 'Monitore em tempo real pelo celular. Visualize câmeras de qualquer lugar do mundo.',
  },
  {
    Icon: IcPackage,
    t: 'Comodato',
    d: 'Equipamento em regime de comodato. Você usa sem precisar comprar — paga só o plano.',
  },
  {
    Icon: IcShield,
    t: 'Câmeras Alarme/IP',
    d: 'Sistemas integrados de câmera e alarme para proteção completa da sua propriedade.',
  },
]

/* ─── Card de plano (igual ao estilo de Planos.jsx) ─────────────── */
const PLANOS_CAM = [
  {
    nome: 'Básico',
    cameras: '2',
    preco: 29.9,
    itens: [
      '2 câmeras Full HD',
      'Armazenamento 7 dias em cloud',
      'Aplicativo mobile',
      'Instalação inclusa',
      'Suporte remoto',
    ],
    pop: false,
  },
  {
    nome: 'Residencial',
    cameras: '4',
    preco: 49.9,
    itens: [
      '4 câmeras Full HD',
      'Armazenamento 15 dias em cloud',
      'Aplicativo mobile',
      'Instalação inclusa',
      'Suporte presencial',
      'Alarme integrado',
    ],
    pop: true,
  },
  {
    nome: 'Comercial',
    cameras: '8',
    preco: 89.9,
    itens: [
      '8 câmeras Full HD',
      'Armazenamento 30 dias em cloud',
      'Aplicativo mobile',
      'Instalação inclusa',
      'Suporte VIP 24h',
      'Alarme integrado',
      'Relatório mensal',
    ],
    pop: false,
  },
]

function CamPlanCard({ p }) {
  return (
    <div className={`cmp-card ${p.pop ? 'cmp-card--pop' : ''}`}>
      {p.pop && <div className="cmp-card__badge">MAIS ESCOLHIDO</div>}

      <div className="cmp-card__head">
        <div className="cmp-card__nome">{p.nome}</div>
        <div className="cmp-card__cameras">
          {p.cameras}
          <span>câmeras</span>
        </div>
        <div className="cmp-card__price-wrap">
          <div className="cmp-card__price">
            <sup>R$</sup>
            {p.preco.toFixed(2).replace('.', ',')}
          </div>
          <div className="cmp-card__price-sub">/mês · comodato</div>
        </div>
      </div>

      <div className="cmp-card__expand">
        <ul className="cmp-card__items">
          {p.itens.map((it) => (
            <li key={it}>
              <span>✓</span>
              {it}
            </li>
          ))}
        </ul>
        <a
          href={BRAND.wa}
          target="_blank"
          rel="noopener noreferrer"
          className="cmp-card__btn"
        >
          Solicitar plano →
        </a>
      </div>
    </div>
  )
}

/* ─── Página ─────────────────────────────────────────────────────── */
export default function Cameras() {
  useScrollReveal()

  return (
    <div className="cam-page">
      {/* 1 — HERO COM IMAGEM */}
      <section className="cam-hero">
        <div
          className="cam-hero__bg"
          style={{
            backgroundImage:
              "url('/images/dl.beatsnoop.com-3000-ZTNmcdA7hP-scaled-1.jpg')",
          }}
        />
        <div className="cam-hero__overlay" />
        <div className="container cam-hero__content">
          <div className="reveal">
            <h1 className="cam-hero__title">
              ALUGUEL DE
              <br />
              <span>CÂMERAS</span>
            </h1>
            <p className="cam-hero__sub">
              Instalações de câmera alarme/IP em regime de{' '}
              <strong>comodato</strong> com armazenamento em cloud. Proteja sua
              casa ou empresa com tecnologia de ponta.
            </p>
          </div>
        </div>
      </section>

      {/* 2 — IMAGEM + DIFERENCIAIS */}
      <section className="cam-section cam-section--white">
        <div className="container">
          <div className="cam-split">
            <div className="cam-split__img reveal-left">
              <img
                src="/images/cameras-seguranca.jpg"
                alt="Câmeras de segurança Next"
              />
            </div>

            <div className="cam-split__text reveal-right">
              <div className="cam-label">Segurança inteligente</div>
              <h2 className="cam-title">Quanto vale a sua segurança?</h2>
              <p className="cam-sub">
                Com o serviço de câmeras da Next Provedor, você monitora tudo em
                tempo real pelo celular. Câmeras de alta qualidade em regime de
                comodato — você não compra o equipamento, só paga o plano
                mensal.
              </p>
              <ul className="cam-checklist">
                {[
                  'Imagem Full HD cristalina',
                  'Armazenamento seguro na nuvem',
                  'Acesso via aplicativo 24h',
                  'Equipamento em comodato',
                  'Instalação pela equipe Next',
                  'Alarme integrado disponível',
                ].map((it) => (
                  <li key={it}>
                    <span>✓</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — FEATURES */}
      <section className="cam-section cam-section--alt">
        <div className="container">
          <div className="cam-section-header reveal">
            <h2>Tudo incluso no seu plano</h2>
            <p>
              Sistema completo de vigilância com tecnologia de ponta e suporte
              especializado.
            </p>
          </div>
          <div className="cam-features-grid">
            {FEATURES.map((f, i) => (
              <div key={f.t} className={`cam-feat reveal delay-${(i % 3) + 1}`}>
                <div className="cam-feat__icon">
                  <f.Icon />
                </div>
                <div className="cam-feat__title">{f.t}</div>
                <div className="cam-feat__desc">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — PLANOS (estilo Planos.jsx) */}
      <section className="cam-section cam-section--white">
        <div className="container">
          <div className="cam-section-header reveal">
            <h2>Escolha o plano ideal</h2>
            <p>
              Todos em comodato — você não compra, só paga a mensalidade.
              Instalação gratuita.
            </p>
          </div>
          <div className="cam-plans-grid">
            {PLANOS_CAM.map((p) => (
              <CamPlanCard key={p.nome} p={p} />
            ))}
          </div>
          <p className="cam-nota reveal">
            * Planos em regime de comodato. Equipamentos permanecem propriedade
            da Next Provedor.
            <br />
            Preços sujeitos a alteração. Consulte disponibilidade na sua região.
          </p>
        </div>
      </section>

      {/* 5 — COMBO INTERNET + CÂMERAS */}
      <section className="cam-section cam-section--alt">
        <div className="container">
          <div className="cam-combo reveal">
            <div className="cam-combo__text">
              <div className="cam-label">Oferta especial</div>
              <h3 className="cam-combo__title">
                Internet + Câmeras:
                <br />
                proteção completa
              </h3>
              <p className="cam-combo__sub">
                Contrate um plano de internet e adicione câmeras de segurança.
                Condições especiais para clientes Next Provedor.
              </p>
              <div className="cam-combo__btns">
                <a
                  href={BRAND.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cam-btn cam-btn--red"
                >
                  Consultar oferta →
                </a>
                <Link to="/planos" className="cam-btn cam-btn--outline">
                  Ver planos de internet
                </Link>
              </div>
            </div>
            <div className="cam-combo__img">
              <img
                src="/images/cameras-seguranca.jpg"
                alt="Câmeras de segurança"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
