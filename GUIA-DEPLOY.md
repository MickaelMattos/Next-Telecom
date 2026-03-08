# 🚀 DEPLOY — PASTA ÚNICA
## GitHub + Vercel · Next Provedor

Agora o projeto é **uma pasta só**. Um repositório, um deploy.
Backend e frontend sobem juntos — o backend vira Vercel Serverless Functions automaticamente.

---

## PASSO 1 — Criar o repositório no GitHub

1. Acesse **https://github.com** → **"+"** → **"New repository"**
2. Preencha:
   - **Repository name:** `next-provedor`
   - ⚠️ **NÃO marque** "Add a README file"
3. Clique em **"Create repository"**
4. **Copie a URL:** `https://github.com/SEU_USUARIO/next-provedor.git`

---

## PASSO 2 — Configurar o Git (só na primeira vez)

Abra o **Prompt de Comando** e rode:
```
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@gmail.com"
```

---

## PASSO 3 — Enviar o projeto para o GitHub

Abra o terminal **dentro da pasta `next-provedor`**:

```
cd C:\projetos\next-provedor
```

Execute um por vez:
```
git init
git add .
git commit -m "feat: Next Provedor site completo"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/next-provedor.git
git push -u origin main
```

✅ Acesse o GitHub e veja sua pasta no ar com todos os arquivos.

---

## PASSO 4 — Criar o arquivo .env

Copie o `.env.example` e renomeie para `.env`:
```
VITE_WA_NUMBER=5521996584222
VITE_PORTAL_URL=https://ca.next.ispbox.com.br/clientes/login
API_PORT=5001
FRONTEND_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seuemail@gmail.com
SMTP_PASS=sua_senha_de_app
EMAIL_TO=contato@nextprovedor.net.br
```

> O `.env` **nunca vai para o GitHub** — o `.gitignore` já bloqueia.

---

## PASSO 5 — Deploy na Vercel

1. Acesse **https://vercel.com** → **"Add New Project"**
2. Clique em **"Continue with GitHub"** → autorize
3. Encontre **`next-provedor`** → clique em **"Import"**

### Configurações:
| Campo | Valor |
|-------|-------|
| Framework Preset | **Vite** |
| Root Directory | `./` (padrão) |
| Build Command | `npm run build` |
| Output Directory | `dist` |

### Variáveis de ambiente (clique em "Environment Variables"):

| Nome | Valor |
|------|-------|
| `VITE_WA_NUMBER` | `5521996584222` |
| `VITE_PORTAL_URL` | `https://ca.next.ispbox.com.br/clientes/login` |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `seuemail@gmail.com` |
| `SMTP_PASS` | `sua_senha_de_app` |
| `EMAIL_TO` | `contato@nextprovedor.net.br` |
| `FRONTEND_URL` | `https://next-provedor.vercel.app` |

### Clique em **"Deploy"** e aguarde ~2 minutos. 🎉

Seu site estará em:
```
https://next-provedor.vercel.app
```

**Frontend e backend no ar juntos — sem Railway, sem segundo projeto.**

---

## PASSO 6 — Domínio personalizado (nextprovedor.net.br)

1. Na Vercel → seu projeto → **Settings → Domains**
2. Adicione: `nextprovedor.net.br`
3. Adicione: `www.nextprovedor.net.br`
4. A Vercel mostra os registros DNS:

No painel do seu domínio (Registro.br):
```
Tipo: A      Nome: @    Valor: 76.76.21.21
Tipo: CNAME  Nome: www  Valor: cname.vercel-dns.com
```

Aguarde até 1h para propagar.

---

## ATUALIZAÇÕES FUTURAS

Toda vez que mudar algo no site:
```
git add .
git commit -m "fix: descrição da mudança"
git push
```
**A Vercel publica automaticamente em ~1 minuto.** ✅

---

## SENHA DE APP GMAIL

1. Acesse: https://myaccount.google.com
2. Pesquise "Senhas de app" → Gerar
3. Use a senha de 16 caracteres no campo `SMTP_PASS`

---

*Next Provedor · CNPJ 29.203.781/0001-01 · Maricá/RJ*
