import { describe, it, expect } from 'vitest';
import { doTask, doTaskWithError } from './02-callbacks.js';

describe('02-callbacks', () => {
  it('should handle success via callback', () => {
    return new Promise(resolve => {
      doTask('A', (err, result) => {
        expect(err).toBeNull();
        expect(result).toBe('Task A done');
        resolve();
      });
    });
  });

  it('should handle error via callback', () => {
    return new Promise(resolve => {
      doTaskWithError('B', (err, result) => {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBe('Failed B');
        resolve();
      });
    });
  });
});
