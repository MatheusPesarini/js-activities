function criaPessoa (nome, sobrenome, idade){
   return {nome, sobrenome, idade};
    /*return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };*/
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);

console.log (pessoa1.nome, pessoa2.nome); // Luiz Maria
console.log (pessoa1);

const teste = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

teste.fala(); // A minha idade atual é 25.
teste.incrementaIdade();
teste.fala(); // A minha idade atual é 26.