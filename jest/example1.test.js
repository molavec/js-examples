/**
 * example1: matcher con strings
 *
 * Description:
 * Utiliza distintos matchers que se pueden utilizar con strings
 *
 * How execute:
 * $ npx jest example1.test.js
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