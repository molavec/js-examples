/**
 * example02: Declarar función
 *
 * Description:
 * Cuando se declara una función NO se puede utilizar antes
 *
 * How execute:
 * $ yarn function:example02
 */

console.log('--> Ejemplo 2:')
const mult = (a, b) => a * b
console.log(mult(2,2))  // <-- No se aplica hoisting