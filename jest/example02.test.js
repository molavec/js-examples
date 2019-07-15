/**
 * example 2: number matchers
 *
 * Description:
 * Ejemplos de matcher con números
 * https://jestjs.io/docs/en/using-matchers
 *
 * How execute:
 * $ npx jest jest/example02.test.js
 * $ yarn jest:example02
 *
 */

test('Test para números enteros', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('Test para números flotantes', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});