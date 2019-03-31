/**
 * Ejemplo 1:
 *
 * Declaración de una función
 *
 * Cuando se declara una función SÍ se puede utilizar antes
 *
 */

console.log('--> Ejemplo 1:')
console.log(sum(1,1)) // <-- Se aplica hoisting

function  sum(a, b) {
  return a + b
}

/**
 * Ejemplo 2:
 *
 * Expresión de una función
 *
 * Cuando se declara una función NO se puede utilizar antes
 *
 */
console.log('--> Ejemplo 2:')
const mult = (a, b) => a * b
console.log(mult(2,2))  // <-- No se aplica hoisting


/**
 * Ejemplo 3:
 *
 * Función como método
 */
console.log('--> Ejemplo 3:')
const player = {
  name: 'Juan',
  sayHi: function() {console.log(`Hola, mi nombre es ${this.name}.`)},
  sayHi2: () => console.log(`Hola, mi nombre es ${this.name}.`)
}

player.sayHi() // <-- Funciona
player.sayHi2() // <-- No funciona
player.name = 'Antonio'
player.sayHi()


/**
 * Ejemplo 3:
 *
 * Operador rest
 *
 * Permite recibir una cantidad variable de parámetros
 *
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