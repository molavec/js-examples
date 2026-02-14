
// Promesas (Basic)
// Objetos que representan la terminación o el fracaso de una operación asíncrona.

export function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited ${ms}ms`);
    }, ms);
  });
}

export function failPromise() {
  return new Promise((resolve, reject) => {
    reject(new Error('Promise Rejected'));
  });
}
