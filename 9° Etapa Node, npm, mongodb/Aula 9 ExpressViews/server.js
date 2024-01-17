const express = require('express');
const app = express();
const routes = require('./routes'); // importando as rotas
const path = require('path');

app.use(express.urlencoded({ extended: true })); // para poder usar o req.body que vem do input do form

app.set('views', path.resolve(__dirname, 'src', 'views')); // definindo o caminho das views
app.set('view engine', 'ejs'); // definindo o motor de views

app.use(routes); // usando as rotas 

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

