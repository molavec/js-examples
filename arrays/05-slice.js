
// Array.prototype.slice()
// El método slice() devuelve una copia de una parte del array dentro de un nuevo array
// empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

export function createCopy(arr) {
  // slice() sin argumentos crea una copia superficial completa del array
  return arr.slice();
}

export function sliceSegment(arr, start, end) {
  return arr.slice(start, end);
}

// Ejemplo Avanzado: Mini Pipeline
// Usa slice y reduce para procesar un string basado en una configuración "pipe"
export function processPipeline(input) {
  // Formato entrada: "valor | filtro1 | filtro2"
  // Ejemplo: "name | deslugify | uppercase"

  const filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
  };

  // Simulamos un contexto de datos
  const person = {
    name: 'shane-osbourne'
  };

  const sections = input.split('|').map(x => x.trim());
  // sections = ['name', 'deslugify', 'uppercase']

  // Obtenemos el valor inicial usando la primera sección como clave
  const ref = person[sections[0]];

  // Procesamos el resto de secciones (slice(1)) como filtros
  return sections
    .slice(1)
    .reduce((prev, next) => {
      if (filters[next]) {
        return filters[next](prev);
      }
      return prev;
    }, ref);
}
