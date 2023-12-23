const conta = (operador, acumulador, ...numeros) => { // ...numeros é um rest operator, ele pega todos os parâmetros e coloca em um array
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50);