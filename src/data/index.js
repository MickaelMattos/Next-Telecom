// src/data/index.js

export const BRAND = {
  wa:      'https://wa.me/5521996584222',
  portal:  'https://ca.next.ispbox.com.br/clientes/login',
  ig:      'https://instagram.com/nextprovedor',
  fb:      'https://facebook.com/nextprovedor',
  tel:     '(21) 2636-1252',
  tel2:    '(21) 2635-9113',
  whats:   '(21) 99658-4222',
  cnpj:    '29.203.781/0001-01',
  endereco:'Rua Gilmar dos Santos Duarte, nº 350 – Lj 209 Q 14 Lt 3A – Shopping Center Inoã',
  cidade:  'Maricá – RJ',
  cep:     'CEP 24.942-290',
  anatel:  '53500.006604/2018-22',
}

export const PLANOS = [
  {
    id: 1, nome: 'Start', vel: '200', wifi: 'Wi-Fi Básico',
    preco: 69.90, desc: 59.90, streaming: [], pop: false,
    itens: [
      '200 Mbps fibra óptica',
      'Wi-Fi Básico incluso',
      'Suporte 24h',
      'Instalação grátis',
      'IP Dinâmico',
    ],
  },
  {
    id: 2, nome: 'Plus', vel: '300', wifi: 'Wi-Fi 5G',
    preco: 89.90, desc: 79.90, streaming: [], pop: false,
    itens: [
      '300 Mbps fibra óptica',
      'Wi-Fi 5G incluso',
      'Suporte 24h',
      'Instalação grátis',
      'IP Dinâmico',
    ],
  },
  {
    id: 3, nome: 'Pro', vel: '500', wifi: 'Wi-Fi 5G',
    preco: 109.90, desc: 99.90, streaming: [], pop: true,
    itens: [
      '500 Mbps fibra óptica',
      'Wi-Fi 5G incluso',
      'Suporte Prioritário',
      'Instalação grátis',
      'IP Dinâmico',
    ],
  },
  {
    id: 4, nome: 'Ultra', vel: '600', wifi: 'Super Wi-Fi 6',
    preco: 129.90, desc: 119.90, streaming: ['Paramount+', 'Watch Canais'], pop: false,
    itens: [
      '600 Mbps fibra óptica',
      'Super Wi-Fi 6 incluso',
      'Suporte VIP',
      'Instalação grátis',
      'Paramount+ incluso',
      'Watch Canais incluso',
    ],
  },
  {
    id: 5, nome: 'Max', vel: '800', wifi: 'Super Wi-Fi 6',
    preco: 159.90, desc: 149.90, streaming: ['Paramount+', 'Watch Canais'], pop: false,
    itens: [
      '800 Mbps fibra óptica',
      'Super Wi-Fi 6 incluso',
      'Suporte VIP 24h',
      'Instalação grátis',
      'Paramount+ incluso',
      'Watch Canais incluso',
    ],
  },
]

export const CANAIS = {
  abertos: [
    { n: 'RedeTV!',   img: '/images/canal-redetv.png'   },
    { n: 'SBT',       img: '/images/canal-sbt.png'      },
    { n: 'Record TV', img: '/images/canal-record.png'   },
    { n: 'Band',      img: '/images/canal-band.png'     },
    { n: 'Band News', img: '/images/canal-bandnews.png' },
  ],
  paramount: [
    { n: 'Comedy Central', img: '/images/canal-comedy-central.png' },
    { n: 'Nickelodeon',    img: '/images/canal-nickelodeon.png'    },
    { n: 'Nick Jr.',       img: '/images/canal-nickjr.png'         },
    { n: 'MTV',            img: '/images/canal-mtv.png'            },
  ],
}

