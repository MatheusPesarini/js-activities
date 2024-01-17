const fs = require('fs');

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' }, (erro) => {
        if (erro) {
            console.log(erro);
        } else {
            console.log('Arquivo salvo com sucesso!');
        }
    });
}