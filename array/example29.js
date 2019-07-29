/**
*  filename:  Array.prototype.map
*
* Description:
*  Formatea los elementos de un arreglo a un
*  formato dado.
*
* How execute:
* $ node array/example29.js 
* $ yarn array:example29
*
*/

const items = [
    {
        active: true,
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        active: true,
        firstname: 'Sally',
        lastname: 'Osbourne'
    },
    {
        active: false,
        firstname: 'Ben',
        lastname: 'Barker'
    }
];

items.forEach(function(person){
    console.log(person.firstname + ' ' + person.lastname);
})

const mapped = items.map(x => {
    return {
        firstname: x.firstname,
        lastname: x.lastname,
        fullname: x.firstname + ' ' + x.lastname
    };
});
mapped.forEach(function (person){
    console.log(person.fullname);
});

