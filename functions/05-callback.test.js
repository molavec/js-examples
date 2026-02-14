import { describe, it, expect } from 'vitest';
import { sumar, multiplicar, mathOperation } from './05-callback.js';

describe('05-callback', () => {
  it('should use callback (sumar)', () => {
    expect(mathOperation(sumar, 1, 2, 3)).toBe(6);
  });

  it('should use callback (multiplicar)', () => {
    expect(mathOperation(multiplicar, 1, 2)).toBe(2);
  });
});
