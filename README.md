# Teste Ebytr (Back-end)

Este back-end foi desenvolvido para um teste técnico onde consiste na criação de uma plataforma para controle de tarefas.
Front-end da aplicação: https://github.com/DanielHott/Ebytr-front

## Detalhes da aplicação

O back-end possui 2 rotas para conectar o front-end ao banco de dados.

### Rota /tasks

#### POST 

A rota tasks recebe uma requisição do tipo POST onde deve conter um body json com descricao(`string`), status(`string`) e prioridade(`string`),
retornando a tarefa criada. 

#### GET

Esta rota do tipo get é utilizada para obter todas as tarefas.

#### DELETE

A rota recebe um id (`number`), que será utilizado para apagar a tarefa com o id em questão. Retorna quantos arquivos foram apagados.

### Rota /tasks/update

#### PATCH
 
Recebe uma requisição do tipo PATCH onde deve conter um body json com um id (`number`), descricao (`string`), status(`string`) e prioridade(`string`),
retornando a tarefa alterada. 


## Tecnologias

Este back-end foi desenvolvido com node.js, sequelize, express, dotenv, cors e nodemon.
No processo de desenvolvimento utilizei mysql para usar o banco de dados da minha máquina.

## Copiando para sua máquina:

Clone o projeto

```bash
  git clone https://github.com/DanielHott/Ebytr-back.git
```

Entre no diretório do projeto

```bash
  cd Ebytr-back
```

Instale as dependências

```bash
  npm install
```

Crie um arquivo dotenv para conectar o banco de dados

```bash
  touch .env
```

Dentro do arquivo .env:

MYSQL_USERNAME=seu_username

MYSQL_PASSWORD=sua_senha_sql

MYSQL_DATABASE=list

MYSQL_HOST=127.0.0.1

PORT=3009

#### Após configurado seu back-end

```bash
  npx sequelize db:create
  npx sequelize db:migrate
  npx sequelize db:seed:all
```

Inicie o servidor

```bash
  npm start
