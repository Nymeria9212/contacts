<h1>Api contacts book</h1>

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

