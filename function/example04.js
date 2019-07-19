 /**
 * example04: Operador rest
 *
 * Description:
 * Permite a una función recibir una cantidad variable de parámetros
 *
 * How execute:
 * $ yarn function:example04
 */

/**
 * Suma todos los argumentos ingresados como parámetros
 *
 * @param  {...any} valores valor a ser sumados
 */
const sumar = (...valores) => {
  let resultado = 0

  valores.forEach((valor) => {
    //console.log(valor)
    resultado += valor
  })

   //console.log(valores) //<-- Entrega los valores como un arreglo
  return resultado
}

console.log(sumar(1,2,3))
console.log(sumar(2,2))

//console.log(sumar("hola","mundo"))

module.exports =  sumar
