/**
 * example1: Argumentos desde terminal
 *
 * Description:
 * Imprime argumentos desde el terminal utilizando process.
 *
 * How to execute:
 * $ node ejemplo1 hello world!
 * $ yarn arguments:example1
 *
 */

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});