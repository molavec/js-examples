
// Writable Streams
// Streams de escritura. Permiten escribir datos a un destino.

import { Writable } from 'stream';

export function createWritableStream(storage) {
  return new Writable({
    objectMode: true,
    write(chunk, encoding, callback) {
      storage.push(chunk.toString());
      callback();
    }
  });
}
