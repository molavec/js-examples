
// Hoisting (Elevación)
// En JavaScript, las declaraciones de funciones y variables (var) son "elevadas"
// al inicio de su contexto de ejecución.

// Función declarada (Declaración de función) -> HOISTED
export function callHoistedFunction(a, b) {
  return hoistedSum(a, b);
}

function hoistedSum(a, b) {
  return a + b;
}

// Función expresada (Expresión de función) -> NOT HOISTED
// const notHoisted = (a, b) => a - b;
// Esta no se puede llamar antes de ser definida
