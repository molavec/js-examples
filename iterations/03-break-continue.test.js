import { describe, it, expect } from 'vitest';
import { loopWithBreak, loopWithContinue } from './03-break-continue.js';

describe('03-break-continue', () => {
  it('should break loop at limit', () => {
    expect(loopWithBreak(2)).toEqual([0, 1]);
  });

  it('should skip value with continue', () => {
    // Skip 2: [0, 1, 3, 4]
    expect(loopWithContinue(2)).toEqual([0, 1, 3, 4]);
  });
});
