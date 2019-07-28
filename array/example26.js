/**
*  filename:  Array.prototype.map
*
* Description:
*  Formatea los elementos de un arreglo a un
*  formato dado.
*
* How execute:
* $ node array/example26.js 
* $ yarn array:example26
*
*/

// const mapped = items.map(item => { return item * 2} );
const items = ["1", "2", "3", "4", "5"];
const mapped = items.map(function (item){
    return Number(item);
});
console.log(items);
console.log(mapped);