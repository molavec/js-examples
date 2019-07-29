/**
*  filename:  Array.prototype.slice();
*
* Description:
*  Filtra los elementos de un arreglo desde una posición
*  de inicio, o inicio y fin.
*
* How execute:
* $ node array/example15.js 
* $ yarn array:example15
*
*/

var person = { name: 'Shane'};
var items = [1, person];
var copy = items.slice();
//copy.push(6);
copy[1].name = 'Sally';
console.log(items);
console.log(copy);

var items = [1, 2, 3, 4, 5, 6, 7, 8];
var copy = items.slice(1,-1); // inicio, y fin, 2 valores
console.log(copy);