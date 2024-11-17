/**
 * example2: while / do-while
 *
 * Description:
 * Ejemplos de while
 *
 * How execute:
 * $ node iterator/example02
 * $ yarn iterator:example02
 */

 // --------------------------------------------------rest

let semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

let i = 0

console.log("1.- Ejemplo while")
while(i < semana.length){
  console.log(semana[i])
  i++
}

console.log("2.- Ejemplo do/while")
i = 0
do {
  console.log(semana[i])
  i++
} while (i < semana.length)
