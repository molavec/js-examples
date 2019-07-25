/**
 * example06: Destructuración de objetos
 *
 * Description:
 * Se puede destructurar un objeto para obtener sólo los elementos
 * que se requieran
 *
 * How execute:
 * $ node function/example06
 * $ yarn function:example06
 */

/**
 * Define un punto
 *
 * @param {Object} Object Recibe un punto de coordenadas {x, y}
 * @return {String} Punto en {x,y}
 */
let puntoFun = ({x: puntox, y: puntoy}) => {
  return `X: ${puntox} - Y: ${puntoy}`;
}

// defino un punto en 3 dimensiones
const punto1 = {x:10 , y:20, z:30}
const punto2 = {y:40 , x:50, z:60} // <-- notar el cambio en el orden de las coordenadas x e y

// la función sólo considerará las coordenada x e y
console.log(puntoFun(punto1))
console.log(puntoFun(punto2))

module.exports = puntoFun