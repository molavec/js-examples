/**
*  filename:  Array.prototype.join();
*
* Description:
*  Une los elementos de un arreglo
*  separándolos por un caracter dado
*  como parámetro.
*
* How execute:
* $ node array/example08.js hola mundo
* $ yarn array:example08
*
*/

// Array.prototype.join();

var names = ['Shane', 'Alan', 'Osbourne'];
// console.log(names[0] + " " + names[1] + " " + names[2]);
console.log(names.join(' '));
console.log(names.join(', '));

