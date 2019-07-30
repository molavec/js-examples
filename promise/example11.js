/**
*  filename:  Promise
*
* Description:
*  Practicando Promises
*
* How execute:
* $ node promise/example11.js
* $ node yarn: filename
*
*/

const esperar1Seg = () => new Promise(resolve => setTimeout(resolve, 1000));

esperar1Seg()
.then(() => {
    console.log(1);
    return esperar1Seg();
})
.then(() => {
    console.log(2);
    return esperar1Seg();
})
.then(() => {
    console.log(3);
});