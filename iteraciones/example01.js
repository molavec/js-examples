/**
 * example1: For - tradicional, of, in
 *
 * Description:
 * Ejemplos de todas las variantes de for
 *
 * How execute:
 * $ node iterator/example01
 * $ yarn iterator:example01
 */

 // --------------------------------------------------rest

let meses = ["enero", "febrero", "marzo", "abril"];

console.log("1.- Salida for:clásico -->")
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i])
}

console.log("1.- Salida for:of -->")
for (let value of meses) {
    console.log(value);
}

console.log("1.- Salida for:in -->")
for (let index in meses) {
    console.log(index);
}