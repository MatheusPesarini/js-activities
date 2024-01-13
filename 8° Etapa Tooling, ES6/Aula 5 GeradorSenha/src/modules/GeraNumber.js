const quantCaracter = document.querySelector('#quantCaracter');
const addNumber = document.querySelector('#addNumber');
const addMaiuscula = document.querySelector('#addMaiuscula');
const addMinuscula = document.querySelector('#addMinuscula');
const addSimbolo = document.querySelector('#addSimbolo');
const senhaGerado = document.querySelector('.senha-gerado');

export default class GeraSenha{
    constructor(){
        this.teste();
    }

    teste(){
        senhaGerado.innerHTML = '';
        let loop = Number(quantCaracter.value);
        console.log(loop)
        console.log(loop + 5)
        while(loop != 0){
            if(addNumber.checked == true){
                senhaGerado.innerHTML += this.geraNumber();
                loop--;
            }if (addMaiuscula.checked == true && loop != 0){
                senhaGerado.innerHTML += this.geraMaiuscula();
                loop--;
            }if (addMinuscula.checked == true && loop != 0){
                senhaGerado.innerHTML += this.geraMinuscula();
                loop--;
            }if (addSimbolo.checked == true && loop != 0){
                senhaGerado.innerHTML += this.geraSimbolo();
                loop--;
            }if (addNumber.checked == false && addMaiuscula.checked == false && addMinuscula.checked == false && addSimbolo.checked == false){
                break;
            }
            console.log(loop)
        }
    }

    geraNumber(){
        return Math.floor(Math.random() * 10);
    }

    geraMaiuscula(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    geraMinuscula(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    geraSimbolo(){
        const simbolos = '!@#$%&*_+;.,';
        return simbolos[Math.floor(Math.random() * simbolos.length)];
    }
}