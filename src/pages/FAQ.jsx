// src/pages/FAQ.jsx
import { useState } from 'react'
import { SectionHeader, Btn } from '../components/ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FAQ as FAQ_DATA, BRAND } from '../data'
import '../styles/pages/pages.css'

export default function FAQ() {
  useScrollReveal()
  const [open, setOpen] = useState(null)
  return (
    <>
      <div className="faq-hero"><div className="container"><SectionHeader badge="❓ DÚVIDAS" title="Perguntas Frequentes" sub="Respostas para as principais dúvidas sobre nossos planos e serviços." /></div></div>
      <section className="section"><div className="container">
        <div className="faq__list">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className={`faq-item reveal delay-${(i % 4) + 1} ${open === i ? 'faq-item--open' : ''}`}>
              <button className="faq-item__btn" onClick={() => setOpen(open === i ? null : i)}>
                <span className="faq-item__question">{item.q}</span>
                <span className="faq-item__icon">+</span>
              </button>
              {open === i && (
                <div className="faq-item__answer"><p>{item.a}</p></div>
              )}
            </div>
          ))}
          <div className="faq__cta reveal">
            <div className="faq__cta-title">Não encontrou sua dúvida?</div>
            <div className="faq__cta-sub">Nossa equipe está disponível 24h para te ajudar.</div>
            <Btn href={BRAND.wa} variant="primary">💬 Falar no WhatsApp</Btn>
          </div>
        </div>
      </div></section>
    </>
  )
}
