// src/pages/AreaCliente.jsx
import { Btn } from '../components/ui'
import { BRAND } from '../data'
import '../styles/pages/pages.css'

export default function AreaCliente() {
  return (
    <div className="area-cliente">
      <div className="area-cliente__box">
        <div className="area-cliente__icon">👤</div>
        <div className="badge" style={{ display:'block', textAlign:'center', marginBottom:'1rem' }}>🔐 ÁREA DO CLIENTE</div>
        <h1 className="area-cliente__title">Acesse seu portal</h1>
        <p className="area-cliente__sub">
          Gerencie sua fatura, acompanhe seu plano e abra chamados de suporte pelo sistema integrado.
        </p>
        <div className="area-cliente__features">
          {[
            { i:'💳', t:'2ª via de fatura e pagamento via PIX ou boleto' },
            { i:'📊', t:'Status do plano, velocidade e vencimento'        },
            { i:'🛠️', t:'Abertura e acompanhamento de chamados'           },
            { i:'🔄', t:'Solicitação de mudança de plano'                 },
            { i:'📋', t:'Histórico de faturas e pagamentos'               },
          ].map(f => (
            <div key={f.t} className="area-cliente__feature">
              <span style={{ fontSize:'1.2rem' }}>{f.i}</span>
              <span>{f.t}</span>
            </div>
          ))}
        </div>
        <div className="area-cliente__cta">
          <Btn href={BRAND.portal} variant="primary" full>Acessar Portal do Cliente →</Btn>
        </div>
        <div className="area-cliente__note">🔒 Autenticação segura via CPF · Sistema Voalle</div>
        <div className="area-cliente__help" style={{ marginTop:'1rem' }}>
          Precisa de ajuda?{' '}
          <a href={BRAND.wa} target="_blank" rel="noopener noreferrer">
            Fale com o suporte no WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
