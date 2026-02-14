import { describe, it, expect } from 'vitest';
import { arraySpread, objectSpread } from './01-spread.js';

describe('01-spread', () => {
  it('should spread array', () => {
    expect(arraySpread([1, 2])).toEqual([0, 1, 2, 9]);
  });

  it('should spread object', () => {
    expect(objectSpread({ age: 30 })).toEqual({
      age: 30,
      firstname: 'John',
      lastname: 'Doe'
    });
  });
});
