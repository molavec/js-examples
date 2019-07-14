/**
 * example 7: async promises
 *
 * Description:
 * Ejemplos para funciones asincrónicas con promesas
 * https://jestjs.io/docs/en/asynchronous
 *
 *
 *
 * How execute:
 * $ jest jest/example7.test.js
 * $ yarn jest:example7
 *
 */

/**
 * Retorna una promesa
 * Espera 1 segundo y le pasa el texto 'peanut butter' al resolve.
 *
 * @return {Promise} Retorna una promesa
 */
let fetchText = () => (new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Mr. Peanut Butter')
  }, 1000 )
}))



/**
 *
 * Método 1: utiliza el ".then"
 *
 * Asegurate de retornar la promesa. Si se omite la sentencia de "return" el test
 * será completado antes de que la promesa retornada del reolve del fetchText y
 * el 'then' tenga oportunidad de ejecutar el callback.

 */
test('Test Promesa que retorna Mr. Peanut Butter (.then)', () => {
  return fetchText().then(data => {
    expect(data).toBe('Mr. Peanut Butter');
  });
});

/**
 *
 * Método 2: utiliza '.resolve'
 *
 * Al igual que el caso anterior, recordar utilizar el 'return'. En caso contrario,
 * el test se completará antes de que la promesa se resuelva.
 */
test('Test Promesa que retorna Mr. Peanut Butter (.resolve)', () => {
  return expect(fetchText()).resolves.toBe('Mr. Peanut Butter');
});



/**
 * Retorna que lanza un reject
 * Espera 1 segundo y lanza un reject.
 *
 * @return {Promise} Retorna una promesa
 */
let fetchReject = () => (new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Esta promesa siempre lanza un reject")
  }, 1000 )
}))

/**
 * Método 1: utliliza el "catch"
 *
 * Si espera que una promesa sea rechazada, use el método '.catch'.
 * Asegúrese de agregar 'expect.assertions' para verificar que se
 * llama a un cierto número de aserciones. De lo contrario, una
 * promesa cumplida no fallaría la prueba.
 */
test('Test promesa que retorna un reject (.catch)', () => {
  expect.assertions(1);
  return fetchReject().catch(e => expect(e).toMatch(/reject/));
});

/**
 * Método 2: utiliza el rejects.
 *
 * Similar al caso del '.resolve'. Si la promesa se resuelve fallará
 */
test('Test promesa que retorna un reject (.rejects)', () => {
  return expect(fetchReject()).rejects.toMatch(/reject/);
});

