/**
  * Ejemplo 04: continue / break
  *
  * Descripción:
  * Muestra el uso del continue y del break
  * El 'continues' salta a la siguiente iteración.
  * El 'break' sale completamente de la iteración
  *
  * How execute:
  * $ node iterator/example04
  * $ yarn iterator:example04
  */

console.log("Ejemplo de 'continue'")
for (let i = 1; i <= 5; i++) {
  if (i==2 || i==4) {
    continue
  }
  console.log(i);
}

console.log("Ejemplo de 'break'")
for (let i = 1; i <= 5; i++) {
  if (i==3) {
    break
  }
  console.log(i);
}