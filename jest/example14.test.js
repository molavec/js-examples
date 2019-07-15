/**
 * example 14: test only
 *
 * Description:
 * Cuando un test falla, es importante ver que falla cuando sólo se
 * ejecuta este test. Con la opción test only se puede hacer esto.
 *
 * How execute:
 * $ jest jest/example14.test.js
 * $ yarn jest:example14
 *
 */

const greetings = require('./greetings');

test.only('jest:example1 - Prueba matcher con string', () => {
  expect(greetings('Miguel')).toMatch("Hello Miguel!");
});

test('jest:example1 - Prueba matcher con string utilizando regexp', () => {
  expect(greetings('Miguel')).toMatch(/Miguel/);
});

test('jest:example1 - Prueba matcher con string utilizando regexp', () => {
  expect(greetings('Miguel')).not.toMatch(/Hola/);
});