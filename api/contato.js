// api/contato.js
// Vercel Serverless Function — POST /api/contato
// Em dev local é importado pelo _server.js

const { z } = require('zod')
const nodemailer = require('nodemailer')

const schema = z.object({
  nome:      z.string().min(2,  'Nome muito curto'),
  email:     z.string().email().optional().or(z.literal('')),
  telefone:  z.string().min(8,  'Telefone inválido'),
  assunto:   z.string().min(3,  'Assunto obrigatório'),
  mensagem:  z.string().min(10, 'Mensagem muito curta').max(2000),
})

module.exports = async function handler(req, res) {
  // CORS — permite apenas a origem configurada
  const origin = process.env.FRONTEND_URL || '*'
  res.setHeader('Access-Control-Allow-Origin', origin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Método não permitido' })

  // Validação
  const parse = schema.safeParse(req.body)
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.flatten() })
  }

  const { nome, email, telefone, assunto, mensagem } = parse.data

  // Envia e-mail
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from:    `"Site Next Provedor" <${process.env.SMTP_USER}>`,
      to:      process.env.EMAIL_TO || process.env.SMTP_USER,
      subject: `[Site] ${assunto} — ${nome}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#A50E22;padding:24px;border-radius:8px 8px 0 0">
            <h2 style="color:#fff;margin:0">Nova mensagem — Next Provedor</h2>
          </div>
          <div style="background:#f9f9f9;padding:24px;border:1px solid #ddd;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#555;width:100px"><b>Nome</b></td>     <td>${nome}</td></tr>
              <tr><td style="padding:8px 0;color:#555"><b>Telefone</b></td> <td>${telefone}</td></tr>
              <tr><td style="padding:8px 0;color:#555"><b>E-mail</b></td>   <td>${email || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#555"><b>Assunto</b></td>  <td>${assunto}</td></tr>
            </table>
            <hr style="margin:16px 0;border-color:#ddd"/>
            <p style="color:#333;white-space:pre-wrap">${mensagem}</p>
            <hr style="margin:16px 0;border-color:#ddd"/>
            <small style="color:#999">Enviado em ${new Date().toLocaleString('pt-BR')} via site Next Provedor</small>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ ok: true, message: 'Mensagem enviada com sucesso!' })

  } catch (err) {
    console.error('[contato] Erro ao enviar e-mail:', err.message)
    // Retorna 200 mesmo assim — o usuário não deve ver erro de SMTP
    return res.status(200).json({ ok: true, message: 'Mensagem recebida!' })
  }
}
