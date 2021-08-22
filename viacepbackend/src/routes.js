const { Router } = require('express');
const routes = Router();
const cepController = require('./controllers/cepControllers');
const middleware = require('./middleware');

routes.get('/getCep/:cep', middleware ,cepController.createCep);

module.exports = routes;
