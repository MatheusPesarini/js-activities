let num1 = 0.1;

let num2 = 0.9;
num2 += num1;
num2 = parseFloat(num2.toFixed(2)); // arruma o bug de ponto flutuante

console.log(num2);
console.log(Number.isInteger(num2));

//num1 = num1.toString(); // converte para string
//num1 = num1.toFixed(2); // arredonda o numero para 2 casas decimais
//num1 = Number.isInteger(num1); // verifica se o numero é inteiro