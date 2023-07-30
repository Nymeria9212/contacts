<h1>Api contacts book</h1>

<h2>Passos</h2>

1. **Baixe o repositório na sua máquina**
2. **Crie um banco de dados na sua máquina**
3. **Instale as dependencias com ```npm install```**
4. **Configure seu ``.env`` com seus dados do psql e o seu banco de dados conforme o ``.env.exemple``**
5. **Rode as migrações com o seguinte comando ``npm run typeorm migration:run -- -d ./src/data-source``**
6. Tudo ok? Rode o banco de dados com o comando ``npm run dev``

Se quiser pode testar direto no Insomia o banco de dados, vou deixar um botão com o CRUD já pronto pra testar lá, basta clicar no link
<a href="https://insomnia.rest/run/?label=Crud%20users%2Fcontacts&uri=https%3A%2F%2Fraw.githubusercontent.com%2FNymeria9212%2Fcontacts-api%2Fmain%2FInsomnia_2023-07-30.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

Caso contrário sinta-se a vontade para testar na aplicação Front End, que fica nesse link -> [Front End](https://github.com/Nymeria9212/contacts-front-end)

<h3>Endpoints</h3>
<h4>Exceto para criação e login, todas as rotas precisam de autenticação</h4>

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

