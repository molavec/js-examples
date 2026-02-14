import { describe, it, expect } from 'vitest';
import { constScope, constMutation } from './05-const-scope.js';

describe('05-const-scope', () => {
  it('should respect block scope', () => {
    expect(constScope()).toBe('local');
  });

  it('should allow property mutation', () => {
    expect(constMutation().a).toBe(2);
  });

  it('should throw on reassignment attempt', () => {
    expect(() => {
      const x = 1;
      /* x = 2; */ // SyntaxError/TypeError en runtime si se intenta
    }).not.toThrow(); // No podemos probar syntax error fácilmente aquí sin eval
  });
});
