// src/pages/QuemSomos.jsx
import { useEffect, useState } from 'react'
import { Target, Eye, Heart, Wifi, Radio, Cable } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { BRAND } from '../data'
import '../styles/pages/quemsomos.css'

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
    <div className="qs-slider">
      {BANNERS.map((src, i) => (
        <div
          key={i}
          className={`qs-slider__slide ${i === active ? 'qs-slider__slide--on' : ''}`}
        >
          <img src={src} alt={`Banner ${i + 1}`} />
        </div>
      ))}
      <div className="qs-slider__dots">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`qs-slider__dot ${i === active ? 'qs-slider__dot--on' : ''}`}
          />
        ))}
      </div>
      <button
        className="qs-slider__btn qs-slider__btn--l"
        onClick={() =>
          setActive((a) => (a - 1 + BANNERS.length) % BANNERS.length)
        }
      >
        ‹
      </button>
      <button
        className="qs-slider__btn qs-slider__btn--r"
        onClick={() => setActive((a) => (a + 1) % BANNERS.length)}
      >
        ›
      </button>
    </div>
  )
}

/* ─── Dados da empresa (rodapé discreto) ───────────────────────── */
const DADOS = [
  { l: 'Razão Social', v: 'Next Provedor de Acesso a Internet Ltda - ME' },
  { l: 'CNPJ', v: BRAND.cnpj },
  { l: 'Endereço', v: BRAND.endereco },
  { l: 'CEP', v: BRAND.cep },
  { l: 'Município', v: BRAND.cidade },
  { l: 'ANATEL', v: `Proc. nº ${BRAND.anatel}` },
  { l: 'Serviço', v: 'SCM — Serviço de Comunicação Multimídia' },
  { l: 'Telefone', v: `${BRAND.tel} / ${BRAND.tel2}` },
]

/* ─── Página ────────────────────────────────────────────────────── */
export default function QuemSomos() {
  useScrollReveal()

  return (
    <div className="qs-page">
      {/* 1 — BANNERS */}
      <section className="qs-hero">
        <BannerSlider />
      </section>

      {/* 2 — QUEM SOMOS */}
      <section className="qs-section qs-section--white">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="qs-label reveal">Quem somos</div>
          <h1 className="qs-title reveal">
            Conectando <span>Maricá</span> ao futuro
          </h1>

          <div className="qs-text reveal">
            <p>
              A <strong>Next Provedor</strong> é uma empresa de telecomunicações
              com sede no município de Maricá/RJ, atendendo também em alguns
              bairros no município de Itaboraí.
            </p>
            <p>
              Oferecemos internet em cabo UTP, Rádio e também em Fibra Óptica,
              tanto para residências quanto para empresas de todos os segmentos
              e portes, onde prestamos atendimentos de alta qualidade, com
              responsabilidade e engajamento.
            </p>
            <p>
              Com uma rede própria, a Next Provedor possui uma equipe de
              técnicos treinados e capacitados para atender as necessidades de
              nossos clientes de maneira eficaz.
            </p>
          </div>

          {/* Tecnologias em destaque */}
          <div className="qs-tech reveal">
            <div className="qs-tech__item">
              <Cable size={22} strokeWidth={1.6} />
              <span>Cabo UTP</span>
            </div>
            <div className="qs-tech__item">
              <Radio size={22} strokeWidth={1.6} />
              <span>Rádio</span>
            </div>
            <div className="qs-tech__item qs-tech__item--highlight">
              <Wifi size={22} strokeWidth={1.6} />
              <span>Fibra Óptica</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — MVV */}
      <section className="qs-section qs-section--alt">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="qs-mvv">
            {/* Missão */}
            <div className="qs-mvv__card reveal delay-1">
              <div className="qs-mvv__icon">
                <Target size={28} strokeWidth={1.5} />
              </div>
              <div className="qs-mvv__line" />
              <h3 className="qs-mvv__title">Nossa missão</h3>
              <p className="qs-mvv__desc">
                Temos como missão fornecer uma rede de telecomunicações
                econômica, ágil e de excelência de acordo com as necessidades do
                mercado para atender cada vez melhor e a mais pessoas.
              </p>
            </div>

            {/* Visão */}
            <div className="qs-mvv__card reveal delay-2">
              <div className="qs-mvv__icon">
                <Eye size={28} strokeWidth={1.5} />
              </div>
              <div className="qs-mvv__line" />
              <h3 className="qs-mvv__title">Nossa Visão</h3>
              <p className="qs-mvv__desc">
                Ser referência no ramo de provedores de internet banda larga do
                Estado, por nossa competência profissional e cuidado com os
                nossos clientes. Conte com a Next Provedor e tenha o plano de
                internet mais adequado ao seu perfil, lhe proporcionando maior
                agilidade e estabilidade na hora de navegar.
              </p>
            </div>

            {/* Valores */}
            <div className="qs-mvv__card reveal delay-3">
              <div className="qs-mvv__icon">
                <Heart size={28} strokeWidth={1.5} />
              </div>
              <div className="qs-mvv__line" />
              <h3 className="qs-mvv__title">Nossos valores</h3>
              <p className="qs-mvv__desc">
                A Next Provedor é uma empresa que prioriza a confiança e a
                honestidade para com os nossos clientes e colaboradores e o
                compromisso com um serviço de qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — DADOS DA EMPRESA (discreto, sem animação) */}
      <section className="qs-dados">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="qs-dados__title">Dados da Empresa</div>
          <div className="qs-dados__grid">
            {DADOS.map((d) => (
              <div key={d.l} className="qs-dados__item">
                <span className="qs-dados__label">{d.l}</span>
                <span className="qs-dados__val">{d.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
