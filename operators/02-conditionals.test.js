import { describe, it, expect } from 'vitest';
import { checkEquality, checkLogic } from './02-conditionals.js';

describe('02-conditionals', () => {
  it('should check equality', () => {
    expect(checkEquality(10, 10)).toBe('IGUAL');
    expect(checkEquality(10, 5)).toBe('NO ES IGUAL');
  });

  it('should check logic', () => {
    expect(checkLogic(true, true)).toBe(true);
    expect(checkLogic(true, false)).toBe(false);
  });
});
