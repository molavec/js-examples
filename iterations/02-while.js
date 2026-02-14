
// Bucles While / Do-While
// while: ejecuta una sentencia mientras la condición sea verdadera.
// do...while: ejecuta una sentencia hasta que la condición sea falsa (se ejecuta al menos una vez).

export function whileLoop(arr) {
  let i = 0;
  let lastItem;
  while (i < arr.length) {
    lastItem = arr[i];
    i++;
  }
  return lastItem;
}

export function doWhileLoop(arr) {
  let i = 0;
  let lastItem;
  do {
    lastItem = arr[i];
    i++;
  } while (i < arr.length);
  return lastItem;
}
