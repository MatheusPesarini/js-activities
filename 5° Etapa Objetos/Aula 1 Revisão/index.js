const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
};

// Outra forma de criar um objeto

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Miranda';
pessoa1.idade = 25;

pessoa1.falarNome = () => {
    return (`${this.nome} está falando seu nome.`);
}

pessoa1.getDataNascimento = () => {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}

console.log('--------------');

// Factory functions / Constructor functions / Classes
// Factory function
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p3 = criaPessoa('Luiz', 'Miranda');
console.log(p3.nomeCompleto);

// Constructor function
function Pessoa(nome, sobrenome){ // molde
    this.nome = nome; // this.nome => p1.nome = nome;
    this.sobrenome = sobrenome; // this.sobrenome => p1.sobrenome = sobrenome;

    Object.freeze(this); // congela o objeto, não permitindo alterações
}

// p1 = (ENDEREÇO DE MEMÓRIA) => e esse endereço aponta para o valor do objeto, logo, pode ser alterado
// Não é possível alterar o endereço de memória, mas é possível alterar o valor do objeto	
const p1 = new Pessoa('Luiz', 'Miranda');