// src/components/Footer.jsx
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from './ui'
import { BRAND } from '../data'

const NAV_COLS = [
  {
    title: 'Navegação',
    links: [
      { label: 'Home',        to: '/'          },
      { label: 'Planos',      to: '/planos'    },
      { label: 'Câmeras',     to: '/cameras'   },
      { label: 'Quem Somos',  to: '/quem-somos'},
      { label: 'FAQ',         to: '/faq'       },
      { label: 'Contato',     to: '/contato'   },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: `WhatsApp: ${BRAND.whats}`, href: BRAND.wa  },
      { label: `Tel: ${BRAND.tel}`,        href: `tel:${BRAND.tel.replace(/\D/g,'')}` },
      { label: 'Instagram',                href: BRAND.ig  },
      { label: 'Facebook',                 href: BRAND.fb  },
    ],
  },
  {
    title: 'Jurídico',
    links: [
      { label: 'Contrato de Adesão',       to: '/contratos' },
      { label: 'Política de Privacidade',  to: '/contratos' },
      { label: 'Regulamento do Serviço',   to: '/contratos' },
      { label: 'Portal ANATEL',            href: 'https://www.anatel.gov.br' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" style={{ display: 'inline-block' }}>
              <Logo height={40} />
            </Link>
            <p>
              Provedor de fibra óptica com sede em Maricá/RJ. Internet de qualidade para você e sua família.
            </p>
            <div className="footer__socials">
              {[
                { i: '📸', href: BRAND.ig,  label: 'Instagram' },
                { i: '📘', href: BRAND.fb,  label: 'Facebook'  },
                { i: '💬', href: BRAND.wa,  label: 'WhatsApp'  },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="footer__social" title={s.label}>
                  {s.i}
                </a>
              ))}
            </div>
          </div>

          {/* Colunas */}
          {NAV_COLS.map(col => (
            <div key={col.title}>
              <div className="footer__col-title">{col.title}</div>
              {col.links.map(lk => (
                lk.to ? (
                  <Link key={lk.label} to={lk.to} className="footer__link">{lk.label}</Link>
                ) : (
                  <a key={lk.label} href={lk.href} target="_blank" rel="noopener noreferrer"
                    className="footer__link">{lk.label}</a>
                )
              ))}
            </div>
          ))}
        </div>

        {/* LGPD */}
        <div className="footer__lgpd">
          <span>🔒</span>
          <div>
            <strong>Privacidade &amp; LGPD:</strong>{' '}
            A Next Provedor respeita e protege os dados pessoais de seus clientes conforme a
            Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Seus dados são usados
            exclusivamente para prestação do serviço. Não compartilhamos com terceiros sem autorização.
            Consulte nossa{' '}
            <Link to="/contratos">Política de Privacidade</Link>.
            Para solicitações LGPD:{' '}
            <a href={BRAND.wa} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <div>
            © 2025 Next Provedor · CNPJ {BRAND.cnpj} · {BRAND.cidade}<br />
            Autorizado pela ANATEL · Processo nº {BRAND.anatel} · Foro: Comarca de Maricá/RJ
          </div>
          <div style={{ textAlign: 'right' }}>
            Serviço de Comunicação Multimídia (SCM)<br />
            Regulamento ANATEL · Código de Defesa do Consumidor
          </div>
        </div>
      </div>
    </footer>
  )
}
