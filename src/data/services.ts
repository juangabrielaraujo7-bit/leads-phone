export type Service = { slug: string; name: string; short: string; title: string; description: string; intro: string; icon: string; image: string; alt: string; symptoms: string[]; explanation: string; note: string; faqs: {q: string; a: string}[]; related: string[] };
export const services: Service[] = [
  {
    "slug": "troca-de-tela",
    "name": "Troca de tela",
    "short": "Tela quebrada, manchas ou toque falhando? Avaliamos o conjunto de tela do seu aparelho.",
    "title": "Troca de tela de celular em Sorocaba",
    "description": "Tela trincada, sem imagem ou com falhas no toque? Consulte a troca de tela na LEADS PHONE, na Além Ponte, em Sorocaba. Peça seu orçamento.",
    "intro": "Volte a enxergar suas mensagens e usar o toque com conforto. O primeiro passo é avaliar o que aconteceu com a tela.",
    "icon": "device-mobile",
    "image": "troca-de-tela",
    "alt": "Ilustração de um celular com a tela trincada",
    "symptoms": [
      "Vidro quebrado ou tela trincada",
      "Manchas, linhas ou ausência de imagem",
      "Toque sem resposta ou acionando sozinho"
    ],
    "explanation": "A tela reúne o vidro, o sistema de toque e o display. Após avaliar o aparelho, a equipe orienta se é necessária a substituição do conjunto, apresenta as opções disponíveis para o modelo e informa as condições do reparo.",
    "note": "A compatibilidade da peça, o prazo e as condições de garantia são informados antes de você autorizar o reparo.",
    "faqs": [
      {
        "q": "Qual é o valor da troca de tela?",
        "a": "Depende do modelo e das peças disponíveis. Envie a marca, o modelo e uma descrição do problema para pedir um orçamento sem compromisso."
      },
      {
        "q": "Como é escolhido o conjunto de tela?",
        "a": "Após a avaliação, a equipe apresenta as opções compatíveis e explica suas características, o prazo e as condições do serviço."
      }
    ],
    "related": [
      "troca-de-tampa-traseira",
      "troca-de-bateria"
    ]
  },
  {
    "slug": "troca-de-bateria",
    "name": "Troca de bateria",
    "short": "Carga durando pouco ou desligamentos inesperados? Consulte a avaliação da bateria.",
    "title": "Troca de bateria de celular em Sorocaba",
    "description": "Bateria descarregando rápido ou celular desligando? Solicite um orçamento para troca de bateria na LEADS PHONE, em Sorocaba. Celulares.",
    "intro": "A carga já não acompanha a sua rotina? Uma avaliação ajuda a entender se é hora de substituir a bateria.",
    "icon": "battery-2",
    "image": "troca-de-bateria",
    "alt": "Ilustração de celular aberto com a bateria removida",
    "symptoms": [
      "Carga com duração reduzida",
      "Desligamentos inesperados durante o uso",
      "Bateria com alteração de formato"
    ],
    "explanation": "O desgaste da bateria pode afetar a autonomia, mas nem toda falha de carga vem dela. A equipe avalia o aparelho para orientar a substituição quando indicada e confirmar a disponibilidade de uma peça compatível.",
    "note": "Se perceber a bateria estufada, interrompa o uso e procure orientação. Não pressione, perfure ou tente remover a peça em casa.",
    "faqs": [
      {
        "q": "Trocar a bateria resolve qualquer problema de carga?",
        "a": "Não. Conector, cabo e outros componentes também podem estar relacionados. A avaliação ajuda a identificar o serviço necessário."
      },
      {
        "q": "A troca pode ser feita no mesmo dia?",
        "a": "Alguns reparos são realizados no mesmo dia, conforme avaliação e disponibilidade de peças. Confirme o prazo para o seu modelo."
      }
    ],
    "related": [
      "conector-de-carga",
      "reparo-de-placa"
    ]
  },
  {
    "slug": "conector-de-carga",
    "name": "Reparo do conector de carga",
    "short": "Cabo com mau contato ou aparelho sem carregar? Vamos avaliar a conexão de carga.",
    "title": "Reparo de conector de carga em Sorocaba",
    "description": "Celular não carrega ou o cabo apresenta mau contato? Consulte o reparo de conector de carga na LEADS PHONE em Sorocaba. Orçamento sem compromisso.",
    "intro": "Ter que encontrar uma posição para o cabo não precisa fazer parte da rotina. Consulte a avaliação da entrada de carga.",
    "icon": "plug-connected",
    "image": "conector-de-carga",
    "alt": "Ilustração de um celular com a porta de carga e um cabo USB-C desconectado",
    "symptoms": [
      "Carregamento interrompido ao mover o cabo",
      "Aparelho que não reconhece o carregador",
      "Conector com encaixe irregular"
    ],
    "explanation": "Falhas ao carregar podem estar ligadas ao conector, a acessórios ou a componentes internos. A equipe verifica o aparelho e orienta o reparo adequado, sem pressupor que a troca da entrada resolve todos os casos.",
    "note": "Evite forçar o cabo ou inserir objetos na porta de carga. Informe se houve queda, líquido ou dano aparente.",
    "faqs": [
      {
        "q": "Preciso levar meu carregador?",
        "a": "Informe à equipe qual carregador e cabo você usa. Ela orientará quais acessórios levar para ajudar na avaliação."
      },
      {
        "q": "Vocês atendem diferentes tipos de conector?",
        "a": "A disponibilidade depende do modelo do celular e das peças necessárias. Envie essas informações pelo WhatsApp."
      }
    ],
    "related": [
      "troca-de-bateria",
      "reparo-de-placa"
    ]
  },
  {
    "slug": "reparo-de-placa",
    "name": "Reparo de placa",
    "short": "Aparelho que não liga ou apresenta falhas internas? Consulte uma avaliação técnica.",
    "title": "Reparo de placa de celular em Sorocaba",
    "description": "Avaliação de falhas na placa de celulares na LEADS PHONE em Sorocaba. Consulte a viabilidade do reparo e solicite um orçamento.",
    "intro": "Alguns problemas estão nos componentes internos. A avaliação técnica é o ponto de partida para entender as possibilidades de reparo.",
    "icon": "cpu",
    "image": "reparo-de-placa",
    "alt": "Ilustração de uma placa eletrônica de smartphone com seus componentes",
    "symptoms": [
      "Aparelho que não liga",
      "Reinícios ou falhas recorrentes",
      "Funções que deixam de operar após um dano"
    ],
    "explanation": "A placa interliga os componentes do aparelho. Sintomas semelhantes podem ter causas diferentes, por isso a equipe avalia o caso antes de indicar intervenções, prazo ou orçamento. A reparabilidade depende do dano identificado.",
    "note": "Nenhum sintoma isolado confirma um defeito de placa. A viabilidade do reparo só pode ser informada após a avaliação.",
    "faqs": [
      {
        "q": "Toda placa pode ser reparada?",
        "a": "Não é possível garantir. A possibilidade depende da extensão do dano, do modelo e das condições dos componentes."
      },
      {
        "q": "O reparo garante a recuperação dos meus arquivos?",
        "a": "Não. A preservação ou recuperação dos dados não pode ser garantida. Informe à equipe se há arquivos importantes antes de autorizar qualquer serviço."
      }
    ],
    "related": [
      "camera-audio-microfone",
      "conector-de-carga"
    ]
  },
  {
    "slug": "camera-audio-microfone",
    "name": "Câmeras e componentes de áudio",
    "short": "Fotos sem foco, som falhando ou dificuldade nas chamadas? Encontre orientação para o reparo.",
    "title": "Reparo de câmera, áudio e microfone em Sorocaba",
    "description": "Câmera sem foco, áudio baixo ou microfone com falhas? Consulte o reparo de celulares na LEADS PHONE, em Sorocaba. Fale pelo WhatsApp.",
    "intro": "Fotos, chamadas e mensagens de voz fazem parte do dia. Conte qual função está falhando para orientar a avaliação.",
    "icon": "camera",
    "image": "camera-audio-microfone",
    "alt": "Ilustração dos módulos de câmera, alto-falante e microfone de celular",
    "symptoms": [
      "Câmera sem imagem ou com dificuldade de foco",
      "Som ausente, baixo ou distorcido",
      "Voz que não é captada em chamadas ou gravações"
    ],
    "explanation": "Câmeras, alto-falantes e microfones têm funções diferentes e podem apresentar falhas específicas. A equipe verifica o comportamento relatado e orienta o serviço conforme o componente, o modelo e a disponibilidade de peças.",
    "note": "Ao pedir orçamento, descreva se o problema ocorre nas chamadas, nas gravações, nas fotos ou em mais de uma função.",
    "faqs": [
      {
        "q": "Vocês avaliam a câmera frontal e a traseira?",
        "a": "Sim, consulte a disponibilidade para o modelo e indique qual câmera apresenta o problema."
      },
      {
        "q": "Meu áudio falha só em chamadas. É o microfone?",
        "a": "Não é possível concluir a causa à distância. Informar quando a falha acontece ajuda a direcionar a avaliação."
      }
    ],
    "related": [
      "reparo-de-placa",
      "troca-de-tampa-traseira"
    ]
  },
  {
    "slug": "troca-de-tampa-traseira",
    "name": "Troca de tampa traseira",
    "short": "Traseira trincada ou danificada? Consulte a substituição da tampa para o seu modelo.",
    "title": "Troca de tampa traseira em Sorocaba",
    "description": "Tampa traseira do celular quebrada? Consulte a substituição na LEADS PHONE, em Sorocaba. Orçamento sem compromisso pelo WhatsApp.",
    "intro": "A parte de trás também faz parte do cuidado com o seu celular. A equipe avalia a estrutura e a possibilidade de substituição da tampa.",
    "icon": "device-mobile",
    "image": "tampa-traseira",
    "alt": "Diagrama ilustrativo de uma tampa traseira de smartphone",
    "symptoms": [
      "Trincas ou fragmentos na tampa traseira",
      "Tampa solta ou com encaixe irregular",
      "Danos aparentes após uma queda"
    ],
    "explanation": "A avaliação verifica a tampa, a estrutura e os componentes próximos. A equipe consulta a peça compatível com o modelo, explica as opções e informa as condições antes da substituição.",
    "note": "Não pressione uma tampa levantada. Isso pode estar relacionado a outro componente, como a bateria, e precisa ser avaliado.",
    "faqs": [
      {
        "q": "É possível manter a cor original?",
        "a": "A disponibilidade de cores e acabamentos depende das peças para o modelo. Consulte as opções com a equipe."
      },
      {
        "q": "A troca garante resistência à água?",
        "a": "Não há promessa de vedação ou resistência à água após o reparo. Consulte os cuidados recomendados para o seu aparelho."
      }
    ],
    "related": [
      "troca-de-tela",
      "troca-de-bateria"
    ]
  }
];
