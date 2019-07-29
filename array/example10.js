/**
*  filename:  Array.prototype.split();
*
* Description:
* Separa un string en un arreglo de subtring utilizando
* el argumento como separador
*
* How execute:
* $ node array/example10.js
* $ yarn array:example10
*
*/

var name = 'shane osbourne';
var array = name.split(' ')
console.log(array)

// Ejemplo de uso
let upper = array.map(x => x.charAt(0).toUpperCase() + x.slice(1)) // [Shane, Osbourne]
    .join(' ');
console.log(upper);
