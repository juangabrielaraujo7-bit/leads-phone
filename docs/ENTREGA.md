# Apresentação LEADS PHONE

## Implementado

Home com hero em vídeo, seis páginas de serviços, antes/depois demonstrativo, avaliações fictícias identificadas, diferenciais confirmados, seis marcas, acessórios ilustrativos, FAQ, localização, contato, privacidade e página 404. WhatsApp e Instagram centralizados. Títulos, descrições, favicon, imagem de compartilhamento e schema adaptados.

Vídeo real da empresa, sem afirmar qual reparo está sendo realizado. H.264, 540 × 960, 13,47 segundos, 890.522 bytes (original: 1.563.252 bytes; redução de aproximadamente 43%). Sem faixa de áudio. Poster WebP extraído do próprio vídeo: 45.114 bytes. Tela e moldura compartilham a mesma transformação. Pausa acessível, respeito à preferência de movimento reduzido e poster quando a reprodução não inicia.

A base original foi mantida em sua pasta. O projeto não inclui a identidade comercial, os clientes, as fotografias de reparos, o perfil do Google, segredos ou vínculos de deploy da empresa de referência. As ilustrações genéricas dos serviços e quatro marcas foram reaproveitadas como recursos ilustrativos.

## Verificação

- Astro check: 25 arquivos, zero erros, avisos ou hints.
- Build estático: nove páginas HTML, incluindo 404, além de robots e sitemap.
- Testes no Chrome com cabeçalhos de produção: oito páginas navegáveis, imagens e links internos válidos, WhatsApp correto e mensagens por serviço.
- Responsividade: home e página de bateria em 320, 390, 768, 1024 e 1440 px, sem overflow horizontal.
- Axe WCAG A/AA: nenhuma violação detectada nas oito páginas.
- Menu mobile, perguntas, carrossel, ampliação e Escape, pausa das avaliações e vídeo, preferência de movimento reduzido e navegação sem JavaScript testados.
- Vídeo: reprodução real confirmada, muted/loop/playsinline e ausência de controles nativos; proporção 9:16 preservada.
- Apresentação com noindex, robots bloqueado, sitemap vazio e nenhum Review/AggregateRating fictício no schema.
- Detector visual da skill: avisos consultivos sobre cores, raios e tamanhos fora da documentação anterior; a documentação foi atualizada para os novos efeitos solicitados. Revisão visual independente: SHIP, sem correções obrigatórias.

Evidências locais em artifacts/verification.json e capturas desktop/mobile. Checks automáticos não substituem testes com tecnologias assistivas reais.

## A confirmar ou substituir

1. Situação da mudança e endereço efetivo de atendimento antes de apresentar como definitivo.
2. Horários. Por enquanto: “Consulte os horários pelo WhatsApp”.
3. Fotos da fachada, interior e antes/depois; os espaços atuais são exemplos ilustrativos.
4. Avaliações reais com autorização. Os seis depoimentos atuais são fictícios e não são atribuídos ao Google.
5. Categorias e disponibilidade de acessórios: capinhas, películas, cabos/carregadores e fones são demonstrativos.
6. Prazo e condições da garantia, diagnóstico, parcelamento e disponibilidade de reparos no mesmo dia.
7. Domínio e vínculo de hospedagem. Manter presentation=true até revisar todo o conteúdo demonstrativo.

O cartão de localização e a rota usam somente o endereço fornecido; nenhum perfil comercial foi inventado. Serviços externos dependem de conexão e disponibilidade de seus provedores.


## Ajustes após apresentação
Hero preto com faixas ciano sem pontinhos. Smartphone com aro metálico, vidro, câmera frontal e neon azul. Serviço de aparelho molhado removido da home, navegação e página (agora 404). Fileira de seis serviços com três cards no desktop, setas, teclado e toque no mobile. Marca visual Google Reviews da base adicionada com aviso de demonstração e ausência de perfil comercial. WhatsApp acompanha a rolagem. Novas interações verificadas; oito rotas, dez combinações responsivas e zero violações axe.
