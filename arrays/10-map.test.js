import { describe, it, expect } from 'vitest';
import { mapToDouble, mapToNumbers, trimStrings, mapToObjects, mapAndFilterActive, createHtmlList } from './10-map.js';

describe('10-map', () => {
  it('should double numbers', () => {
    expect(mapToDouble([1, 2, 3])).toEqual([2, 4, 6]);
  });

  it('should convert strings to numbers', () => {
    expect(mapToNumbers(["1", "2", "3"])).toEqual([1, 2, 3]);
  });

  it('should trim strings', () => {
    expect(trimStrings([" a ", "b "])).toEqual(["a", "b"]);
  });

  it('should map to objects', () => {
    const result = mapToObjects(["Shane", "Sally"]);
    expect(result).toEqual([{ firstname: "Shane" }, { firstname: "Sally" }]);
  });

  it('should filter active users and map to names', () => {
    const users = [
      { active: true, firstname: 'Shane' },
      { active: false, firstname: 'Ben' },
      { active: true, firstname: 'Sally' }
    ];
    const result = mapAndFilterActive(users);
    expect(result).toEqual(['Shane', 'Sally']);
  });

  it('should create HTML list', () => {
    const items = ['Cat', 'Dog'];
    const html = createHtmlList(items);
    expect(html).toContain('<li>Cat</li>');
    expect(html).toContain('<li>Dog</li>');
    expect(html).toContain('<ul>');
  });
});
