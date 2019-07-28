/**
*  filename:  Array.prototype.every();
*
* Description:
*  Analiza cada uno de los elementos del arreglo cumplen 
*  una condición dada. Si no es así retorna 'false'
*
* How execute:
* $ node array/example32.js 
* $ yarn array:example32
*
*/

const videos = [
    {
        title: 'Array methods in depth: concat',
        length: 310, // seconds
        viewed: 310
    },
    {
        title: 'Array methods in depth: join',
        length: 420,
        viewed: 360
    }
];

function complete(x) {
    return x.viewed === x.length;
}
const isComplete = videos.every(complete);
const completed = videos.filter(complete);
// const isComplete = videos.every(x => x.viewed === x.length);
// const isComplete = videos.filter(x => x.viewed === x.length);
console.log(isComplete);
console.log(completed);