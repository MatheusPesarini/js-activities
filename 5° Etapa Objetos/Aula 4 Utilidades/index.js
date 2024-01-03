/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(variavel, 'propriedade (exemplo: nome)')
...(spread)

// Já vimos
Object.keys (retorna as chaves)
Object.values (retorna somente os valores)
Object.entries (retorna um array com arrays contendo a chave e o valor)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Caneca', preco: 1.8 };

// const caneca = { ...produto, material: 'porcelana' }; não modifica o objeto original com o spread

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));