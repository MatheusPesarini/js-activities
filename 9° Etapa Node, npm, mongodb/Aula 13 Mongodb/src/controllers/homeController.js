exports.paginaInicial = (req, res) => {
    console.log('Respondendo a requisição.');
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}