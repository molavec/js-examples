/**
 * example 09: Invocación de Función anónima
 *
 * Description:
 * Innvoca una función anónima.
 *
 * How execute:
 * $ yarn function:example09
 */

// 1.- invoca a la función sin argumentos
((text) => {
  console.log(text || 'Texto retornado desde una función anónima!! yeeeiiiiishhhh!!')
})()

// 2.- invoca a la función con argumento "hola"
((text) => {
  console.log(text || 'Texto retornado desde una función anónima!! yeeeiiiiishhhh!!')
})("hola")