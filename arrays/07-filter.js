
// Array.prototype.filter()
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición
// implementada por la función dada.

export function filterGreaterThan(arr, value) {
  return arr.filter(x => x > value);
}

// Filtrar objetos que tienen una propiedad específica
export function filterWithPets(people) {
  // Retorna solo las personas que tienen la propiedad 'pets' (y que sea truthy)
  return people.filter(x => x.pets);
}

// Ejemplo Avanzado: Encadenamiento (Chaining)
// Filter -> Filter -> Sort -> Map -> Join
export function processLessons(lessons, searchTerm, minViews) {
  return lessons
    .filter(x => x.tags.indexOf(searchTerm) > -1)
    .filter(x => x.views > minViews)
    .sort((a, b) => b.views - a.views)
    .map(x => `   <li>${x.title}</li>`)
    .join('\n'); // Unimos con salto de línea para crear una lista HTML
}
