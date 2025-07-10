## 🧰 Comandos Úteis no Terminal

Esta seção reúne os principais comandos utilizados durante o desenvolvimento do projeto **NLW Agents**. Serve como um guia prático, especialmente útil para quem está começando.

---

### 📦 Inicialização do Projeto

```bash
# Cria o projeto Node.js com um package.json padrão
npm init -y
```

---

### 📚 Instalação de Dependências

#### 🔧 Dependências de Desenvolvimento

```bash
# TypeScript e tipagens do Node.js
npm install typescript @types/node -D

# Executar código TypeScript em tempo real (com reinicialização automática)
npm install ts-node-dev -D

# Alternativa moderna ao ts-node-dev (mais leve e rápida)
npm install tsx -D

# Nodemon para reiniciar o servidor ao salvar alterações (opcional)
npm install nodemon -D
```

#### 🛠️ Dependências da Aplicação

```bash
# Fastify (framework HTTP), CORS e validação com Zod
npm install fastify @fastify/cors zod

# Integração de Fastify com Zod
npm install fastify-type-provider-zod
```

#### 🌿 Variáveis de Ambiente

```bash
# Leitura do arquivo .env
npm install dotenv
```

#### 🗃️ Banco de Dados e ORM

```bash
# Cliente PostgreSQL
npm install postgres

# ORM Drizzle e CLI para migrações
npm install drizzle-orm
npm install drizzle-kit -D

# Gerador de dados fictícios
npm install drizzle-seed
```

---

### ⚙️ Configuração do TypeScript

```bash
# Gera o arquivo tsconfig.json
npx tsc --init
```

📌 Para uma configuração mais robusta e adaptada à sua versão do Node.js, consulte:
🔗 [tsconfig/bases (GitHub)](https://github.com/tsconfig/bases?tab=readme-ov-file)

---

### 🚀 Execução do Projeto

```bash
# Usando ts-node-dev (modo dev com recarregamento)
npx ts-node-dev --respawn --transpile-only --esm ./src/server.ts

# Usando tsx (recomendado)
npm run dev
```

💡 Certifique-se de ter este script no seu `package.json`:

```json
"scripts": {
  "dev": "tsx src/server.ts"
}
```

---

### 🐳 Docker e Banco de Dados

```bash
# Verificar versão do Docker
docker -v

# Subir os containers em segundo plano
docker compose up -d

# Parar os containers
docker compose stop

# Listar containers em execução
docker ps

# Listar todos os containers (inclusive parados)
docker ps -a

# Parar um container específico
docker stop <nome-do-container>
```

---

### 🛠️ Migrações com Drizzle ORM

```bash
# Gerar os arquivos de migração com base no schema definido
npx drizzle-kit generate

# Aplicar as migrações ao banco de dados
npx drizzle-kit migrate

# Visualizar as tabelas e registros com interface web
npx drizzle-kit studio
```

---

### 🌱 Popular o Banco com Dados Fictícios

```bash
# Rodar o seed configurado no projeto
npm run db:seed
```

💡 Certifique-se de que o script abaixo esteja no seu `package.json`:

```json
"scripts": {
  "db:seed": "tsx src/db/seed.ts"
}
```

---

### 🧩 Extensões Recomendadas para o VS Code

- **Biome** – Formatador e linter de código moderno
- **Rest Client** – Teste de requisições HTTP direto no editor
- **Tailwind CSS IntelliSense** – Sugestões automáticas ao usar Tailwind CSS

```bash
# Instalar Biome no projeto
npm install @biomejs/biome -D
```

---

### 📄 Prompt Utilizado para Geração do README

> _Escreva um README.md simples para esse projeto contendo informações técnicas de bibliotecas utilizadas, padrões de projeto e instruções de setup e configuração do projeto conforme as bibliotecas utilizadas. Mantenha o README simples, contendo apenas as informações mais importantes. Lembre-se de mencionar que o nome do projeto é NLW Agents e que ele foi desenvolvido durante um evento da Rocketseat em 2025. Se possível, gostaria do conteúdo bastante didático para que até um iniciante consiga entender facilmente. Quero a documentação completa!_


#### Caso sua porta 3333 já esteja sendo usada você pode usar os seguintes comandos

lsof -i :3333

em seguida para parar de rodar o que estiver naquela porta execute o comando desta maneira com o PID no lugar indicado

kill -9 {numero do PID}