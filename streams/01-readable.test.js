import { describe, it, expect } from 'vitest';
import { createReadableStream, createReadableGenerator } from './01-readable.js';

describe('01-readable', () => {
  it('should read data from stream', async () => {
    const stream = createReadableStream(['A', 'B']);
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk.toString());
    }
    expect(chunks).toEqual(['A', 'B']);
  });

  it('should read from generator', async () => {
    const stream = createReadableGenerator();
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    expect(chunks).toEqual(['A', 'B', 'C']);
  });
});
