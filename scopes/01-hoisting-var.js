
// Hoisting con var
// Las declaraciones de variables con 'var' se elevan al inicio de su función/script
// pero su inicialización permanece en su lugar.

export function varHoisting() {
  // console.log(a); // undefined, no ReferenceError
  var a = 2;
  return a;
}

export function undefinedBeforeInit() {
  return typeof b; // 'undefined' (hoisted)
  var b = 1;
}
