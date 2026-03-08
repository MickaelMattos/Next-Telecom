// src/pages/Cameras.jsx
import { Link } from 'react-router-dom'
import { SectionHeader, Btn } from '../components/ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { BRAND } from '../data'
import '../styles/pages/cameras.css'

const FEATURES = [
  { i: '🎥', t: 'Imagem Full HD',         d: 'Câmeras com resolução Full HD para máxima nitidez em ambientes internos e externos.' },
  { i: '☁️', t: 'Armazenamento em Cloud', d: 'Gravações salvas na nuvem com acesso remoto. Sem risco de perda por furto do DVR.' },
  { i: '🔧', t: 'Suporte Técnico',         d: 'Equipe especializada para instalação, configuração e manutenção do sistema.' },
  { i: '📱', t: 'Aplicativo Próprio',      d: 'Monitore em tempo real pelo celular. Visualize câmeras de qualquer lugar do mundo.' },
  { i: '🔌', t: 'Comodato',               d: 'Equipamento em regime de comodato. Você usa sem precisar comprar — paga só o plano.' },
  { i: '🚨', t: 'Câmeras Alarme/IP',      d: 'Sistemas integrados de câmera e alarme para proteção completa da sua propriedade.' },
]

const PLANOS_CAM = [
  {
    nome:  'Básico',
    cameras: 2,
    preco: 29.90,
    itens: ['2 câmeras Full HD', 'Armazenamento 7 dias em cloud', 'Aplicativo mobile', 'Instalação inclusa', 'Suporte remoto'],
    pop: false,
  },
  {
    nome:  'Residencial',
    cameras: 4,
    preco: 49.90,
    itens: ['4 câmeras Full HD', 'Armazenamento 15 dias em cloud', 'Aplicativo mobile', 'Instalação inclusa', 'Suporte presencial', 'Alarme integrado'],
    pop: true,
  },
  {
    nome:  'Comercial',
    cameras: 8,
    preco: 89.90,
    itens: ['8 câmeras Full HD', 'Armazenamento 30 dias em cloud', 'Aplicativo mobile', 'Instalação inclusa', 'Suporte VIP 24h', 'Alarme integrado', 'Relatório mensal'],
    pop: false,
  },
]

