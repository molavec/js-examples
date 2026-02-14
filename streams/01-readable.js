
// Readable Streams
// Streams de lectura. Permiten leer datos de una fuente.

import { Readable } from 'stream';

export function createReadableStream(data) {
  const inStream = new Readable({
    objectMode: true,
    read() { }
  });
  data.forEach(chunk => inStream.push(chunk));
  inStream.push(null); // Fin del stream
  return inStream;
}

export function createReadableGenerator() {
  return Readable.from(function* () {
    yield 'A';
    yield 'B';
    yield 'C';
  }());
}
