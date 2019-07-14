/**
 * example03: Declarar función
 *
 * Description:
 * Función como método
 * TODO: Explicar hacia adonde apunta el this del arrow function
 * 
 *
 * How execute:
 * $ yarn function:example03
 */


console.log('--> Ejemplo 3:')
const player = {
  name: 'Juan',
  sayHi: function() {
    console.log(`Hola, mi nombre es ${this.name}.`)
    console.log("this de función normal")
    console.log(this)
  },
  sayHi2: () => {
    name = "NACHO"
    console.log(`Hola, mi nombre es ${this.name}.`)
    console.log("this del función flecha =>")
    console.log(this)
  }
}

player.sayHi() // <-- Funciona
player.sayHi2() // <-- No funciona

//player.name = 'Antonio'
//player.sayHi()