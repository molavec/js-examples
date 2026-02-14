
// Callbacks
// Una función de callback es una función que se pasa a otra función como un argumento
// y que luego se invoca dentro de la función externa.

export const sumar = (...valores) => {
  let resultado = 0;
  valores.forEach((valor) => {
    resultado += valor;
  });
  return resultado;
};

export const multiplicar = (a, b) => a * b;

export const mathOperation = (callback, ...valores) => {
  // invocamos al callback con los valores spread
  return callback(...valores);
};
