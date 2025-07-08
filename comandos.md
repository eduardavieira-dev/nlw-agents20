## Comando utilizados no terminal do projeto

Iniciar o node:
npm init -y

Criar dependencias de desenvolvimento
npm i typescript @types/node -D

npx tsc --init

- Achar minha versao do node: https://github.com/tsconfig/bases?tab=readme-ov-file
 

 Adicinando bibliotecas: 
npm i fastify @fastify/cors @fastify/type-provider-zod zod
ou
npm i fastify @fastify/cors zod
npm install fastify-type-provider-zod


npm install --save-dev ts-node typescript
npm install -D ts-node
npm run dev
npm install -D ts-node-dev
npm install --save-dev ts-node-dev
npm install -D ts-node-dev
npx ts-node-dev --respawn --transpile-only --esm ./src/server.ts
npm install -D nodemon

Para usar o env: npm install dotenv

Baixar extensoes do VS code: 

Biome

Rest Client

Tailwind CSS Intelisense

npm i @biomejs/biome -D

no site da ultracite vc pode ver o comando: npx ultracite init

## Instalar docker previamente
docker -v
docker ps (ver o container rodando)
para parar de rodar outros containers: docker stop <nome do container>

pgvector-> busca por similaridade

docker compose up -d (rodar o postgres)

docker compose stop (parar de rodar)

docker ps -a (ver todos os seus container)

# Criar a conexão com bando de dados
npm i postgres

# atualizando o npm run dev
npm i -D tsx
npm install -D tsx
npm uninstall ts-node(remover antigas dependencias)

# Criar tabelas
npm i drizzle-orm
npm i drizzle-kit -D

depois de configurar o defaultConfig
npx drizzle-kit generate
npx drizzle-kit migrate
npx drizzle-kit studio(ver seu db)
npx drizzle-seed -D(pre-poluação com dados fictitios)
npm install drizzle-seed
