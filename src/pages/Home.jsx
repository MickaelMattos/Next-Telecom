// src/pages/Home.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeader, Btn, MarqueeRow } from '../components/ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PLANOS, CANAIS, BRAND } from '../data'
import '../styles/pages/home.css'

const DIFFS = [
  { i: '🔥', t: 'Fibra Óptica Pura',    d: 'Sem coaxial. Cabo de fibra do data center direto à sua casa.' },
  { i: '⚡', t: 'Velocidade Real',       d: 'Entregamos a velocidade contratada, simétrica e estável.' },
  { i: '🔧', t: 'Suporte 24h',           d: 'Técnicos especializados disponíveis a qualquer hora.' },
  { i: '📍', t: 'Atendimento Local',     d: 'Empresa de Maricá/RJ com equipe rápida e presente.' },
  { i: '💳', t: 'Sem Fidelidade',        d: 'Planos mensais sem multa de cancelamento após 12 meses.' },
  { i: '🎬', t: 'Streaming Incluso',     d: 'Paramount+ e Watch Canais nos planos Ultra e Max.' },
]

const SLIDES = [
  { img: '/images/banner-velocidade.png',  alt: 'Velocidade máxima com a Next'    },
  { img: '/images/banner-wifi6.jpg',       alt: 'Super Wifi 6 — 600 Mega'         },
  { img: '/images/banner-watch.png',       alt: 'Watch e Paramount+ na Next'      },
  { img: '/images/banner-plano-600.jpg',   alt: 'Plano 600MB — R$129,90'          },
  { img: '/images/banner-experiencia.png', alt: 'Melhor experiência na internet'  },
  { img: '/images/cameras-banner.jpg',     alt: 'Aluguel de Câmeras — Next'       },
]

function BannerSlider() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="banner-slider">
      {SLIDES.map((s, i) => (
        <div key={i} className={`banner-slide ${i === active ? 'banner-slide--active' : ''}`}>
          <img src={s.img} alt={s.alt} className="banner-slide__img" />
        </div>
      ))}
      <div className="banner-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`banner-dot ${i === active ? 'banner-dot--active' : ''}`} onClick={() => setActive(i)} />
        ))}
      </div>
      <button className="banner-arrow banner-arrow--left"  onClick={() => setActive(a => (a - 1 + SLIDES.length) % SLIDES.length)}>‹</button>
      <button className="banner-arrow banner-arrow--right" onClick={() => setActive(a => (a + 1) % SLIDES.length)}>›</button>
    </div>
  )
}

