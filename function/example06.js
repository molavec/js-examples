/**
 * example06: Declarar Destructuración
 *
 * Description:
 * Se puede destructurar un objeto para obtener sólo los elementos
 * que se requieran
 *
 * How execute:
 * $ yarn function:example06
 */

console.log('--> Ejemplo 6: Destructuring')
const punto = {x:10 , y:20, z:30}
let fun = ({x: puntox, y: puntoy}) => {
  console.log(`X: ${puntox} - Y: ${puntoy}`)
}
fun(punto)

