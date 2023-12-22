const number = Math.floor(Math.random() * (100 - 0));
console.log(`O número sorteado foi ${number}`);
console.log('-----------------------------------');

div(number);

function div(num) {
    if (isNaN(num)) return console.log('Não é um número');

    if (num % 3 === 0) {
        console.log('Fizz');
    }

    if (num % 5 === 0) {
        console.log('Buzz');
    }

    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz');
    }else{
        console.log(`O número ${num} não é divisível por 3 e 5`);
    }
}