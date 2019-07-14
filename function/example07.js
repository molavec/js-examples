/**
 * example07: Parámetros por defecto
 *
 * Description:
 * Se puede destructurar un objeto para obtener sólo los elementos
 * que se requieran
 *
 * How execute:
 * $ yarn function:example07
 */


 console.log('--> Ejemplo 7: Parámetros por defecto')

 let fun2 = (name='Anónimo') => {
   console.log(`Hola ${name}!`)
 }
 fun2(5)
 fun2('Miguel')
 fun2()

/**
 * Ejemplo 7:
 *
 * Short Circuit
 *
 * Es una forma simple de utilizar un valor por defecto en caso
 * de que un parámetro sea nulo.
 *
 */
let fun7 = (title) => {
  return title || "Título por defecto"
}
console.log( fun7("Este es un título"))
console.log( fun7())

