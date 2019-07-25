/**
* example01: Hoisting en declaración de funciones
*
* Description:
* Ejemplo de hoisting
*
* How execute:
* $ node scope/example01.js
* $ node yarn:example01
*
*/


console.log(sum)
console.log(sum(1,1)) // <-- Se aplica hoisting

function sum(a, b) {
  return a + b
}
