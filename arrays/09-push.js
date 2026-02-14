
// Array.prototype.push()
// El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

export function appendItems(arr, ...items) {
  // push devuelve la nueva longitud
  return arr.push(...items);
}

// Combinar dos arrays
export function mergeArrays(target, source) {
  // Forma antigua: target.push.apply(target, source);
  // Forma moderna ES6:
  return target.push(...source);
}
