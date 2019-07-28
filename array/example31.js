/**
*  filename:  Array.prototype.every();
*
* Description:
*  Analiza cada uno de los elementos del arreglo cumplen 
*  una condición dada. Si no es así retorna 'false'
*
* How execute:
* $ node array/example31.js 
* $ yarn array:example31
*
*/

// const items = [1, 2, 3, 4, 5];

const items = [5, 1, 2, 3, 4];
// const result = items.every(x => x < 10);
const result = items.every(x => {
    console.log('Called with', x);
    return x < 5;
});
console.log(result);

const items2 = ["01", "02", 3, "04", "05"];
const result2 = items2.every(x => typeof x === 'string')
console.log(result2);


