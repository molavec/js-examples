const { normalTask, delayTask, callbackTask, callbackDelayTask, asyncTaskPromise, asyncTaskAwait } = require('./tasks')
/**
 * Ejemplo 5:
 *
 * Imprime de forma asincrona.
 *
 * Imprime la promesa retornada y luedo (después de 4s) se imprime el valor desde el "then".
 */
console.log('--> Ejemplo 5:')
returnedValue = asyncTaskPromise(4).then((text) => console.log("Ejemplo 5: Se obtiene el valor mediante la promesa finalizada: " + text))
console.log(returnedValue)
