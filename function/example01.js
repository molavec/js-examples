/**
 * example01: Function Declaration
 *
 * Description: Function Declataration
 *
 * Cuando se declara una función (con 'function') se
 * puede utilizar antes de la declaración ya que se
 * el concepto de hoisting.
 * https://developer.mozilla.org/es/docs/Glossary/Hoisting
 * https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052
 *
 * How execute:
 * $ yarn function:example01
 */

console.log(sum)
console.log(sum(1,1)) // <-- Se aplica hoisting

function sum(a, b) {
  return a + b
}
