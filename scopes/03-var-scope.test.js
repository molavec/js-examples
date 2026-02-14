import { describe, it, expect } from 'vitest';
import { varScope } from './03-var-scope.js';

describe('03-var-scope', () => {
  it('should leak scope from block', () => {
    expect(varScope()).toBe('modificado en bloque');
  });
});
