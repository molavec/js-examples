import { describe, it, expect } from 'vitest';
import { filterGreaterThan, filterWithPets, processLessons } from './07-filter.js';

describe('07-filter', () => {
  it('should filter numbers greater than value', () => {
    const items = [1, 2, 3, 4, 5];
    const result = filterGreaterThan(items, 3);
    expect(result).toEqual([4, 5]);
  });

  it('should filter objects having a property', () => {
    const people = [
      { name: 'Shane', pets: ['cat'] },
      { name: 'Simon', pets: ['horse'] },
      { name: 'Ben' } // No pets
    ];
    const result = filterWithPets(people);
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Shane');
    expect(result[1].name).toBe('Simon');
  });

  it('should process lessons with chain', () => {
    const lessons = [
      { title: 'Join Lesson', views: 960, tags: ['array', 'join'] },
      { title: 'Concat Lesson', views: 1050, tags: ['array', 'concat'] },
      { title: 'Slice Lesson', views: 2503, tags: ['array', 'slice'] },
      { title: 'Bind Lesson', views: 2500, tags: ['functions', 'bind'] }
    ];

    // Buscar tag 'array', views > 1000, ordenar desc
    // Should match: Concat (1050), Slice (2503). Bind has > 2500 but tag is 'functions'. Join has tag 'array' but < 1000 views.
    // Order: Slice (2503), Concat (1050).
    const result = processLessons(lessons, 'array', 1000);

    expect(result).toContain('<li>Slice Lesson</li>');
    expect(result).toContain('<li>Concat Lesson</li>');
    expect(result.indexOf('Slice')).toBeLessThan(result.indexOf('Concat'));
    expect(result).not.toContain('Join Lesson');
    expect(result).not.toContain('Bind Lesson');
  });
});
