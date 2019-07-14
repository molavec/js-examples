 /**
 * example04: Operador rest
 *
 * Description:
 * Permite recibir una cantidad variable de parámetros
 *
 * How execute:
 * $ yarn function:example04
 */

console.log('--> Ejemplo 4:')

const sumar = (...valores) => {
  let resultado = 0
  valores.forEach((valor) => {
    // console.log(valor)
    resultado += valor
  })
  // console.log(valores) //<-- Entrega los valores como un arreglo
  return resultado
}

console.log(sumar(1,2,3))
console.log(sumar(2,2))



