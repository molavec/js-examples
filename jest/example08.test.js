/**
 * example 8: async/wait
 *
 * Description:
 * Ejemplos para funciones asincrónicas con async/await
 * https://jestjs.io/docs/en/asynchronous
 *
 *
 * How execute:
 * $ jest jest/example08.test.js
 * $ yarn jest:example08
 *
 */

/**
 * Retorna una promesa
 * Espera 1 segundo y le pasa el texto 'peanut butter' al resolve.
 * Notar el 'async' que antecede a la función.
 *
 * @return {Promise} Retorna una promesa
 */
let fetchText = async () => (new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Mr. Peanut Butter')
  }, 1000 )
}))

/**
 * Método 1: utiliza el "await"
 */
test('Test Async/Wait que retorna Mr. Peanut Butter (.then)', async () => {
  const data = await fetchText();
  expect(data).toBe('Mr. Peanut Butter');
});

/**
 * Método 2: utiliza el "await + .resolves"
 */
test('Test Async/Wait que retorna Mr. Peanut Butter (.resolves)', async () => {
  await expect(fetchText()).resolves.toBe('Mr. Peanut Butter');
});

/**
 * Retorna que lanza un reject
 * Espera 1 segundo y lanza un reject.
 * Notar que en este caso se envia un "Error" en el reject, por lo
 * que es posible utlizar '.toThrow'
 *
 * @return {Promise} Retorna una promesa
 */
let fetchReject = async () => (new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Esta promesa siempre lanza un reject"))
  }, 1000 )
}))

/**
 * Método 1: utiliza el "await"
 */
test('Test promesa que retorna un reject (.catch)', async () => {
  expect.assertions(1);
  try {
    await fetchReject();
  } catch (e) {
    expect(e.message).toMatch(/reject/);
  }
});

/**
 * Método 2: utiliza el ".rejects"
 */
test('Test promesa que retorna un reject (.rejects)', async () => {
  await expect(fetchReject()).rejects.toThrow(/reject/);
});