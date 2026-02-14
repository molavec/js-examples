
// Async / Await
// Azúcar sintáctico sobre promesas que permite escribir código asíncrono
// como si fuera síncrono.

import { wait } from './03-promises.js';

export async function runAsync() {
  const result = await wait(100);
  return `Result: ${result}`;
}

export async function runSequence() {
  const a = await wait(50);
  const b = await wait(50);
  return [a, b];
}
