/**
*  filename:  Array.prototype.reduce
*
* Description:
*  Suma o concatena los elementos de un arreglo,
*  de par en par. A veces se debe agregar después
*  del callback(function) un elemento 'prev' con una coma ','
*
* How execute:
* $ node array/example33.js 
* $ yarn array:example33
*
*/


const items = [1, 2, 3, 4, 5];
const sum = items.reduce((prev, item) => prev + item);
// fn(1, 2) -> 3
// fn(3, 3) -> 6
// fn(6, 4) -> 10
// fn(10, 5) -> 15
console.log(sum);

const items2 = [1, 2, 3, 4, 5];
const sum2 = items2.reduce((prev, item) => {
    console.log('prev', prev, 'item', item);
    return prev + item;
}, 0);
