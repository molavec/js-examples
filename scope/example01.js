/**
 * example01: Hoisting en declaración de variables
 *
 * Description:
 * Demuestra el fenomeno de hoisting
 *
 * How execute:
 * $ node scope/example01.js
 * $ node yarn:example01
 *
 */

let a =1

function go(){
  console.log(a) // es undefined debido al hoisting
  var a = 2
}
go()


// es equivalente a esto
var b;
b = 1;
function go(){
  var b;
  console.log(b);
  b = 2;
}

go()
