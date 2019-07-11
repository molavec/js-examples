/**
 * Ejemplo 01:
 *
 * Scope de una variable dependiendo del lugar de la definición
 */
const example01 = () => {

  var var1 = 'var - global'

  function fun01() {
    var var1 = 'var - local funcion 01'
    console.log(var1)
  }

  function fun02() {
    var1 = 'var - local funcion 02'
    console.log(var1)
  }

  fun01()
  //fun02()
  console.log(var1)

}

example01()

/**
 * Ejemplo 2:
 *
 * Diferencias entre var y let
 * var: scope a nivel de función
 * let: scope a nuvel de bloque
 */
const example02 = () => {

  if( 3 < 5 ){
    var x = 7
  }
  console.log(x) // <-- Es posible porque está a nivel de la función.

  if( 3 < 5 ){
    let y = 7
  }
  //console.log(y) // <-- aparecerá como que no está definida

  // var -> tiene comportamiento de hoisting
  // let -> no tiene comportamiento de hoisting
  z = 4
  console.log(z)
  var z

  let w
  w = 8
  console.log(w)
}
example02()


/**
 * Ejemplo 2:
 *
 * Utiliza 'const'
 */
const example03 = () => {

  // referencia constantes, no valores inmutables
  const x = {
    a: 5,
    b: 20
  }
  // x = 6 // <-- NO ES POSIBLE
  console.log(x)
  x.a = 6 // <-- Sí ES POSIBLE
  console.log(x)

}
example03()