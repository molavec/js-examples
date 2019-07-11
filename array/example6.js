/**
 * example6: Destructuring / Desestructuración
 *
 * Description:
 * Permite copiar valores de arreglos definidos,
 * en el mismo momento de la declaración,
 * hacia uno nuevo con la misma estructura.
 *
 * How execute:
 * $ yarn array:example6
 *
 */


// todos loc valores
console.log('--> Ejemplo 6:')
let [ a, b ] = [1, 2]
console.log(a)
console.log(b)

console.log('--> Ejemplo 6: Intercambio de valores')
console.log(`a: ${a}, b: ${b}`); //<-- Es necesario utilizar punto y coma antes de la destructuración. En caso contrario, considera la posición.
[a, b] = [b, a]
console.log(`a: ${a}, b: ${b}`)