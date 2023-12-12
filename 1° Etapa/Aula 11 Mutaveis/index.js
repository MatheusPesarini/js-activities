/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) // Valores copiados

Referência (mutável) - array, object, function // Passados por referência
*/

let nome = 'Luiz';
nome[0] = 'R'; // Não altera a string
console.log(nome); // Otávio

let a = [1, 2, 3];
let b = a; // Cria uma referência para o array a
let c = b; // Cria uma referência para o array b -> a
// para copiar o valor em vez de fazer uma referência nós podemos:
// let b = [...a]; // Copia o array a

console.log(a, b); // [ 1, 2, 3 ] [ 1, 2, 3 ]

a.push(4);

console.log(a, b); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

b.pop();

console.log(a, b); // [ 1, 2, 3 ] [ 1, 2, 3 ]