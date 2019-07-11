/**
 * example1: Operador Spread
 *
 * Description:
 * Permite enviar los objetos de un arreglo como su fueran elementos
 * independientes.
 * En el caso de arreglos, sirve para añadir elementos a un arreglo
 *
 * How execute:
 * $ node example1
 * $ yarn array:example1
 */

let arr = [1,2,3,4,5,6,7]
let spreadArr = [0, ...arr, 10]
console.log(spreadArr)

