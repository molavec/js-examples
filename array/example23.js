/**
*  filename:  Array.prototype.some()
*
* Description:
*  description
*
* How execute:
* $ node array/example23.js 
* $ yarn array:example23
*
*/

var items = [1, 2, 3, 4, 5];
var hasThree = items.some(x => (x === 6)); // false
console.log(hasThree);