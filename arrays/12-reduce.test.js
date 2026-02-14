import { describe, it, expect } from 'vitest';
import { sumElements, countTotalImages, flattenImages, keyById } from './12-reduce.js';

describe('12-reduce', () => {
  it('should sum elements', () => {
    expect(sumElements([1, 2, 3])).toBe(6);
  });

  it('should count total images', () => {
    const albums = [
      { images: ['1', '2'] },
      { images: ['3'] }
    ];
    expect(countTotalImages(albums)).toBe(3);
  });

  it('should flatten images array', () => {
    const albums = [
      { images: ['1', '2'] },
      { images: ['3'] }
    ];
    expect(flattenImages(albums)).toEqual(['1', '2', '3']);
  });

  it('should key users by id', () => {
    const users = [
      { id: 'u1', name: 'Alice' },
      { id: 'u2', name: 'Bob' }
    ];
    const keyed = keyById(users);

    expect(keyed).toHaveProperty('u1');
    expect(keyed['u1'].name).toBe('Alice');
    expect(keyed['u2'].name).toBe('Bob');
  });
});
