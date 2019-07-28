/**
*  filename:  Array.prototype.filter();
*
* Description:
*  Filtra los elementos que no cumplan la condición dada.
*
* How execute:
* $ node array/example22.js 
* $ yarn array:example22
*
*/

var lessons = [
    {
        title: 'Javascript Array methods in depth - join',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'Javascript Array methods in depth - concat',
        views: 1050,
        tags: ['array', 'concat']
    },
    {
        title: 'Javascript Array methods in depth - slice',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'Javascript Array methods in depth - bind',
        views: 2500,
        tags: ['functions', 'bind']
    }
];

var minViews = 1000;
var searchTerm = 'array';

var filtered = lessons
    .filter(x => x.tags.indexOf(searchTerm) > -1)
    .filter(x => x.views > minViews)
    .sort((a, b) => b.views - a.views)
    .map(x => `   <li>${x.title}</li>`)
    .join('\n');

console.log(`<ul>
${filtered}
</ul>`);