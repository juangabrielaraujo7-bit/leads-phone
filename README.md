# LEADS PHONE

Apresentação de assistência técnica de celulares e acessórios em Sorocaba. Astro estático, Manrope, CSS nativo e Tabler. A organização e os componentes da base indicada foram preservados; o projeto original não foi alterado.

## Executar

Requer Node.js 22.12 ou superior.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run verify
```

`verify` usa Chrome instalado, Playwright e axe, serve o build na porta 4322 e gera evidências em `artifacts/`. `node scripts/serve.mjs` abre uma prévia do build na porta 4323 com os cabeçalhos de produção e suporte a vídeo.

## Conteúdo

- `src/data/business.ts`: contato, endereço, horário sob consulta, aviso da mudança, vídeo, perguntas e exemplos de antes/depois.
- `src/data/services.ts`: seis serviços, sinais, explicações, dúvidas e relações entre páginas.
- `src/data/reviews.ts`: depoimentos fictícios, todos identificados como exemplo ilustrativo.
- `src/pages/index.astro`: categorias de acessórios provisórias.
- `public/media/`: vídeo H.264 otimizado, sem áudio, 540 × 960, com poster WebP.

As ilustrações genéricas de serviços e marcas vieram da base fornecida. Não foram copiados depoimentos, fotos de reparos, mockup com perfil do Google, credenciais, `.env`, `.git` ou vínculo de deploy. A logo e o registro de manutenção são os arquivos fornecidos para a LEADS PHONE.

## Publicação

Destino: `juangabrielaraujo7-bit/leads-phone`, branch `main`. Configuração estática compatível com Vercel incluída; nenhum projeto de deploy foi vinculado automaticamente.

`presentation=true` mantém todas as páginas com `noindex`, robots bloqueado e sitemap vazio mesmo se `INDEX_SITE=true`. Antes de habilitar indexação, confirme endereço e mudança, horários e condições comerciais; substitua exemplos por conteúdo real autorizado; configure `SITE_URL` com a origem HTTPS definitiva. Só então altere `presentation` para false e habilite `INDEX_SITE=true`.

## Preparação dos arquivos de mídia

Os arquivos otimizados já estão versionados. A rotina opcional `npm run prepare:assets` usa a logo original local e gera logo, favicon, imagem social, ilustração de tampa e espaços de antes/depois. O arquivo original não é necessário para executar ou publicar o site.

Vídeo preparado com FFmpeg: escala proporcional 540 × 960, H.264, CRF 27, sem áudio, pixels yuv420p e faststart. Poster extraído no segundo 2. Arquivo original preservado localmente.

## Hero e navegação dos serviços
O efeito de fundo fornecido em React foi adaptado para `src/components/ui/ElegantDarkPattern.astro`, com estilos em `src/styles/refinements.css`. Usa slots e classes nativas do Astro; não requer React, shadcn ou Tailwind. As cinco faixas são CSS local, sem pontos nem textura remota. Os componentes do projeto permanecem em `src/components`; os recursos de UI reutilizáveis ficam em `src/components/ui`. `ServiceCarousel.astro` controla a fileira de seis serviços. O botão flutuante de WhatsApp aparece após 240px de rolagem.
