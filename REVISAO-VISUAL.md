# Dona Madame — revisão visual 2

Redesenho baseado nas referências verificadas em 23/10/2026.

## Referências utilizadas

- Bio oficial: https://esteticadonamadame.com.br/bio/ — rosa #F0A1BD e #D982A2, ameixa #40121E; fontes Playfair Display e Jost; superfícies brancas translúcidas e blur. Esses elementos substituem a direção provisória de marfim/vinho da primeira versão.
- Instagram: https://www.instagram.com/esteticadonamadame/ — logotipo circular com rosa e linguagem “Seu ritual de beleza tem endereço” / “Você agenda um encontro com você”. O logo foi extraído do perfil autorizado pelo usuário e está salvo localmente.
- Catálogo: https://www.canva.com/design/DAE-wyumayk/d1vAHB715mlBrlynrFa9ig/edit — 62 páginas consultadas pelo conector Canva, com composição rosa, serifadas, serviços, apresentação de Marília e informações de atendimento. Nenhuma edição foi feita no catálogo. O conector não permitiu acesso aos elementos originais de imagem por falta de permissão de edição; por isso as miniaturas não foram ampliadas artificialmente para uso no site.
- Google da clínica: https://share.google/A3dRkeVBKj14krC3L — fotos da coleção “Do proprietário”: entrada, recepção, fachada, ritual facial, massagem, esmaltes e espelho. Endereço e WhatsApp conferidos no perfil. Horários conferidos no catálogo.
- Retrato: imagem existente no domínio oficial da cliente, https://esteticadonamadame.com.br/wp-content/uploads/2025/08/madame-bio.webp, compatível com o retrato da bio.

## Aplicação das imagens

As fotografias estão em `dist/assets/`, otimizadas em WebP e servidas localmente, sem hotlink. Entrada no hero; ritual facial e massagem nas categorias; recepção na seção de experiência; Marília em Home e Sobre; recepção, sala e espelho na galeria; fachada no Contato. Nas páginas de serviços, as imagens mostram a experiência da categoria e não documentam cada técnica específica. Alt texts descrevem o que aparece, sem inventar comprovação de resultados.

## Mudanças

Home recomposta com fotografia ampla e fade para rosa; cabeçalho flutuante em vidro; painéis translúcidos com blur, borda luminosa e contraste; grid editorial de categorias; imagem da recepção em destaque; retrato real da fundadora; fades de entrada respeitando redução de movimento. A mesma identidade foi aplicada às demais 54 páginas. Removidos os placeholders abstratos e a marca tipográfica provisória da primeira versão.

## Execução

Na pasta do projeto: `node serve.mjs`. Abrir http://localhost:4173. Para gerar novamente as 55 páginas: `node build.mjs`. Os dados e templates internos estão em `build.mjs`; a Home está em `home.mjs`; os estilos usados são `dist/style.css`; as interações ficam em `dist/app.js`.

## Pendências de conteúdo

Validar credenciais e habilitações profissionais atuais, disponibilidade dos procedimentos e textos técnicos detalhados antes do lançamento público. Não foram incluídos títulos profissionais, resultados garantidos ou antes/depois. O curso no domínio original foi preservado. A indexação continua bloqueada durante a apresentação privada. O logo do Instagram tem resolução limitada na origem; um arquivo vetorial oficial pode substituí-lo sem alteração do layout.
