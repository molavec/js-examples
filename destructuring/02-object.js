
// Destructuring de Objetos
// Permite extraer datos de objetos y asignarlos a variables.

export function getCoordinatesFromObject(pointObj) {
  const { x, y, z } = pointObj;
  return { x, y, z };
}

export function getRestProperties(pointObj) {
  const { x, ...rest } = pointObj;
  return rest;
}

export function renameProperty(pointObj) {
  // Asigna la propiedad y a la variable pointY
  const { y: pointY } = pointObj;
  return pointY;
}
