/**
  * yield / next()
  *
  * Descripción:
  * Generadores e Iteradores
  *
  * Recomendación:** Revisa este artículo para aprender un poco acerca de esta funcionalidad.
  * https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950
  *
  */

import { expect, test } from "vitest"

function * contar() { // el * es necesario para indicar que la función es un iterador.
  yield 1
  yield 2
  yield 3
  return "No hay más valores"
}

test('next() paso a paso', () =>{
  // No se puede utilizar directamente pues se obtiene sólo
  // el objeto de la primera iteración
  // Hay que invocarla realizando declaración
  const contador = contar()
  expect(contador.next().value).toBe(1)
  expect(contador.next().value).toBe(2)
  expect(contador.next().value).toBe(3)
  expect(contador.next().value).toBe('No hay más valores')
  expect(contador.next().done).toBe(true)
})


test('Iteración utilizando un for', () =>{
  // No se puede utilizar directamente pues se obtiene sólo
  // el objeto de la primera iteración
  // Hay que invocarla realizando declaración
  const contador = contar()
  let lastItem
  for (let value of contador) {
    lastItem = value
  }
  expect(lastItem).toBe(3)
})
