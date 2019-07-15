
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