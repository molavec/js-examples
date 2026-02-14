import { describe, it, expect } from 'vitest';
import { countGenerator } from './04-generators.js';

describe('04-generators', () => {
  it('should yield values step by step', () => {
    const counter = countGenerator();
    expect(counter.next().value).toBe(1);
    expect(counter.next().value).toBe(2);
    expect(counter.next().value).toBe(3);
    const last = counter.next();
    expect(last.value).toBe('No hay más valores');
    expect(last.done).toBe(true);
  });

  it('should interact with for..of loop', () => {
    const counter = countGenerator();
    let lastItem;
    for (const value of counter) {
      lastItem = value;
    }
    // for..of ignora el valor retornado con return, solo itera sobre yields
    expect(lastItem).toBe(3);
  });
});
