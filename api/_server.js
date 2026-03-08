// api/_server.js
// ⚠️  SÓ PARA DESENVOLVIMENTO LOCAL — não é uma Vercel Function
// (arquivos com _ na frente são ignorados pela Vercel)
//
// Simula as Vercel Serverless Functions em Express
// Roda na porta 5001, o Vite faz proxy de /api/* para cá

require('dotenv').config()

const express = require('express')
const app     = express()

app.use(express.json({ limit: '10kb' }))

// Importa os handlers — mesmos arquivos usados na Vercel
const contatoHandler = require('./contato.js')
const planosHandler  = require('./planos.js')

// Adapta o padrão Vercel (req, res) para Express
// (são idênticos, Express é compatível)
app.post('/api/contato', contatoHandler)
app.get('/api/planos',   planosHandler)
app.get('/api/planos/:id', (req, res) => {
  req.query.id = req.params.id
  return planosHandler(req, res)
})

app.get('/api/health', (_, res) => res.json({ status: 'ok', env: 'development' }))

const PORT = process.env.API_PORT || 5001
app.listen(PORT, () => {
  console.log(`\n  \x1b[33m[API]\x1b[0m  Servidor local rodando em http://localhost:${PORT}`)
  console.log(`  \x1b[33m[API]\x1b[0m  Endpoints disponíveis:`)
  console.log(`         POST http://localhost:${PORT}/api/contato`)
  console.log(`         GET  http://localhost:${PORT}/api/planos\n`)
})
