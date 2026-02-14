/**
 * Operador rest como argumentos
 *
 * Description:
 * Permite a una función recibir una cantidad variable de parámetros
*/

 import { expect, test } from "vitest"

/**
 * Suma todos los argumentos ingresados como parámetros
 *
 * @param  {...any} valores valor a ser sumados
 */
const sum = (...valores) => {
  let resultado = 0

  valores.forEach((valor) => {
    //console.log(valor)
    resultado += valor
  })

   //console.log(valores) //<-- Entrega los valores como un arreglo
  return resultado
}

test('Obtiene la suma de todos los argumentos 1, 2', ()=>{
  expect(sum(1,2)).toBe(3)
})

test('Obtiene la suma de todos los argumentos 1, 2, 3', ()=>{
  expect(sum(1,2,3)).toBe(6)
})

test('Prueba ingresando un arreglo [1, 2, 3] con operador spread', ()=>{
  /**
   * En este caso, se separan los valores del arreglo antes de
   * pasarlos a la función sumar, lo que permite a la función obtener
   * los valores como si fuesen valores separados.
   */
  const numbers = [1,2,3]
  expect(sum(...numbers)).toBe(6)
})

test('Prueba ingresando un arreglo [1, 2, 3] sin operador spread', ()=>{
  /**
   * En este caso se entrega a la función todo el arreglo y como el
   * parámetro de la función. El operador rest almacena todo del
   * arreglo como el elemento 0 del parémetro 'valores'.
   * Luego, se suma todo el arreglo a 0 por lo que javascript
   * lo considera lo considera como una concatenación y tiene como
   * resultado "01,2,3"
   */
  const numbers = [1,2,3]
  expect(sum(numbers)).toBe("01,2,3")
})


