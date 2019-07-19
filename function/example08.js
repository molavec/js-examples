/**
 * example08: Short Circuit
 *
 * Description:
 * Es un patrón de diseño que permite obtener un valor por defecto en caso
 * de que un parámetro sea nulo.
 * Sirve para ahorrarse un 'if' en casos de valores por defecto.
 *
 * How execute:
 * $ yarn function:example08
 */

let shorCircuit = (title) => {
  return title || "Título por defecto"
}
console.log(shorCircuit("Este es un título"))
console.log(shorCircuit())

