/**
 * example2: while / do-while
 *
 * Description:
 * Ejemplos de while
 */
import { expect, test } from "vitest"

let semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

test('While example', () =>{
  let i = 0
  let lastItem
  while(i < semana.length){
    lastItem = semana[i]
    i++
  }
  expect(lastItem).toBe('domingo')
})

test('', () =>{
  let i = 0
  let lastItem
  do {
    lastItem = semana[i]
    i++
  } while (i < semana.length)
  expect(lastItem).toBe('domingo')
})
