const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.post('/sessions',SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)


module.exports = routes

/**
 * Rotas / Recurso
 */

 /*
 * Métodos HTTP
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end. Ex: Rota recebe informações do usuário para criar um novo usuário
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end 
 */

 /**
  * 
  * Tipos de parâmetros
  * 
  * Query: Parâmetros nomeados enviados na rota
  * após "?" (Filtros, paginação). 
  * Ex: https://localhost/users?parametro=valor
  * ACESSANDO PARAMETROS: request.query;
  * 
  * Route: Parâmetros utilizados para identificar recursos
  * Buscar dados de um único usuário
  * ACESSANDO PARÂMETRO: request.params;
  * 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar
  * recursos
  * ACESSANDO O BODY: request.body
  * 
  * 
  */

/**
 * 
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server.
 * NoSQL: MongoDB, CouchDB, etc.
 * 
 */

 /**
  * 
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  * 
  */


