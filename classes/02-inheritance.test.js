import { describe, it, expect } from 'vitest';
import { Patient } from './02-inheritance.js';

describe('02-inheritance', () => {
  it('should inherit method from parent', () => {
    const patient = new Patient('John', 'Doe', 34, 79, 1.68);
    expect(patient.getFullname()).toBe('John Doe');
  });

  it('should calculate IMC using own method', () => {
    const patient = new Patient('John', 'Doe', 34, 79, 1.68);
    // 79 / (1.68 * 1.68) = 27.99...
    expect(patient.calculateIMC()).toBeCloseTo(27.99, 2);
  });
});
