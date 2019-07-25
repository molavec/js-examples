const { normalTask, delayTask, callbackTask, callbackDelayTask, asyncTaskPromise, asyncTaskAwait } = require('./tasks')
/**
 * Ejemplo 3:
 *
 * Imprime de forma sincronica.
 *
 * Se imprime el valor de forma sincronica, pues primero se ejecuta el callback
 * y luego se imprime el valor retornado.
 *
 */
console.log('--> Ejemplo 3:')
returnedValue = callbackTask((text) => console.log('Ejemplo 3: Se imprime desde el callback: ' + text))
console.log('Se imprime el valor retornado: ' + returnedValue)