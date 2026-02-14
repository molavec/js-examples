import { describe, it, expect } from 'vitest';
import { shortCircuit } from './04-short-circuit.js';

describe('04-short-circuit', () => {
  it('should return default value if falsy', () => {
    expect(shortCircuit()).toBe('Default Title');
    expect(shortCircuit('')).toBe('Default Title');
    expect(shortCircuit(null)).toBe('Default Title');
  });

  it('should return provided value if truthy', () => {
    expect(shortCircuit('My Title')).toBe('My Title');
  });
});
