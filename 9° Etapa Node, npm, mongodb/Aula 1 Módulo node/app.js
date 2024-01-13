// const mod1 = require('./mod1') // importando o módulo inteiro do mod1 
// console.log(mod1) // { nome: 'Luiz', sobrenome: 'Miranda', falaNome: [Function: falaNome] }
// console.log(mod1.falaNome()) // Luiz Miranda

// const falaNome = require('./mod1').falaNome // importando apenas a função falaNome do mod1
// console.log(falaNome()) // Luiz Miranda

// caso você importe todo o módulo e queira acessar apenas uma função, você pode fazer assim:
// const mod1 = require('./mod1')
// const falaNome = mod1.falaNome

// const { nome, sobrenome, falaNome } = require('./mod1') // importando apenas as variáveis nome, sobrenome e a função falaNome do mod1
// console.log(nome, sobrenome) // Luiz Miranda
// console.log(falaNome()) // Luiz Miranda