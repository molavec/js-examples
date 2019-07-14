/**
 * example 1: string matchers
 *
 * Description:
 * Ejemplos de matcher con strings
 * https://jestjs.io/docs/en/using-matchers
 *
 * How execute:
 * $ jest jest/example01.test.js
 * $ yarn jest:example01
 *
 */

const greetings = require('./greetings');

test('jest:example1 - Prueba matcher con string', () => {
  expect(greetings('Miguel')).toMatch("Hello Miguel!");
});

test('jest:example1 - Prueba matcher con string utilizando regexp', () => {
  expect(greetings('Miguel')).toMatch(/Miguel/);
});

test('jest:example1 - Prueba matcher con string utilizando regexp', () => {
  expect(greetings('Miguel')).not.toMatch(/Hola/);
});