export default function Cameras() {
  useScrollReveal()

  return (
    <>
      {/* ── HERO ── */}
      <section className="cam-hero">
        <div className="cam-hero__bg"
          style={{ backgroundImage: "url('/images/cameras-seguranca.jpg')" }} />
        <div className="cam-hero__overlay" />
        <div className="container cam-hero__content">
          <div className="reveal">
            <div className="badge">📷 SEGURANÇA · MARICÁ / RJ</div>
            <h1 className="cam-hero__title">
              ALUGUEL DE<br />
              <span>CÂMERAS</span>
            </h1>
            <p className="cam-hero__sub">
              Instalações de câmera alarme/IP em regime de <strong>comodato</strong> com armazenamento em cloud.
              Proteja sua casa ou empresa com tecnologia de ponta.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Btn href={BRAND.wa} variant="primary" size="lg">
                💬 Solicitar orçamento grátis
              </Btn>
              <a href="tel:+552126361252" className="btn btn--outline btn--lg">
                📞 {BRAND.tel}
              </a>
            </div>
            <div className="cam-hero__price-tag">
              Planos <strong>a partir de R$ 29,90</strong>/mês
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER CÂMERAS ── */}
      <section className="cam-banner-section">
        <div className="container">
          <div className="cam-banner-grid">
            <div className="cam-banner-img reveal-left">
              <img src="/images/cameras-banner.jpg" alt="Aluguel de câmeras Next Provedor" />
            </div>
            <div className="cam-banner-text reveal-right">
              <SectionHeader
                badge="🏠 PROTEÇÃO TOTAL"
                title="Quanto vale a sua segurança?"
                sub="Com o serviço de câmeras da Next Provedor, você monitora tudo em tempo real pelo celular. Câmeras de alta qualidade em regime de comodato — você não compra o equipamento, só paga o plano mensal."
                align="left"
              />
              <div className="cam-check-list">
                {['Imagem Full HD cristalina', 'Armazenamento seguro na nuvem', 'Acesso via aplicativo 24h', 'Equipamento em comodato', 'Instalação pela equipe Next', 'Alarme integrado disponível'].map(it => (
                  <div key={it} className="cam-check-item">
                    <span className="cam-check-icon">✓</span>
                    <span>{it}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Btn href={BRAND.wa} variant="primary">Falar com especialista →</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="reveal">
            <SectionHeader
              badge="⚡ RECURSOS"
              title="Tudo incluso no seu plano"
              sub="Sistema completo de vigilância com tecnologia de ponta e suporte especializado."
            />
          </div>
          <div className="cam-features-grid" style={{ marginTop: '3rem' }}>
            {FEATURES.map((f, i) => (
              <div key={f.t} className={`cam-feature-card reveal delay-${(i % 3) + 1}`}>
                <div className="cam-feature-card__icon">{f.i}</div>
                <div className="cam-feature-card__title">{f.t}</div>
                <div className="cam-feature-card__desc">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANOS ── */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <SectionHeader
              badge="💳 PLANOS DE CÂMERAS"
              title="Escolha o plano ideal"
              sub="Todos em comodato: você não compra, só mensalidade. Instalação gratuita."
            />
          </div>
          <div className="cam-planos-grid" style={{ marginTop: '3rem' }}>
            {PLANOS_CAM.map((p, i) => (
              <div key={p.nome} className={`cam-plano-card reveal delay-${i + 1} ${p.pop ? 'cam-plano-card--pop' : ''}`}>
                {p.pop && <div className="cam-plano-card__badge">⭐ MAIS ESCOLHIDO</div>}

                <div className="cam-plano-card__icon">📷</div>
                <div className="cam-plano-card__nome">{p.nome.toUpperCase()}</div>
                <div className="cam-plano-card__cameras">{p.cameras} câmeras</div>

                <div className="cam-plano-card__price-box">
                  <div className="cam-plano-card__price">
                    <sup>R$</sup>{p.preco.toFixed(2).replace('.', ',')}
                  </div>
                  <div className="cam-plano-card__price-label">/mês · comodato</div>
                </div>

                <ul className="cam-plano-card__items">
                  {p.itens.map(it => (
                    <li key={it} className="cam-plano-card__item">
                      <span className="cam-plano-card__check">✓</span>{it}
                    </li>
                  ))}
                </ul>

                <Btn href={BRAND.wa} variant={p.pop ? 'primary' : 'outline'} full>
                  Solicitar esse plano →
                </Btn>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>
            * Planos em regime de comodato. Equipamentos permanecem propriedade da Next Provedor.<br />
            Preços sujeitos a alteração. Consulte disponibilidade na sua região.
          </p>
        </div>
      </section>

      {/* ── SEGURANÇA + CÂMERAS COMBO ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="cam-combo-card reveal">
            <div className="cam-combo-card__content">
              <div className="cam-combo-card__tag">🔥 OFERTA ESPECIAL</div>
              <h3 className="cam-combo-card__title">
                Internet + Câmeras:<br />proteção completa
              </h3>
              <p className="cam-combo-card__sub">
                Contrate um plano de internet e adicione câmeras de segurança.
                Condições especiais para clientes Next Provedor.
              </p>
              <div className="cam-combo-card__btns">
                <Btn href={BRAND.wa} variant="primary" size="lg">
                  💬 Consultar oferta combo
                </Btn>
                <Link to="/planos" className="btn btn--ghost">
                  Ver planos de internet →
                </Link>
              </div>
            </div>
            <div className="cam-combo-card__img">
              <img src="/images/cameras-seguranca.jpg" alt="Câmeras de segurança" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container" style={{ position: 'relative' }}>
          <h2>Proteja quem você ama<br />com a Next</h2>
          <p>Orçamento grátis e sem compromisso. Atendemos toda Maricá e região.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn href={BRAND.wa}
              style={{ background: '#fff', color: '#A50E22' }}>
              💬 Solicitar orçamento grátis
            </Btn>
            <a href={`tel:${BRAND.tel.replace(/\D/g,'')}`}
              className="btn btn--outline"
              style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}>
              📞 {BRAND.tel}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
