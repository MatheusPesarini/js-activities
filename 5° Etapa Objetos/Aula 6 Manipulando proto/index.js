function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (percerntual) {
    this.preco = this.preco + (this.preco * (percerntual / 100));
}

Produto.prototype.desconto = function (percerntual) {
    this.preco = this.preco - (this.preco * (percerntual / 100));
}

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

p1.aumento(10);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});
p3.aumento(10);
console.log(p3);

