let nome;
let nome2;

nome = 'João';
nome2 = 'Matheus';

console.log ("Oi");

console.log ("Ele", nome, "tem 17 anos");

nome = 'Helena';

console.log (nome);

const naoPodeMudar = 10;
const naoPodeMudar2 = 10;
const resultado = naoPodeMudar * naoPodeMudar2;
console.log (resultado);

console.log (typeof resultado); // printando o tipo da variável

let nomeAluno = 'Zeca';
let idadeAluno = 30;
let pesoAluno = 80.5;
let alturaAluno = 1.80;
let imc = pesoAluno / (alturaAluno * alturaAluno);
let anoNascimento = 2023 - idadeAluno;

console.log (`O aluno ${nomeAluno} nasceu no ano de ${anoNascimento} e tem um IMC de ${imc}`);

let variavelNula = null;
const boleano = true; // ou false

console.log (10 ** 4); // potenciação

let numeroString = '10.3';
numeroString = parseFloat(numeroString); // transformando string em número inteiro
console.log (typeof numeroString, "Numero convertido");