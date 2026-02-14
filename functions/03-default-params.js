
// Parámetros por defecto
// Permite inicializar parámetros funciones con valores por defecto si no se pasa valor o es undefined.

export const greeting = (name = 'Annonymus') => {
  return `Hi ${name}!`;
};
