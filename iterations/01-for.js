
// Bucles For
// for: bucle tradicional
// for...of: itera sobre objetos iterables (arrays, strings, map, set)
// for...in: itera sobre todas las propiedades enumerables de un objeto

export function traditionalFor(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

export function forOf(iter) {
  let result = [];
  for (const value of iter) {
    result.push(value);
  }
  return result;
}

export function forOfDestructuring(arr) {
  let result = [];
  // Itera y desestructura cada elemento
  for (const { value, index } of arr) {
    if (index === 1) result.push(value);
  }
  return result;
}

export function forIn(obj) {
  let result = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push(`${key}:${obj[key]}`);
    }
  }
  return result;
}
