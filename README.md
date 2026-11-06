# Site institucional — Bianca Fernandez

Engenharia Civil Diagnóstica · Acessibilidade Arquitetônica e Urbanística

Site multipágina em **React 19 + TypeScript + Vite + Tailwind CSS 4 + React Router 7 + Lucide**, com pré-renderização estática (cada página é publicada como HTML completo, bom para SEO e velocidade).

---

## 1. Antes de publicar — checklist de conteúdo

O site **não inventa dados**. Os dados profissionais estão em
`src/content/pt-BR/profile.ts`. Campos vazios fazem a seção correspondente
**sumir do site publicado**. Em modo de desenvolvimento (`npm run dev`) elas
aparecem com o aviso "Conteúdo pendente".

| Item | Onde editar | Situação atual |
|---|---|---|
| Fotografias | `src/content/pt-BR/photos.ts` (arquivos em `public/images/fotos/`) | ✔ 11 fotos fornecidas pela cliente |
| Formação acadêmica | `education` | ✔ Engenharia Civil; Mestrado Profissional em Engenharia Civil — USJT (em andamento) |
| Produção acadêmica | `research` | ✔ trabalho apresentado no XXVII ENGEMA (FEA/USP, 2025) |
| Qualificações | `qualifications` | ✔ Pós-graduação em Acessibilidade Arquitetônica e Urbanística — INAER (2026) |
| Menção à InspecionAll Engenharia (CEO e sócia-fundadora) | `company` (`show: false` oculta) | exibida na página Sobre |
| Telefone / WhatsApp | `contact.phoneDisplay` / `contact.whatsapp` | ✔ (11) 94896-5283 |
| E-mail | `contact.email` | ✔ inspecionallengenharia@gmail.com |
| LinkedIn / Instagram | `contact.linkedin` / `contact.instagram` | ✔ |
| Registro profissional (CREA) | `professionalRegistration` | vazio → oculto |
| Idiomas | `languages` | Português e Inglês, sem níveis de proficiência |

Também revise:

- **Textos dos serviços:** `src/content/pt-BR/services.ts`
- **Segmentos:** `src/content/pt-BR/segments.ts`. São descrições gerais, **não** relatos de contratos.
- **Legislação:** `src/content/pt-BR/accessibility.ts`. Confira a vigência e atualize `legalReviewedAt`.
  As referências foram conferidas em novembro de 2026: ABNT NBR 9050:2020 (versão corrigida de 2021) e ABNT NBR 16537:2024 (2ª edição).
- **Textos institucionais e chamadas:** `src/content/pt-BR/copy.ts`
- **Metadados de SEO por página:** `src/content/pt-BR/seo.ts`

### Como trocar ou acrescentar fotos
1. Gere a foto em duas larguras (ex.: 640 e 960 px), em `.webp` e `.jpg`, com o nome `chave-largura` (ex.: `nova-foto-640.webp`), e salve em `public/images/fotos/`.
2. Cadastre a chave em `src/content/pt-BR/photos.ts`, com texto alternativo descritivo.
3. Use no código com `<Photo name="nova-foto" />`.

Fotos de campo só ilustram a forma de trabalho (Serviços e Metodologia). Por causa da confidencialidade, elas não são usadas como registro de casos.

### Regra de confidencialidade

Não acrescente nomes de clientes, fotos de obras, logotipos, endereços, documentos ou resultados que permitam identificar projetos. Casos concretos só podem ser publicados com autorização prévia dos contratantes.

---

## 2. Rodar no computador

Requisitos: Node.js 20.19 ou superior.

```bash
npm install
cp .env.example .env      # e preencha as variáveis
npm run dev               # http://localhost:5173
```

Build de produção, com pré-renderização, sitemap e robots:

```bash
npm run build
npm run preview
```

---

## 3. Variáveis de ambiente

| Variável | Para que serve |
|---|---|
| `VITE_SITE_URL` | Domínio final (ex.: `https://www.biancafernandez.com.br`). Gera links canônicos, Open Graph absoluto e `sitemap.xml`. |
| `VITE_FORM_ENDPOINT` | Endereço que recebe o formulário (POST JSON). |
| `VITE_FORM_ACCESS_KEY` | Opcional; exigido por alguns serviços (ex.: Web3Forms). |

