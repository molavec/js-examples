/**
 * example2: [título del ejemplo]
 *
 * Description:
 * [Replace this with description ]
 *
 * How execute:
 * $[example comand herr]
 *
 */


/**
 * Ejemplo2:
 *
 * Destructuring
 */

let arr = [1,2,3,4,5,6,7]

console.log('--> Ejemplo 2.a:')
const punto =  [10, 20, 15]
let [ x, y, z ] = punto
console.log(x)
console.log(y)
console.log(z)

// todos loc valores
console.log('--> Ejemplo 2.b:')
let [ a, b ] = [1, 2]
console.log(a)
console.log(b)

console.log('--> Ejemplo 2.c:')
let c, d
[ c, ] = [3, 4]; //<-- Es necesario el punto y coma
[ , d ] = [5, 6]
console.log(c) //<-- 5
console.log(d) //<-- undefined

console.log('--> Ejemplo 2.d: utilizando spread')
let [valor1, valor2, ...restoValores] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(valor1)
console.log(valor2)
console.log(restoValores)

console.log('--> Ejemplo 2.e: Intercambio de valores')
console.log(`a: ${a}, b: ${b}`); //<-- Es necesario utilizar punto y coma antes de la destructuración. En caso contrario, considera la posición.
[a, b] = [b, a]
console.log(`a: ${a}, b: ${b}`)