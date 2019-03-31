const createBigFile = require('./big-file-generator')
const { bigFileServer, streamServer } = require('./big-file-server')
const writable = require('./writable')
const readable = require('./readable')
const duplex = require('./duplex')
const transform = require('./transform')
const object = require('./object')
const buildin = require('./buildin')

/**
 * Ejemplo 1:
 *
 * Crea un archivo de gran tamaño utlizaando stream.
 *
 * El archivo generado es necesario para los ejemplos 2, 8.
 *
 * Se utliza un stream para ir llenando el archivo
 * NOTA: Puedes comentar esta función cuando lo hayas ejecutado una vez.
 *
 *
 */
console.log("--> Ejemplo 1: (Debes descomentar para probar)")
createBigFile()


/**
 * Ejemplo 2:
 *
 * Compara el consumo de memoria que utiliza
 * al descargar el archivo desde un servidor y otro.
 *
 */
console.log("--> Ejemplo 2: (debes descomentar para probar)")
//bigFileServer()
//streamServer()

/**
 * Ejemplo 3:
 *
 * Prueba un writable stream.
 * Obtiene contenido de stdin y lo muestra en pantalla
 *
 */
console.log("--> Ejemplo 3: (debes descomentar para probar)")
//writable()

/**
 * Ejemplo 4:
 *
 * Prueba como funciona un readable stream.
 *
 * How to:
 * Genera un texto con el abecedario que es consumido por
 * 'process.stdout'
 *
 * EJ: imprime ABCDEFGHIJKLMNOPQRSTUVWXYZ%
 */
console.log("--> Ejemplo 4: (debes descomentar para probar)")
//readable()

/**
 * Ejemplo 5:
 *
 * Prueba como funciona un duplex stream.
 *
 * How to:
 * Mezcla el ejemplo de readable y writable en uno
 *
 * NOTA: Al final crea en el mismo objeto un stream writable y readable
 * que no están conectados entre sí.
 *
 */
console.log("--> Ejemplo 5: (debes descomentar para probar)")
//duplex()


/**
 * Ejemplo 6:
 *
 * Prueba como funciona un transform stream.
 *
 * How to:
 * Convierte en mayúsculas el texto ingresado
 *
 * EJ:
 * abcd --> ABCD
 */
console.log("--> Ejemplo 6: (debes descomentar para probar)")
//transform()

/**
 * Ejemplo 7:
 *
 * Prueba como funciona un stream con objetos.
 *
 * How to:
 * Ingresa en el terminal un string separados con comas y lo convierte
 * en un JSON.
 *
 * EJ:
 * 'a, b, c, d' --> {'a':'b', 'c':'d'}
 */
console.log("--> Ejemplo 7: (debes descomentar para probar)")
//object()

/**
 * Ejemplo 7:
 *
 * Prueba como funciona un transform stream.
 *
 * Utiliza stream de node para comprimir y encriptar.
 */
console.log("--> Ejemplo 8: (debes descomentar para probar)")
//buildin()

