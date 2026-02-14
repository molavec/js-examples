
// Pipe
// Método para conectar un Readable Stream a un Writable (o Transform) Stream.

import { createReadableStream } from './01-readable.js';
import { createUpperCaseTransform } from './03-transform.js';
import { createWritableStream } from './02-writable.js';
import { pipeline } from 'stream/promises';

export async function runPipeline(data, storage) {
  // pipeline es una utilidad moderna para pipear streams y manejar errores/limpieza
  await pipeline(
    createReadableStream(data),
    createUpperCaseTransform(),
    createWritableStream(storage)
  );
}
