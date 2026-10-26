# Dona Madame — site institucional

Esta entrega contém a segunda versão visual, refeita com a identidade e as imagens reais da cliente. Consulte REVISAO-VISUAL.md para referências verificadas, aplicação das fotos e pendências.

Execute `node serve.mjs` nesta pasta e abra http://localhost:4173. Para gerar as páginas novamente, execute `node build.mjs`.

Rotas: /, /procedimentos/, /sobre/, /contato/ e 51 páginas individuais em /procedimentos/[slug]/. Filtros por categoria, busca por nome, carrossel manual, menu mobile e WhatsApp com mensagens por serviço permanecem funcionais.

Fontes: Playfair Display e Jost, como na página da bio. Fotos e logotipo ficam em dist/assets. Estilos em dist/style.css. Conteúdo em build.mjs e home.mjs. Interações em dist/app.js. Fontes externas têm fallback local.

O domínio original não foi alterado. O projeto está preparado para GitHub Pages, inclusive em subpastas. `site.config.json` define a URL padrão; `SITE_URL` pode substituí-la durante o build.

## Publicação pelo GitHub Pages

O workflow `.github/workflows/pages.yml` gera as páginas, verifica os arquivos e publica `dist` a cada push em `main`. Em Settings → Pages, a origem deve ser GitHub Actions. Apenas as ações oficiais recebem permissões de publicação; nenhum token é salvo no código.

Validação local: `npm run build` e `npm run check`. Não há dependências para instalar. O servidor local respeita o prefixo configurado e imprime a URL correta ao iniciar.

Os assets, CSS e JavaScript são versionados em `dist`; HTML, sitemap e robots são gerados. O build cria `.nojekyll` e uma página 404. A indexação continua bloqueada durante a fase de apresentação.
