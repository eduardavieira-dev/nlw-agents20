## 🌐 Setup do Projeto Front-End com Vite + React + Tailwind

Essa seção guia você na criação e configuração de um projeto front-end moderno utilizando Vite, React, TypeScript e Tailwind CSS, incluindo instalação de bibliotecas, ferramentas e componentes estilizados.

---

### 🚧 Criar o Projeto com Vite

```bash
npm create vite@latest web
```

Durante o processo, selecione:

- **Framework:** `React`
- **Variant:** `TypeScript`

Em seguida, instale as dependências:

```bash
cd web
npm install
```

---

### 🧹 Biome (Lint e Formatador de Código)

```bash
npm install @biomejs/biome -D
```

> O Biome ajuda a manter o código padronizado e limpo.
> Também é possível instalar a extensão oficial do Biome no VS Code.

---

### 🔥 Inicialização com Ultracite (opcional)

Ferramenta para scaffolding (estrutura inicial) de projetos modernos.

```bash
npx ultracite init
```

---

## 🎨 Instalar e Configurar Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Se estiver usando com Vite:

```bash
npm install tailwindcss @tailwindcss/vite
```

> ⚠️ Caso enfrente problemas com pacotes quebrados, você pode tentar:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 💅 Componentes Prontos com shadcn/ui

### 1. Acessar o site de componentes:

📎 [https://ui.shadcn.com/](https://ui.shadcn.com/)

### 2. Instalar tipagens necessárias

```bash
npm install -D @types/node
```

### 3. Configurar `tsconfig.json`

Adicione as opções recomendadas no `compilerOptions`, conforme indicado na [documentação oficial](https://ui.shadcn.com/docs/installation).

### 4. Ajustar o `vite.config.ts` conforme necessário (a documentação também orienta).

### 5. Inicializar o shadcn/ui

```bash
npx shadcn@latest init
```

### 6. Adicionar componentes prontos

```bash
npx shadcn@latest add button
```

> Substitua `button` por outros componentes que quiser instalar (como `card`, `dialog`, etc).


```bash
npm install lucide-react
```
> Instalar os icones
---

## 🧩 Outras Bibliotecas Úteis

```bash
# Navegação entre páginas
npm install react-router-dom

# Gerenciamento de dados assíncronos (fetch, cache, etc.)
npm install @tanstack/react-query

# Formatar Data
npm install dayjs
```
### Comandos finais usados no desenvolvimento
npm i zod

npm i @hookform/resolvers

### Desenvolvimnt do audio

npm i @types/dom-speech-recognition -D
