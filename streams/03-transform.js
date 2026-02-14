
// Transform Streams
// Streams que modifican o transforman los datos mientras se leen/escriben.

import { Transform } from 'stream';

export function createUpperCaseTransform() {
  return new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase());
      callback();
    }
  });
}
