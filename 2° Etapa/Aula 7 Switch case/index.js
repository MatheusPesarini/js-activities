const data = new Date();
const diaSemana = data.getDay();

const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemanaTexto);

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
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
 
/*switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
        break;
}*/


/*if (diaSemana === 0) {
  console.log("Domingo");
} else if (diaSemana === 1) {
  console.log("Segunda");
} else if (diaSemana === 2) {
  console.log("Terça");
} else if (diaSemana === 3) {
  console.log("Quarta");
} else if (diaSemana === 4) {
  console.log("Quinta");
} else if (diaSemana === 5) {
  console.log("Sexta");
} else if (diaSemana === 6) {
  console.log("Sábado");
} else {
  console.log("Dia inválido");
} */