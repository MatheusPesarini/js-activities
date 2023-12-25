// Factory Function (Função Fábrica)
// Constructor Function (Função Construtora)
function criaPessoa (nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre nada'){
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}  

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('Maria', 'Oliveira', 1.6, 55);
const p3 = criaPessoa('João', 'Moreira', 1.9, 100);

console.log(p1.imc);