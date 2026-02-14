import { describe, it, expect } from 'vitest';
import { addFromObject } from './02-assignment.js';

describe('02-objects-assignment', () => {
  it('should add values extracted from object', () => {
    expect(addFromObject({ a: 1, b: 2 })).toBe(3);
  });
});
