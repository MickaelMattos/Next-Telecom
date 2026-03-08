// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'1.5rem', textAlign:'center', padding:'2rem', paddingTop:'100px' }}>
      <div style={{ fontSize:'5rem' }}>📡</div>
      <h1 style={{ fontFamily:'Arial', fontWeight:900, fontSize:'clamp(3rem,8vw,6rem)', color:'var(--red)', lineHeight:1 }}>404</h1>
      <p style={{ fontFamily:'Arial', fontSize:'1.1rem', color:'var(--sub)', maxWidth:400 }}>
        Página não encontrada. Talvez o sinal caiu por aqui...
      </p>
      <Link to="/" className="btn btn--primary">← Voltar para a Home</Link>
    </div>
  )
}
