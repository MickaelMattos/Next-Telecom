// src/data/index.js

export const BRAND = {
  wa: 'https://wa.me/5521996584222',
  portal: 'https://ca.next.ispbox.com.br/clientes/login',
  ig: 'https://instagram.com/next_provedor',
  fb: 'https://facebook.com/nextprovedor',
  tel: '(21) 2636-1252',
  whats: '(21) 99658-4222',
  cnpj: '29.203.781/0001-01',
  endereco:
    'Rua Gilmar dos Santos Duarte, nº 350 – Lj 209 Q 14 Lt 3A – Shopping Center Inoã',
  cidade: 'Maricá – RJ',
  cep: 'CEP 24.942-290',
  anatel: '53500.006604/2018-22',
}

export const PLANOS = [
  {
    id: 1,
    nome: 'Start',
    vel: '200',
    wifi: 'Wi-Fi Básico',
    preco: 69.9,
    desc: 59.9,
    streaming: [],
    pop: false,
    itens: ['200 Mbps fibra óptica', 'Wi-Fi Básico incluso'],
  },
  {
    id: 2,
    nome: 'Plus',
    vel: '300',
    wifi: 'Wi-Fi 5G',
    preco: 89.9,
    desc: 79.9,
    streaming: [],
    pop: false,
    itens: ['300 Mbps fibra óptica', 'Wi-Fi 5G incluso'],
  },
  {
    id: 3,
    nome: 'Pro',
    vel: '500',
    wifi: 'Wi-Fi 5G',
    preco: 109.9,
    desc: 99.9,
    streaming: [],
    pop: true,
    itens: ['500 Mbps fibra óptica', 'Wi-Fi 5G incluso'],
  },
  {
    id: 4,
    nome: 'Ultra',
    vel: '600',
    wifi: 'Super Wi-Fi 6',
    preco: 129.9,
    desc: 119.9,
    streaming: ['Paramount+', 'Watch Canais'],
    pop: false,
    itens: [
      '600 Mbps fibra óptica',
      'Super Wi-Fi 6 incluso',
      'Paramount+ incluso',
      'Watch Canais incluso',
    ],
  },
  {
    id: 5,
    nome: 'Max',
    vel: '800',
    wifi: 'Super Wi-Fi 6',
    preco: 159.9,
    desc: 149.9,
    streaming: ['Paramount+', 'Watch Canais'],
    pop: false,
    itens: [
      '800 Mbps fibra óptica',
      'Super Wi-Fi 6 incluso',
      'Paramount+ incluso',
      'Watch Canais incluso',
    ],
  },
]

export const CANAIS = {
  abertos: [
    { n: 'RedeTV!', img: '/images/canal-redetv.png' },
    { n: 'SBT', img: '/images/canal-sbt.png' },
    { n: 'Record TV', img: '/images/canal-record.png' },
    { n: 'Band', img: '/images/canal-band.png' },
    { n: 'Band News', img: '/images/canal-bandnews.png' },
    { n: 'Agro+', img: '/images/canal-agro.png' },
    { n: 'Aparecida', img: '/images/canal-aparecida.png' },
    { n: 'Arte', img: '/images/canal-arte.png' },
    { n: 'Canal Empreendedor', img: '/images/canal-empreendedor.png' },
    { n: 'Gazeta', img: '/images/canal-gazeta.png' },
    { n: 'Rede Viva', img: '/images/canal-redeviva.png' },
    { n: 'Canal Arte', img: '/images/canal-sabor.png' },
    { n: 'Tv Brasil', img: '/images/canal-tvbrasil.png' },
  ],
  paramount: [
    { n: 'Comedy Central', img: '/images/canal-comedy-central.png' },
    { n: 'Nickelodeon', img: '/images/canal-nickelodeon.png' },
    { n: 'Nick Jr.', img: '/images/canal-nickjr.png' },
    { n: 'MTV', img: '/images/canal-mtv.png' },
  ],
}

