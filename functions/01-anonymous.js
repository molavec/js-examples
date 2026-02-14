
// Funciones Anónimas
// Son funciones que no tienen nombre y suelen usarse como argumentos de otras funciones
// o en expresiones de función ejecutadas inmediatamente (IIFE).

export function iife() {
  // IIFE: Immediately Invoked Function Expression
  return (() => 'hi')();
}

export function identity(text) {
  // Función anónima asignada a una expresión y ejecutada
  return ((t) => t)(text);
}
