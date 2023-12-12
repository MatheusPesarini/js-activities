function meuEscopo(){
    const dados = document.querySelector('.dados');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /*dados.onsubmit = function(evento){
        evento.preventDefault();
        alert ('Dados enviados com sucesso!');
    };*/

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = dados.querySelector('.nome');
        const sobrenome = dados.querySelector('.sobrenome');
        const peso = dados.querySelector('.peso');
        const altura = dados.querySelector('.altura');

        console.log(nome, sobrenome, peso, altura);

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `Nome: ${nome.value} ${sobrenome.value}, Peso: ${peso.value}, Altura: ${altura.value} <br><br>`;
    }

    dados.addEventListener('submit', recebeEventoForm);
}

meuEscopo();