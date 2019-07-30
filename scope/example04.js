/**
* example04: comportamiento 'let'
*
* Description:
* muestra ejemplos del comportamiento de 'let'
* 'let' tiene un ambito (scope) a nivel de bloque, es decir,
* la variable puede ser visible o modificada en el ambito de
* la función que es declarada.
*
* How execute:
* $ node scope/example04.js
* $ node yarn:example04
*
*/

/**
 * Diferencias entre var y let
 * var: scope a nivel de función
 * let: scope a nuvel de bloque
 */

if( true ){
  var x = 'Hola, Soy X!'
}

let y
if( 3 < 5 ){
  let y = 'Hola, Soy Y!' // <-- es posible volver a declarar
                         // porque está dentro de un bloque
}

(x !== undefined) ? console.log(x) : console.log("no está definida");
(y !== undefined) ? console.log(y) : console.log("no está definida");

/**
 * Diferencias entre var y let
 * var: tiene comportamiento de hoisting
 * let: no tiene comportamiento de hoisting
 */

// hoisting
z = "z es declarada antes"
console.log(z)
var z

// sin hoisting
let w
w = "w DEBE ser declarada antes"
console.log(w)
