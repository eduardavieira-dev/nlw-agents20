# NLW Agents

**NLW Agents** é um projeto front-end desenvolvido durante o evento **NLW (Next Level Week) Agents** da [Rocketseat](https://rocketseat.com.br/) em 2025. O objetivo é proporcionar uma base sólida para aplicações web modernas, utilizando as melhores práticas do ecossistema React e ferramentas atuais do mercado.

---

## ✨ Tecnologias e Bibliotecas Utilizadas

- **[React](https://react.dev/):** Biblioteca principal para construção da interface de usuário.
- **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript que adiciona tipagem estática, facilitando a manutenção e evitando erros.
- **[Vite](https://vitejs.dev/):** Ferramenta de build e servidor de desenvolvimento ultrarrápido.
- **[React Router DOM](https://reactrouter.com/):** Gerenciamento de rotas para aplicações SPA.
- **[@tanstack/react-query](https://tanstack.com/query/latest):** Gerenciamento eficiente de dados assíncronos (fetch, cache, sync).
- **[Tailwind CSS](https://tailwindcss.com/):** Framework utilitário para estilização rápida, responsiva e consistente.
- **[shadcn/ui](https://ui.shadcn.com/):** Biblioteca de componentes de UI acessíveis e prontos para uso, integrados ao Tailwind.
- **[clsx](https://github.com/lukeed/clsx):** Utilitário para manipulação condicional de classes CSS.
- **[class-variance-authority (CVA)](https://cva.style/):** Gerenciamento de variantes de componentes com Tailwind.
- **[lucide-react](https://lucide.dev/):** Ícones SVG modernos para React.
- **[biome](https://biomejs.dev/):** Linter e formatador de código para manter o padrão do projeto.

---

## 🏗️ Padrões de Projeto e Boas Práticas

- **Componentização:** Interface dividida em componentes reutilizáveis e de fácil manutenção.
- **Hooks:** Uso extensivo de hooks do React para gerenciamento de estado, efeitos colaterais e lógica compartilhada.
- **Separação de responsabilidades:** Organização do código em pastas como `components`, `pages`, `lib` e `hooks`.
- **Estilização utilitária:** Tailwind CSS para estilos rápidos, responsivos e consistentes.
- **Gerenciamento de dados:** React Query para requisições, cache e sincronização de dados com o backend.
- **Acessibilidade:** Componentes shadcn/ui seguem padrões de acessibilidade.
- **Padronização de código:** Uso do Biome para lint e formatação automática.

---

## 📁 Estrutura de Pastas

```
web/
  src/
    components/    # Componentes reutilizáveis e de UI
    lib/           # Funções utilitárias e integrações externas
    pages/         # Páginas principais da aplicação
    hooks/         # Hooks customizados
    assets/        # Imagens e outros arquivos estáticos
    styles/        # Estilos globais e configurações do Tailwind
    index.css      # Estilos globais
    main.tsx       # Ponto de entrada da aplicação
    app.tsx        # Componente principal e configuração de rotas/providers
```

---

## 🚀 Como rodar o projeto

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)

### 2. Instale as dependências

No terminal, dentro da pasta `web`:

```sh
npm install
```

### 3. Rode o projeto em modo desenvolvimento

```sh
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## 🧑‍💻 Dicas para Iniciantes

- **Componentes de UI:** Ficam em `src/components/ui`. Você pode criar novos usando o [shadcn/ui](https://ui.shadcn.com/).
- **Páginas:** Estão em `src/pages`. Cada página representa uma rota da aplicação.
- **Hooks customizados:** Crie hooks reutilizáveis em `src/hooks`.
- **Estilo global:** Configurado em `src/index.css` com Tailwind CSS.
- **Ícones:** Utilize os ícones do `lucide-react` para manter o padrão visual.
- **Padronização:** Sempre rode `npm run lint` para garantir que o código está seguindo os padrões do projeto.
- **Documentação:** Consulte a documentação das bibliotecas para aprender mais sobre cada ferramenta.

---

## 📝 Comandos Úteis

- **Instalar dependências:** `npm install`
- **Rodar em desenvolvimento:** `npm run dev`
- **Build de produção:** `npm run build`
- **Preview do build:** `npm run preview`
- **Lint e formatação:** `npm run lint` ou `npx biome check .`

---

## 📚 Recursos e Links Úteis

- [Documentação React](https://react.dev/)
- [Documentação TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação shadcn/ui](https://ui.shadcn.com/docs)
- [Documentação React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Rocketseat](https://rocketseat.com.br/)

---

## 🏆 Sobre

Este projeto foi criado para aprendizado e prática de tecnologias modernas do front-end, seguindo padrões profissionais, com foco em acessibilidade, performance e experiência do usuário.

---

Desenvolvido durante o **NLW Agents** da Rocketseat - 2025 🚀

```

```
