/**
*  filename:  Array concat (concatenación)
*
* Description:
* Genera un nuevo arreglo con el contenido de dos o más
* objetos
*
* How execute:
* $ node array/example06.js
* $ yarn array:example06
*
*/

var people = [
    {
        name: 'Shane'
    },
    {
        name: 'Sally'
    }
];

var people2 = [
    {
        name: 'Simon'
    },
    {
        name: 'Ben'
    }
];

let result = people.concat(people2, 3, 'hola')
console.log(result)
