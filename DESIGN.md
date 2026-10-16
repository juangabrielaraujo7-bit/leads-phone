---
name: LEADS PHONE
description: Sistema visual herdado da Kacell, aplicado à identidade branca e azul da LEADS PHONE.
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
  phone: "38px"
  phone-screen: "23px"
spacing:
  section: "88px"
  section-mobile: "56px"
  container-gutter: "40px"
  container-gutter-tablet: "32px"
  container-gutter-mobile: "20px"
  service-grid-gap: "26px"
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
---

# Design System: LEADS PHONE

## Overview

**Creative North Star: "Continuidade Kacell, identidade LEADS PHONE"**

A direção é a continuidade visual explicitamente pedida: preservar composição, tipografia, componentes, efeitos e responsividade da base Kacell. A identidade própria aparece na marca LEADS PHONE, na alternância de branco e azul e no material real da assistência. Esta descrição registra a implementação; não propõe uma nova linguagem visual.

O conjunto combina títulos fortes, leitura direta, superfícies claras e seções azuis amplas. O relevo fica concentrado no celular do hero e nos efeitos herdados de carrossel e avaliações. Fotografias, vídeo e rótulos devem conservar seu contexto e sua legibilidade.

**Key Characteristics:**
- Manrope em toda a interface, com títulos pesados e espaçamento compacto entre letras.
- Alternância de seções brancas e azuis; nenhum fundo de seção azul-marinho.
- Cantos suaves, bordas leves e ícones Tabler de traço fino.
- Vídeo real de manutenção dentro de uma moldura de smartphone.
- Exemplos de apresentação sempre identificados como ilustrativos.

## Colors

### Primary

O azul da identidade é a superfície de destaque e a cor de ação sobre branco. `blue-hover` escurece os botões no hover. `blue-on-white` colore o texto do botão branco sobre uma seção azul.

### Neutral

`white` é a base do cabeçalho, das seções claras e dos cards. `ink` é texto principal e também a superfície de um botão de rota; não é fundo de seção. `muted` é texto secundário sobre branco. `muted-on-blue` mantém textos auxiliares claros nas áreas azuis. `line` e `line-on-blue` separam conteúdos em suas respectivas superfícies. `pale-surface` e `media-surface` apoiam mapas, avisos e imagens de serviços.

**The Alternating Surfaces Rule.** Preserve a alternância branca/azul existente. O nome legado `dark` no código significa azul da identidade, nunca azul-marinho.

**The Contrast Rule.** Em áreas azuis, use títulos e ícones brancos, texto auxiliar claro e ações principais brancas com texto azul. Em áreas brancas, use texto escuro e ações azuis com texto branco.

## Typography

**Display Font:** Manrope Variable, Manrope, Arial, sans-serif.
**Body Font:** A mesma família do display.

O contraste vem do tamanho e do peso, sem combinar famílias decorativas. Preserve as quebras de título deliberadas da composição existente.

### Hierarchy

- **Display:** título do hero conforme o token. No mobile muda para `clamp(30px, 7.8vw, 47px)`.
- **Headline:** títulos de seção. O título da seção de avaliações usa entrelinha própria de 1.16.
- **Title:** títulos dos cards de serviços. Títulos auxiliares variam entre 16px e 21px conforme o componente.
- **Body:** base global. Textos de seção usam 15px; descrições de cards, 13px com entrelinha 1.8. No mobile, várias descrições passam a 12px ou 14px conforme o contexto.
- **Button:** ações de tamanho padrão; cabeçalho e ações compactas usam 12px.
- **Label:** sobrelinhas em caixa alta. Rótulos de demonstração são distintos: discretos, em tamanho de 10px a 12px, com palavras completas e contraste azul sobre branco.

## Layout

O contêiner tem largura máxima de 1200px. As margens laterais passam de 40px para 32px até 1199px, e para 20px até 767px. O espaçamento de seção segue os tokens; seções específicas mantêm os ajustes herdados.

O hero usa duas colunas `minmax(0, 1.45fr) minmax(0, 1fr)`, altura mínima de 590px, espaço entre colunas de 35px e padding vertical de 42px. Até 1023px, a altura mínima é 540px. Até 767px, há uma coluna, altura livre, padding vertical de 30px/22px e gap de 26px: título, descrição e botões vêm antes do celular.

Serviços usam três colunas, duas até 1023px e uma até 599px. O último card isolado é centralizado quando a grade tem múltiplas colunas. Benefícios usam quatro colunas, passando a duas até 1023px. Marcas usam três colunas e passam a duas no mobile. FAQ e localização passam de duas colunas para uma até 767px.

O cabeçalho é fixo durante a rolagem (`sticky`), com 88px de altura e 78px até 1023px. A navegação recolhe nesse mesmo breakpoint. Os outros ajustes herdados aparecem em 1199px, 599px, 359px e a partir de 1500px; não substitua esses pontos por uma nova escala genérica.

