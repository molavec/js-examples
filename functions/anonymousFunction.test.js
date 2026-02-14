/*
 * Innvoca una función anónima.
 */
import { expect, test } from "vitest"

test('Ejecuta una función anónima sin parámetros', ()=>{
  expect((() => 'hi' )()).toBe('hi')
})

test('Ejecuta una función anónima con parámetros', ()=>{
  expect((text => text)('hi')).toBe('hi')
})
