
// Array.prototype.some()
// El método some() comprueba si al menos un elemento del array cumple con la condición
// implementada por la función proporcionada. Devuelve true o false.

export function hasValue(arr, value) {
  return arr.some(x => x === value);
}

// Verificar si hay algún número par
export function hasEvenNumber(arr) {
  return arr.some(x => x % 2 === 0);
}
