/**
 * Hoisting
 * 
 * Cuando se declara una función (con 'function') se
 * puede utilizar antes de la declaración ya que se
 * el concepto de hoisting.
 * 
 * https://developer.mozilla.org/es/docs/Glossary/Hoisting
 * https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052
 *
 */

import { expect, test } from "vitest"

test('verifica hoisting cuando función se declara con \'function\'', () => {
  expect(sum(1,2)).toBe(3) // <-- hoisting: se puede utilizar la función declarada más adelante
  function sum(a, b) {
    return a + b
  }
})


test('verifica que función no se existe aún cuando se declara como expresión', () => {
  expect(()=> rest(2,1)).toThrow() // <-- no se puede ejecutar función
  const rest =  (a, b) => {
    return a - b
  }
})
