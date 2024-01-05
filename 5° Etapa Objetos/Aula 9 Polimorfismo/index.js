// Polimorfismo seria a capacidade de ter dois metódos filhos com o mesmo nome, mas com comportamentos diferentes

function conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
}

function contaCorrente(agencia, conta, saldo, limite){
    conta.call(this, agencia, conta, saldo); // Herdando os atributos da classe conta
    this.limite = limite;
}

contaCorrente.prototype = Object.create(conta.prototype);
contaCorrente.prototype.constructor = contaCorrente;

contaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

function contaPoupanca(agencia, conta, saldo){
    conta.call(this, agencia, conta, saldo);
}

contaPoupanca.prototype = Object.create(conta.prototype);
contaPoupanca.prototype.constructor = contaPoupanca;

const cc = new contaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

const cp = new contaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);