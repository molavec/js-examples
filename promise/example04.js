/**
 * Ejemplo 4:
 *
 * Imprime de forma asincrona.
 *
 * Primero imprime el valor retornado y luego (despues de 3s) se imprime el valor desde el callback.
 *
 */
console.log('--> Ejemplo 4:')
returnedValue = callbackDelayTask(3, (text) => console.log('Ejemplo 4: Se imprime desde el callback: ' + text))
console.log('Se imprime el valor retornado: ' + returnedValue)