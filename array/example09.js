/**
*  filename:  Array.prototype.join();
*
* Description:
*  Une los elementos de un arreglo
*  separándolos por un caracter dado
*  como parámetro.
*
* How execute:
* $ node array/example09.js help
* $ yarn array:example09
*
*/

var help = [
    'Usage',
    '   foo-app <input>'
];

if (process.argv[2] === 'help') {
    console.log(help.join('\n'));
}
// $ node array/example09.js help
