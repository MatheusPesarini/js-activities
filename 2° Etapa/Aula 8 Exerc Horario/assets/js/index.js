horarioMain()

function horarioMain() {
    let result = document.querySelector(".horarioText");
    let dataFunc = new Date();

    let dataDia = dataFunc.getDay();
    let hora = zeroAEsquerda(dataFunc.getHours());
    let minutos = zeroAEsquerda(dataFunc.getMinutes());
    let ano = zeroAEsquerda(dataFunc.getFullYear());
    let dia = zeroAEsquerda(dataFunc.getDate());
    let mes = zeroAEsquerda(dataFunc.getMonth());

    dataDia = diaSemana(dataDia);
    dataMes = diaMes(mes);

    result.innerHTML = `${dataDia}-feira, ${dia} de ${dataMes} de ${ano} - ${hora}:${minutos}`;
}

function zeroAEsquerda(data){
    return data >= 10 ? data : `0${data}`;
}

function diaMes(mes){
    switch(mes){
        case 1:
            return "janeiro"
        case 2:
            return "fevereiro"
        case 3:
            return "março"
        case 4:
            return "abril"
        case 5:
            return "maio"
        case 6:
            return "junho"
        case 7:
            return "julho"
        case 8:
            return "agosto"
        case 9:
            return "setembro"
        case 10:
            return "outubro"
        case 11:
            return "novembro"
        case 12:
            return "dezembro"
    }
}

function diaSemana(dia){
    console.log(dia);
    let diaSemanaTexto;
    switch (dia){
        case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sábado";
            return diaSemanaTexto;
        default:
            diaSemanaTexto = "";
            return diaSemanaTexto;
    }
}
