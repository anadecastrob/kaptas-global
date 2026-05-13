# Kaptas Global - Elementos Gráficos e Diretrizes do Design System

Este documento fornece todas as especificações técnicas, ativos visuais e diretrizes de design necessárias para que um UI/UX Designer ou Desenvolvedor WordPress replique o site da Kaptas Global (especificamente a Home Page) com precisão "pixel-perfect".

## 1. Filosofia Central de Design
*   **A Mentalidade Estratégica:** O design deve posicionar a Kaptas como uma Parceira de Execução Estratégica de alto nível, e não como uma agência de recrutamento padrão.
*   **Estética:** Elegância técnica, precisão, uso intenso de espaço em branco (whitespace) e transições de alto contraste.
*   **Clima (Mood):** Estratégico, confiante, afiado e premium. Evite visuais genéricos de "IA plana" ou templates corporativos padrão.

---

## 2. Tipografia
A tipografia é a marca registrada desta interface de tecnologia de elite.

*   **Fonte Primária (Sem Serifa):** `Inter` (ou `Geist`). Usada para todos os títulos, textos de corpo e UI em geral.
    *   *Títulos (Headings):* Light (300), Regular (400), SemiBold (600), ExtraBold (800). Alto uso de `tracking-tight` (espaçamento negativo entre letras).
    *   *Corpo (Body):* Regular (400), Medium (500).
*   **Fonte Secundária (Monoespaçada):** `JetBrains Mono` (ou `Fira Code`). Usada para dados técnicos, métricas, pequenas etiquetas (labels) em maiúsculas e tags.
*   **Fonte Terciária (Com Serifa):** Usada exclusivamente no carrossel (marquee) de Prova Social para logotipos de marcas específicas, criando contraste tipográfico.

---

## 3. Paleta de Cores
NÃO use um site "Totalmente Preto". O contraste é usado para marcar as transições entre as seções.

### Fundos e Superfícies (Backgrounds & Surfaces)
*   **Fundo Profundo (Deep Background):** `#050505` (Usado para o contêiner principal, Header e Footer).
*   **Seções Escuras (Preto):** `#111111` (Usado para seções de alto impacto e focadas em narrativa, como Hero e Por que o Brasil).
*   **Cards Escuros:** `#0A0A0A` (Usado para cards no estilo Bento-grid para criar um contraste sutil contra o `#111111`).
*   **Seções Claras (Luz Neutra):** `#F9FAFB` (Usado para seções com muitos dados, estudos de caso e prova social para garantir a legibilidade).
*   **Branco:** `#FFFFFF` (Usado para texto e cards no modo claro).

### Cores de Destaque da Marca (Brand Accents)
*   **Verde:** `#3FB950` (Cor de ação primária, métricas de sucesso, pontos de conversão principais).
*   **Roxo:** `#7D43C5` (Estratégia, profundidade, destaques secundários).
*   **Azul Neon:** `#0047FF` (Usado principalmente para brilhos de fundo e detalhes terciários).

### Cores de Texto (Modo Escuro)
*   **Primária:** `#FFFFFF` (Branco)
*   **Secundária:** `#D1D5DB` (Cinza 300)
*   **Terciária:** `#9CA3AF` (Cinza 400)
*   **Suave (Muted):** `#6B7280` (Cinza 500)

---

## 4. Texturas Visuais e Efeitos (O "Toque de Classe Mundial")
Para evitar um visual genérico, o site depende fortemente de efeitos CSS específicos:

*   **Textura de Ruído/Granulação (Noise/Grain):** Aplique uma granulação sutil texturizada com ruído em gradientes e fundos escuros.
    *   *Implementação:* Use uma sobreposição de ruído SVG (`mix-blend-overlay`, `opacity: 0.2`).
*   **Bordas Fantasmas (Ghost Borders):** Use bordas de 1px com baixa opacidade em vez de linhas sólidas.
    *   *Valores:* `rgba(255, 255, 255, 0.05)` ou `rgba(255, 255, 255, 0.1)`.
    *   *Estados de Hover:* Aumente a opacidade da borda para `0.2` ou `0.3` ao passar o mouse.
*   **Brilhos de Fundo (Glows/Orbs):** Gradientes radiais grandes e altamente desfocados colocados atrás do conteúdo para criar profundidade.
    *   *Valores:* Largura/Altura: `250px` a `500px`. Desfoque (Blur): `100px` a `120px`. Opacidade: `5%` a `15%`.
    *   *Cores:* Verde, Roxo e Azul Neon.
*   **Sombras:** Sombras nítidas e mínimas. Evite drop-shadows suaves e borrados. Use sombras justas para criar uma sensação tátil e "física".

---

