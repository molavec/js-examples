/**
 * example07: Parámetros por defecto
 *
 * Description:
 * Se puede definir parámetros por defecto.
 *
 * How execute:
 * $ node function/example07
 * $ yarn function:example07
 */

 /**
  * Retorna un saludo
  *
  * @param {*} name El nombre pasasdo como parametro o 'Anónimo' en caso de ser null.
  * @returns String con el saludo.
  */
 let greeting = (name='Anónimo') => (`Hola ${name}!`)

console.log(greeting(5))
console.log(greeting('Miguel'))
console.log(greeting())

