
// Hoisting de Funciones
// Las declaraciones de funciones completas se elevan al tope.

export function callSum(a, b) {
  return sum(a, b);
}

function sum(a, b) {
  return a + b;
}
