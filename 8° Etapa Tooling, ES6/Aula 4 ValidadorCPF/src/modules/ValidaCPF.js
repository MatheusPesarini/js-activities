export default class ValidaCPF{
    constructor(cpfRecebido){
        this.cpfRecebido = cpfRecebido;
    }

    get cpfLimpo(){
        return this.cpfRecebido.replace(/\D+/g, '');
    }

    valida(){
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        const novoCPF = cpfParcial + digito1 + digito2;
        this.novoCPF = novoCPF;
        return this.novoCPF === this.cpfLimpo;
    }

    static criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial);
    
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);
        
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia(){
        return this.cpfLimpo.charAt[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
}
