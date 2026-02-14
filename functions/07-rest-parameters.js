
// Parámetros Rest y Spread Operator
// Rest: Agrupa argumentos restantes en un array
// Spread: Expande un array en argumentos individuales

// Rest parameters (...valores)
export const sumAll = (...valores) => {
  let resultado = 0;
  valores.forEach((valor) => {
    resultado += valor;
  });
  return resultado;
};
