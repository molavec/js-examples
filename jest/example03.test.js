/**
 * example 3: boolean matchers
 *
 * Description:
 * Ejemplos de matcher con booleanos
 * https://jestjs.io/docs/en/using-matchers
 *
 * How execute:
 * $ npx jest jest/example03.test.js
 * $ yarn jest:example03
 *
 */

test('Matchers con null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('Matchers con cero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});