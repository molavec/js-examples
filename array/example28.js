/**
*  filename:  Array.prototype.map
*
* Description:
*  Formatea los elementos de un arreglo a un
*  formato dado.
*
* How execute:
* $ node array/example28.js 
* $ yarn array:example28
*
*/

const names = ["Shane", "Sally"];
const mapped = names.map(function (name){
    return {
        firstname: name
    }
});
console.log(mapped);

mapped.forEach(function (person){
    console.log(person.firstname);
});