
// Ejecución Secuencial vs Paralela (Promise.all)

import { wait } from './03-promises.js';

export async function runParallel() {
  // Inicia todas las promesas al mismo tiempo
  const p1 = wait(100);
  const p2 = wait(100);

  // Espera a que todas terminen
  return Promise.all([p1, p2]);
}
