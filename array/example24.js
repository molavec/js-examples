/**
*  filename:  Array.prototype.push
*
* Description:
*  Agrega un elemento dado al final del arreglo.
*
*  push.apply agrega un arreglo a continuación de otro.
*
* How execute:
* $ node array/example24.js 
* $ yarn array:example24
*
*/

const pets = ["Cat", "Dog"];
const whishlist = ["Hamster", "Horse", "Snake"];
// pets.push("Hamster", "Horse");
pets.push.apply(pets, whishlist);

console.log(pets);
pets.push("Bird");
console.log(pets);