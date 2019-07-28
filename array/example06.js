/**
*  filename:  Array concat (concatenación)
*
* Description:
*  Agrega a un arreglo los items de otro adicionalmente
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

people
    .concat(people2)
    .forEach(function (person) {
    console.log(person.name);
});

/*
people2.forEach(function (person) {
    console.log(person.name);
});
*/

