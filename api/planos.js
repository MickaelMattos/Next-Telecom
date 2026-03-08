// api/planos.js
// Vercel Serverless Function — GET /api/planos

const PLANOS = [
  { id: 1, nome: 'Start',  vel: 200, wifi: 'Wi-Fi 5',    preco: 69.90, desc: 59.90, pop: false, streaming: [] },
  { id: 2, nome: 'Plus',   vel: 300, wifi: 'Wi-Fi 5G',   preco: 89.90, desc: 79.90, pop: false, streaming: [] },
  { id: 3, nome: 'Pro',    vel: 500, wifi: 'Wi-Fi 5G',   preco: 109.90, desc: 99.90, pop: true,  streaming: [] },
  { id: 4, nome: 'Ultra',  vel: 600, wifi: 'Super Wi-Fi 6', preco: 129.90, desc: 119.90, pop: false, streaming: ['watch','paramount'] },
  { id: 5, nome: 'Max',    vel: 800, wifi: 'Super Wi-Fi 6', preco: 159.90, desc: 149.90, pop: false, streaming: ['watch','paramount'] },
]

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 'public, s-maxage=3600')

  if (req.method !== 'GET') return res.status(405).json({ error: 'Método não permitido' })

  const { id } = req.query
  if (id) {
    const plano = PLANOS.find(p => p.id === Number(id))
    return plano
      ? res.status(200).json(plano)
      : res.status(404).json({ error: 'Plano não encontrado' })
  }

  return res.status(200).json(PLANOS)
}
