/**
  * Ejemplo 04: continue / break
  *
  * Descripción:
  * Muestra el uso del continue y del break
  * El 'continue' salta a la siguiente iteración.
  * El 'break' sale completamente de la iteración
  */

import { expect, test } from "vitest"

test('Ejemplo de continue', () =>{
  const elements = []
  for (let i = 1; i <= 3; i++) {
    if (i == 2) {
      continue
    }
    elements.push(i)
  }
  expect(elements).toEqual([1, 3]);
})

