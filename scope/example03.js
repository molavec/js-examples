/**
* example03: comportamiento 'var (hoisting)'
*
* Description:
* muestra ejemplos del comportamiento de 'var'
* 'var' tiene un ambito (scope) a nivel de función, es decir,
* la variable puede ser visible o modificada en el ambito de
* la función que es declarada.
*
* How execute:
* $ node scope/example03.js
* $ node yarn:example03
*
*/

var text = 'valor global'

// fun01 no modifica la variable global
function fun01() {
  var text = 'valor local desde fun01'
  console.log(text)
}

function fun02() {
  text = 'valor global modificado desde fun02'
  console.log(text)
}

function fun03() {
  console.log('global utilizado desde fun03: ' + text)
}

fun03()
fun01()
fun03()
fun02()
fun03()
