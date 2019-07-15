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
