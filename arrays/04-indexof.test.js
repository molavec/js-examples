import { describe, it, expect } from 'vitest';
import { findIndex, checkExistence, findObjectReference, filterByExtension } from './04-indexof.js';

describe('04-indexof', () => {
  it('should find the index of an element', () => {
    const family = ['Shane', 'Sally', 'Isaac'];
    expect(findIndex(family, 'Sally')).toBe(1);
    expect(findIndex(family, 'Kittie')).toBe(-1);
  });

  it('should find index starting from a specific position', () => {
    const family = ['Shane', 'Kittie', 'Sally', 'Isaac'];
    // Busca 'Kittie' empezando desde el índice 2 ('Sally'), por lo que no debería encontrar el 'Kittie' del índice 1.
    expect(findIndex(family, 'Kittie', 2)).toBe(-1);
  });

  it('should check existence correctly', () => {
    const names = ['juan', 'luis', 'gustavo'];
    expect(checkExistence(names, 'gustavo')).toBe(true);
    expect(checkExistence(names, 'maria')).toBe(false);
  });

  it('should find object references', () => {
    const shane = { name: 'Shane' };
    const sally = { name: 'Sally' };
    const kittie = { name: 'Kittie' }; // Referencia nueva
    const family = [shane, sally];

    expect(findObjectReference(family, sally)).toBe(1);
    expect(findObjectReference(family, kittie)).toBe(-1);
    expect(findObjectReference(family, { name: 'Shane' })).toBe(-1); // Objeto diferente (nueva referencia)
  });

  it('should filter files by whitelist', () => {
    const whitelist = ['.css', '.js'];
    const files = [
      { name: 'css/core.css' },
      { name: 'js/app.js' },
      { name: 'index.html' }
    ];

    const result = filterByExtension(files, whitelist);
    expect(result).toHaveLength(2);
    expect(result.map(f => f.name)).toEqual(['css/core.css', 'js/app.js']);
  });
});
