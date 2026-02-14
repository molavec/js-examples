import { describe, it, expect } from 'vitest';
import { varHoisting, undefinedBeforeInit } from './01-hoisting-var.js';

describe('01-hoisting-var', () => {
  it('should assign value', () => {
    expect(varHoisting()).toBe(2);
  });

  it('should be undefined before init due to hoisting', () => {
    expect(undefinedBeforeInit()).toBe('undefined');
  });
});
