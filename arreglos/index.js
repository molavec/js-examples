
let arr = [1,2,3,4,5,6,7]

/**
 * Ejemplo 1:
 *
 * Operador Spread
 *
 * Permite enviar los objetos de un arreglo como su fueran elementos
 * independientes.
 *
 * En el caso de arreglos, sirve para añadir elementos a un arreglo
 */

console.log('--> Ejemplo 1:')
let spreadArr = [0, ...arr, 10]
console.log(spreadArr)


/**
 * Ejemplo2:
 *
 * Destructuring
 */
console.log('--> Ejemplo 2: Destructuración')
console.log('--> Ejemplo 2.a:')
const punto =  [10, 20, 15]
let [ x, y, z ] = punto
console.log(x)
console.log(y)
console.log(z)

// todos loc valores
console.log('--> Ejemplo 2.b:')
let [ a, b ] = [7, 8]
console.log(a)
console.log(b)

console.log('--> Ejemplo 2.c:')
let c, d
[ c, ] = [3, 4]; //<-- Es necesario el punto y coma
[ , d ] = [5, 6]
console.log(c) //<-- 5
console.log(d) //<-- undefined

console.log('--> Ejemplo 2.d:')
let [valor1, valor2, ...restoValores] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(valor1)
console.log(valor2)
console.log(restoValores)