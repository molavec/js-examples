
// Manejo de Errores con Async/Await
// Se usa try/catch para capturar errores de promesas rechazadas.

import { failPromise } from './03-promises.js';

export async function handleAsyncError() {
  try {
    await failPromise();
    return 'Success';
  } catch (error) {
    return 'Caught Error';
  }
}
