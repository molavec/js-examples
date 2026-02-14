
// Scope de const
// 'const' tiene scope de bloque, igual que let.
// Además, la reasignación no está permitida.

export function constScope() {
  const text = 'local';
  if (true) {
    const text = 'bloque';
  }
  return text;
}

export function constMutation() {
  const obj = { a: 1 };
  obj.a = 2; // Permitido: mutación de propiedades
  return obj;
}
