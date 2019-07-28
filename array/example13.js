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

var shane = {
    name: 'Shane'
}
var sally = {
    name: 'Sally'
}
var kittie = {
    name: 'Kittie'
}

var family = [shane, sally, kittie];
console.log(family.indexOf(kittie));