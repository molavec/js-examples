
// Métodos de Objetos
// Utilidades para trabajar con las propiedades y métodos de un objeto.

export const getMethods = (obj) => {
  return Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function');
};
