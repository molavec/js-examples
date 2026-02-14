
// Array.prototype.concat()
// El método concat() se usa para unir dos o más arrays.
// Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

// Ejemplo Básico
export function basicConcat() {
  const items = [1, 2];
  // Unimos el array [1, 2] con un nuevo array [3, 4]
  // Opcionalmente podemos pasar múltiples argumentos como [5, [6], 7], 8
  const newItems = items.concat([3, 4], [5, [6], 7], 8);

  return newItems;
}

// Ejecución para demostración
// console.log(basicConcat());
