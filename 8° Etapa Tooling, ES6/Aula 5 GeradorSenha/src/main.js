import GeraSenha from './modules/GeraNumber';

import './assets/css/style.css';
const quantCaracter = document.querySelector('#quantCaracter');
const addNumber = document.querySelector('#addNumber');
const addMaiuscula = document.querySelector('#addMaiuscula');
const addMinuscula = document.querySelector('#addMinuscula');
const addSimbolo = document.querySelector('#addSimbolo');

function ajusteQuantCaracter(quantCaracterDigitado){
    let v = quantCaracterDigitado.value;

    quantCaracterDigitado.setAttribute("maxlength", "3");

    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
        quantCaracterDigitado.value = v.substring(0, v.length-1);
        return;
    }

    quantCaracterDigitado.value = quantCaracterDigitado.value.replace(/\D/g, '') // Remove tudo o que não é dígito
};

quantCaracter.addEventListener('input', function(event){
    ajusteQuantCaracter(quantCaracter);
    GerarSenha();
});

addNumber.addEventListener('click', function(event){
    GerarSenha();
});

addMaiuscula.addEventListener('click', function(event){
    GerarSenha();
});

addMinuscula.addEventListener('click', function(event){
    GerarSenha();
});

addSimbolo.addEventListener('click', function(event){
    GerarSenha();
});

const GerarSenha = () => {
    const GerarSenha = new GeraSenha();
}