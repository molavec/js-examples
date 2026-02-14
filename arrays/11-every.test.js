import { describe, it, expect } from 'vitest';
import { allLessThan, areAllStrings, areAllVideosViewed } from './11-every.js';

describe('11-every', () => {
  it('should check if all numbers are less than value', () => {
    expect(allLessThan([1, 2, 3], 5)).toBe(true);
    expect(allLessThan([1, 6, 3], 5)).toBe(false);
  });

  it('should check if all items are strings', () => {
    expect(areAllStrings(["a", "b"])).toBe(true);
    expect(areAllStrings(["a", 1])).toBe(false);
  });

  it('should check if all videos are viewed', () => {
    const videos = [
      { length: 100, viewed: 100 },
      { length: 200, viewed: 200 }
    ];
    expect(areAllVideosViewed(videos)).toBe(true);

    videos[0].viewed = 50;
    expect(areAllVideosViewed(videos)).toBe(false);
  });
});
