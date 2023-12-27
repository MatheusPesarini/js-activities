const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes; // Atribuição por referência
/*const novo = [...nomes]; // Atribuição por valor, ou seja, a remoção de um elemento de um array não afeta o outro*/

novo.pop(); // Remove o último elemento do array
console.log(nomes); // [ 'Eduardo', 'Maria' ]
console.log(novo); // [ 'Eduardo', 'Maria' ]

const removido = novo.pop(); // shift() remove o primeiro elemento do array
console.log(novo, removido); // [ 'Eduardo' ] Maria

console.log('---------------------');
const nomes2 = ['Eduardo', 'Maria', 'Joana'];
nomes2.push('Wallace'); // Adiciona um elemento no final do array
nomes2.unshift('Zeca'); // Adiciona um elemento no início do array
console.log(nomes2); // [ 'Zeca', 'Eduardo', 'Maria', 'Joana', 'Wallace' ]

console.log(nomes2.slice(0, 3)); // [ 'Zeca', 'Eduardo', 'Maria' ]
// Fazer slice 0, -1 ira remover o último elemento do array

console.log('---------------------');

const nome3 = 'Luiz Otávio Miranda';
const nomes3 = nome3.split(' '); // Transforma uma string em um array
console.log(nomes3); // [ 'Luiz', 'Otávio', 'Miranda' ]

const nomes4 = nomes3.join(' '); // Transforma um array em uma string
console.log(nomes4); // Luiz Otávio Miranda