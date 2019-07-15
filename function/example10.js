/**
 * example 10: Declaración de un callback
 *
 * Description:
 * Funcióm que recibe otra función como argumento.
 *
 * How execute:
 * $ yarn function:example10
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

/**
 * Multiplica dos valores
 * @param {*} a Primer valor
 * @param {*} b Segundo valor
 */
const mult = (a, b) => a * b

/**
 * Imprime los valores ingresados y
 * realiza la operación matemática definida en el callback.
 *
 * @param  {...any} valores Valores a utilizar en la operación matemática.
 * @param {*} callback Función con la operación matemática a realizar.
 *                      El callback recibirá los argumentos como parámetros
 *                      y debe retornar el resultado
 */
let mathOperation = (callback, ...valores) => {
  valores.forEach((valor, index)=>{
    console.log(`El item ${index} es: ${valor}`)
  })
  console.log(`El resultado de la operación matemática es: ${callback(...valores)}`)
}

mathOperation(sumar, 1, 2, 3, 4)
mathOperation(mult, 4, 2)
