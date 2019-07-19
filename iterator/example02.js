/**
 * example1: For - in
 *
 * Description:
 * Itera sobre un arreglo con 'for' e 'in'
 *
 * How execute:
 * $ node iterator/example02
 * $ yarn iterator:example02
 */

 // --------------------------------------------------rest

var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
// console.log(semana.sort());
// console.log(semana.reverse());

for(let i in semana){ 
    console.log( semana[i] );
}