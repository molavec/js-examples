import { describe, it, expect } from 'vitest';
import { handleAsyncError } from './05-errors.js';

describe('05-errors', () => {
  it('should catch error in async function', async () => {
    const result = await handleAsyncError();
    expect(result).toBe('Caught Error');
  });
});
