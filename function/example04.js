 /**
 * example04: Operador rest
 *
 * Description:
 * Permite recibir una cantidad variable de parámetros
 *
 * How execute:
 * $ yarn function:example04
 */

console.log('--> Ejemplo 4:')

const sumar = (...valores) => {
  let resultado = 0
  valores.forEach((valor) => {
    // console.log(valor)
    resultado += valor
  })
  // console.log(valores) //<-- Entrega los valores como un arreglo
  return resultado
}

console.log(sumar(1,2,3))
console.log(sumar(2,2))

/**
 * Ejemplo 4:
 *
 * Operador spread
 *
 * Permite enviar los objetos de un arreglo como su fueran elementos
 * independientes.
 *
 * En el caso de funciones, sirve para entregar valores de un arreglo
 * como parámetros independientes.
 *
 */
console.log('--> Ejemplo 5:')
 let numeros = [1, 2, 3]

 /**
  * En este caso se entrega a la función todo el arreglo y como el
  * parámetro de la función. El operador rest almacena todo del
  * arreglo como el elemento 0 del parémetro 'valores'.
  * Luego, se suma todo el objeto arreglo a 0 por lo que javascript
  * lo considera lo considera como una concatenación y tiene como
  * resultado "01,2,3"
  */
 console.log(numeros)
 console.log('sumar sin spread: ' + sumar(numeros))

 /**
  * En este caso, se separan los valores del arreglo antes de
  * pasarlos a la función sumar, lo que permite a la función obtener
  * los valores como si fuesen valores separados.
  */
 console.log(...numeros)
 console.log('sumar con spread: ' + sumar(...numeros))

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