/**
*  filename:  Array.prototype.filter();
*
* Description:
*  Filtra los elementos que no cumplan la condición dada.
*
* How execute:
* $ node array/example20.js 
* $ yarn array:example20
*
*/

var items = [1, 2, 3, 4, 5];
var filtered = items.filter(x => x > 3);

console.log(items);
console.log(filtered);