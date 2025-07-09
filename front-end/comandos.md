## Para criar o projeto
npm create vite@latest web
-> react -> Typescript
npm i

npm i @biomejs/biome -D

npx ultracite init

## instalar tailwind
npm install tailwindcss @tailwindcss/vite
ou se precisar e tentar de novo o comando acima depois
rm -rf node_modules package-lock.json(tive q apagar instalções quebradas)


npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init

### Instalar componentes prontos
https://ui.shadcn.com/
no seu tsconfig.json add no compilerOptions o que é indicado na doc
npm install -D @types/node

alterar tbm o vite.config
npx shadcn@latest init

### Instalar componentes estilizados
npx shadcn@latest add button
