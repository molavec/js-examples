/**
*  filename:  Promise
*
* Description:
*  Practicando Promises
*
* How execute:
* $ node promise/example15.js
* $ node yarn: filename
*
*/

const imprimirEn1Seg = (valor) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(valor);
            resolve(valor);
        }, 1000);
    });
};
/*
async function contar() {
    await imprimirEn1Seg(1);
    await imprimirEn1Seg(2);
    await imprimirEn1Seg(3);
}
*/
async function contar() {
    const x = await imprimirEn1Seg(1);
    const y = await imprimirEn1Seg(2);
    const z = await imprimirEn1Seg(3);
    console.log(`Total: ${x+y+z}`);
}
contar();

async function contarBucle() {
    let S = 0;
    for (let i = 1; i <= 3; i++) {
        S += await imprimirEn1Seg(i);
    }
    console.log(`Suma: ${S}`);
}
contarBucle();
