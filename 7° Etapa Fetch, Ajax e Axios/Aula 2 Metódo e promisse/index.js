function rand (min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string'){
                reject('BAD VALUE')
                return
            }
            resolve(msg.toUpperCase() + ' - Passei na promise')
            return;
        }, tempo)
    })
}

// Promise.all - Promise.race - Promise.resolve - Promise.reject

function baixaPagina(){
    const emCache = true

    if(emCache){
        return Promise.resolve('Página em cache')
    }else{
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))


const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
]

// Promise.all(promises) Pega todas as promises e retorna um array com todas as respostas
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro)
//     })

// Promise.race(promises) Pega a primeira promise que resolver e retorna o valor dela
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro)
//     })

// Promise.resolve('O valor') // Retorna uma promise resolvida
//     .then(function(valor){
//         console.log(valor)   
//     })


// Promise.reject('O valor') // Retorna uma promise rejeitada
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro)
//     })
