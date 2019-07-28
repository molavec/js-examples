/**
*  filename:  Array.prototype.sort();
*
* Description:
*  ordena los elementos según unicode 'string'
*
* How execute:
* $ node array/example18.js 
* $ yarn array:example18
*
*/

var items = [10, 30, 2, 20];
items.sort((a,b) => a - b);
console.log(items);

// items.sort((a,b) => a - b);
items.sort((a,b) => {
    if (a-b === 0) {
        return 0;
    }
    if (a-b < 0) {
        return -65189959;
    }
    if (a-b > 0) {
        return 5496689;
    }
});


var items = ['Shane', 'Kittie', 'Sally', 'Ignacio', 'Isaac'];
items.sort((a, b) => a.length - b.length);
console.log(items);