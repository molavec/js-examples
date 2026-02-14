
// Encadenamiento de Promesas (Chaining)
// Permite ejecutar promesas secuencialmente, pasando el resultado de una a la siguiente.

export function step1() {
  return Promise.resolve(1);
}

export function step2(val) {
  return Promise.resolve(val + 1);
}

export function step3(val) {
  return Promise.resolve(val * 2);
}

// Ejemplo de clase que extiende Promise (como en example13)
// Nota: Extender Promise nativa puede ser problemático en algunos entornos,
// pero aquí se muestra como concepto didáctico.
export class PromiseChainer extends Promise {
  // Método personalizado
  double() {
    return this.then(val => val * 2);
  }
}
