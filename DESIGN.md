---
name: LEADS PHONE
description: Sistema Kacell preservado na LEADS PHONE, com refinamentos aprovados de hero preto/ciano e carrossel de serviços.
colors:
  blue: "#176cc3"
  blue-hover: "#125cab"
  blue-on-white: "#145fa9"
  ink: "#182632"
  white: "#fff"
  muted: "#536472"
  muted-on-blue: "#e5f1ff"
  line: "#dbe5ee"
  line-on-blue: "#ffffff50"
  pale-surface: "#edf5fc"
  media-surface: "#f0f6fc"
  hero-black: "#030609"
  hero-cyan: "#25c5ff"
  hero-cyan-hover: "#76dfff"
  hero-cyan-ink: "#061723"
  streak-cyan: "#00cfff"
  service-surface: "#f3f5f7"
  service-line: "#dfe5ed"
  service-tint-blue: "#e7f4fc"
  service-tint-lilac: "#ebedf5"
  service-tint-periwinkle: "#e8efff"
typography:
  display:
    fontFamily: "'Manrope Variable', Manrope, Arial, sans-serif"
    fontSize: "clamp(38px, 4.1vw, 58px)"
    fontWeight: 750
    lineHeight: 1.13
    letterSpacing: "-.04em"
  headline:
    fontFamily: "'Manrope Variable', Manrope, Arial, sans-serif"
    fontSize: "clamp(30px, 3.2vw, 44px)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-.04em"
  title:
    fontSize: "20px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-.035em"
  body:
    fontFamily: "'Manrope Variable', Manrope, Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
  button:
    fontSize: "14px"
    fontWeight: 750
    lineHeight: 1.4
  label:
    fontSize: "11px"
    fontWeight: 800
    letterSpacing: ".14em"
rounded:
  button: "8px"
  card: "16px"
  review: "14px"
  dropdown: "12px"
  icon: "10px"
  demo-label: "6px"
  phone: "39px"
  phone-screen: "31px"
  service-carousel-card: "24px"
  service-carousel-card-mobile: "22px"
  floating-contact: "40px"
spacing:
  section: "88px"
  section-mobile: "56px"
  container-gutter: "40px"
  container-gutter-tablet: "32px"
  container-gutter-mobile: "20px"
  service-grid-gap: "26px"
  service-carousel-gap: "24px"
  service-carousel-gap-mobile: "18px"
  section-heading-after: "40px"
  button-gap: "14px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
  button-hero:
    backgroundColor: "{colors.hero-cyan}"
    textColor: "{colors.hero-cyan-ink}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-hero-hover:
    backgroundColor: "{colors.hero-cyan-hover}"
  button-on-blue:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue-on-white}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  service-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  review-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.review}"
    padding: "22px"
  service-carousel-card:
    textColor: "{colors.ink}"
    rounded: "{rounded.service-carousel-card}"
  floating-whatsapp:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.floating-contact}"
    padding: "14px 20px"
---

# Design System: LEADS PHONE

## Overview

**Creative North Star: "Continuidade Kacell, identidade LEADS PHONE"**

A direção é a continuidade visual explicitamente pedida: preservar composição, tipografia, componentes, efeitos e responsividade da base Kacell, com os refinamentos posteriores aprovados pelo usuário. A identidade própria aparece na marca LEADS PHONE, nas seções brancas e azuis e no material real da assistência. O hero preto com luz ciano e o carrossel de serviços são exceções específicas aprovadas, não uma substituição geral do sistema.

O conjunto combina títulos fortes, leitura direta, superfícies claras e seções azuis amplas. O hero usa feixes diagonais suaves e um smartphone realista com brilho ciano; serviços usam cards arredondados com gradientes claros em uma única faixa horizontal. Fotografias, vídeo e rótulos devem conservar seu contexto e sua legibilidade.

**Key Characteristics:**
- Manrope em toda a interface, com títulos pesados e espaçamento compacto entre letras.
- Seções brancas e azuis, com exceção aprovada do hero preto/ciano e da superfície clara de serviços; nenhum fundo de seção azul-marinho.
- Cantos suaves, bordas leves e ícones Tabler de traço fino.
- Vídeo real de manutenção dentro de um smartphone metálico com reflexos, ilha de câmera e brilho ciano.
- Carrossel horizontal de serviços e contato flutuante responsivo.
- Exemplos de apresentação sempre identificados como ilustrativos.

