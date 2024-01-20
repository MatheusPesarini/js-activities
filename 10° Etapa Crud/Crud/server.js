require('dotenv').config(); // importando o dotenv com o site e a senha do banco de dados

const express = require('express');
const app = express();
const mongoose = require('mongoose'); // importando o mongoose

mongoose.connect(process.env.CONNECTIONSTRING) // conectando ao banco de dados
    .then(() => {
        console.log('Conectei a base de dados');
        app.emit('pronto');
    })

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const sessionOptions = session({
    secret: 'teste',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 *24 * 7,
        httpOnly: true
    }
})
app.use (sessionOptions);
app.use(flash());

const routes = require('./routes'); // importando as rotas
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet()); // usando o helmet para segurança
app.use(express.urlencoded({ extended: true })); // para poder usar o req.body que vem do input do form

app.use(express.static(path.resolve(__dirname, 'public'))); // definindo o caminho da pasta public de conteudo estatico (css, js, img)

app.set('views', path.resolve(__dirname, 'src', 'views')); // definindo o caminho das views
app.set('view engine', 'ejs'); // definindo o motor de views para renderizar html dinamicamente

app.use(csrf());
app.use(middlewareGlobal); // usando o middleware
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes); // usando as rotas 

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})


