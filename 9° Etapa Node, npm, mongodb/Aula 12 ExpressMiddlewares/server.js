const express = require('express');
const app = express();
const routes = require('./routes'); // importando as rotas
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true })); // para poder usar o req.body que vem do input do form

app.use(express.static(path.resolve(__dirname, 'public'))); // definindo o caminho da pasta public de conteudo estatico (css, js, img)

app.set('views', path.resolve(__dirname, 'src', 'views')); // definindo o caminho das views
app.set('view engine', 'ejs'); // definindo o motor de views para renderizar html dinamicamente

app.use(meuMiddleware); // usando o middleware
app.use(routes); // usando as rotas 

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

