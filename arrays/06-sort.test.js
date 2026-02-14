import { describe, it, expect } from 'vitest';
import { sortStrings, sortNumbersIncorrectly, sortNumbersCorrectly, sortObjectsByProperty } from './06-sort.js';

describe('06-sort', () => {
  it('should sort strings alphabetically', () => {
    const items = ['Shane', 'Sally', 'Isaac'];
    sortStrings(items);
    expect(items).toEqual(['Isaac', 'Sally', 'Shane']);
  });

  it('should sort numbers incorrectly without comparator', () => {
    const items = [10, 30, 2, 20];
    // "10", "2", "20", "30" -> ordenado alfabéticamente: "10", "2", "20", "30" -> Wait
    // '10' vs '2' -> '1' < '2' so '10' comes first.
    // '2' vs '20' -> '2' comes after '1...' wait.
    // '10', '20', '2', '30' ?
    // '10' < '2' (true)
    // '2' < '20' (false because '2' > '2' is false, but length? No, char by char)
    // '2' vs '20': '2' is prefix of '20' ? No.
    // Let's rely on standard JS behavior: "10", "2", "20", "30"
    // Sorted: "10", "2", "20", "30"
    // Wait, '2' > '1' so '2' is after '10'.
    // '20' starts with '2', so it is after '10' but... '2' vs '20'.
    // '2' < '20'.
    // So "10", "20", "2", "30"? No, "10", "2", "20", "30" IF 2 comes after 1.
    // Actually, let's just assert the result we know is "broken" for numbers.
    sortNumbersIncorrectly(items);
    // [10, 20, 30, 2] if we consider 1 < 2 < 3.
    // But 2 vs 20? 2 < 20.
    // 10 < 20.
    // 10 < 2.
    // So: 10, 20, 2, 30? No.
    // [10, 20, 30, 2]? No, 2 is greater than 10 (string wise '2' > '1').
    // 30 > 2.
    // correct lexicographical order of ["10", "30", "2", "20"]:
    // "10", "2", "20", "30" ?
    // '1' < '2' < '3'.
    // so 10 comes first.
    // 2 comes after 1*
    // 20 comes after 1* but... '2' vs '20'.
    // '2' vs '2' (equal), undefined vs '0' -> undefined is "less" usually in length? No, strings compare char code.
    // '2' is 0x32. '20' is 0x32 0x30.
    // '2' is effectively '2\0' vs '20'. 0 vs '0' (48).
    // shorter string comes first if prefix match.
    // So '2' < '20'.
    // Order: 10, 2, 20, 30.
    expect(items).toEqual([10, 2, 20, 30]);
    // EXPECTED: [10, 20, 30, 2] is NOT sorted as strings.
    // EXPECTED: [10, 20, 2, 30]
    // Let's verify with node behavior in thought, or just be loose.
    // Vitest runs in node.
    // [10, 30, 2, 20].sort() -> [10, 2, 20, 30].
    expect(items).toEqual([10, 20, 30, 2].sort()); // Use the result of sort() to match itself, confirming we just want to test it DOESN'T sort numerically
    // Better: not equal to numerical sort
    expect(items).not.toEqual([2, 10, 20, 30]);
  });

  it('should sort numbers correctly with comparator', () => {
    const items = [10, 30, 2, 20];
    sortNumbersCorrectly(items);
    expect(items).toEqual([2, 10, 20, 30]);
  });

  it('should sort objects by property views descending', () => {
    const lessons = [
      { title: 'A', views: 100 },
      { title: 'B', views: 200 },
      { title: 'C', views: 50 }
    ];
    sortObjectsByProperty(lessons, 'views');
    expect(lessons).toEqual([
      { title: 'B', views: 200 },
      { title: 'A', views: 100 },
      { title: 'C', views: 50 }
    ]);
  });
});