### Formulário de contato (envio real)

Sem `VITE_FORM_ENDPOINT`, o formulário valida os campos, mas **não finge enviar**: ele informa que o envio on-line ainda não está habilitado e indica os outros canais.

Exemplo com **Formspree**:

1. Crie um formulário em formspree.io usando o e-mail da Bianca.
2. Copie o endpoint (`https://formspree.io/f/xxxxxxx`) para `VITE_FORM_ENDPOINT`.
3. Refaça o deploy.

Com **Web3Forms**: use `VITE_FORM_ENDPOINT=https://api.web3forms.com/submit` e coloque a chave em `VITE_FORM_ACCESS_KEY`.

O formulário inclui consentimento LGPD, um campo-armadilha antispam e validação acessível (resumo de erros com foco, mensagens associadas a cada campo e `aria-invalid`).

---

## 4. Publicação

### Vercel (recomendado)

**Pelo VS Code, sem GitHub:**
1. No terminal do projeto, rode `npm run build`. Assim você confere se tudo compila antes de publicar.
2. Rode `npx vercel login` e entre com sua conta (e-mail, GitHub ou Google).
3. Rode `npx vercel --prod` e responda às perguntas:
   - **Set up and deploy?** → `Y`
   - **Link to existing project?** → `N`
   - **Project name** → `bianca-fernandez` (o endereço será `bianca-fernandez.vercel.app`, se estiver livre)
   - **In which directory is your code located?** → `./`
   - **Want to modify these settings?** → `N` (o `vercel.json` já define tudo)
4. Para publicar atualizações depois, rode `npx vercel --prod` de novo.

O endereço do site (`VITE_SITE_URL`) é preenchido automaticamente com o domínio de produção da Vercel. Ao usar um domínio próprio, cadastre `VITE_SITE_URL` em *Settings → Environment Variables* e publique de novo.

### Nome nos resultados do Google
- **Título da aba:** "Bianca Fernandez | Acessibilidade" (`src/content/pt-BR/seo.ts`).
- **Nome do site no Google:** "InspecionAll Engenharia" (`siteName` no mesmo arquivo). Ele é informado ao Google pelos dados estruturados `WebSite` e por `og:site_name`.
- O Google decide sozinho quando passa a exibir esse nome, o que pode levar de dias a semanas. Para acelerar, cadastre o site no Google Search Console e envie o `sitemap.xml`. Um domínio próprio (ex.: `inspecionall.com.br`) também ajuda.

### Netlify
1. Importe o repositório.
2. A Netlify lê o `netlify.toml`.
3. Cadastre as variáveis de ambiente em *Site configuration → Environment variables*.

Rotas inexistentes recebem `404.html` com status 404. Os dois arquivos de configuração também incluem cabeçalhos de segurança e de cache.

---

## 5. Estrutura

```
src/
  App.tsx                 rotas
  main.tsx                entrada do navegador (hidratação)
  entry-server.tsx        entrada da pré-renderização
  config/site.ts          variáveis de ambiente
  content/                TODO o conteúdo editável, por idioma
    pt-BR/                profile, services, segments, accessibility, copy, seo, navigation
  components/
    layout/               Header, Footer, Layout, Logo, WhatsAppFloat
    ui/                   Button, SectionHeading, PageHero, CtaBand, Reveal, Portrait…
    contact/ContactForm   formulário acessível
    illustrations/        planta esquemática ilustrativa (não representa projetos reais)
    seo/Seo.tsx           metadados por rota
  lib/                    SEO, envio e validação do formulário
  pages/                  as 7 páginas + 404
scripts/prerender.mjs     gera HTML por página, 404.html, sitemap.xml e robots.txt
public/fonts/             fontes auto-hospedadas (licença OFL incluída)
```

### Internacionalização futura
O conteúdo fica em `src/content/pt-BR/`. Para uma versão em inglês, crie `src/content/en/` com os mesmos arquivos e rotas com prefixo (`/en/...`). Os componentes não têm textos de conteúdo fixos no código.

---

## 6. Marca animada e botão de acessibilidade

