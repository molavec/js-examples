/**
*  filename:  Array concat (concatenación)
*
* Description:
*  Agrega a un arreglo los items de otro adicionalmente
*
* How execute:
* $ node array/example07.js
* $ yarn array:example07
*
*/

var items = [1, 2];
var newItems = items.concat([3,4], [5, [6],7], 8);

console.log(newItems);




