const { normalTask, delayTask, callbackTask, callbackDelayTask, asyncTaskPromise, asyncTaskAwait } = require('./tasks')
/**
 * Ejemplo 8:
 *
 * Imprime de forma sincronica.
 *
 * Idem ejemplo 6 pero retorna la promesa utilizando await
 */
console.log('--> Ejemplo 8:')
let main2 = async () => {
  returnedValue = await asyncTaskAwait(7)
  console.log('Ejemplo 8: Se obtiene el valor mediante await: ' + returnedValue)
}
main2()