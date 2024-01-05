const _velocidade = Symbol('velocidade');
// Utilizar symbol é uma váriavel privada que não pode ser modificada fora da classe, por exemplo para o carro
// não ser acelerado mais que 100km/h ou menos que 0km/h por fora da classe

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    get velocidade() {
        return this[_velocidade];
    }
    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 99;
console.log(c1.velocidade);

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nomeCompleto = 'Luiz Miranda Oliveira'; // Separando o nome e sobrenome
console.log(p1.nome);