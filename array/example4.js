/**
 * example4: Destructuring / Desestructuración
 *
 * Description:
 * Permite extraer valores de arreglos definidos,
 * en el mismo momento de la declaración,
 * hacia uno nuevo con la misma estructura
 *
 * How execute:
 * $ yarn array:example4
 *
 */



console.log('--> Ejemplo 4:')
let c, d
[ c, ] = [3, 4]; //<-- Es necesario el punto y coma
[ , d ] = [5, 6]
console.log(c) //<-- 3
console.log(d) //<-- 6


