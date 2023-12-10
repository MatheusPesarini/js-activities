let numero1 = prompt("Digite 1 numero");
let numero2 = prompt("Digite outro numero");

let resultado = parseInt(numero1) + parseInt(numero2);
// number(numero1) converte também porém ele para quando encontra uma letra e resulta em NaN, mas le notações cientificas
alert (`O resultado é: ${resultado}`);

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);