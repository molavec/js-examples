/**
 * example 5: exceptions
 *
 * Description:
 * Ejemplos de matcher con exceptiones
 * https://jestjs.io/docs/en/using-matchers
 *
 * How execute:
 * $ npx jest jest/example05.test.js
 * $ yarn jest:example05
 *
 */

/**
 * Clase para enviar un Error
 */
 class ConfigError extends Error {
  constructor(msg){
    super(msg)
  }
}

function compileAndroidCode() {
  throw new ConfigError('Lanzando un error de configuración');
}

test('Test de excepciones', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(ConfigError);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('Lanzando un error de configuración');
  expect(compileAndroidCode).not.toThrow(/configuracion/); // <-- Notar que funciona sin el tilde en
  // expect(compileAndroidCode).not.toThrow(/configuración/); // <-- Lanza error
  expect(compileAndroidCode).not.toThrow(/JDK/);
});