import { describe, it, expect } from 'vitest';
import { runPipeline } from './04-pipe.js';

describe('04-pipe', () => {
  it('should pipeline streams correctly', async () => {
    const storage = [];
    await runPipeline(['x', 'y'], storage);
    expect(storage).toEqual(['X', 'Y']);
  });
});
