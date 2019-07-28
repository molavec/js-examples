/**
*  filename:  Array.prototype.map
*
* Description:
*  Formatea los elementos de un arreglo a un
*  formato dado.
*
* How execute:
* $ node array/example30.js 
* $ yarn array:example30
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

//const mapped = items.map(x => x.firstname);
const mapped = items
    .filter(x => x.active)
    .map(x => x.firstname); // ['Shane', 'Sally']
console.log(createHtmlList(mapped));
// console.log(createHtmlList(['Cat', 'Dog']));

function createHtmlList(items) {
    const listElements = items.map(x => `  <li>${x}</li>`).join('\n');
    return `<ul>\n${listElements}\n</ul>`;
}

