// src/pages/Planos.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeader, Btn, Divider } from '../components/ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PLANOS, CANAIS, BRAND } from '../data'
import '../styles/pages/planos.css'

export default function Planos() {
  useScrollReveal()
  return (
    <>
      <div className="planos-hero">
        <div className="container">
          <SectionHeader
            badge="📡 PLANOS DE INTERNET"
            title="Fibra óptica para cada necessidade"
            sub="Todos com instalação grátis, suporte 24h e desconto de R$10 pagando no vencimento."
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="planos__grid">
            {PLANOS.map((p, i) => <PlanCard key={p.id} p={p} delay={i + 1} />)}
          </div>
          <p className="planos__nota">
            * Instalação gratuita. Preços válidos para novos clientes. Consulte cobertura na sua região.<br />
            Reajuste anual pelo IGP-DI (FGV). Sujeito às condições do Contrato de Adesão.
          </p>
        </div>
      </section>

      {/* Streaming logos */}
      <section className="section section--alt canais-section">
        <div className="container">
          <Divider />
          <SectionHeader
            badge="📺 TV & STREAMING"
            title="Canais inclusos nos planos Ultra e Max"
            sub="Acesso ao Hub Watch com TV aberta e canais pagos, mais Paramount+ completo."
          />

          {/* Logos parceiros */}
          <div style={{display:'flex',gap:'1.5rem',justifyContent:'center',flexWrap:'wrap',margin:'2rem 0'}}>
            <div style={{background:'#000',borderRadius:12,padding:'1rem 2rem',display:'flex',alignItems:'center'}}>
              <img src="/images/paramount-logo.png" alt="Paramount+" style={{height:36,width:'auto'}} />
            </div>
            <div style={{background:'#000',borderRadius:12,padding:'1rem 2rem',display:'flex',alignItems:'center'}}>
              <img src="/images/watch-logo.png" alt="Watch BR" style={{height:36,width:'auto'}} />
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            {[
              { cat: 'Canais Abertos — Hub Watch', items: CANAIS.abertos   },
              { cat: 'Canais Pagos — Watch & Paramount+', items: CANAIS.paramount },
            ].map(row => (
              <div key={row.cat} className="canal-row reveal">
                <div className="canal-row__title">{row.cat}</div>
                <div className="canal-row__tags">
                  {row.items.map(c => (
                    <div key={c.n} className="canal-tag">
                      {c.img
                        ? <img src={c.img} alt={c.n} />
                        : <span>{c.e}</span>
                      }
                      <span className="canal-tag__name">{c.n}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function PlanCard({ p, delay }) {
  return (
    <div className={`plan-card reveal delay-${delay} ${p.pop ? 'plan-card--pop' : ''}`}>
      {p.pop && <div className="plan-card__pop-badge">⭐ MAIS POPULAR</div>}
      <div className="plan-card__top">
        <div>
          <div className="plan-card__nome">{p.nome}</div>
          <div className="plan-card__vel">{p.vel}</div>
          <div className="plan-card__mbps">MBPS</div>
        </div>
        <div className="plan-card__wifi-badge">
          <div className="plan-card__wifi-label">Super</div>
          <div className="plan-card__wifi-val">{p.wifi}</div>
        </div>
      </div>
      <div className="plan-card__price-box">
        <div className="plan-card__price-old">R$ {p.preco.toFixed(2).replace('.',',')} sem desconto</div>
        <div className="plan-card__price-new"><sup>R$</sup>{p.desc.toFixed(2).replace('.',',')}</div>
        <div className="plan-card__price-label">/mês com desconto pontual</div>
        <div className="plan-card__discount">💚 -R$10 pagando no vencimento</div>
      </div>
      <ul className="plan-card__items">
        {p.itens.map(it => (
          <li key={it} className="plan-card__item">
            <span className="plan-card__item-check">✓</span>{it}
          </li>
        ))}
      </ul>
      {p.streaming.length > 0 && (
        <div className="plan-card__streaming">
          <div className="plan-card__streaming-title">🎬 STREAMING INCLUSO</div>
          <div style={{display:'flex',gap:8,marginTop:6,flexWrap:'wrap'}}>
            <img src="/images/paramount-logo.png" alt="Paramount+" style={{height:20,filter:'invert(1)',opacity:0.9}} />
            <img src="/images/watch-logo.png" alt="Watch" style={{height:20,filter:'invert(1)',opacity:0.9}} />
          </div>
        </div>
      )}
      <Btn href={BRAND.wa} variant="primary" full>Assine Agora →</Btn>
    </div>
  )
}
