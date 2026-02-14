import { describe, it, expect } from 'vitest';
import { whileLoop, doWhileLoop } from './02-while.js';

describe('02-while', () => {
  const semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

  it('should return last item using while', () => {
    expect(whileLoop(semana)).toBe('domingo');
  });

  it('should return last item using do-while', () => {
    expect(doWhileLoop(semana)).toBe('domingo');
  });
});
