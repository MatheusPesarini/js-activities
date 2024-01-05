// O problema desse código, é que ao atribuir o valor da váriavel novasPessoas sem map, 
// ao exibir a váriavel no for loop, ele exibe na ordem contrária, pois o objeto não tem ordem, e sim, chave e valor.
// Para resolver isso, usamos o map, que é uma estrutura de dados que tem ordem e chave e valor.

const pessoas = [
    { nome: 'Maria', idade: 23 },
    { nome: 'João', idade: 18 },
    { nome: 'José', idade: 30 },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//    const { nome } = pessoa;
//    novasPessoas[nome] = { ...pessoa };
// }

// const novasPessoas = {};
const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { nome } = pessoa;
    novasPessoas.set(nome, { ...pessoa });
    // novasPessoas[nome] = { ...pessoa };
}

for (const pessoa of novasPessoas) {
        console.log(pessoa);
}

