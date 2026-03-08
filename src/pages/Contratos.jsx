// src/pages/Contratos.jsx
import { useState } from 'react'
import { SectionHeader, Btn } from '../components/ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { BRAND, CLAUSULAS } from '../data'
import '../styles/pages/pages.css'

export default function Contratos() {
  useScrollReveal()
  const [modal, setModal] = useState(false)
  return (
    <>
      <div className="contratos-hero"><div className="container">
        <SectionHeader badge="📄 DOCUMENTOS LEGAIS" title="Contratos e Documentos" sub="Transparência é um dos nossos principais valores. Acesse todos os documentos legais." />
      </div></div>

      <section className="section"><div className="container" style={{ maxWidth:900 }}>
        {/* Card principal */}
        <div className="contrato-main-card reveal">
          <div className="contrato-main-card__header">
            <div className="contrato-main-card__icon">📄</div>
            <div>
              <div className="contrato-main-card__title">Contrato de Adesão ao Serviço de Rede de Acesso (SCM)</div>
              <div className="contrato-main-card__sub">
                NEXT PROVEDOR DE ACESSO A INTERNET LTDA – ME · CNPJ {BRAND.cnpj}<br />
                Registrado no Cartório de Títulos e Documentos de Maricá/RJ
              </div>
            </div>
          </div>
          <div className="contrato-main-card__btns">
            <Btn onClick={() => setModal(true)} variant="primary">👁 Ver resumo do contrato</Btn>
            <a href="/contrato-next-provedor.pdf" download
              className="btn btn--ghost">⬇ Baixar PDF completo</a>
          </div>
        </div>

        {/* Cláusulas */}
        <div className="sobre-block reveal">
          <div className="sobre-block__title">Resumo das Cláusulas Principais</div>
          <div className="clausulas-list">
            {CLAUSULAS.map(c => (
              <div key={c.n} className="clausula-item">
                <div className="clausula-item__num">{c.n}</div>
                <div className="clausula-item__desc">{c.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ANATEL */}
        <div className="anatel-box reveal">
          <span style={{ fontSize:'1.5rem', flexShrink:0 }}>ℹ️</span>
          <div>
            <div className="anatel-box__title">Órgão Regulador — ANATEL</div>
            <div className="anatel-box__text">
              A Next Provedor é devidamente autorizada pela ANATEL para prestação do SCM, processo nº <strong>{BRAND.anatel}</strong>.<br />
              Dúvidas: <strong>www.anatel.gov.br</strong> · Tel: (61) 2312-2000 · Central: 1331
            </div>
          </div>
        </div>
      </div></section>

      {/* Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-box__header">
              <div className="modal-box__title">Contrato de Adesão — Next Provedor</div>
              <button className="modal-close" onClick={() => setModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <p><strong>NEXT PROVEDOR DE ACESSO A INTERNET LTDA - ME</strong><br />
              CNPJ: {BRAND.cnpj} · {BRAND.endereco} · {BRAND.cep}</p>
              <p>O presente contrato estabelece as condições de prestação do Serviço de Rede de Acesso (SCM), mediante adesão do ASSINANTE a um dos PLANOS DE SERVIÇO da CONTRATADA.</p>
              {CLAUSULAS.map(c => (
                <div key={c.n} style={{ marginBottom:'0.85rem', paddingLeft:'0.75rem', borderLeft:'2px solid rgba(165,14,34,0.3)' }}>
                  <strong style={{ color:'var(--red)' }}>{c.n}:</strong> {c.d}
                </div>
              ))}
              <div style={{ marginTop:'1.5rem', padding:'1rem', background:'rgba(165,14,34,0.06)', border:'1px solid rgba(165,14,34,0.18)', borderRadius:8, fontSize:'0.78rem', color:'var(--muted)' }}>
                📋 Documento completo disponível para download. Foro: Comarca de Maricá/RJ.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
