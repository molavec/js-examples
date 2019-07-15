/**
 * example 9: One-Time Setup
 *
 * Description:
 * beforeAll - Ejecuta una vez configuración antes de ejecutar cualquier test
 * afterAll - Ejecuta una vez configuración después de ejecutar todos los test
 *
 * How execute:
 * $ jest jest/example09.test.js
 * $ yarn jest:example09
 *
 */


let cities = ['Santiago', 'Lima', 'Buenos Aires'];


beforeAll(() => {
  console.log("1.- Ejecuta beforeAll")
  cities.push('La Paz') //Añade 'La Paz' en cada test
});

afterAll(() => {
  console.log("4.- Ejecuta afterAll")
  cities.pop() //Remueve 'La Paz' en cada test (Prueba que pasa cuando comentas esta línea)
});

test('Test beforeEach (1)', () => {
  console.log("2.- Ejecuta test (1)")
  console.log(cities)
  expect(cities.length).toBeGreaterThanOrEqual(4);
});



test('Test beforeEach (2)', () => {
  console.log("3.- Ejecuta test (2)")
   console.log(cities)
  expect(cities).toContain('La Paz');
});