/**
 * example 3: Destructuring con y sin 'punto y coma' (;)
 *
 * Description:
 * Notar que es importante utilizar punto y coma
 * https://stackoverflow.com/questions/55441601/why-destructuring-is-undefined-when-i-dont-use-a-semicolon-at-end-line
 *
 * How execute:
 * $ yarn array:example03
 *
 */


let c, d
[ c, ] = [3, 4]; //<-- Es necesario el punto y coma
                 //    porque el estándar automaticamente
                 //    añade punto y coma a algunas expresiones
                 //    con var ser resuelve. Ver ejemplo de abajo
[ , d ] = [5, 6]
console.log(c) //<-- 3
console.log(d) //<-- 6


// let [ c, ] = [3, 4]
// let [ , d ] = [5, 6]
// console.log(c) //<-- 3
// console.log(d) //<-- 6
