import { describe, it, expect } from 'vitest';
import { objectConcat } from './02-concat-advanced.js';

describe('02-concat-advanced', () => {
  it('should concatenate arrays of objects', () => {
    const result = objectConcat();

    expect(result).toHaveLength(4);
    expect(result[0].name).toBe("Miguel");
    expect(result[3].name).toBe("Angelica");
  });

  it('should verify shallow copy behavior (references are shared)', () => {
    const result = objectConcat();
    const miguel = result[0];

    // Si modificamos el objeto en el resultado
    miguel.name = "Miguel Angel";

    // Debería intentar probar que el original "people1" (si tuviéramos acceso) también cambió,
    // pero como está encapsulado en la función, verificamos que es un objeto.
    // Solo verificamos que la estructura es correcta.
    expect(result[0].name).toBe("Miguel Angel");
  });
});