export const FAQ = [
  // ── PERGUNTAS EXISTENTES ──────────────────────────────────────────────
  {
    q: 'Qual a diferença entre Wi-Fi Básico, 5G e Super Wi-Fi 6?',
    a: 'O Wi-Fi Básico funciona em 2.4 GHz, ideal para uso simples. O Wi-Fi 5G opera em 5 GHz com maior velocidade e menor interferência. O Super Wi-Fi 6 (802.11ax) é a tecnologia mais avançada, com maior capacidade para múltiplos dispositivos simultâneos, ideal para casas modernas e home office.',
  },
  {
    q: 'Como funciona o desconto de pontualidade?',
    a: 'Todos os planos possuem desconto de R$10 quando o pagamento é realizado até a data de vencimento. O preço com desconto já está destacado nos cards de cada plano.',
  },
  {
    q: 'Qual o prazo do contrato?',
    a: 'O contrato tem vigência de 12 meses, com renovação automática. O cancelamento pode ser solicitado com 30 dias de antecedência, sem multa após o período de fidelidade.',
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

  // ── PERGUNTAS NOVAS (transcritas das imagens) ─────────────────────────
  {
    q: 'Desligar e ligar os equipamentos pode resolver o problema da minha conexão?',
    a: 'Sim, as oscilações na rede elétrica podem "travar" tanto a sua ONU (equipamento da fibra) quanto o roteador. Muitas vezes tais oscilações acontecem sem serem percebidas, mas os equipamentos podem ficar travados até serem desligados e ligados novamente.',
  },
  {
    q: 'ONU (equipamento da fibra) e Roteador da empresa - Regras de uso',
    a: 'ONU (Optical Network Unit): É o conversor óptico de rede. Esse equipamento é de propriedade da empresa e suas configurações não devem ser alteradas em hipótese alguma.\n\nROTEADOR: A empresa permite alterações que correm por conta e risco do usuário – visto que a garantia do serviço é feita EXCLUSIVAMENTE por testes via cabo direto na nossa ONU – não damos garantia a cobertura/sinal de WIFI! Chamados técnicos para reconfigurar roteadores também estão sujeitos a cobrança da visita técnica.',
  },
  {
    q: 'Preciso desligar os equipamentos em período chuvoso?',
    a: 'Quando houver chuvas intensas com incidências de raios indica-se desligar todos os equipamentos eletrônicos do local e a retirada de todos os cabos dos mesmos, pois a empresa NEXT não se responsabiliza pela queima de qualquer equipamento interno do cliente.',
  },
  {
    q: 'Estou sem internet. O que fazer?',
    a: '1º Reinicie o Conversor Óptico (ONU) e o roteador. 2º Confira se todos cabos estão conectados corretamente. 3º Se o problema persistir entre em contato conosco através dos nossos canais de atendimento.',
  },
  {
    q: 'Por que o Wi-Fi não cobre a casa inteira?',
    a: 'Problemas no sinal do Wi-Fi podem estar relacionados a diferentes causas. Ao contrário do que se pensa, não é só o roteador e o sinal fornecido que precisam estar intactos: as condições do ambiente e dos aparelhos que vão utilizar a Internet também devem estar boas. Reunimos, a seguir, alguns dos possíveis problemas que podem estar prejudicando a sua Internet Wi-Fi.\n\nAs opções vão desde a posição do roteador na sua casa, até questões mais técnicas, como o canal ao qual você está conectado.\n\n• Posição do roteador\nUm problema comum em relação ao sinal do Wi-Fi é o local onde o roteador foi posicionado. É possível, por exemplo, que, entre o aparelho e seus dispositivos, estejam muitas paredes e objetos grandes. Isso pode acabar atrapalhando o sinal de chegar até o seu dispositivo. Portanto, prefira sempre deixar o roteador em uma zona central da casa. Se houver um corredor, por exemplo, que dê acesso às portas de muitos cômodos, essa pode ser a melhor zona para distribuir sua Internet.\n\n• Número de aparelhos conectados na mesma rede\nHoje em dia vários aparelhos dependem da Internet Wi-Fi. Se você tiver muitos aparelhos conectado a sua rede e utilizando ao mesmo tempo a sua velocidade será dividida por todos os aparelhos.\n\n• Interferência do Bluetooth\nAlgumas vezes, usar dispositivos Bluetooth, como fones, teclados, mouses e caixas de som, pode acabar interferindo no sinal do seu Wi-Fi. Isso acontece porque, eventualmente, esses dispositivos trabalham com a mesma frequência de rádio. Por menos comum que esse problema seja, é bom considerar a hipótese. É recomendável fazer os testes: tente desconectar os seus dispositivos Bluetooth, e veja se o sinal da internet vai melhorar. Se isso acontecer, é bom considerar a possibilidade de mudar o canal do Wi-Fi.\n\n• Canal do Wi-Fi\nO Wi-Fi pode funcionar por meio de diferentes canais e, no geral, os canais configurados por padrão tendem a ficar mais congestionados, já que diversos vizinhos e outras pessoas próximas também podem estar conectados neles. Alguns Apps de celular, como o WiFi Analyzer, ajudam a encontrar o canal ideal para você.',
  },
  {
    q: 'Qual a diferença entre o Wi-Fi 2.4 e o 5G?',
    a: 'As principais diferenças entre as ligações Wi-Fi a 2,4 GHz e a 5 GHz são a velocidade e o alcance.\n\nA frequência de 2,4 GHz do Wi-Fi proporciona uma maior área de cobertura e é melhor para atravessar objetos sólidos, embora com uma velocidade máxima da ordem de 100 Mbps.\n\nA frequência de 5 GHz Wi-Fi oferece maiores velocidades. Contudo, proporciona uma menor área de cobertura e tem maior dificuldade de atravessar objetos sólidos.\n\nAssim, uma transmissão a 2,4 GHz assegura Internet numa área maior, mas a menor velocidade, enquanto uma transmissão a 5 GHz proporciona velocidades maiores, mas menor alcance.\n\nSe pretender um alcance maior para os seus dispositivos, use 2,4 GHz. Se necessitar de uma velocidade maior e puder sacrificar o alcance, use a frequência de 5 GHz.',
  },
  {
    q: 'Tenho um plano de 200Mbps (ou superior), mas meus testes de velocidade não passam de 100Mbps. O que fazer?',
    a: 'Todos os testes tem que ser realizados com o cabo direto no computador. Se não passar de 100mb você precisa verificar se sua placa de rede está conectada em gigabit. Não é possível ultrapassar a velocidade de 100mbps em uma rede que é limitada a até 100mbps. Se você já se certificou de que toda sua rede interna é gigabit e o problema permanece, entre em contato conosco através dos nossos canais de atendimento.',
  },
  {
    q: 'Em caso de lentidão, o que fazer?',
    a: '1º Limpe o histórico de navegação do seu navegador.\n\n2º Desligue e ligue a ONU e o roteador.\n\n3º Ainda com o cabo no computador, realize um novo teste de velocidade, acesse 3 sites diferentes, e caso ainda persista a lentidão, por favor realize contato com a central de atendimento.',
  },
  {
    q: 'Prazo de visitas técnicas.',
    a: 'Informamos que o nosso prazo para visitas técnicas é de até 48 horas – como consta em nosso contrato. Esse prazo pode ser prorrogado com o mal tempo como chuvas e fortes ventanias, por conta dos riscos relacionados rede elétrica.',
  },
  {
    q: 'IPTV:',
    a: 'A Next Provedor não dá suporte a qualquer dispositivo de IPTV (boxes ou softwares). A empresa não tem qualquer controle na qualidade dos serviços prestados pelos distribuidores de conteúdo e não tem como dar suporte a sistemas, programas e/ou plataformas proprietárias.\n\nAtenção: Não são considerados IPTVs os serviços legais de streaming ou VOD como Netflix, Youtube e Amazon Video.',
  },
  {
    q: 'Suporte Técnico',
    a: 'SUPORTE TÉCNICO: Segunda a Sexta: 08h – 21:30h  Sábado: 08h – 20h  Domingo e Feriado: 08h – 17h',
  },
  {
    q: 'Administrativo',
    a: 'Segunda a Sexta: 08h – 18h\nSábado: 08h – 17h',
  },
  {
    q: 'Financeiro',
    a: 'Segunda a Sexta: 08h – 18h\nSábado: 08h – 17h',
  },
]

export const CLAUSULAS = [
  {
    n: '1. Do Objeto',
    d: 'Prestação do Serviço de Rede de Acesso, condicionado ao resultado positivo do Teste de Instalação.',
  },
  {
    n: '2. Características',
    d: 'Disponibilidade 24h/dia, exceto manutenções. Interrupções >4h geram crédito proporcional na mensalidade.',
  },
  {
    n: '3. Preços e Pagamento',
    d: 'Mensalidade conforme Tabela de Preços vigente. Reajuste anual pelo IGP-DI (FGV). Boleto ou meios autorizados.',
  },
  {
    n: '4. Inadimplência',
    d: 'Multa 2% + juros 1%/mês. Bloqueio parcial: 15 dias. Bloqueio total: 45 dias. Cancelamento: 75 dias.',
  },
  {
    n: '5. Prazo e Vigência',
    d: '12 meses com renovação automática. Cancelamento com 30 dias de antecedência.',
  },
  {
    n: '6. Rescisão',
    d: 'Por impossibilidade técnica, determinação judicial ou inadimplência do assinante.',
  },
  {
    n: '7. Deveres do Assinante',
    d: 'Manter login e senha em sigilo, não compartilhar conexão com terceiros, manter dados cadastrais atualizados.',
  },
  {
    n: '8. Direitos do Assinante',
    d: 'Atendimento não discriminatório, informação adequada sobre o serviço e recurso à ANATEL ou PROCON.',
  },
  {
    n: '9. Migração de Planos',
    d: 'Solicitável a qualquer tempo, sujeita à viabilidade técnica e eventuais taxas administrativas.',
  },
  {
    n: '10. Deveres da Contratada',
    d: 'Prestar o serviço dentro dos mais altos padrões técnicos, garantir privacidade dos dados e informar interrupções.',
  },
]
