/**
*  filename:  Array.prototype.indexOf();
*
* Description:
*  retorna el índice de un elemento,
*  si la búsqueda falla, retorna -1
*
* How execute:
* $ node array/example12.js 
* $ yarn array:example12
*
*/


var family = ['Shane', 'Kittie', 'Sally', 'Isaac'];
console.log(family.indexOf('Kittie', 2)); // Empieza la búsqueda desde el índice 2: 'Sally'