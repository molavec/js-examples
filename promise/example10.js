/**
*  filename:  Promise
*
* Description:
*  Practicando Promises
*
* How execute:
* $ node promise/example10.js
* $ node yarn: filename
*
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Hola'); }, 3000);
});

myPromise.then( value => {
    console.log(value);
});

console.log(myPromise);