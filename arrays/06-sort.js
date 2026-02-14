
// Array.prototype.sort()
// El método sort() ordena los elementos de un array in situ y devuelve el array ordenado.
// El orden de clasificación predeterminado es según los puntos de código Unicode de la cadena.

export function sortStrings(arr) {
  // Ordena alfabéticamente por defeccto
  // ¡OJO! sort modifica el array original
  return arr.sort();
}

export function sortNumbersIncorrectly(arr) {
  // Si ordenamos números sin función de comparación, se ordenan como strings
  // [10, 2, 20] -> "10", "2", "20" -> "10", "20", "2" (incorrecto)
  return arr.sort();
}

export function sortNumbersCorrectly(arr) {
  // Para ordenar números correctamente, debemos proveer una función de comparación
  // (a, b) => a - b para ascendente
  // (a, b) => b - a para descendente
  return arr.sort((a, b) => a - b);
}

export function sortObjectsByProperty(arr, property) {
  // Ordenar objetos basado en una propiedad numérica
  return arr.sort((a, b) => b[property] - a[property]); // Descendente
}
