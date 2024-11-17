// More info:
// https://dev.to/alextomas80/el-operador-spread-en-javascript-12hc

import { expect, test } from "vitest";
import { arraySpread, objectSpread } from "./spread";

test('Añade un 0 al inicio y un 9 al final a un array', () => {
  const array = [1, 2, 3]
  const returnedArray = arraySpread(array)
  expect(returnedArray[0]).toBe(0)
  expect(returnedArray[returnedArray.length - 1]).toBe(9)
})

const user = {
  firstname: 'Juan',
  email: 'juan@example.com'    
} 

test('Reemplaza el firstname del objeto utilizando spread', () => {
  const returnedObject = objectSpread(user)
  expect(returnedObject.firstname).toBe('John')
})

test('Añade un lastname al objeto utilizando spread', () => {
  const returnedObject = objectSpread(user)
  expect(returnedObject.hasOwnProperty('lastname')).toBe(true)
  expect(returnedObject.lastname).toBe('Doe')
})