export const FAQ = [
  {
    q: 'Qual a diferença entre Wi-Fi Básico, 5G e Super Wi-Fi 6?',
    a: 'O Wi-Fi Básico funciona em 2.4 GHz, ideal para uso simples. O Wi-Fi 5G opera em 5 GHz com maior velocidade e menor interferência. O Super Wi-Fi 6 (802.11ax) é a tecnologia mais avançada, com maior capacidade para múltiplos dispositivos simultâneos, ideal para casas modernas e home office.',
  },
  {
    q: 'Como funciona o desconto de pontualidade?',
    a: 'Todos os planos possuem desconto de R$10 quando o pagamento é realizado até a data de vencimento. O preço com desconto já está destacado nos cards de cada plano.',
  },
  {
    q: 'Preciso pagar taxa de instalação?',
    a: 'A instalação é completamente gratuita em todos os planos. Caso haja necessidade de visita técnica adicional por problema na rede interna do cliente, será cobrada conforme Tabela de Preços vigente.',
  },
  {
    q: 'Qual o prazo do contrato?',
    a: 'O contrato tem vigência de 12 meses, com renovação automática. O cancelamento pode ser solicitado com 30 dias de antecedência, sem multa após o período de fidelidade.',
  },
  {
    q: 'O que acontece se eu não pagar no vencimento?',
    a: 'Em caso de inadimplência: bloqueio parcial após 15 dias, bloqueio total após 45 dias e cancelamento após 75 dias. Incide multa de 2% + juros de 1% ao mês sobre o valor em atraso.',
  },
  {
    q: 'Posso mudar de plano?',
    a: 'Sim! Upgrade ou downgrade podem ser solicitados a qualquer momento pelo WhatsApp ou Central de Atendimento. A migração está sujeita à viabilidade técnica da sua região.',
  },
  {
    q: 'O que inclui nos planos Ultra (600MB) e Max (800MB)?',
    a: 'Além da internet fibra óptica com Super Wi-Fi 6, esses planos incluem Paramount+ e Hub Watch, com canais abertos (RedeTV!, SBT, Band, Record, entre outros) e canais pagos (Arte1, Agro+, Comedy Central, Nickelodeon, MTV e mais).',
  },
  {
    q: 'Como entro em contato com o suporte?',
    a: 'Suporte disponível 24h pelo WhatsApp (21) 99658-4222, pelo telefone (21) 2636-1252 / 2635-9113, ou pela Área do Cliente no portal online.',
  },
]

export const CLAUSULAS = [
  { n: '1. Do Objeto',              d: 'Prestação do Serviço de Rede de Acesso, condicionado ao resultado positivo do Teste de Instalação.' },
  { n: '2. Características',        d: 'Disponibilidade 24h/dia, exceto manutenções. Interrupções >4h geram crédito proporcional na mensalidade.' },
  { n: '3. Preços e Pagamento',     d: 'Mensalidade conforme Tabela de Preços vigente. Reajuste anual pelo IGP-DI (FGV). Boleto ou meios autorizados.' },
  { n: '4. Inadimplência',          d: 'Multa 2% + juros 1%/mês. Bloqueio parcial: 15 dias. Bloqueio total: 45 dias. Cancelamento: 75 dias.' },
  { n: '5. Prazo e Vigência',       d: '12 meses com renovação automática. Cancelamento com 30 dias de antecedência.' },
  { n: '6. Rescisão',               d: 'Por impossibilidade técnica, determinação judicial ou inadimplência do assinante.' },
  { n: '7. Deveres do Assinante',   d: 'Manter login e senha em sigilo, não compartilhar conexão com terceiros, manter dados cadastrais atualizados.' },
  { n: '8. Direitos do Assinante',  d: 'Atendimento não discriminatório, informação adequada sobre o serviço e recurso à ANATEL ou PROCON.' },
  { n: '9. Migração de Planos',     d: 'Solicitável a qualquer tempo, sujeita à viabilidade técnica e eventuais taxas administrativas.' },
  { n: '10. Deveres da Contratada', d: 'Prestar o serviço dentro dos mais altos padrões técnicos, garantir privacidade dos dados e informar interrupções.' },
]
