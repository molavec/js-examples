/**
 * example 5: Destructuring para reordenar
 *
 * Description:
 * Permite reordenar elementos de un arreglo
 * mediante destructuring.
 *
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
 *
 * How execute:
 * $ yarn array:example05
 *
 */


// todos loc valores
let [ a, b ] = [1, 2]
console.log(`a: ${a}, b: ${b}`)
console.log('--> Se reordenan valores: [a, b] = [b, a]'); //<-- Es necesario utilizar punto y coma antes de la destructuración.
[a, b] = [b, a]
console.log(`a: ${a}, b: ${b}`)