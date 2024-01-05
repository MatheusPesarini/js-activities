class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

// Classe é melhor que função construtora com prototype, pois é mais simples de escrever e mais fácil de entender
// e enquanto na funç construtora precisamos criar o prototype separado para o _proto_ ficar mais otimizado, na classe
// isso já é feito automaticamente em um metódo dentro dela.

function Pessoa2 (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
}

const p1 = new Pessoa('Luiz', 25);
const p2 = new Pessoa2('Luiz', 'Otávio');