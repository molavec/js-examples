/**
 * example02: Function Expression
 *
 * Description:
 * Cuando se define una función mendiante expresión NO se puede
 * ejecutar antes de la expresión
 * https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052
 *
 * How execute:
 * $ yarn function:example02
 */


const mult = (a, b) => a * b // <-- Se debe declarar la función antes de utilizarla.

console.log(mult)
console.log(mult(2,2))  // <-- No se aplica hoisting