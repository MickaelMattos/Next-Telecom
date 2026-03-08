// src/pages/Contratos.jsx
import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { BRAND, CLAUSULAS } from '../data'
import '../styles/pages/contratos.css'

/* ─── SVG Icons ─────────────────────────────────────────── */
const IcFile = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)
const IcDownload = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)
const IcEye = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
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
    width="20"
    height="20"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const IcClose = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    width="18"
    height="18"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

/* ─── Página ─────────────────────────────────────────────── */
export default function Contratos() {
  useScrollReveal()
  const [modal, setModal] = useState(false)

  return (
    <div className="ct2-page">
      {/* HERO — faixa limpa */}
      <section className="ct2-hero">
        <div className="container ct2-hero__inner">
          <div className="reveal">
            <div className="ct2-hero__label">
              Transparência &amp; Documentos Legais
            </div>
            <h1 className="ct2-hero__title">Contratos</h1>
            <p className="ct2-hero__sub">
              Acesse o contrato de adesão completo e conheça seus direitos e
              deveres como assinante.
            </p>
          </div>
        </div>
      </section>

      <section className="section ct2-section">
        <div className="container ct2-container">
          {/* Card principal do contrato */}
          <div className="ct2-card reveal">
            <div className="ct2-card__icon-wrap">
              <IcFile />
            </div>
            <div className="ct2-card__body">
              <div className="ct2-card__label">Contrato de Adesão</div>
              <div className="ct2-card__title">
                Serviço de Rede de Acesso (SCM)
              </div>
              <div className="ct2-card__meta">
                NEXT PROVEDOR DE ACESSO A INTERNET LTDA – ME · CNPJ {BRAND.cnpj}
                <br />
                Registrado no Cartório de Títulos e Documentos · Maricá/RJ
              </div>
            </div>
            <div className="ct2-card__actions">
              <button
                className="ct2-btn ct2-btn--outline"
                onClick={() => setModal(true)}
              >
                <IcEye /> Ver resumo
              </button>
              <a
                href="/contrato-next-provedor.pdf"
                download
                className="ct2-btn ct2-btn--red"
              >
                <IcDownload /> Baixar PDF
              </a>
            </div>
          </div>

          {/* Cláusulas */}
          <div className="ct2-section-title reveal">
            Resumo das Cláusulas Principais
          </div>

          <div className="ct2-clausulas">
            {CLAUSULAS.map((c, i) => (
              <div
                key={c.n}
                className={`ct2-clausula reveal delay-${(i % 3) + 1}`}
              >
                <div className="ct2-clausula__num">{c.n.split('.')[0]}.</div>
                <div className="ct2-clausula__body">
                  <div className="ct2-clausula__title">
                    {c.n.replace(/^\d+\.\s*/, '')}
                  </div>
                  <div className="ct2-clausula__desc">{c.d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Box ANATEL */}
          <div className="ct2-anatel reveal">
            <div className="ct2-anatel__icon">
              <IcShield />
            </div>
            <div className="ct2-anatel__body">
              <div className="ct2-anatel__title">Órgão Regulador — ANATEL</div>
              <div className="ct2-anatel__text">
                A Next Provedor é devidamente autorizada pela ANATEL para
                prestação do SCM, processo nº <strong>{BRAND.anatel}</strong>.
                Dúvidas: <strong>www.anatel.gov.br</strong> · Tel: (61)
                2312-2000 · Central: 1331
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal de resumo ── */}
      {modal && (
        <div className="ct2-overlay" onClick={() => setModal(false)}>
          <div className="ct2-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ct2-modal__header">
              <div className="ct2-modal__title">
                Contrato de Adesão — Next Provedor
              </div>
              <button
                className="ct2-modal__close"
                onClick={() => setModal(false)}
              >
                <IcClose />
              </button>
            </div>

            <div className="ct2-modal__body">
              <p className="ct2-modal__intro">
                <strong>NEXT PROVEDOR DE ACESSO A INTERNET LTDA - ME</strong>
                <br />
                CNPJ: {BRAND.cnpj} · {BRAND.endereco} · CEP {BRAND.cep}
              </p>
              <p>
                O presente contrato estabelece as condições de prestação do
                Serviço de Rede de Acesso (SCM), mediante adesão do ASSINANTE a
                um dos PLANOS DE SERVIÇO da CONTRATADA.
              </p>

              <div className="ct2-modal__clausulas">
                {CLAUSULAS.map((c) => (
                  <div key={c.n} className="ct2-modal__clausula">
                    <span className="ct2-modal__clausula-n">{c.n}</span>
                    <span>{c.d}</span>
                  </div>
                ))}
              </div>

              <div className="ct2-modal__footer">
                Documento completo disponível para download. Foro: Comarca de
                Maricá/RJ.
              </div>

              <a
                href="/contrato-next-provedor.pdf"
                download
                className="ct2-btn ct2-btn--red ct2-btn--full"
              >
                <IcDownload /> Baixar contrato completo em PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
