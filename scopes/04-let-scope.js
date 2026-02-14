
// Scope de let
// 'let' tiene scope de bloque.

export function letScope() {
  let text = 'local';
  if (true) {
    let text = 'valor del bloque'; // variable distinta
  }
  return text; // 'local'
}
