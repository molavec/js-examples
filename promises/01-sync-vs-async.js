
// Sincronía vs Asincronía
// JavaScript es single-threaded, pero puede manejar operaciones asíncronas
// delegándolas al entorno (navegador o Node.js).

export function synchronousTask() {
  return 'Sync Task';
}

export function asynchronousTask(delay, callback) {
  // simula una tarea asíncrona usando setTimeout
  setTimeout(() => {
    callback('Async Task Completed');
  }, delay);
}
