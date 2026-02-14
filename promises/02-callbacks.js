
// Callbacks
// Patrón antiguo para manejar asincronía.
// Puede llevar al "Callback Hell" si se anidan demasiados.

export function doTask(name, callback) {
  setTimeout(() => {
    callback(null, `Task ${name} done`);
  }, 100);
}

export function doTaskWithError(name, callback) {
  setTimeout(() => {
    callback(new Error(`Failed ${name}`));
  }, 100);
}