## Colors

### Primary

O azul da identidade é a superfície de destaque e a cor de ação sobre branco. `blue-hover` escurece os botões no hover. `blue-on-white` colore o texto do botão branco sobre uma seção azul.

### Secondary

O ciano é uma exceção localizada no hero: `hero-cyan` colore a ação principal, `hero-cyan-hover` seu hover e `hero-cyan-ink` seu texto. `streak-cyan` define os feixes diagonais que se apagam gradualmente no fundo. Não estenda esse tratamento às seções azuis existentes.

### Neutral

`white` é a base do cabeçalho, das seções claras e dos cards. `ink` é texto principal e também a superfície de um botão de rota; não é fundo de seção. `muted` é texto secundário sobre branco. `muted-on-blue` mantém textos auxiliares claros nas áreas azuis. `line` e `line-on-blue` separam conteúdos em suas respectivas superfícies. `pale-surface` e `media-surface` apoiam mapas, avisos e imagens de serviços.

`hero-black` é o fundo preto exclusivo do hero. `service-surface` e `service-line` definem a área de serviços e suas bordas; os três tokens `service-tint-*` são os finais dos gradientes claros de cards, sempre iniciados em branco.

**The Alternating Surfaces Rule.** Preserve as seções brancas e azuis existentes, com as exceções aprovadas do hero preto/ciano e da superfície clara de serviços. O nome legado `dark` continua significando azul da identidade fora do hero, nunca azul-marinho.

**The Contrast Rule.** Em áreas azuis, use títulos e ícones brancos, texto auxiliar claro e ações principais brancas com texto azul. Em áreas brancas, use texto escuro e ações azuis com texto branco.

**The Hero Exception Rule.** Restrinja preto, feixes ciano e CTA ciano ao hero. Os feixes usam gradiente e máscaras; não acrescente pontos, ruído ou textura granulada.

## Typography

**Display Font:** Manrope Variable, Manrope, Arial, sans-serif.
**Body Font:** A mesma família do display.

O contraste vem do tamanho e do peso, sem combinar famílias decorativas. Preserve as quebras de título deliberadas da composição existente.

### Hierarchy

- **Display:** título do hero conforme o token. No mobile muda para `clamp(30px, 7.8vw, 47px)`.
- **Headline:** títulos de seção. O título da seção de avaliações usa entrelinha própria de 1.16.
- **Title:** o token descreve o card padrão. No carrossel de serviços, títulos usam 20px, entrelinha 1.3 e altura mínima de 52px; entre 1024px e 1199px usam 18px. Títulos auxiliares variam entre 16px e 21px conforme o componente.
- **Body:** base global. Textos de seção usam 15px; descrições de cards padrão, 13px com entrelinha 1.8. O carrossel de serviços usa 14px e passa a 13px até 1199px, sempre com entrelinha 1.8.
- **Button:** ações de tamanho padrão; cabeçalho e ações compactas usam 12px.
- **Label:** sobrelinhas em caixa alta. Rótulos de demonstração são distintos: discretos, em tamanho de 10px a 12px, com palavras completas e contraste azul sobre branco.

## Layout

O contêiner tem largura máxima de 1200px. As margens laterais passam de 40px para 32px até 1199px, e para 20px até 767px. O espaçamento de seção segue os tokens; seções específicas mantêm os ajustes herdados.

O hero usa duas colunas `minmax(0, 1.45fr) minmax(0, 1fr)`, altura mínima de 630px, espaço entre colunas de 35px e padding vertical de 48px. Até 1023px, a altura mínima é 570px. Até 767px, há uma coluna, altura livre, padding vertical de 32px/28px e gap de 28px: título, descrição e botões vêm antes do celular.

