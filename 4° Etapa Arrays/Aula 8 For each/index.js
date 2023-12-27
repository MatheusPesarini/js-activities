const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;

const soma = a1.forEach(function(valor, indice, array) {
  total += valor;
});

console.log(total); // 450