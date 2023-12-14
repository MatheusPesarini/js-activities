let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

//console.log(a, b, c);

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const [primeiroNumero, segundoNumero, ...resto] = numero;

//console.log(resto);

const numero2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numero2;

//console.log(lista3[2]);