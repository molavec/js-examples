/**
*  filename:  Array.prototype.slice();
*
* Description:
*  Filtra los elementos de un arreglo desde una posición
*  de inicio, o inicio y fin.
*
* How execute:
* $ node array/example16.js 
* $ yarn array:example16
*
*/

var person = {
    name: 'shane-osbourne'
};
var filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
};

var input = 'name | deslugify | uppercase'; // SHANE OSBOURNE

var sections = input.split('|').map(x => x.trim());
console.log(sections);
var ref = person[sections[0]];
console.log(ref);
var output = sections
    .slice(1)
    .reduce((prev, next) => {
        if (filters[next]) {
            return filters[next].call(null, prev);
        }
        return prev;
    }, ref);

console.log(output);

