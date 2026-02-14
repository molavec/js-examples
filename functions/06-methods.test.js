import { describe, it, expect } from 'vitest';
import { player } from './06-methods.js';

describe('06-methods', () => {
  it('should access this in traditional function method', () => {
    expect(player.sayHi()).toBe('Hi John!');
  });

  it('should fail to access this in arrow function method', () => {
    // En arrow functions, 'this' no es el objeto.
    expect(player.sayHiArrow()).toContain('undefined');
  });
});
