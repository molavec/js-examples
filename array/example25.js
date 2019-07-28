/**
*  filename:  Array.prototype.map
*
* Description:
*  Formatea los elementos de un arreglo a un
*  formato dado.
*
* How execute:
* $ node array/example25.js 
* $ yarn array:example25
*
*/

const items = [1, 2, 3, 4, 5];

const mapped = items.map(function (item){
    return item * 2;
});

console.log(items);
console.log(mapped);


