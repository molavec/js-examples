import { describe, it, expect } from 'vitest';
import { createWritableStream } from './02-writable.js';
import { Readable } from 'stream';

describe('02-writable', () => {
  it('should write data to storage', async () => {
    const storage = [];
    const writable = createWritableStream(storage);
    const readable = Readable.from(['A', 'B']);

    await new Promise((resolve, reject) => {
      readable.pipe(writable);
      writable.on('finish', resolve);
      writable.on('error', reject);
    });

    expect(storage).toEqual(['A', 'B']);
  });
});
