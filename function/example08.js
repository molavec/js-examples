/**
 * example08: Short Circuit
 *
 * Description:
 * Es una forma simple de utilizar un valor por defecto en caso
 * de que un parámetro sea nulo.
 *
 * How execute:
 * $ yarn function:example08
 */

let fun7 = (title) => {
  return title || "Título por defecto"
}
console.log( fun7("Este es un título"))
console.log( fun7())

