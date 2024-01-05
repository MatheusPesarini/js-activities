function teste(){
    console.log(this)
}

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        // teste(); Ao chamar o metodo teste, o this não é mais o objeto, mas sim o escopo global
    }

    // Metodo de instancia
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    // Metodo estatico
    static trocaPilha(){
        console.log(this)
    }
}

const controle1 = new ControleRemoto('LG');
console.log(ControleRemoto.trocaPilha()) // O metodo estático não é acessado pelo objeto, mas sim pela classe