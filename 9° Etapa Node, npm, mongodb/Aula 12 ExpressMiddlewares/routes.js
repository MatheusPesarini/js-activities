const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da home
router.get('/', homeController.paginaInicial);
router.post('/', homeController.trataPost);

// Rotas de contato
router.get('/contato', contatoController.paginaInicial);

module.exports = router;