/**
 * Ejemplo 1:
 *
 * Obtiene argumentos utilizando process
 */

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});