export default function Home() {
  useScrollReveal()
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__grid-bg" />
        <div className="hero__glow" />
        <div className="hero__line" />
        <div className="hero__bg-img" style={{ backgroundImage: "url('/images/hero-tv.jpg')" }} />
        <div className="hero__content">
          <div className="badge">⚡ FIBRA ÓPTICA · MARICÁ / RJ</div>
          <h1 className="hero__title">INTERNET<br /><span>SEM LIMITES</span></h1>
          <p className="hero__sub">
            Fibra óptica pura direto na sua casa ou empresa.<br />
            Planos a partir de <strong>R$ 59,90/mês</strong> com desconto pontual.
          </p>
          <div className="hero__ctas">
            <Link to="/planos" className="btn btn--primary btn--lg">Ver Todos os Planos →</Link>
            <Btn href={BRAND.wa} variant="outline" size="lg">💬 Falar no WhatsApp</Btn>
          </div>
          <div className="hero__stats">
            {[{v:'800MB',l:'Velocidade máxima'},{v:'99.9%',l:'Disponibilidade'},{v:'24h',l:'Suporte incluso'},{v:'5★',l:'Atendimento'}].map((s,i) => (
              <div key={s.l} className={`hero__stat delay-${i+1}`}>
                <div className="hero__stat-val">{s.v}</div>
                <div className="hero__stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER SLIDER */}
      <section className="section section--alt" style={{padding:'3rem 0'}}>
        <div className="container"><BannerSlider /></div>
      </section>

      {/* PLANOS RESUMO */}
      <section className="section home-plans">
        <div className="container">
          <div className="reveal">
            <SectionHeader badge="📡 NOSSOS PLANOS" title="A velocidade certa para você" sub="Sem fidelidade. Desconto de R$10 pagando no vencimento." />
          </div>
          <div className="home-plans__grid" style={{marginTop:'3rem'}}>
            {PLANOS.map((p,i) => (
              <div key={p.id} className={`home-plan-card reveal delay-${i+1} ${p.pop?'home-plan-card--pop':''}`}>
                {p.pop && <div className="home-plan__badge">⭐ MAIS POPULAR</div>}
                <div className="home-plan__vel">{p.vel}</div>
                <div className="home-plan__unit">MBPS · {p.wifi}</div>
                <div className="home-plan__price">R${p.desc.toFixed(2).replace('.',',')}</div>
                <div className="home-plan__price-label">/mês c/ desconto</div>
                <Link to="/planos" className="btn btn--outline btn--sm" style={{marginTop:'auto'}}>Ver plano</Link>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'2rem'}}>
            <Link to="/planos" className="btn btn--ghost">Ver detalhes completos →</Link>
          </div>
        </div>
      </section>

      {/* TV & STREAMING */}
      <section className="section home-tv section--alt">
        <div className="container">
          <div className="reveal">
            <SectionHeader badge="📺 TV & STREAMING" title="Watch e Paramount+ chegaram na Next" sub="Nos planos Ultra e Max: acesso completo ao Hub Watch e Paramount+." />
          </div>
          <div className="streaming-logos reveal" style={{marginTop:'2rem'}}>
            <div className="streaming-logo-card">
              <img src="/images/paramount-logo.png" alt="Paramount+" />
            </div>
            <div className="streaming-logo-card">
              <img src="/images/watch-logo.png" alt="Watch BR" />
            </div>
          </div>
        </div>
        <div style={{marginTop:'2.5rem',display:'flex',flexDirection:'column',gap:14}}>
          <MarqueeRow items={[...CANAIS.abertos,...CANAIS.paramount]} dir="left" />
          <MarqueeRow items={[...CANAIS.paramount,...CANAIS.abertos]} dir="right" />
        </div>
        <div style={{textAlign:'center',marginTop:'2.5rem'}}>
          <Link to="/planos" className="btn btn--primary">🎬 Ver planos com streaming →</Link>
        </div>
      </section>

      {/* FAMÍLIA */}
      <section className="section home-familia">
        <div className="container">
          <div className="home-familia__inner">
            <div className="home-familia__text reveal-left">
              <SectionHeader badge="🏠 PARA TODA A FAMÍLIA" title="Conectados como uma família unida" sub="Assista, jogue, trabalhe e estude com a velocidade que você merece. Fibra óptica de verdade, sem travamento." align="left" />
              <div style={{marginTop:'1.5rem',display:'flex',gap:'1rem',flexWrap:'wrap'}}>
                <Link to="/planos" className="btn btn--primary">Escolher meu plano →</Link>
                <Btn href={BRAND.wa} variant="outline">💬 WhatsApp</Btn>
              </div>
            </div>
            <div className="home-familia__img reveal-right">
              <img src="/images/hero-familia.jpg" alt="Família com a Next Provedor" />
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section section--alt">
        <div className="container">
          <div className="reveal"><SectionHeader badge="✅ POR QUE NÓS" title="O que nos diferencia" /></div>
          <div className="home-diffs__grid" style={{marginTop:'3rem'}}>
            {DIFFS.map((d,i) => (
              <div key={d.t} className={`diff-card reveal delay-${(i%3)+1}`}>
                <div className="diff-card__icon">{d.i}</div>
                <div className="diff-card__title">{d.t}</div>
                <div className="diff-card__desc">{d.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÂMERAS TEASER */}
      <section className="section home-cameras-teaser">
        <div className="container">
          <div className="cameras-teaser-card reveal">
            <div className="cameras-teaser-card__img">
              <img src="/images/cameras-banner.jpg" alt="Aluguel de câmeras Next" />
            </div>
            <div className="cameras-teaser-card__content">
              <div className="badge">📷 NOVO SERVIÇO</div>
              <h3>Aluguel de Câmeras de Segurança</h3>
              <p>Câmera alarme/IP em regime de comodato com armazenamento em cloud. Proteja sua casa ou empresa com tecnologia de ponta.</p>
              <ul className="cameras-teaser-list">
                {['Imagem Full HD', 'Armazenamento em Cloud', 'App próprio para monitorar', 'Planos a partir de R$29,90'].map(i => (
                  <li key={i}><span>✓</span>{i}</li>
                ))}
              </ul>
              <div style={{display:'flex',gap:'1rem',flexWrap:'wrap',marginTop:'1.5rem'}}>
                <Link to="/cameras" className="btn btn--primary">Ver planos de câmeras →</Link>
                <Btn href={BRAND.wa} variant="outline">💬 Orçamento grátis</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="home-cta">
        <div className="container" style={{position:'relative'}}>
          <h2>Pronto para conectar<br />de verdade?</h2>
          <p>Entre em contato agora e um consultor vai te ajudar.</p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <a href={BRAND.wa} target="_blank" rel="noopener noreferrer" className="btn" style={{background:'#fff',color:'#A50E22'}}>💬 Falar no WhatsApp</a>
            <Link to="/planos" className="btn btn--outline" style={{borderColor:'rgba(255,255,255,0.6)',color:'#fff'}}>Ver Planos →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
