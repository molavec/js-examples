
// Array.prototype.indexOf()
// El método indexOf() devuelve el primer índice en el que se puede encontrar un elemento dado en el array,
// o -1 si el elemento no está presente.

export function findIndex(arr, element, fromIndex) {
  // fromIndex: Índice desde el que empezar la búsqueda.
  return arr.indexOf(element, fromIndex);
}

// Comprobar si existe (booleano)
export function checkExistence(arr, element) {
  return arr.indexOf(element) > -1;
}

// Buscando referencias de objetos
// indexOf compara usando igualdad estricta (===), por lo que las referencias deben ser las mismas.
export function findObjectReference(arr, objRef) {
  return arr.indexOf(objRef);
}

// Ejemplo práctico: Filtrar archivos permitidos (whitelist)
export function filterByExtension(files, allowedExtensions) {
  const path = {
    extname: (f) => {
      // Simulación simple de path.extname para el ejemplo
      const dotIndex = f.lastIndexOf('.');
      return dotIndex > -1 ? f.substring(dotIndex) : '';
    }
  };

  // En un entorno real usaríamos: import path from 'path';

  return files.filter(file => {
    const ext = path.extname(file.name);
    return allowedExtensions.indexOf(ext) > -1;
  });
}
