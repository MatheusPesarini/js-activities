/*
Operadores lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

console.log('Luiz' && true && 'Maria') // Retorna o primeiro valor falso

function iniciei(){
    return 'Iniciei a função';
}

let vaiExecutar = 'João';

console.log(vaiExecutar && iniciei()); // Retorna o primeiro valor falso

console.log(0 || false || null || 'Luiz Otávio' || true); // Retorna o primeiro valor verdadeiro

const a = 0;
const b = null;
const c = 'false'; // String
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // Retorna o primeiro valor falso