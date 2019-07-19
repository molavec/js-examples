/**
 * example1: For - of
 *
 * Description:
 * Itera sobre un arreglo de
 * forma simple con 'for' y 'of'
 *
 * How execute:
 * $ node iterator/example01
 * $ yarn iterator:example01
 */

 // --------------------------------------------------rest

meses = ["enero", "febrero", "marzo", "abril"];

function cinco(...meses){
    for (let uno of meses) {
        // document.write(uno + "<br>");
        console.log(uno);
    }
    
}