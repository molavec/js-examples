/**
 * example 11: Scoping y describe
 *
 * Description:
 * Se puede utilizar describe para agrupar test.
 * Los 'before' y 'after' dentro de un describe solo
 * se aplicarán para los test dentro del grupo.
 *
 * How execute:
 * $ npx jest jest/example11.test.js
 * $ yarn jest:example11
 *
 */

let cities = ['Santiago', 'Lima', 'Buenos Aires'];

// Se aplica a todos los test
beforeEach(() => {
  console.log("-> Ejecuta beforeEach")
  cities.push('La Paz') //Añade 'La Paz' en cada test
});

afterEach(() => {
  console.log("-> Ejecuta afterEach")
  console.log(cities)
  cities.pop() //Remueve 'La Paz' en cada test (Prueba que pasa cuando comentas esta línea)
});

test('Test beforeEach (1)', () => {
  console.log("1.- Ejecuta test (1)")
  // console.log(cities)
  expect(cities.length).toBeGreaterThanOrEqual(4);
});

describe('Dentro del describe tenenos...', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    cities.push('Quito')
  });

  //descomenta las siguiente línea y compara.
  /*
  afterEach(() => {
    cities.pop()
  });
  */

  test('Test Añade Quito ', () => {
    console.log("2.- Ejecuta test dentro de describe (2)")
    // console.log(cities)
    expect(cities).toContain('Quito');
  });
});