Os seis serviços da página inicial ficam em uma faixa horizontal com scroll-snap: três cards por vista no desktop, dois até 1023px e cards com 88% da largura até 767px, deixando o próximo card sugerir continuidade. O gap é 24px, reduzido para 18px no mobile. Setas ficam nas laterais no desktop e abaixo da faixa no mobile; arrastar e usar as setas do teclado também permite navegar. A grade herdada continua disponível para serviços relacionados. Benefícios usam quatro colunas, passando a duas até 1023px. Marcas usam três colunas e passam a duas no mobile. FAQ e localização passam de duas colunas para uma até 767px.

O cabeçalho é fixo durante a rolagem (`sticky`), com 88px de altura e 78px até 1023px. A navegação recolhe nesse mesmo breakpoint. Os outros ajustes herdados aparecem em 1199px, 599px, 359px e a partir de 1500px; não substitua esses pontos por uma nova escala genérica.

## Elevation & Depth

A página usa bordas e tons claros como estrutura principal. Cards de avaliação e do carrossel de serviços não têm sombra; os gradientes suaves do carrossel dão volume sem acrescentar camadas. Cards de serviço fora do carrossel preservam o hover herdado. Dropdowns, setas do carrossel e contato flutuante usam sombra localizada. O hero usa cinco feixes ciano com opacidade .2, inclinados por `skewX(45deg)`, máscaras lineares e um campo radial; não há pontos ou ruído.

O celular combina perspectiva de 1200px, rotação nos três eixos, borda metálica, reflexos de vidro, ilha de câmera com lente frontal, botões laterais e brilho neon ciano. O carrossel de resultados mantém perspectiva de 1100px, põe o resultado central em foco e recua os vizinhos por escala, rotação, opacidade e desfoque. As avaliações mantêm duas faixas com movimento lento; no mobile, a movimentação passa a horizontal.

As transições de botões duram .18s, imagens de serviço .25s e slides .5s. As avaliações percorrem ciclos de 48s e 54s, com pausa por hover, foco e controle explícito. Preserve as pausas e a redução de movimento: animações e transições são desativadas quando o usuário solicita movimento reduzido.

## Shapes

Cards de serviço padrão e resultado usam o raio `card`; o carrossel de serviços usa `service-carousel-card` e `service-carousel-card-mobile`; avaliações usam `review`; botões usam `button`. Ícones sobrepostos permanecem apenas nos cards de serviço fora da faixa horizontal. Controles de avançar e voltar são circulares. O contato flutuante é uma cápsula no desktop e um círculo no mobile.

A moldura do smartphone tem largura de 260px no desktop, 235px até 1023px e 190px até 767px. Seus raios de moldura e tela passam a 31px e 25px no mobile. A tela mantém proporção 9:16 e vídeo em `object-fit: contain`, evitando cortes no registro original.

## Components

### Buttons

Botões são compactos, de peso forte, com ícone quando útil. A altura mínima padrão é 50px, com gap interno de 10px e borda de 1px. A ação principal sobre branco é azul; sobre azul, branca. Ghost é transparente com borda branca; outline usa borda cinza azulada sobre branco. O botão escuro é reservado à variante já existente.

No hero preto, a ação principal é ciano com texto escuro e brilho discreto. O ghost do hero recebe fundo branco quase transparente e borda branca translúcida. Essa combinação não altera os botões das demais seções.

Hover altera superfície e borda; pressionar desloca o botão 1px para baixo. O foco visível usa contorno de 3px com afastamento de 5px, azul sobre branco e branco dentro de seções azuis. Preserve os ajustes compactos já presentes no cabeçalho e na localização.

### Cards / Containers

Cards de serviço no carrossel usam gradiente a 140 graus de branco para azul claro, lilás ou pervinca, repetindo a sequência a cada três cards. A imagem permanece inteira em área transparente de 244px no desktop. O corpo tem padding de 20px 25px 23px e alinha a única ação “Conhecer o serviço” ao rodapé, com seta à direita. Essa variante não usa ícone sobreposto, linha divisória nem segundo botão de WhatsApp. A imagem mantém o deslocamento de 3px no hover e o selo “Ilustração” permanece visível. Os cards padrão fora do carrossel preservam a estrutura herdada.

Cards de resultado são brancos e mostram a imagem completa, sem recorte, com legenda externa. O rótulo “Exemplo ilustrativo · fotos a substituir” faz parte do componente. O carrossel usa controles com área mínima de 44px e amplia a imagem em diálogo.

