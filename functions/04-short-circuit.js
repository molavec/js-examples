
// Short Circuit (Cortocircuito)
// Patrón para asignar valores por defecto usando el operador lógico OR (||).
// Si el primer operando es truthy, se devuelve; si no, se devuelve el segundo.

export const shortCircuit = (title) => {
  return title || "Default Title";
};
