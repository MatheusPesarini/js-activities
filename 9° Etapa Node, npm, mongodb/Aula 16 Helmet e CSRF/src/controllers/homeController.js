exports.paginaInicial = (req, res) => {
    // req.session.usuario = { nome: 'Luiz', logado: true }; // ao ser executado essa linha, o cookie é criado
    // req.flash('info', 'Olá mundo'); // criando uma mensagem flash
    // os dois acima caso criados, ficam disponiveis e podem ser exibidos com console.log(req.session.usuario) e console.log(req.flash('info'))
    res.render('index', {
        titulo: 'Este será o <span style="color: red">titulo</span> da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    });
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}