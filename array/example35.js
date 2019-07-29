/**
*  filename:  Array.prototype.reduce
*
* Description:
*  Suma o concatena los elementos de un arreglo,
*  de par en par. A veces se debe agregar después
*  del callback(function) un elemento 'prev' con una coma ','
*
* How execute:
* $ node array/example35.js 
* $ yarn array:example35
*
*/

const users = [
    {
        id: '01',
        name: 'Shane'
    },
    {
        id: '02',
        name: 'Sally'
    }
];

const newUsers = users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
}, {});
console.log(newUsers['02'].name);
console.log(newUsers);