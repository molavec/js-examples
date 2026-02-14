import { describe, it, expect } from 'vitest';
import { basicConcat } from './01-concat.js';

describe('01-concat', () => {
  it('should concatenate arrays and values correctly', () => {
    const result = basicConcat();
    // [1, 2] + [3, 4] + [5, [6], 7] + 8
    // concat aplana el primer nivel de arrays pasados como argumentos si no son nested
    // Wait, [5, [6], 7] -> 5, [6], 7
    // Resultado esperado: [1, 2, 3, 4, 5, [6], 7, 8]
    expect(result).toEqual([1, 2, 3, 4, 5, [6], 7, 8]);
  });
});
