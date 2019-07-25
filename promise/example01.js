const { normalTask, delayTask, callbackTask, callbackDelayTask, asyncTaskPromise, asyncTaskAwait } = require('./tasks')

/**
 * Ejemplo 1:
 *
 * Imprime de forma sincronica.
 *
 * Se obtiene el nombre del task el que es retornado mediante la función.
 * En este ejemplo todo es sincrónico, es decir, se ejecuta secuencialmente.
 * Recomendación: Revisa este video para aprender un poco acerca de esta funcionalidad.
 * Javascript Async Await, Promesas y Callbacks - https://www.youtube.com/watch?v=Q3HtXuDEy5s
 *
 */
console.log('--> Ejemplo 1:')
let returnedValue = normalTask()
console.log(returnedValue)