import { describe, it, expect } from 'vitest';
import { runParallel } from './06-parallel.js';

describe('06-parallel', () => {
  it('should run in parallel', async () => {
    const start = Date.now();
    const res = await runParallel();
    const duration = Date.now() - start;

    expect(res).toHaveLength(2);
    // Should take around 100ms, not 200ms
    expect(duration).toBeLessThan(190);
  });
});
