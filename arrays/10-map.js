
// Array.prototype.map()
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada
// aplicados a cada uno de sus elementos.

export function mapToDouble(arr) {
  return arr.map(x => x * 2);
}

export function mapToNumbers(arr) {
  // Convierte strings a números
  return arr.map(x => Number(x));
}

export function trimStrings(arr) {
  return arr.map(x => x.trim());
}

export function mapToObjects(names) {
  // Retorna objetos con propiedad firstname
  return names.map(name => ({ firstname: name }));
}

export function mapAndFilterActive(items) {
  // Ejemplo encadenado: filtrar activos y obtener solo sus nombres
  return items
    .filter(x => x.active)
    .map(x => x.firstname);
}

// Ejemplo: Crear HTML List (similar a processLessons en filter)
export function createHtmlList(items) {
  return `<ul>\n${items.map(x => `  <li>${x}</li>`).join('\n')}\n</ul>`;
}
