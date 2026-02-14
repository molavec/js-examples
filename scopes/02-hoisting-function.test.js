import { describe, it, expect } from 'vitest';
import { callSum } from './02-hoisting-function.js';

describe('02-hoisting-function', () => {
  it('should call hoisted function', () => {
    expect(callSum(1, 1)).toBe(2);
  });
});
