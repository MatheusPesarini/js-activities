function soma(x, y){
    const soma = x + y;
    return soma;
}

const somar = soma(2, 2); // 4
console.log(somar);

console.log(soma(3, 3)); // 6

// Outra maneira de criar função
const raiz = function(n){
    return n ** 0.5;
}

console.log(`Raiz: ${raiz(9)}`); // 3

// Arrow function
const raiz2 = (n) => {
    return n ** 0.5;
}

// const raiz2 = n => n ** 0.5; // Quando só tem um parâmetro e uma linha de código

console.log(`Raiz: ${raiz2(9)}`); // 3