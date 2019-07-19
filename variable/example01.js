/**
 * example01: Operadores lógicos y condicionales
 *
 * Description:
 * Ejemplos de operadores matemáticos y lógicos.
 * 
 * 
 *
 * How execute:
 * $ node variable/example01
 * $ yarn variable:example01
 */



var uno = (15+5*3)+(15/3); //precedencia *,/,%,+,-, orden de prioridad
console.log('Precedencia = orden de prioridad en operadores matemáticos, (15+5*3)+(15/3)')
console.log(uno);
var dos = 10;
//var tres = uno/dos;
console.log('Módulo % = Resto de una división (uno%dos)')
var tres = uno%dos; // resto de la división (módulo)
console.log(tres);


--uno;
++uno;
uno++;


var uno = 19;
var dos = 19;

console.log('(uno > dos)')
console.log(uno > dos); // <, >, <=, >=, ==, !=
/**
 *  y = &&
 *  o = ||
 *  negación = !
 * 

console.log( !(uno==20) );
*/
/*
var uno = 30;
// uno = uno - 20;
// uno -= 20;
uno *= 20; 
console.log(uno);

*/

var uno = 10;
var dos = 5;

// condición ? TRUE : FALSE;
console.log('(uno == dos ? "ES IGUAL" : "NO ES IGUAL")')
console.log(uno == dos ? "ES IGUAL" : "NO ES IGUAL");