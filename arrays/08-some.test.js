import { describe, it, expect } from 'vitest';
import { hasValue, hasEvenNumber } from './08-some.js';

describe('08-some', () => {
  it('should check if value exists', () => {
    const items = [1, 2, 3, 4, 5];
    expect(hasValue(items, 3)).toBe(true);
    expect(hasValue(items, 6)).toBe(false);
  });

  it('should check for condition', () => {
    const odds = [1, 3, 5];
    expect(hasEvenNumber(odds)).toBe(false);

    const mixed = [1, 2, 3];
    expect(hasEvenNumber(mixed)).toBe(true);
  });
});
