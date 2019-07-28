/**
*  filename:  Array.prototype.filter();
*
* Description:
*  Filtra los elementos que no cumplan la condición dada.
*
* How execute:
* $ node array/example21.js 
* $ yarn array:example21
*
*/

var people = [
    {
        name: 'Shane',
        pets: ['cat', 'dog']
    },
    {
        name: 'Simon',
        pets: ['horse']
    },
    {
        name: 'Ben'
        // pets: [] // x.pets.length
    }
];

var filtered = people.filter(x => x.pets);
console.log(filtered);