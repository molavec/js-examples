/**
*  filename:  Promise
*
* Description:
*  Practicando Promises
*
* How execute:
* $ node promise/example13.js
* $ node yarn: filename
*
*/

class Impresora extends Promise {
    imprimirEn1Seg(valor) {
        return this.then(() => this.devolverPromesa(valor));
    }

    devolverPromesa(valor) {
        return new Impresora(resolve => {
            setTimeout(() => {
                console.log(valor);
                resolve();
            }, 1000);
        })
    }
}

Impresora.resolve()
.imprimirEn1Seg(1)
.imprimirEn1Seg(2)
.imprimirEn1Seg(3);