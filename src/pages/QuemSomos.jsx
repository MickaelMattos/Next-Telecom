// src/pages/QuemSomos.jsx
import { SectionHeader } from '../components/ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { BRAND } from '../data'
import '../styles/pages/pages.css'

export default function QuemSomos() {
  useScrollReveal()
  const dados = [
    { l: 'Razão Social', v: 'Next Provedor de Acesso a Internet Ltda - ME' },
    { l: 'CNPJ',         v: BRAND.cnpj       },
    { l: 'Endereço',     v: BRAND.endereco   },
    { l: 'CEP',          v: BRAND.cep        },
    { l: 'Município',    v: BRAND.cidade     },
    { l: 'ANATEL',       v: `Proc. nº ${BRAND.anatel}` },
    { l: 'Serviço',      v: 'SCM — Serviço de Comunicação Multimídia' },
    { l: 'Telefone',     v: BRAND.tel        },
  ]
  return (
    <>
      <div className="sobre-hero"><div className="container"><SectionHeader badge="🏢 QUEM SOMOS" title="A Next Provedor" sub="Provedor de internet fibra óptica localizado em Maricá/RJ, autorizado pela ANATEL." /></div></div>
      <section className="section"><div className="container" style={{ maxWidth: 900 }}>
        <div className="sobre-block reveal">
          <div className="sobre-block__title">Nossa História</div>
          <p>A <strong>Next Provedor de Acesso a Internet Ltda</strong> é uma empresa maricaense comprometida em levar conectividade de qualidade para residências e empresas da região.</p>
          <p>Operamos com tecnologia de <strong>fibra óptica pura</strong> — do data center até a sua residência, sem intermediários de tecnologias mais antigas. Isso garante velocidade real, estabilidade e baixa latência para trabalho, estudo e entretenimento.</p>
          <p>Somos autorizados pela ANATEL para prestação do SCM, processo nº <strong>{BRAND.anatel}</strong>, e seguimos todas as regulamentações do setor de telecomunicações brasileiro.</p>
        </div>

        <div className="sobre-block reveal">
          <div className="sobre-block__title">Dados da Empresa</div>
          <div className="sobre-dados__grid">
            {dados.map(d => (
              <div key={d.l} className="sobre-dado">
                <div className="sobre-dado__label">{d.l}</div>
                <div className="sobre-dado__val">{d.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sobre-mvv">
          {[
            { i: '🎯', t: 'Missão',  d: 'Levar internet de alta qualidade e velocidade real para todos os moradores de Maricá e região, com preço justo e atendimento humanizado.' },
            { i: '👁️', t: 'Visão',   d: 'Ser o provedor de referência em qualidade e satisfação do cliente no litoral fluminense.' },
            { i: '💎', t: 'Valores', d: 'Transparência, excelência técnica, comprometimento com o cliente e respeito às normas regulatórias.' },
          ].map((m, i) => (
            <div key={m.t} className={`mvv-card reveal delay-${i + 1}`}>
              <div className="mvv-card__icon">{m.i}</div>
              <div className="mvv-card__title">{m.t}</div>
              <div className="mvv-card__desc">{m.d}</div>
            </div>
          ))}
        </div>
      </div></section>
    </>
  )
}
