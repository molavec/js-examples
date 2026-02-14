import { describe, it, expect } from 'vitest';
import { createCopy, sliceSegment, processPipeline } from './05-slice.js';

describe('05-slice', () => {
  it('should create a shallow copy', () => {
    const items = [1, 2, 3];
    const copy = createCopy(items);

    expect(copy).toEqual(items);
    expect(copy).not.toBe(items); // Referencias diferentes

    copy.push(4);
    expect(items).toHaveLength(3); // Original no cambia
    expect(copy).toHaveLength(4);
  });

  it('should copy references for objects', () => {
    const person = { name: 'Mike' };
    const items = [1, person];
    const copy = createCopy(items);

    // Modificar objeto dentro de la copia afecta al original (shallow copy)
    copy[1].name = 'Alicia';
    expect(person.name).toBe('Alicia');
  });

  it('should slice segments correctly', () => {
    const items = [1, 2, 3, 4, 5, 6];
    // indice 1 incluido, indice 4 excluido -> [2, 3, 4]
    expect(sliceSegment(items, 1, 4)).toEqual([2, 3, 4]);

    // Argumentos negativos
    expect(sliceSegment(items, -2)).toEqual([5, 6]); // Últimos 2
    expect(sliceSegment(items, 1, -2)).toEqual([2, 3, 4]); // Desde 1 hasta (longitud-2)
  });

  it('should process pipeline correctly', () => {
    // shane-osbourne -> deslugify -> shane osbourne -> uppercase -> SHANE OSBOURNE
    const result = processPipeline('name | deslugify | uppercase');
    expect(result).toBe('SHANE OSBOURNE');
  });
});