## 5. Layout e Sistema de Grid
*   **Largura Máxima (Max Width):** `1280px` (equivalente ao `max-w-7xl` do Tailwind).
*   **Preenchimento (Padding):** Mobile `24px` (`px-6`), Desktop `48px` (`md:px-12`).
*   **Grid:** Sistema de grid de 12 colunas usado para seções complexas (como Footer e Navegação de Serviços).
*   **Bento-Grids:** Usado para recursos, serviços e estudos de caso. Os cards têm cantos arredondados (`border-radius: 24px` ou `32px`).
*   **Transições de Seção:** Ao fazer a transição entre seções Escuras (`#111111`) e Claras (`#F9FAFB`), use um bloco de gradiente linear de 16px (`h-4`) para suavizar a borda dura.

---

## 6. Componentes de UI

### Botões
*   **Primário:** Formato de pílula (`border-radius: 9999px`), Verde Sólido (`#3FB950`), Texto Escuro (`#050505`), Fonte SemiBold.
*   **Secundário (Escuro):** Escuro Sólido (`#111111`), Texto Branco, Fonte SemiBold.
*   **Interações:** Ícones (como ArrowRight) se movem `4px` para a direita no hover.

### Tags e Etiquetas (Micro-UI)
*   **Estilo:** Texto pequeno (`10px` ou `12px`), Fonte monoespaçada, Maiúsculas, espaçamento largo entre letras (`tracking-[0.2em]`).
*   **Formato:** Frequentemente precedido por um pequeno ponto colorido (círculo de `6px por 6px` em Verde, Roxo ou Azul).
*   **Exemplo:** `[Ponto Verde] EXPANSÃO ESTRATÉGICA`

### Cards (Estilo Bento)
*   **Fundo:** `#0A0A0A` ou `#111111`.
*   **Borda:** 1px sólido `rgba(255,255,255,0.1)`.
*   **Raio da Borda (Border Radius):** `24px` (3xl).
*   **Efeito Hover:** A cor da borda muda para uma cor de destaque da marca (Verde/Roxo/Azul com 30% de opacidade), e um brilho de fundo oculto aparece suavemente (`opacity 0` para `100%`).

---

## 7. Estrutura da Home Page (Para Replicação no WP)
A página Home consiste em 13 seções distintas. Certifique-se de que o fluxo e as cores de fundo correspondam exatamente:

1.  **Hero (Escuro):** Fundo de mapa tecnológico, tipografia grande, CTA primário.
2.  **Prova Social / Social Proof (Claro):** Fundo `#F9FAFB`, carrossel horizontal infinito (logotipos/textos em escala de cinza).
3.  **Por que o Brasil / Why Brazil (Escuro):** Fundo `#111111`, lista de 2 colunas com marcas de seleção verdes, linha do tempo de Big Techs na parte inferior.
4.  **Diferenciação / Differentiation (Escuro):** Grid de métricas (20+, 30+, 300+, 75%) e grid de texto de 4 colunas com bordas esquerdas Roxas.
5.  **Segmento Enterprise / Enterprise Segment (Claro):** Fundo `#F9FAFB`, chamada para ação para operações On-Site.
6.  **Como Funciona / How It Works (Escuro):** Cards de processo em 4 etapas (01 a 04) com linha horizontal de conexão no desktop.
7.  **Comparação de Custos / Cost Comparison (Escuro):** O "Dashboard Financeiro". Tabela de alto contraste comparando os custos dos EUA vs. Brasil. Total brilhante em verde na parte inferior.
8.  **Mapeamento de Talentos / Talent Mapping (Claro):** Fundo `#F9FAFB`, dois carrosséis infinitos movendo-se em direções opostas com cargos em formato de pílula.
9.  **Resultados de Casos / Case Results (Escuro):** 3 cards em estilo Bento-grid detalhando sucessos específicos de clientes.
10. **Navegação de Serviços / Service Navigation (Escuro):** 1 bloco de introdução + 4 cards de serviços clicáveis (Outsourcing, Direct Hire, Exec Mapping, On-Site).
11. **Formulário de Geração de Leads / Lead Generation Form (Claro):** Fundo `#F9FAFB`, layout dividido (Texto à esquerda, Card de formulário branco à direita).
12. **Insights do Blog / Blog Insights (Escuro):** Grid de 3 colunas de artigos recentes com tags de categoria coloridas.
13. **FAQ (Escuro):** Estilo sanfona (accordion), bordas de 1px, expande ao clicar.

---

## 8. Notas de Implementação para WordPress
*   **Page Builders (Construtores de Página):** Se estiver usando Elementor ou Bricks Builder, configure as Cores Globais e a Tipografia Global primeiro.
*   **Performance:** Evite plugins pesados para os carrosséis (marquees) e animações. Use animações CSS leves (keyframes) para a rolagem infinita de logotipos e tags.
*   **Brilhos (Glows):** Use elementos `div` com posicionamento absoluto, `filter: blur(120px)` e `border-radius: 50%` para os brilhos de fundo. Certifique-se de que eles tenham `pointer-events: none` para que não bloqueiem os cliques.
*   **Responsividade Mobile:** A tabela de "Comparação de Economia" e os "Bento Grids" devem se adaptar graciosamente em telas menores. Certifique-se de que as áreas de toque (touch targets) no mobile tenham pelo menos 44px.
