/**
 * example03: Declarar función
 *
 * Description:
 * Función como método
 *
 * How execute:
 * $ yarn function:example03
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