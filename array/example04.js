/**
 * example 4: Destructuring utilizando operador spread
 *
 * Description:
 * Permite copiar valores de arreglos definidos a variables
 * en el mismo momento de la declaración,
 * aprovechando la propiedad 'Spread'.
 * (el operador spread debe ser el último elemento)
 *
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
 *
 * How execute:
 * $ yarn array:example04
 *
 */

let [ valor1, valor2, ...restoValores] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//let [ valor1, valor2, ...restoValores] = 'hola mundo'
console.log(valor1)
console.log(valor2)
console.log(restoValores)