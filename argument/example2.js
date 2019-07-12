/**
 * example1: Parámetros desde el terminal
 *
 * Description:
 * Imprime un string que contiene sólo los parámetros ingresados desde el terminal.
 * Elimina los argumentos 0 (Path a node) y 1 (path del script)
 *
 * How to execute:
 * $ node example2 hello world!
 * $ yarn arguments:example2
 *
 */

const paramsToString = (argumentsArray) => ( argumentsArray.slice(2).join(' ') )

console.log(paramsToString(process.argv))

module.exports = { paramsToString }
