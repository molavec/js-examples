import { describe, it, expect } from 'vitest';
import { appendItems, mergeArrays } from './09-push.js';

describe('09-push', () => {
  it('should append items and return new length', () => {
    const pets = ["Cat"];
    const newLength = appendItems(pets, "Dog", "Bird");

    expect(newLength).toBe(3);
    expect(pets).toEqual(["Cat", "Dog", "Bird"]);
  });

  it('should merge arrays', () => {
    const pets = ["Cat"];
    const wishlist = ["Hamster", "Horse"];

    mergeArrays(pets, wishlist);

    expect(pets).toEqual(["Cat", "Hamster", "Horse"]);
  });
});
