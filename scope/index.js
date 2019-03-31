/**
 * Ejemplo 01:
 *
 * Utiliza 'var'
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
 * Utiliza 'let'
 */
const example02 = () => {

  let var1 = 'let - global'

  function fun01() {
    let var1 = 'let - local funcion 01'
    console.log(var1)
  }

  function fun02() {
    var1 = 'let - local funcion 02'
    console.log(var1)
  }

  fun01()
  //fun02()
  console.log(var1)

}
example02()
