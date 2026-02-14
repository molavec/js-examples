import { describe, it, expect } from 'vitest';
import { createUpperCaseTransform } from './03-transform.js';
import { Readable } from 'stream';

describe('03-transform', () => {
  it('should transform to uppercase', async () => {
    const transform = createUpperCaseTransform();
    const readable = Readable.from(['a', 'b']);
    const chunks = [];

    const stream = readable.pipe(transform);
    for await (const chunk of stream) {
      chunks.push(chunk.toString());
    }

    expect(chunks).toEqual(['A', 'B']);
  });
});
