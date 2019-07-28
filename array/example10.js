/**
*  filename:  Array.prototype.join();
*
* Description:
*  Une los elementos de un arreglo
*  separándolos por un caracter dado
*  como parámetro.
*
* How execute:
* $ node array/example10.js 
* $ yarn array:example10
*
*/

var name = 'shane osbourne';
var upper = name.split(' ') // [shane, osbourne]
    .map(x => x.charAt(0).toUpperCase() + x.slice(1)) // [Shane, Osbourne]
    .join(' ');

console.log(upper);
