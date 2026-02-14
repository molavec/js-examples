import { describe, it, expect } from 'vitest';
import { letScope } from './04-let-scope.js';

describe('04-let-scope', () => {
  it('should respect block scope', () => {
    expect(letScope()).toBe('local');
  });
});
