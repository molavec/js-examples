
// Destructuring de Arrays
// Permite extraer datos de arreglos y asignarlos a variables.

export function getCoordinates(pointArray) {
  const [x, y, z] = pointArray;
  return { x, y, z };
}

export function getFirstItem(arr) {
  const [first,] = arr;
  return first;
}

export function getSecondItem(arr) {
  const [, second] = arr;
  return second;
}

export function getRestItems(arr) {
  const [first, ...rest] = arr;
  return rest;
}
