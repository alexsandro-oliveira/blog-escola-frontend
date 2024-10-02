# Blog Escola

![Logo](https://upload.wikimedia.org/wikipedia/commons/d/d4/Fiap-logo-novo.jpg)

Front-end para blog escolar.
Projeto de conclusão de fase da Pós Tech Full Stack Development da FIAP.

## Desafios do projeto

A faculdade FIAP propôs o desafio de criar um sistema de postagens de notícias para seus alunos.
Foram levantados os requisitos técnicos e funcionais para seu desenvolvimento.

**Requisitos funcionais**

A partir dos end-points criados, deve-se desenvolver um sistema front-end capaz de acessar e interagir com os mesmos.
- Lista de Posts:
- Permitirá aos alunos visualizarem uma lista de todos os posts disponíveis na página principal.
- Leitura de Posts:
- Ao acessar esta página com um ID específico de post, os alunos poderão ler o conteúdo completo desse post.
- Criação de Postagens:
- Permite que professores criem postagens. Este tela aceitará dados como título, conteúdo e autor no corpo da requisição.
- Edição de Postagens:
- Usado para editar uma postagem existente. Professores deverão fornecer o ID do post que desejam editar e os novos dados no corpo da requisição.
- Listagem de Todas as Postagens (Visão Administrativa):
- Este endpoint permitirá que professores vejam todas as postagens criadas, facilitando a gestão do conteúdo. Nesta tela também ficará visível os botões de edição e deleção de um post específico.
- Exclusão de Postagens:
- Permite que professores excluam uma postagem específica, usando o ID do post como parâmetro.
- Busca de Posts:
- Esta funcionalidade permitirá a busca de posts por palavras-chave. Os usuários poderão passar uma query string com o termo de busca e o sistema retornará uma lista de posts que contêm esse termo no título ou conteúdo.

**Requisito técnico**

- Front-end em React, Next.js e TypeScript:
- Desenvolvimento de todas as telas e funcionalidades com as tecnologias.
- Persistência de Dados:
- Após criação, edição ou deleção de dados todas as telas que as consomem devem ser atualizadas em tempo real para que o conteúdo seja visualizado.
- Documentação:
- Documentação técnica detalhada do projeto, incluindo setup inicial, arquitetura da aplicação.

## Instalação

Instale com npm i

```bash
  # Clone este repositório
  $ git@github.com:alexsandro-oliveira/blog-escola-frontend.git

  # Acesse a pasta do projeto no terminal/cmd
  $ cd blog-escola-frontend

  # Instale as dependências
  $ npm install

  # Execute a aplicação em modo de desenvolvimento
  $ npm run dev

  # O servidor inciará na porta:3000 por padrão - acesse http://localhost:3000

```

## Documentação dos endpoints

Para acessar a documentação, acesse o projeto referente ao Back-End [Projeto]([http://localhost:3108/api](https://github.com/guifealves/blog-escola))
Após executar o projeto seguindo as instruções do Read.me, utilizar a url http://localhost:3108/api para acessar o swagger. [Documentação Swagger](http://localhost:3108/api)

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

**Básicos:** **[React](https://react.dev/)** **[Typescript](https://www.typescriptlang.org/)**

**Framework:** **[NextJS](https://nextjs.org/)**

**Estilização:**  **[Tailwind](https://tailwindcss.com/)**

**Outros:**
- **[Sooner](https://sonner.emilkowal.ski/)**
- **[DotEnv](https://www.npmjs.com/package/dotenv)**
- **[Eslint](https://eslint.org/)**
- **[Prettier](https://prettier.io/)**
- **[Zod](https://zod.dev/)**

Todas as suas versões se encontram no documento package.json na raiz do projeto.
Instalação de dependências
Como utilizamos o React com o NextJs por padrão ele utiliza o gerenciador de dependências NPM.
Para instalar as dependências é só utilizar o comando npm i no terminal de sua escolha.

## Aprendizados e Desafios

- Alguns processos e métodos de criação e desenvolvimento utilizados no Next.js necessitaram adaptação e estudos para que as funcionalidades fossem desenvolvidas da maneira correta.
- Padronização de código e desenvolvimento com o uso de Pull Requests no projeto do GitHub.

## Autores

- [@guilherme-fernandes](https://github.com/guifealves)
- [@alexsandro-oliveira](https://github.com/alexsandro-oliveira)
- [@carlos-henrique](https://www.github.com/carloshsamaral)
- [@eduardo-ruli](https://www.github.com/eduardopr14)
- [@vitor-hugo](https://github.com/D3Vitt1n)
