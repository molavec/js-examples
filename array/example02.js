/**
 * example 2: Destructuring (extraer valores de un arreglo a variables)
 *
 * Description:
 * Se utiliza destructiring para guardar los valores de un arreglo
 * (objeto de tupo iterable) en variables.
 * Mas información:
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
 *
 * How execute:
 * $ yarn array:example02
 *
 */

const punto =  [10, 20, 15]

//Guarda en la variable x, y, z los valores de cada elemento del arrelo según la posición.
let [ x, y, z ] = punto
console.log(x)
console.log(y)
console.log(z)