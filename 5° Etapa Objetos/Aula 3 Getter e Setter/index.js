// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        // Apaga o value e writable ao usar get e set
        configurable: false, // configurável

        get: function() {
            //return estoque
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }
            //estoque = valor;
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor.replace('coisa', '');
        }
    };
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);