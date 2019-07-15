/**
 * example 4: array matchers
 *
 * Description:
 * Ejemplos de matcher con arreglos
 * https://jestjs.io/docs/en/using-matchers
 *
 * How execute:
 * $ npx jest jest/example04.test.js
 * $ yarn jest:example04
 *
 */

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('Verificación si contiene el elemento "beer"', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});