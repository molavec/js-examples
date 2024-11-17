import { expect, test } from "vitest"

/**
 * Suma todos los argumentos ingresados como parámetros
 * @param  {...any} valores valor a ser sumados
 */
const sumar = (...valores) => {
  let resultado = 0

  valores.forEach((valor) => {
    resultado += valor
  })

  return resultado
}

/**
 * Multiplica dos valores
 * @param {*} a Primer valor
 * @param {*} b Segundo valor
 */
const multiplicar = (a, b) => a * b

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
  return callback(...valores)
}

test('Ejecuta el calback con la función sumar', ()=>{
  expect(mathOperation(sumar, 1, 2, 3)).toBe(6)
})

test('Ejecuta el calback con la función multiplicar', ()=>{
  expect(mathOperation(multiplicar, 1, 2)).toBe(2)
})
