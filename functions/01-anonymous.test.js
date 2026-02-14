import { describe, it, expect } from 'vitest';
import { iife, identity } from './01-anonymous.js';

describe('01-anonymous', () => {
  it('should execute IIFE', () => {
    expect(iife()).toBe('hi');
  });

  it('should execute anonymous function with params', () => {
    expect(identity('hello')).toBe('hello');
  });
});
