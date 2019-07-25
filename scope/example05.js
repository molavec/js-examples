/**
* example05: comportamiento 'let'
*
* Description:
* muestra ejemplos del comportamiento de 'let'
* 'const' tiene un ambito (scope) a nivel de función, es decir,
* la variable puede ser visible o modificada en el ambito de
* la función que es declarada.
*
* How execute:
* $ node scope/example05.js
* $ node yarn:example05
*
*/

//1.- Un objeto definido como contante no puede variar
const text = "texto fijo"
//text = "texto fijo" //<-- NO ES POSIBLE
console.log(text)


//2.- Las propiedades de un objeto si pueden variar
// referencia constantes, no valores inmutables
const x = {
  a: 5,
  b: 20
}
// x = 6 // <-- NO ES POSIBLE
console.log(x)
x.a = 6 // <-- Sí ES POSIBLE
console.log(x)


//3.- El ambito de cont es..

const scope = 'valor global'

// fun01 no modifica la variable global
function fun01() {
  const scope = 'valor local desde fun01'
  console.log(scope)
}

function fun02() {
  scope = 'valor global modificado desde fun02'
  console.log(scope)
}

function fun03() {
  console.log('global utilizado desde fun03: ' + scope)
}

fun03()
fun01()
fun03()
//fun02() //<-- NO ES POSIBLE