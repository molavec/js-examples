import { describe, it, expect } from 'vitest';
import { Person } from './01-definition.js';

describe('01-class-definition', () => {
  it('should create instance and get fullname', () => {
    const person = new Person('John', 'Doe');
    expect(person.getFullname()).toBe('John Doe');
  });
});
