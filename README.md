
# NLW Agents

Projeto desenvolvido durante o evento **NLW** da Rocketseat em 2025.  
O **NLW Agents** é uma API para gerenciamento de salas, criada com foco no aprendizado de tecnologias modernas do ecossistema Node.js.

---

## 📚 Tecnologias e Bibliotecas Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Fastify**: Framework web rápido e eficiente para Node.js.
- **Zod**: Biblioteca para validação de dados e schemas.
- **drizzle-orm**: ORM para manipulação de banco de dados PostgreSQL.
- **drizzle-seed**: Geração de dados fictícios para testes.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **PostgreSQL**: Banco de dados relacional.
- **Docker**: Facilita a configuração e execução do banco de dados localmente.

---

## 🏗️ Padrões de Projeto

- **Modularização**: Código organizado em módulos (`src/db`, `src/http/routes`, etc).
- **Validação de Schemas**: Uso do Zod para garantir dados corretos nas rotas e variáveis de ambiente.
- **Abstração de Banco de Dados**: Utilização do drizzle-orm para facilitar queries e migrações.
- **Separação de Responsabilidades**: Cada arquivo tem uma responsabilidade clara (rotas, validação, banco, etc).

---

## 🚀 Como rodar o projeto

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

### 2. Clonar o repositório

```bash
git clone https://github.com/eduardavieira-dev/nlw-agents20.git
cd nlw-agents
````

### 3. Instalar dependências

```bash
npm install
```

### 4. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
PORT=3333
DATABASE_URL="postgresql://docker:docker@localhost:5432/agents"
```

### 5. Subir o banco de dados com Docker

```bash
docker compose up -d
```

### 6. Rodar as migrações e popular o banco

```bash
npx drizzle-kit migrate
npm run db:seed
```

### 7. Iniciar o servidor

```bash
npm run dev
```

A API estará disponível em: [http://localhost:3333](http://localhost:3333)

---

## 📖 Endpoints principais

### ✅ Health Check

**GET** `/health`
Retorna o status do servidor.

**Exemplo de resposta:**

```json
{ "status": "ok" }
```

---

### 📋 Listar Salas

**GET** `/rooms`
Retorna todas as salas cadastradas.

**Exemplo de resposta:**

```json
[
  {
    "id": "uuid",
    "title": "Sala 1",
    "description": "Descrição da sala"
  }
]
```

---

### ➕ Criar Sala

**POST** `/rooms`
Cria uma nova sala.

**Body:**

```json
{
  "title": "Nome da sala",
  "description": "Descrição"
}
```

**Resposta:**

```json
{
  "id": "uuid",
  "title": "Nome da sala",
  "description": "Descrição"
}
```

---

### 🔍 Buscar Sala por ID

**GET** `/rooms/:id`
- Retorna os dados de uma sala específica.

---

### ✏️ Atualizar Sala

**PUT** `/rooms/:id`
- Atualiza os dados de uma sala.

- **Body:** (mesmo formato do POST)

---

### ❌ Deletar Sala

**DELETE** `/rooms/:id`
- Remove uma sala do banco de dados.

---

## 📝 Estrutura de Pastas

```
src/
  db/            # Configuração do banco de dados e ORM
  http/
    routes/      # Rotas da aplicação
    controllers/ # Lógica das rotas
  env/           # Validação das variáveis de ambiente
  server.ts      # Inicialização do servidor
```

---

## 🛠️ Comandos Úteis

* `npm run dev` — Inicia o servidor em modo desenvolvimento.
* `npx drizzle-kit migrate` — Executa as migrações do banco.
* `npm run db:seed` — Popula o banco com dados fictícios.
* `docker compose up -d` — Sobe o banco de dados PostgreSQL.

---

## 💡 Dicas para iniciantes

* Sempre instale as dependências com `npm install` antes de rodar o projeto.
* Use o Docker para não precisar instalar o PostgreSQL manualmente.
* Se mudar algo no banco, rode as migrações novamente.
* Consulte os exemplos de requisição acima para testar a API com ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/).

