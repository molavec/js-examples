import { describe, it, expect, vi } from 'vitest';
import { getArgs, printArgs } from './08-arguments.js';

describe('08-arguments', () => {
  it('should get args (slice 2)', () => {
    // vitest runs with some args
    const args = getArgs();
    expect(Array.isArray(args)).toBe(true);
  });

  it('should print args', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    printArgs();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
