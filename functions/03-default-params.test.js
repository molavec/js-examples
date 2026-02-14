import { describe, it, expect } from 'vitest';
import { greeting } from './03-default-params.js';

describe('03-default-params', () => {
  it('should use default value', () => {
    expect(greeting()).toBe('Hi Annonymus!');
  });

  it('should use provided value', () => {
    expect(greeting('John')).toBe('Hi John!');
  });
});
