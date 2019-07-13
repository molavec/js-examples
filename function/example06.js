
/**
  * Ejemplo 6:
  *
  * Destructuración
  *
  * Se puede destructurar un objeto para obtener sólo los elementos
  * que se requieran
  *
  */
console.log('--> Ejemplo 6: Destructuring')
const punto = {x:10 , y:20, z:30}
let fun = ({x: puntox, y: puntoy}) => {
  console.log(`X: ${puntox} - Y: ${puntoy}`)
}
fun(punto)

/**
  * Ejemplo 6:
  *
  * Parámetros por defecto
  *
  * Se puede destructurar un objeto para obtener sólo los elementos
  * que se requieran
  *
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