import { describe, it, expect } from 'vitest';
import { step1, step2, step3, PromiseChainer } from './07-chaining.js';

describe('07-chaining', () => {
  it('should chain promises steps', () => {
    return step1()
      .then(step2) // 1 + 1 = 2
      .then(step3) // 2 * 2 = 4
      .then(result => {
        expect(result).toBe(4);
      });
  });

  it('should chain methods in custom Promise subclass', () => {
    // PromiseChainer.resolve(10) -> PromiseChainer { 10 }
    // .double() -> PromiseChainer { 20 }
    return PromiseChainer.resolve(10)
      .double()
      .then(val => {
        expect(val).toBe(20);
      });
  });
});
