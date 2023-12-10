let palavra1 = "Em um belo dia em Roncador";

console.log(palavra1.indexOf("dia")); // acha a posição inicial da palavra
console.log(palavra1.replace("Roncador", "Cascavel")); // troca a palavra
console.log(palavra1.replace(/e/g, "#")); // troca a palavra
console.log(palavra1.length); // tamanho da string

console.log(palavra1.slice(6, 10)); // fatia a string
console.log(palavra1.substring(6, 10)); // fatia a string

console.log(palavra1.split(" ")); // separa a string em um array
