// src/pages/FAQ.jsx
import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FAQ as FAQ_DATA, BRAND } from '../data'
import '../styles/pages/faq.css'

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
    <div className="fq-slider">
      {BANNERS.map((src, i) => (
        <div
          key={i}
          className={`fq-slider__slide ${i === active ? 'fq-slider__slide--on' : ''}`}
        >
          <img src={src} alt={`Banner ${i + 1}`} />
        </div>
      ))}
      <div className="fq-slider__dots">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`fq-slider__dot ${i === active ? 'fq-slider__dot--on' : ''}`}
          />
        ))}
      </div>
      <button
        className="fq-slider__btn fq-slider__btn--l"
        onClick={() =>
          setActive((a) => (a - 1 + BANNERS.length) % BANNERS.length)
        }
      >
        ‹
      </button>
      <button
        className="fq-slider__btn fq-slider__btn--r"
        onClick={() => setActive((a) => (a + 1) % BANNERS.length)}
      >
        ›
      </button>
    </div>
  )
}

/* ─── Easter Egg: frases épicas ─────────────────────────────────── */
const EASTER_EGGS = [
  { frase: '"Eu sou seu pai."', obra: '— Darth Vader · Star Wars' },
  {
    frase: '"Com grandes poderes vêm grandes responsabilidades."',
    obra: '— Tio Ben · Homem-Aranha',
  },
  { frase: '"Eu sou inevitável."', obra: '— Thanos · Avengers: Endgame' },
  {
    frase: '"Não importa o quanto for ferido, continue andando."',
    obra: '— Rock Lee · Naruto',
  },
  {
    frase: '"Se você não lutar, quem vai lutar por você?"',
    obra: '— Eren Yaeger · Attack on Titan',
  },
  {
    frase: '"A fraqueza mais forte é não ter vontade de ser forte."',
    obra: '— Inosuke · Demon Slayer',
  },
  {
    frase:
      '"Não importa quantos aliados você tenha ao seu redor, quando morrer, você estará sozinho."',
    obra: '— Satoru Gojo· Jujutsu Kaisen',
  },
  {
    frase: '"Que a Força esteja com você."',
    obra: '— Luke Skywalker · Star Wars',
  },
  {
    frase: '"E eu... sou o Homem de Ferro."',
    obra: '— Tony Stark · Avengers: Endgame',
  },
  {
    frase:
      '"Eu nunca volto atrás na minha palavra... esse é o meu jeito ninja!"',
    obra: '— Naruto Uzumaki · Naruto',
  },
  {
    frase:
      '"Aqueles que rompem as regras são lixo, mas aqueles que abandonam seus amigos são piores que lixo"',
    obra: '— Kakashi Hatake · Naruto',
  },
  {
    frase:
      '"Envelhecer e morrer é o que dá sentido e beleza ao tempo fugaz de uma vida humana. É exatamente porque envelhecemos e morremos que nossas vidas têm valor e nobreza."',
    obra: '— Kyojuro Rengoku · Demon Slayer',
  },
  {
    frase: '"Eu consigo fazer isso o dia todo."',
    obra: '— Capitão América · Marvel',
  },
  {
    frase:
      '"Ou você morre herói, ou vive o suficiente para se tornar o vilão."',
    obra: '— Batman: O Cavaleiro das Trevas',
  },
  {
    frase:
      '"A primeira regra do Clube da Luta é: você não fala sobre o Clube da Luta."',
    obra: '— Clube da Luta',
  },
  {
    frase: '"Ao infinito… E além!"',
    obra: '— Toy Story',
  },
  {
    frase: '"Ao infinito… E além!"',
    obra: '— Toy Story',
  },
]

/* ─── Item do FAQ ────────────────────────────────────────────────── */
function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)
  const [clicks, setClicks] = useState(0)
  const [egg, setEgg] = useState(null)
  const [eggVisible, setEggVisible] = useState(false)
  const clickTimerRef = useRef(null)

  const handleClick = () => {
    // Abre / fecha normalmente
    setOpen((o) => !o)

    // Contagem de cliques para easter egg
    const nextClicks = clicks + 1
    setClicks(nextClicks)

    // Reseta contagem após 1.8s sem novo clique
    clearTimeout(clickTimerRef.current)
    clickTimerRef.current = setTimeout(() => setClicks(0), 1800)

    // Ao 3º clique: sorteia frase
    if (nextClicks >= 3) {
      setClicks(0)
      const chosen = EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)]
      setEgg(chosen)
      setEggVisible(false)
      // Pequeno delay para a animação de entrada
      setTimeout(() => setEggVisible(true), 80)
    }
  }

  // Wrapper externo fica com .reveal — o React NUNCA toca nele após montar.
  // Wrapper interno (.fq-item) é quem o React re-renderiza para open/close,
  // assim a classe "visible" adicionada pelo IntersectionObserver não é perdida.
  return (
    <div className={`fq-reveal reveal delay-${(index % 4) + 1}`}>
      <div className={`fq-item ${open ? 'fq-item--open' : ''}`}>
        {/* Botão da pergunta */}
        <button className="fq-item__btn" onClick={handleClick}>
          <span className="fq-item__q">{item.q}</span>
          <span className="fq-item__icon" aria-hidden="true" />
        </button>

        {/* Resposta — grid-template-rows não desmonta o elemento */}
        <div className="fq-item__body">
          <div className="fq-item__answer">
            <p>{item.a}</p>

            {/* Easter egg */}
            {egg && (
              <div className={`fq-egg ${eggVisible ? 'fq-egg--on' : ''}`}>
                <div className="fq-egg__quote">{egg.frase}</div>
                <div className="fq-egg__obra">{egg.obra}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Botão WhatsApp animado ─────────────────────────────────────── */
function WaButton() {
  const [revealed, setRevealed] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 400)
    return () => clearTimeout(t)
  }, [])
  return (
    <a
      href={BRAND.wa}
      target="_blank"
      rel="noopener noreferrer"
      className={`fq-wa-btn ${revealed ? 'fq-wa-btn--in' : ''}`}
    >
      <img
        src="/images/icon-whatsapp.png"
        alt="WhatsApp"
        className="fq-wa-btn__icon"
      />
      <span className="fq-wa-btn__text">
        <span className="fq-wa-btn__label">Falar no WhatsApp</span>
        <span className="fq-wa-btn__num">{BRAND.whats}</span>
      </span>
    </a>
  )
}

/* ─── Página ─────────────────────────────────────────────────────── */
export default function FAQ() {
  useScrollReveal()
  return (
    <div className="fq-page">
      {/* Banners */}
      <section className="fq-hero">
        <BannerSlider />
      </section>

      {/* Lista de perguntas */}
      <section className="fq-section">
        <div className="container">
          <div className="fq-header reveal">
            <div className="fq-header__label">Perguntas frequentes</div>
            <h1 className="fq-header__title">Tire suas dúvidas</h1>
            <p className="fq-header__sub">
              Respostas para as principais dúvidas sobre nossos planos e
              serviços.
            </p>
          </div>

          <div className="fq-list">
            {FAQ_DATA.map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>

          {/* CTA WhatsApp */}
          <div className="fq-cta reveal">
            <div className="fq-cta__text">
              <strong>Não encontrou sua dúvida?</strong>
              <span>Nossa equipe está disponível 24h para te ajudar.</span>
            </div>
            <WaButton />
          </div>
        </div>
      </section>
    </div>
  )
}
