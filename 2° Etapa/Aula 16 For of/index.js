const nome = ['Luiz', 'Otávio', 'Henrique']; // Iterável, logo é ideal usar o for of

const nome2 = { // Não é iterável, logo é ideal usar o for in
    nome: 'Luiz',
    sobrenome: 'Otávio',
}

// 1. For of - Retorna o valor em si (iteráveis, arrays ou strings)
for (let valor of nome) {
    console.log(valor);
}
console.log('-------------------');
// 2. For clássico - Geralmente com iteráveis (arrays ou strings)
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
console.log('-------------------');
// 3. For in - Retorna o índice ou chave (string, array ou objetos)
for (let indice in nome) {
    console.log(nome[indice]);
}