Cards de avaliação têm borda leve, estrelas azuis, texto, identificação e rótulo explícito de exemplo. A marca Google Reviews aparece acima do título da seção com 148px de largura, ou 132px no mobile, e margem inferior de 25px. Preserve junto dela a explicação de que os depoimentos são fictícios e a LEADS PHONE ainda não possui perfil no Google. A apresentação não deve sugerir que os relatos fictícios são depoimentos publicados por clientes.

### Navigation

Cabeçalho branco com marca vertical, links compactos e CTA azul. O menu de serviços é um dropdown branco com cantos suaves e hover azul muito claro. No mobile, a navegação abre como painel sob o cabeçalho; o menu permanece acessível por botão. Preserve o tratamento visível de foco e o link de salto ao conteúdo.

### FAQ

Perguntas ficam em linhas separadas por bordas, com controle nativo de expansão e ícone que gira ao abrir. Na seção branca, a pergunta aberta e o ícone usam azul. O conteúdo mantém largura de leitura e entrelinha confortável; não transforme o FAQ em cards aninhados.

### Smartphone com vídeo

O hero utiliza o vídeo real fornecido, com poster e imagem alternativa, dentro da moldura CSS de smartphone. O vídeo é mudo, inline e em loop, com botão de pausa. A legenda identifica o registro real. Preserve esse ativo e sua ordem no mobile.

### Hero com feixes ciano

O componente nativo Astro `ElegantDarkPattern` implementa a referência visual aprovada com cinco camadas decorativas, máscaras e gradientes CSS. O conteúdo fica acima do campo luminoso; as camadas decorativas são ignoradas por tecnologias assistivas. Não introduza dependência React para reproduzir a referência.

### Carrossel de serviços

A faixa tem foco próprio e navegação por teclado, setas e gesto de rolagem. Controles têm 48px no desktop e 44px até 1023px. A seta desativada desaparece no desktop e fica visível com opacidade .35 no mobile. Sem JavaScript, a faixa continua rolável e os botões são ocultados. Preserve a indicação textual para deslizar; o serviço de aparelho molhado foi removido da lista atual de seis serviços.

### WhatsApp flutuante

O atalho aparece depois de 240px de rolagem e permanece no canto inferior direito, com rótulo no desktop e apenas ícone no mobile. Usa azul da marca, sombra suave, altura mínima de 56px e foco ciano. O posicionamento desktop fica a 28px da direita e 24px da base; no mobile, a 18px de ambas, sempre somando a área segura inferior. O rodapé reserva espaço para o controle. Enquanto oculto, o atalho também fica inerte; a impressão o remove.

## Do's and Don'ts

### Do:
- **Do** preservar Manrope, ícones Tabler e o sistema herdado da Kacell fora dos refinamentos explicitamente aprovados.
- **Do** manter as seções brancas e azuis, reservando preto/ciano ao hero e gradientes claros ao carrossel de serviços.
- **Do** manter o vídeo real no smartphone e o texto antes dele no mobile.
- **Do** conservar rótulos legíveis de demonstração em resultados, avaliações e acessórios ilustrativos.
- **Do** preservar imagens completas, controles de pausa, foco visível e movimento reduzido.
- **Do** manter navegação por setas, toque e teclado no carrossel e o contato flutuante responsivo.

### Don't:
- **Don't** introduzir fundos de seção azul-marinho ou estender a exceção preta do hero às demais seções.
- **Don't** substituir o sistema herdado por outro conceito, família tipográfica ou composição.
- **Don't** remover rótulos de exemplo ou apresentar avaliações fictícias como prova social real.
- **Don't** espalhar o relevo do smartphone por todos os cards ou recortar imagens para preencher molduras.
- **Don't** adicionar pontos ou ruído ao hero, nem transformar a marca Google Reviews em uma alegação de avaliações reais.

<!-- Fonte normativa da implementação: src/styles/global.css, social-proof.css, hero.css, result-carousel.css, brand.css e refinements.css, nessa ordem de importação em src/layouts/Layout.astro. refinements.css contém as substituições finais aprovadas. -->
