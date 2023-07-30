<h1>Api contacts book</h1>

<h2>Passos</h2>

1. **Baixe o repositório na sua máquina**
2. **Crie um banco de dados na sua máquina**
3. **Instale as dependencias com ```npm install```**
4. **Configure seu ``.env`` com seus dados do psql e o seu banco de dados conforme o ``.env.exemple``**
5. **Rode as migrações com o seguinte comando ``npm run typeorm migration:run -- -d ./src/data-source``**
6. Tudo ok? Rode o banco de dados com o comando ``npm run dev``


<h3>Endpoints</h3>
<h4>Exceto para criação, todas as rotas precisam de autenticação</h4>

| Endpoint    | Descrição |
| ------------- | ------------- |
| POST: /users| criação de usuário|
|GET: /users/profile| ler os dados do usuário autenticado|
|PATCH: /users/profile| editar as informações do usuário autenticado|
DELETE: /users/profile| deletar usuário autenticado|
|POST:/contacts| cria contato para o usuário autenticado|
|GET: /contacts | ler todos os contatos do usuário autenticado|
|GET:/contacts/:id| busca os dados de um contato pelo id|
|PATCH:/contacts/:id| edita os dados de um usuário|
|DELETE:/contacts/:id|deleta o contato|
|