## Elevation & Depth

A página usa bordas e tons claros como estrutura principal. Cards de serviço e avaliação não têm sombra em repouso na camada final da marca. Cards de serviço ganham borda azul suave e sombra discreta no hover. Dropdowns usam sombra para destacar uma camada temporária. O hero usa luz radial e sombra localizada no smartphone; isso não autoriza sombras pesadas em todos os componentes.

O celular combina perspectiva de 1100px, rotação em dois eixos, acabamento metálico e sombras internas. O carrossel põe o resultado central em foco e recua os vizinhos por escala, rotação, opacidade e desfoque. As avaliações mantêm duas faixas com movimento lento; no mobile, a movimentação passa a horizontal.

As transições de botões duram .18s, imagens de serviço .25s e slides .5s. As avaliações percorrem ciclos de 48s e 54s, com pausa por hover, foco e controle explícito. Preserve as pausas e a redução de movimento: animações e transições são desativadas quando o usuário solicita movimento reduzido.

## Shapes

Cards de serviço e resultado usam o raio `card`; avaliações usam `review`; botões usam `button`. Ícones de serviço ficam em pequenas superfícies quadradas arredondadas. Controles de avançar e voltar do carrossel são circulares.

A moldura do smartphone tem largura de 244px no desktop, 222px até 1023px e 174px até 767px. Seus raios de moldura e tela passam a 29px e 17px no mobile. A tela mantém proporção 9:16 e vídeo em `object-fit: contain`, evitando cortes no registro original.

## Components

### Buttons

Botões são compactos, de peso forte, com ícone quando útil. A altura mínima padrão é 50px, com gap interno de 10px e borda de 1px. A ação principal sobre branco é azul; sobre azul, branca. Ghost é transparente com borda branca; outline usa borda cinza azulada sobre branco. O botão escuro é reservado à variante já existente.

Hover altera superfície e borda; pressionar desloca o botão 1px para baixo. O foco visível usa contorno de 3px com afastamento de 5px, azul sobre branco e branco dentro de seções azuis. Preserve os ajustes compactos já presentes no cabeçalho e na localização.

### Cards / Containers

Cards de serviço têm imagem sobre fundo azul muito claro, pequeno ícone sobreposto à borda da área de imagem, título, descrição e faixa de ações separada por linha. A imagem se desloca 3px para cima no hover. O selo “Ilustração” permanece visível.

Cards de resultado são brancos e mostram a imagem completa, sem recorte, com legenda externa. O rótulo “Exemplo ilustrativo · fotos a substituir” faz parte do componente. O carrossel usa controles com área mínima de 44px e amplia a imagem em diálogo.

Cards de avaliação têm borda leve, estrelas azuis, texto, identificação e rótulo explícito de exemplo. A apresentação não deve sugerir que os relatos fictícios são depoimentos publicados por clientes.

### Navigation

Cabeçalho branco com marca vertical, links compactos e CTA azul. O menu de serviços é um dropdown branco com cantos suaves e hover azul muito claro. No mobile, a navegação abre como painel sob o cabeçalho; o menu permanece acessível por botão. Preserve o tratamento visível de foco e o link de salto ao conteúdo.

### FAQ

Perguntas ficam em linhas separadas por bordas, com controle nativo de expansão e ícone que gira ao abrir. Na seção branca, a pergunta aberta e o ícone usam azul. O conteúdo mantém largura de leitura e entrelinha confortável; não transforme o FAQ em cards aninhados.

### Smartphone com vídeo

O hero utiliza o vídeo real fornecido, com poster e imagem alternativa, dentro da moldura CSS de smartphone. O vídeo é mudo, inline e em loop, com botão de pausa. A legenda identifica o registro real. Preserve esse ativo e sua ordem no mobile.

## Do's and Don'ts

### Do:
- **Do** preservar composição, Manrope, componentes, ícones Tabler e efeitos herdados da Kacell.
- **Do** manter branco e azul alternados com o contraste definido para cada superfície.
- **Do** manter o vídeo real no smartphone e o texto antes dele no mobile.
- **Do** conservar rótulos legíveis de demonstração em resultados, avaliações e acessórios ilustrativos.
- **Do** preservar imagens completas, controles de pausa, foco visível e movimento reduzido.

### Don't:
- **Don't** introduzir fundos de seção azul-marinho ou reinterpretar `dark` como uma nova cor escura.
- **Don't** substituir o sistema herdado por outro conceito, família tipográfica ou composição.
- **Don't** remover rótulos de exemplo ou apresentar avaliações fictícias como prova social real.
- **Don't** espalhar o relevo do smartphone por todos os cards ou recortar imagens para preencher molduras.

<!-- Fonte normativa da implementação: src/styles/global.css, social-proof.css, hero.css, result-carousel.css e brand.css, nessa ordem de importação em src/layouts/Layout.astro. brand.css contém as substituições finais da marca. -->
