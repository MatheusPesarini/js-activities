/*try {
    console.log(a);
    console.log('Abri arquivo');
    console.log('Manipulei arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (e) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
}*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    // Tratar erro
    // console.log(e);
} finally {
    console.log('Tenha um bom dia');
}