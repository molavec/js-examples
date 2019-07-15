/**
 * example1: Declaración de una clase
 *
 * Description:
 * Se declara la clase 'Dog', con los atributos
 * nombre, edad y raza, definidos en el constructor
 * de la clase.
 * 
 * Se declara también el método 'ladrar' que usa
 * el campo 'nombre' de la misma clase.
 *
 * How execute:
 * $ yarn class:example1
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

/*
* Se asigna a una variable de ámbito 'let'
* con la clase Dog y su método constructor
* 
* Se invoca el método 'ladrar' del objeto
* instanciado 'dog'.
*/

let dog = new Dog('Rocky', 7, 'Pastor alemán')
dog.ladrar()






