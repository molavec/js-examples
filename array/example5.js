/**
 * example5: Destructuring / Desestructuración
 *
 * Description:
 * Permite copiar valores de arreglos definidos,
 * en el mismo momento de la declaración,
 * hacia uno nuevo con la misma estructura,
 * aprovechando la propiedad 'Spread'.
 *
 * How execute:
 * $ yarn array:example5
 *
 */


console.log('--> Ejemplo 5: utilizando spread')
let [valor1, valor2, ...restoValores] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(valor1)
console.log(valor2)
console.log(restoValores)