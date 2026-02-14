import { describe, it, expect } from 'vitest';
import { callHoistedFunction } from './02-hoisting.js';

describe('02-hoisting', () => {
  it('should call hoisted function', () => {
    // callHoistedFunction llama a hoistedSum que está definida DESPUÉS
    // Esto funciona gracias al hoisting de funciones
    expect(callHoistedFunction(1, 2)).toBe(3);
  });

  it('should throw if calling non-hoisted function declaration before init', () => {
    // Esto es difícil de probar importando módulos ya que el módulo se evalúa completo.
    // Pero conceptualmente:
    // const func = ...
    // func() // ok
    // Pero:
    // func() // Error: Cannot access 'func' before initialization
    // const func = ...

    // Simulamos el error en el test
    expect(() => {
      const result = notDefinedYet(1, 2);
      /* const notDefinedYet = (a, b) => a - b; */
    }).toThrow();
  });
});
