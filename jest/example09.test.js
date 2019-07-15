/**
 * example 9: Repeating Setup For Many Tests
 *
 * Description:
 * beforeEach - Repite una configuración para cada test
 * afterEach - Repite una configuración después de cada test
 *
 * How execute:
 * $ npx jest jest/example09.test.js
 * $ yarn jest:example09
 *
 */

let cities = ['Santiago', 'Lima', 'Buenos Aires'];

beforeEach(() => {
  console.log("-> Ejecuta beforeEach")
  cities.push('La Paz') //Añade 'La Paz' en cada test
});

afterEach(() => {
  console.log("-> Ejecuta afterEach")
  cities.pop() //Remueve 'La Paz' en cada test (Prueba que pasa cuando comentas esta línea)
});

test('Test beforeEach (1)', () => {
  console.log("1.- Ejecuta test (1)")
  // console.log(cities)
  expect(cities.length).toBeGreaterThanOrEqual(4);
});



test('Test beforeEach (2)', () => {
  console.log("2.- Ejecuta test (2)")
  // console.log(cities)
  expect(cities).toContain('La Paz');
});