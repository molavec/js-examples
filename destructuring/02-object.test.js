import { describe, it, expect } from 'vitest';
import { getCoordinatesFromObject, getRestProperties, renameProperty } from './02-object.js';

describe('02-destructuring-object', () => {
  const pointObject = { x: 10, y: 20, z: 15 };

  it('should destructure object properties', () => {
    expect(getCoordinatesFromObject(pointObject)).toEqual({ x: 10, y: 20, z: 15 });
  });

  it('should get rest properties', () => {
    expect(getRestProperties(pointObject)).toEqual({ y: 20, z: 15 });
  });

  it('should rename property during destructuring', () => {
    expect(renameProperty(pointObject)).toBe(20);
  });
});
