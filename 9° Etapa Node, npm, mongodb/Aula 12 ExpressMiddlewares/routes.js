const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

/*function meuMiddleware(req, res, next) {
    req.session = { nome: 'Luiz', sobrenome: 'Miranda' };
    console.log();
    console.log('Passei no seu middleware.');
    console.log();
    next();
}*/

// Rotas da home
router.get('/', /*meuMiddleware,*/ homeController.paginaInicial);/*, function(req, res, next) {
    console.log('');
    console.log('Ainda estou aqui...');
    console.log(`'req.session' dentro da rota: ${req.session.nome} ${req.session.sobrenome}'`)
    next();
});*/
router.post('/', homeController.trataPost);

// Rotas de contato
router.get('/contato', contatoController.paginaInicial);

module.exports = router;