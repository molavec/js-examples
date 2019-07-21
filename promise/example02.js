const { normalTask, delayTask, callbackTask, callbackDelayTask, asyncTaskPromise, asyncTaskAwait } = require('./tasks')
/**
 * Ejemplo 2:
 *
 * Imprime de forma asincrona.
 *
 * Se obtiene se obtiene 'undefined' ya que la función no retorna nada.
 * El valor se imprime mediante un console.log al interior de la función.
 * Sin embargo, el valor retornado por la función anónima del de la función
 * 'setTimeout' no es capturado es almacenado en ninguna variable.
 */
console.log('--> Ejemplo 2:')
returnedValue = delayTask(2)
console.log(returnedValue)