
// Generadores (Generators)
// Las funciones generadoras devuelven un objeto Generator.
// Se declaran con function* y usan yield para pausar la ejecución y devolver un valor.

export function* countGenerator() {
  yield 1;
  yield 2;
  yield 3;
  return "No hay más valores";
}
