# API REST Node.js - Rocketseat

Este projeto é uma API RESTful desenvolvida com Node.js, TypeScript e Fastify, seguindo boas práticas de arquitetura, segurança e organização de código. O objetivo é fornecer uma base sólida para aplicações backend escaláveis e modernas.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Padrões e Boas Práticas](#padrões-e-boas-práticas)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [Knex.js](https://knexjs.org/) (Query Builder)
- [SQLite](https://www.sqlite.org/) (Banco de dados)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) (Padronização de código)
- [@fastify/helmet](https://github.com/fastify/fastify-helmet) (Segurança)
- [@fastify/cors](https://github.com/fastify/fastify-cors) (CORS)
- [@fastify/cookie](https://github.com/fastify/fastify-cookie) (Cookies)

---

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/api-rest-node.git
   cd api-rest-node
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

---

## Configuração

1. **Variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```
   DATABASE_URL=./db/database.sqlite
   PORT=3333
   ```

2. **Migrations:**
   Execute as migrations para criar as tabelas do banco:
   ```bash
   npm run migrate
   ```

---

## Scripts Disponíveis

- `npm run dev` — Inicia o servidor em modo desenvolvimento com hot reload.
- `npm run build` — Compila o projeto TypeScript para JavaScript.
- `npm start` — Inicia o servidor em produção.
- `npm run lint` — Executa o ESLint para análise de código.
- `npm run format` — Executa o Prettier para formatar o código.
- `npm run migrate` — Executa as migrations do banco de dados.

---

## Estrutura de Pastas

```
src/
├── app.ts                # Configuração principal do Fastify
├── database.ts           # Configuração do banco de dados (Knex)
├── config/
│   └── env.ts            # Gerenciamento de variáveis de ambiente
├── rotas/
│   └── Transactions/
│       └── transactions.ts # Rotas de transações
├── db/
│   └── migrations/       # Migrations do banco de dados
```

---

## Principais Funcionalidades

- **CRUD de Transações:** Endpoints para criar, listar e gerenciar transações financeiras.
- **Validação de Dados:** Utilização de schemas para validação dos dados recebidos.
- **Segurança:** Uso de Helmet, CORS e cookies para proteger a API.
- **Padronização:** ESLint e Prettier integrados para manter o código limpo e consistente.
- **Migrations:** Gerenciamento de estrutura do banco via Knex.

---

## Padrões e Boas Práticas

- **Arquitetura modular:** Separação clara entre rotas, configuração, banco e lógica de negócio.
- **Tipagem forte:** Uso extensivo de TypeScript para evitar erros comuns.
- **Validação e tratamento de erros:** Respostas padronizadas e tratamento centralizado de erros.
- **Segurança:** Configuração de headers, CORS e cookies.
- **Documentação:** Código comentado e organizado para facilitar manutenção.

---

## Contribuição

1. Fork este repositório.
2. Crie uma branch com sua feature/fix: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha feature'`
4. Push para a branch: `git push origin minha-feature`
5. Abra um Pull Request.

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