**Logo animado** (`public/brand/logo-animado.mp4`, gerado a partir do vídeo 4K enviado: recorte quadrado, 192 × 192 px, 30 fps, cerca de 25 KB)
- Toca **uma única vez**, sem som, por 4,3 s. Como dura menos de 5 s, atende ao item 5.15.1 (Controle de animação) da ABNT NBR 17225.
- Se o visitante ativou "reduzir movimento" no sistema, ou "Pausar animações" no botão de acessibilidade, aparece só a imagem estática (`public/brand/logo-192.webp`).
- Ao passar o mouse sobre a marca, a animação toca de novo.
- O favicon e o ícone de atalho no celular (`favicon-48.png`, `apple-touch-icon.png`) usam a mesma marca.

**Botão de acessibilidade** (canto inferior esquerdo, em todas as páginas): `src/components/a11y/AccessibilityMenu.tsx`
- Ajustes disponíveis: tamanho do texto (100% a 160%), alto contraste, espaçamento de texto, destacar links, pausar animações e fonte simplificada.
- As escolhas ficam salvas no navegador e são aplicadas antes de a página aparecer, sem "piscar".
- A ABNT NBR 17225 **não exige** um botão desse tipo: ela se baseia em WCAG 2.2 e pede que o próprio site seja acessível. O botão é um recurso a mais. Ele também torna configuráveis itens que a norma aceita "por configuração do usuário", como os espaçamentos de texto dos itens 5.12.1 a 5.12.4.
- Com texto ampliado ou espaçado, o cabeçalho passa a usar o menu compacto para nada se sobrepor.

**Animação da InspecionAll** (página inicial, seção "Empresa"): `src/components/ui/BrandReveal.tsx`
- O GIF original de 17,5 MB virou um vídeo de cerca de 175 KB (`public/brand/inspecionall.mp4`), além de uma imagem final em WebP/JPEG.
- A animação começa quando a seção fica visível e toca uma única vez, em 4,9 s.
- Depois aparece o botão "Ver animação novamente".
- Para quem reduziu o movimento, aparece apenas a imagem final.

**Clique no nome/marca:** em qualquer página, leva ao topo da página inicial. Na própria página inicial, rola suavemente até o topo.

**Carrossel da Apresentação** (página inicial): `src/components/ui/PhotoCarousel.tsx`
- As fotos e a ordem delas ficam em `presentationSlides`, no arquivo `src/content/pt-BR/photos.ts`. Para tirar uma foto, apague a chave da lista.
- A foto troca sozinha a cada 5,5 s, com transição suave.
- Tem botão de pausar, botões de anterior e próxima, setas do teclado e gesto de arrastar no celular.
- A troca para quando o mouse está sobre o carrossel, quando ele recebe foco do teclado ou quando sai da tela.
- Só a foto atual e a seguinte são baixadas.

**Fluidez**
- Transição suave ao trocar de página.
- Imagens aparecem com esmaecimento ao carregar.
- Animações de entrada mais suaves.
- Rolagem suave para âncoras e para o topo.
- O cabeçalho deixou de usar desfoque, que pesava na rolagem.
- Tudo isso é desligado para quem pede redução de movimento.

## 7. Acessibilidade digital

A WCAG 2.2 AA foi a referência de implementação: link para pular ao conteúdo, foco visível em fundos claros e escuros, HTML semântico e hierarquia de títulos, navegação por teclado, menu móvel com `aria-expanded` e fechamento por Esc, anúncio da página em navegações internas, formulários acessíveis, alvos de toque de 24 px ou mais, respeito a `prefers-reduced-motion`, suporte a alto contraste do sistema e layout sem rolagem horizontal a 320 px (zoom de 400%).

Verificações automatizadas feitas no build: contraste de todos os textos (sem falhas), ordem de títulos, nomes acessíveis de links e botões, referências ARIA válidas, IDs únicos, teclado, formulário e reflow.

**Isso não equivale a uma declaração de conformidade integral.** Antes de afirmar conformidade, faça testes manuais com leitores de tela (NVDA/JAWS no Windows, VoiceOver no macOS/iOS, TalkBack no Android) e, de preferência, com pessoas usuárias com deficiência.

---

## 8. Fontes e licenças
- Fraunces e Instrument Sans: SIL Open Font License (`public/fonts/*-OFL.txt`).
- Ícones: Lucide (ISC). Os ícones do LinkedIn, Instagram e WhatsApp foram desenhados em SVG no próprio projeto.
