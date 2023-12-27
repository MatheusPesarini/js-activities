// Filter sempre retorna um array com a mesma quantidade de elementos ou menos
// Retorne os números maiores que 10
//               0   1   2  3  4  5  6  7  8  9
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, array) {
//   if (valor > 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const numerosFiltrados = numeros.filter(callbackFilter);

// Jeito menos otimizado de fazer acima
// Jeito mais otimizado de fazer abaixo

const numerosFiltrados = numeros.filter((valor) => valor > 10); // como só tem uma linha dentro da funç, pode ser colocado na linha da variavel
console.log(numerosFiltrados);

// ou caso tenha mais de uma linha dentro da função

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//   return valor > 10;
// });

const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoasComMaisDeCinquentaAnos);

const pessoasTerminaComA = pessoas.filter((obj) => {
    return obj.nome.toLowerCase().endsWith("a"); // toLowerCase() para não ter problema com letras maiusculas
});
console.log(pessoasTerminaComA);