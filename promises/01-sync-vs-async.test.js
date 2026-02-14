import { describe, it, expect } from 'vitest';
import { synchronousTask, asynchronousTask } from './01-sync-vs-async.js';

describe('01-sync-vs-async', () => {
  it('should execute synchronously', () => {
    expect(synchronousTask()).toBe('Sync Task');
  });

  it('should execute asynchronously with callback', () => {
    return new Promise(resolve => {
      asynchronousTask(100, (result) => {
        expect(result).toBe('Async Task Completed');
        resolve();
      });
    });
  });
});
