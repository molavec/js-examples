
// Array.prototype.concat() - Avanzado con Objetos
// concat crea una copia superficial (shallow copy) de los elementos.
// Si los elementos son objetos, concat copia las referencias a los objetos.

export function objectConcat() {
  const people1 = [
    { name: "Miguel" },
    { name: "Manuel" },
  ];

  const people2 = [
    { name: "Andrea" },
    { name: "Angelica" },
  ];

  // Concatenamos people1 con people2
  // También podemos agregar otros valores primitivos like 3 o 'hola'
  const result = people1.concat(people2);

  return result;
}
