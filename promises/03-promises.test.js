import { describe, it, expect } from 'vitest';
import { wait, failPromise } from './03-promises.js';

describe('03-promises', () => {
  it('should resolve promise', () => {
    return expect(wait(100)).resolves.toBe('Waited 100ms');
  });

  it('should reject promise', () => {
    return expect(failPromise()).rejects.toThrow('Promise Rejected');
  });
});
