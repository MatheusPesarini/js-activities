let nomes = ['Joao', 'Matheus'];

nomes[2] = 'Maria'; // Adiciona um elemento no array
nomes[nomes.length] = 'José'; // Adiciona um elemento no array
nomes.push('Pedro'); // Adiciona um elemento no fim do array
nomes.unshift('Marcos'); // Adiciona um elemento no inicio do array

//nomes.pop(); // Remove o último elemento do array
//nomes.shift(); // Remove o primeiro elemento do array
//delete nomes[2]; // Remove o elemento do array e deixa o espaço vazio
console.log(nomes.splice(2, 1)); // Remove o elemento do array e deixa o espaço vazio

console.log(nomes);

const array = [1, 2, 3, 4, 5]; // é mutavel, pode ser alterado depois de criado 
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
