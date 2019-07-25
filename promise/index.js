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


/**
 * Ejemplo 6:
 *
 * Imprime de forma sincronica.
 *
 * El 'await' debe estar dentro de una función 'async' por este motivo
 * se utiliza la función 'main'.
 *
 * La función se ejecuta de forma sincronica pues se imprime el valor retornado
 * después de esperar los 5s.
 */
console.log('--> Ejemplo 6:')
let main = async () => {
  returnedValue = await asyncTaskPromise(5)
  console.log('Ejemplo 6: Se obtiene el valor mediante await: ' + returnedValue)
}
main()

/**
 * Ejemplo 7:
 *
 * Imprime de forma asincrona.
 *
 * Idem ejemplo 5 pero retorna la promesa utilizando await
 */
console.log('--> Ejemplo 7:')
returnedValue = asyncTaskAwait(6).then((text) => console.log("Ejemplo 7: Se obtiene el valor mediante la promesa finalizada: " + text))
console.log(returnedValue)

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

/**
 * Ejemplos para gestionar Errores
 * https://til.hashrocket.com/posts/aucwkd8b36-asyncawait-unhandledpromiserejectionwarning
 *
 */

promise13 = () => {
  return new Promise((resolve, reject) => { reject(13)})
}

(async () => {
  let num = await promise13(); // UnhandledPromiseRejectionWarning
  console.log('num', num);
})();

(async () => {
  try {
    let num = await promise13();
    console.log('num', num);
  } catch(e) {
    console.log('Error caught');
  }
})();

(async () => {
  let num = await promise13().catch((err) => console.log('caught it'));
  console.log('num', num);
})();


console.log('--> Final')
