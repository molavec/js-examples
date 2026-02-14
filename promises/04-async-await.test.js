import { describe, it, expect } from 'vitest';
import { runAsync, runSequence } from './04-async-await.js';

describe('04-async-await', () => {
  it('should use await to get result', async () => {
    const res = await runAsync();
    expect(res).toBe('Result: Waited 100ms');
  });

  it('should run sequentially', async () => {
    const start = Date.now();
    const res = await runSequence();
    const duration = Date.now() - start;

    expect(res).toEqual(['Waited 50ms', 'Waited 50ms']);
    // Should take at least 100ms (50 + 50)
    expect(duration).toBeGreaterThanOrEqual(90);
  });
});
