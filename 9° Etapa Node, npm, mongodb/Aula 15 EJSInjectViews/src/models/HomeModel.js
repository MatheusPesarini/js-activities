const mongoose = require('mongoose'); // importando o mongoose

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema); // criando o modelo

class Home{

};

module.exports = Home; // exportando o modelo