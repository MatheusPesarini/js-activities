let numero = Number(prompt('Digite um número: '));

document.getElementById('Numero').innerHTML = numero;

document.getElementById('raiz').innerHTML = numero ** 0.5;

document.getElementById('nan').innerHTML = isNaN(numero); // Retorna se o número é NaN ou não

document.getElementById('arrendBaixo').innerHTML = Math.floor(numero); // Arredonda para baixo

document.getElementById('arrendCima').innerHTML = Math.ceil(numero); // Arredonda para cima

document.getElementById('decimais').innerHTML = numero.toFixed(2); // Arredonda para o número de casas decimais que você quiser
