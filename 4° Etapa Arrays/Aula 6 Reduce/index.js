// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Somando todos os números
const total = numeros.reduce(function(acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0);

// Retorne um array com os pares (Filter)
const filtradoReduce = numeros.reduce(function(acumulador, valor) {
  if (valor % 2 === 0) acumulador.push(valor); // se o valor for par, adicione ao array
  return acumulador;
}, []);

// Retorne um array com o dobro dos valores (Map)
const dobradoReduce = numeros.reduce(function(acumulador, valor) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);

// Retorne a pessoa mais velha
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 }
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);