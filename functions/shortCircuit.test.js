/**
 * example08: Short Circuit
 *
 * Description:
 * Es un patrón de diseño que permite obtener un valor por defecto en caso
 * de que un parámetro sea nulo.
 * Sirve para ahorrarse un 'if' en casos de valores por defecto.
 *
 */
import { expect, test } from "vitest"

let shorCircuit = (title) => {
  return title || "Default Title"
}

test('Obtiene el valor por defecto', ()=>{
  expect(shorCircuit()).toBe('Default Title')
})

test('Obtiene el valor por pasado al parámetro', ()=>{
  expect(shorCircuit('My Title')).toBe('My Title')
})


