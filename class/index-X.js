/**
 * Ejemplo 1:
 *
 * Class Declaration
 *
 * Se define una clase mediante una declaración
 *
 */

console.log('--> Ejemplo 1:')
class Dog {

  constructor (nombre, edad, raza){
    this.nombre = nombre
    this.edad = edad
    this.raza = raza
  }

  ladrar() {
    console.log(`El perro ${this.nombre} ha ladrado.`)
  }

}

let dog = new Dog('Rocky', 7, 'Pastor alemán')
dog.ladrar()



/**
 * Ejemplo 2:
 *
 * Class Expression
 *
 * Se define una clase mediante una expresión
 *
 * Nota: hacer un poco más de ejemplos con
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/class
 *
 */

console.log('--> Ejemplo 2:')
const cat = class Cat {

  constructor (nombre, edad){
    this.nombre = nombre
    this.edad = edad
  }

  ladrar() {
    console.log(`El perro ${this.nombre} ha ladrado.`)
  }

}

let perro = new Perro('Rocky', 7, 'Pastor alemán')
perro.ladrar()


