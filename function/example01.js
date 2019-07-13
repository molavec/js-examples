/**
 * example01: Declarar función
 *
 * Description:
 * Cuando se declara una función SÍ se puede utilizar antes
 *
 * How execute:
 * $ yarn function:example01
 */


console.log('--> Ejemplo 1:')
console.log(sum(1,1)) // <-- Se aplica hoisting

function  sum(a, b) {
  return a + b
}
