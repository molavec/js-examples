import { describe, it, expect } from 'vitest';
import { getMethods } from './01-methods.js';

describe('01-objects-methods', () => {
  it('should list methods of Array.prototype', () => {
    const methods = getMethods(Array.prototype);
    expect(methods).toContain('map');
    expect(methods).toContain('filter');
    expect(methods).toContain('reduce');
  });

  it('should list methods of a custom object', () => {
    const obj = {
      a: 1,
      foo() { },
      bar: () => { }
    };
    const methods = getMethods(obj);
    expect(methods).toContain('foo');
    expect(methods).toContain('bar');
    expect(methods).not.toContain('a');
  });
});
