
// Scope de var
// 'var' tiene scope de función. No respeta bloques (if, for).

export function varScope() {
  var text = 'local';
  if (true) {
    var text = 'modificado en bloque';
  }
  return text; // 'modificado en bloque' porque if no crea scope para var
}
