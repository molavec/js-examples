import { describe, it, expect } from 'vitest';
import { basicJoin, capitalizeWords } from './03-join.js';

describe('03-join', () => {
  it('should join elements with default separator (comma)', () => {
    const names = ['Shane', 'Alan', 'Osbourne'];
    expect(basicJoin(names)).toBe('Shane,Alan,Osbourne');
  });

  it('should join elements with custom separator', () => {
    const names = ['Shane', 'Alan', 'Osbourne'];
    expect(basicJoin(names, ' ')).toBe('Shane Alan Osbourne');
    expect(basicJoin(names, ', ')).toBe('Shane, Alan, Osbourne');
  });

  it('should capitalize words in a sentence', () => {
    const input = 'guilfredo montecinos';
    const output = capitalizeWords(input);
    expect(output).toBe('Guilfredo Montecinos');
  });
});
