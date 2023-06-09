# DAILY DIET API
API desenvolvida para registras todas as refeições que um usuário fizer durante o seu dia.

### Regras da aplicação

- Deve ser possível criar um usuário
- Deve ser possível registrar uma refeição feita, com as seguintes informações:
    
    *As refeições devem ser relacionadas a um usuário.*
    
    - Nome
    - Descrição
    - Data e Hora
    - Está dentro ou não da dieta
- Deve ser possível editar uma refeição, podendo alterar todos os dados acima
- Deve ser possível apagar uma refeição
- Deve ser possível listar todas as refeições de um usuário
- Deve ser possível visualizar uma única refeição
- Deve ser possível recuperar as métricas de um usuário
    - Quantidade total de refeições registradas
    - Quantidade total de refeições dentro da dieta
    - Quantidade total de refeições fora da dieta
    - Melhor sequência por dia de refeições dentro da dieta

## Instalação


 Faça o clone do repotório
 ```bash 
 git clone git@github.com:jose-xavier/api-nodejs-daily-diet.git 
 ```

Instalar as dependências do projeto
  ```bash
  npm install
  ```

Executando o projeto no ambiente de desenvolvimento
  ```bash
  npm run dev
  ```
  
Criar container do banco de dados mongoDB com Docker na porta 27017
  ```bash
  docker run --name mongo -p 27017:27017 -d mongo
  ```
  
 ## Rotas
- Criar novo usuário
```bash
POST /users
```

- Criar novo registro de refeição
```bash
POST /meals
```

- Listar todas refeições registradas pelo usuário
```bash
GET /users/:${userId}/meals
```

- Listar uma refeição específica registrada pelo usuário
```bash
GET /meals/:${meal_id}
```

- Mostrar um resumo geral das refeições cadastradas pelo usuário (total de refeições, refeições dentro da dieta e refeições fora da dieta)
```bash
GET /users/:${userId}/sumary
```

- Deletar uma refeição cadastrada
```bash
DELETE /meals/:${meal_id}
```

- Editar uma refeição cadastrada
```bash
PUT /meals/:${meal_id}
```

## Tecnologia utilizadas

- NodeJs
- Express
- MongoDB
- Mongoose
- Docker
    
