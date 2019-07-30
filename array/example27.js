/**
*  filename: Array.prototype.map
*
* Description:
*  Formatea los elementos de un arreglo a un
*  formato dado.
*
* How execute:
* $ node array/example27.js
* $ yarn array:example27
*
*/

const items = ["   Shane", "Sally "];
const mapped = items.map(x => x.trim());
console.log(mapped);

