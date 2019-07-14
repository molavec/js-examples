/**
 * example1: string matchers
 *
 * Description:
 * Ejemplos de matcher con strings
 *
 * How execute:
 * $ jest jest/example1.test.js
 * $ yarn jest:example1
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