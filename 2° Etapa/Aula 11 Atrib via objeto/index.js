const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { endereco: {rua: r, numero}, endereco } = pessoa;

console.log(r, numero, endereco);