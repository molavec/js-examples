/**
 * example 8: async/wait
 *
 * Description:
 * Ejemplos para funciones asincrónicas con async/await
 * https://jestjs.io/docs/en/asynchronous
 *
 *
 *
 * How execute:
 * $ jest jest/example8.test.js
 * $ yarn jest:example8
 *
 */

/**
 * Espera 1 segundo y le pasa el texto 'peanut butter' a la función callback que es pasa como argumento.
 *
 * @param {*} callback Función que recibirá como argumento el texto 'peanut butter'
 */
let fetchText = (callback) => {
  setTimeout(() => {
    callback('peanut butter')
  }, 1000 )
}

/**
 * Notar que es necesario utlizar un callback ('done') como argumento en el test.
 * Esto es necesario ya que es la forma que tiene Jest esperará hasta que se
 * ejecute dicha función.
 *
 * El problema de no utilizar el done es que el test terminaría
 * tan pronto como fetchText termine, incluso antes de llamar al callback
 */
test('Test de funciones asíncronicas que solicitan un callback', done => {
  // se define el callback que requieres la función fetchText.
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  // se ejecuta la función fetchData
  fetchText(callback);
});