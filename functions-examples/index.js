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
  valores.forEach((valor) => resultado += valor)
  console.log(valores) //<-- Entrega los valores como un arreglo
  return resultado
}

console.log(sumar(1,2,3))
console.log(sumar(2,2))