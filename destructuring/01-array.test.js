import { describe, it, expect } from 'vitest';
import { getCoordinates, getFirstItem, getSecondItem, getRestItems } from './01-array.js';

describe('01-destructuring-array', () => {
  const pointArray = [10, 20, 15];

  it('should destructure all items', () => {
    expect(getCoordinates(pointArray)).toEqual({ x: 10, y: 20, z: 15 });
  });

  it('should get first item', () => {
    expect(getFirstItem(pointArray)).toBe(10);
  });

  it('should get second item', () => {
    expect(getSecondItem(pointArray)).toBe(20);
  });

  it('should get rest items', () => {
    expect(getRestItems(pointArray)).toEqual([20, 15]);
  });
});
