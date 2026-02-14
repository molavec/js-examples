import { describe, it, expect } from 'vitest';
import { sumAll } from './07-rest-parameters.js';

describe('07-rest-parameters', () => {
  it('should sum multiple arguments', () => {
    expect(sumAll(1, 2, 3)).toBe(6);
  });

  it('should sum array using spread operator', () => {
    const numbers = [1, 2, 3];
    // Expande el array en argumentos
    expect(sumAll(...numbers)).toBe(6);
  });

  it('should concat when passing array without spread (string coercion)', () => {
    const numbers = [1, 2, 3];
    // Pasa el array completo como primer argumento.
    // resultado = 0 + [1,2,3] -> "01,2,3"
    expect(sumAll(numbers)).toBe("01,2,3");
  });
});
