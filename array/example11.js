/**
*  filename:  Array.prototype.indexOf();
*
* Description:
*  retorna el índice de un elemento,
*  si la búsqueda falla, retorna -1
*
* How execute:
* $ node array/example11.js
* $ yarn array:example11
*
*/


var family = ['Shane', 'Sally', 'Isaac']; // 'Kittie'
console.log(family.indexOf('Kittie'));
// si la búsqueda falla, retorna -1
var kittieExists = family.indexOf('Kittie') > -1;
console.log(kittieExists);
if (!kittieExists) {
    family.push('kittie');
}
console.log(family);


