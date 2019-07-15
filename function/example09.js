/**
 * example08: Operaciones matemáticas en Función 
 *
 * Description:
 * Un buen resumen de operaciones matemáticas básicas
 * (resta, suma, multiplicación y división),
 * y operaciones lógicas comparativas (<, >, ==, !=)
 *
 * How execute:
 * node function/example09
 * $ yarn function:example09
 */

let numberOne = 60;
let numberTwo = 100;

function restar(a , b) {
  return a-b
}

function sumar(a , b) {
  return a+b
}

function multiplicar(a , b) {
  return a*b
}

function dividir(a , b) {
  return a/b
}
console.log('Operaciones matemáticas');
console.log(restar(numberOne, numberTwo));
console.log(sumar(numberOne, numberTwo));
console.log(multiplicar(numberOne, numberTwo));
console.log(dividir(numberOne, numberTwo));

/*
let result = numberOne - numberTwo;
console.log(result);
result = numberOne + numberTwo;
console.log(result);
result = numberOne * numberTwo;
console.log(result);
result = numberOne / numberTwo;
console.log(result);
*/
console.log('Comparaciones lógicas');
function mayorQue(a,b) {
  return a>b
}

function menorQue(a,b) {
  return a<b
}

function igualA(a,b) {
  return a==b
}

function distintoA(a,b) {
  return a!=b
}

console.log(mayorQue(numberOne, numberTwo));
console.log(menorQue(numberOne, numberTwo));
console.log(igualA(numberOne, numberTwo));
console.log(distintoA(numberOne, numberTwo));

/*
result = numberOne > numberTwo;
result = numberOne < numberTwo;
result = numberOne == numberTwo;
result = numberOne != numberTwo;
*/