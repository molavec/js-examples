/**
*  filename:  Promise
*
* Description:
*  Practicando Promises
*
* How execute:
* $ node promise/example12.js
* $ node yarn: filename
*
*/

const imprimirEn1Seg = (valor) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(valor);
            resolve();
        }, 1000);
    });
};

imprimirEn1Seg(1)
.then(() => imprimirEn1Seg(2))
.then(() => imprimirEn1Seg(3));