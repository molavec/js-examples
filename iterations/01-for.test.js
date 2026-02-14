import { describe, it, expect } from 'vitest';
import { traditionalFor, forOf, forOfDestructuring, forIn } from './01-for.js';

describe('01-for', () => {
  it('should iterate using traditional for', () => {
    expect(traditionalFor([1, 2])).toEqual([1, 2]);
  });

  it('should iterate using for..of', () => {
    expect(forOf(['a', 'b'])).toEqual(['a', 'b']);
  });

  it('should iterate using for..of with destructuring', () => {
    const items = [{ index: 0, value: 'a' }, { index: 1, value: 'b' }];
    expect(forOfDestructuring(items)).toEqual(['b']);
  });

  it('should iterate using for..in', () => {
    const person = { name: 'John', age: 31 };
    const result = forIn(person);
    // El orden de for..in no está garantizado, pero en este caso simple suele ser inserción
    expect(result).toContain('name:John');
    expect(result).toContain('age:31');
  });
});
