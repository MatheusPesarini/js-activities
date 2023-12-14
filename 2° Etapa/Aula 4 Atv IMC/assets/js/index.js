function calculoIMC(){
    const dados = document.querySelector(".dados");

    function recebeEventoForm(evento){
        evento.preventDefault();

        const peso = Number(dados.querySelector(".peso").value);
        const altura = Number(dados.querySelector(".altura").value);

        console.log(peso, altura);
        const resultado = peso / (altura * altura);

        classificacaoIMC(resultado);
    }

    dados.addEventListener('submit', recebeEventoForm);
}

function classificacaoIMC(resultado){
    console.log(resultado);
    if(resultado < 18.5){
        exibirResult.innerHTML = `Seu IMC é ${resultado.toFixed(2)} e você está abaixo do peso.`;
    }else if(resultado >= 18.5 && resultado < 25){
        exibirResult.innerHTML = `Seu IMC é ${resultado.toFixed(2)} e você está com o peso normal.`;
    }else if(resultado >= 25 && resultado < 30){
        exibirResult.innerHTML = `Seu IMC é ${resultado.toFixed(2)} e você está com sobrepeso.`;
    }else if(resultado >= 30 && resultado < 35){
        exibirResult.innerHTML = `Seu IMC é ${resultado.toFixed(2)} e você está com obesidade grau 1.`;
    }else if(resultado >= 35 && resultado < 40){
        exibirResult.innerHTML = `Seu IMC é ${resultado.toFixed(2)} e você está com obesidade grau 2.`;
    }else if(resultado >= 40){
        exibirResult.innerHTML = `Seu IMC é ${resultado.toFixed(2)} e você está com obesidade grau 3.`;
    }
}

calculoIMC();
const exibirResult = document.querySelector(".exibirResult");   