/**
 * example08: Operaciones matemáticas en Función
 *
 * Description:
 * Un buen resumen de operaciones matemáticas básicas
 * (resta, suma, multiplicación y división),
 * y operaciones lógicas comparativas (<, >, ==, !=)
 *
 * How execute:
 * node function/example09
 * $ yarn function:example09
 */

/*
 * example 09: Invocación de Función anónima
 *
 * Description:
 * Innvoca una función anónima.
 *
 * How execute:
 * $ node function/example09
 * $ yarn function:example09
 */

// 1.- invoca a la función sin argumentos

((text) => {
  console.log(text || 'Texto retornado desde una función anónima!! yeeeiiiiishhhh!!')
})(); // <-- es importante utilizar el punto y coma (;) ya que no se autoañade.

// 2.- invoca a la función con argumento "hola"
((text) => {
  console.log(text || 'Texto retornado desde una función anónima!! yeeeiiiiishhhh!!')
})("hola"); // <-- es importante utilizar el punto y coma (;) ya que no se autoañade.
